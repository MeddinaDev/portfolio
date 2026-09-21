#!/usr/bin/env swift

import AppKit

let width = 1200
let height = 630
let outputPath = CommandLine.arguments.dropFirst().first ?? "public/og-image.png"

func color(_ hex: UInt32, alpha: CGFloat = 1) -> NSColor {
	NSColor(
		calibratedRed: CGFloat((hex >> 16) & 0xff) / 255,
		green: CGFloat((hex >> 8) & 0xff) / 255,
		blue: CGFloat(hex & 0xff) / 255,
		alpha: alpha
	)
}

func line(from start: NSPoint, to end: NSPoint, color: NSColor, width: CGFloat = 1) {
	let path = NSBezierPath()
	path.move(to: start)
	path.line(to: end)
	path.lineWidth = width
	color.setStroke()
	path.stroke()
}

func text(
	_ value: String,
	x: CGFloat,
	top: CGFloat,
	height textHeight: CGFloat,
	font: NSFont,
	color: NSColor,
	tracking: CGFloat = 0
) {
	let style = NSMutableParagraphStyle()
	style.lineBreakMode = .byClipping
	let attributes: [NSAttributedString.Key: Any] = [
		.font: font,
		.foregroundColor: color,
		.kern: tracking,
		.paragraphStyle: style,
	]
	(value as NSString).draw(
		in: NSRect(x: x, y: CGFloat(height) - top - textHeight, width: 1050, height: textHeight),
		withAttributes: attributes
	)
}

guard let bitmap = NSBitmapImageRep(
	bitmapDataPlanes: nil,
	pixelsWide: width,
	pixelsHigh: height,
	bitsPerSample: 8,
	samplesPerPixel: 4,
	hasAlpha: true,
	isPlanar: false,
	colorSpaceName: .deviceRGB,
	bytesPerRow: 0,
	bitsPerPixel: 0
), let context = NSGraphicsContext(bitmapImageRep: bitmap) else {
	fatalError("No se pudo crear el lienzo de la imagen Open Graph.")
}

NSGraphicsContext.saveGraphicsState()
NSGraphicsContext.current = context

let canvas = color(0x07111f)
let textPrimary = color(0xf1f1ed)
let textMuted = color(0x979797)
let decoration = color(0x485b77)

canvas.setFill()
NSBezierPath(rect: NSRect(x: 0, y: 0, width: width, height: height)).fill()

for (radius, opacity) in [(224.0, 0.18), (322.0, 0.10), (420.0, 0.07)] {
	let circle = NSBezierPath()
	circle.appendArc(
		withCenter: NSPoint(x: 22, y: CGFloat(height) - 18),
		radius: radius,
		startAngle: 0,
		endAngle: 360
	)
	circle.lineWidth = 1
	decoration.withAlphaComponent(opacity).setStroke()
	circle.stroke()
}

line(
	from: NSPoint(x: 96, y: CGFloat(height) - 150),
	to: NSPoint(x: 124, y: CGFloat(height) - 150),
	color: textPrimary.withAlphaComponent(0.28)
)

text(
	"JAVIER MEDINA",
	x: 144,
	top: 136,
	height: 30,
	font: .monospacedSystemFont(ofSize: 18, weight: .regular),
	color: textMuted,
	tracking: 2.5
)

text(
	"Desarrollador",
	x: 92,
	top: 196,
	height: 102,
	font: .systemFont(ofSize: 82, weight: .medium),
	color: textPrimary,
	tracking: -4.6
)
text(
	"Backend Junior",
	x: 92,
	top: 284,
	height: 102,
	font: .systemFont(ofSize: 82, weight: .medium),
	color: textPrimary,
	tracking: -4.6
)

text(
	"Java · Spring Boot · Python · PostgreSQL",
	x: 96,
	top: 415,
	height: 34,
	font: .monospacedSystemFont(ofSize: 21, weight: .regular),
	color: textMuted,
	tracking: 0.8
)

line(
	from: NSPoint(x: 96, y: CGFloat(height) - 510),
	to: NSPoint(x: 1104, y: CGFloat(height) - 510),
	color: NSColor.white.withAlphaComponent(0.14)
)

textMuted.setFill()
NSBezierPath(ovalIn: NSRect(x: 98, y: CGFloat(height) - 561, width: 8, height: 8)).fill()

text(
	"meddinadev.com",
	x: 120,
	top: 541,
	height: 28,
	font: .monospacedSystemFont(ofSize: 17, weight: .regular),
	color: textMuted,
	tracking: 0.7
)

line(
	from: NSPoint(x: 1078, y: CGFloat(height) - 557),
	to: NSPoint(x: 1104, y: CGFloat(height) - 557),
	color: NSColor.white.withAlphaComponent(0.28)
)

context.flushGraphics()
NSGraphicsContext.restoreGraphicsState()

guard let pngData = bitmap.representation(using: .png, properties: [:]) else {
	fatalError("No se pudo codificar la imagen Open Graph como PNG.")
}

try pngData.write(to: URL(fileURLWithPath: outputPath))
