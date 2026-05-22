# Image to WebP Conversion Tool

This tool is a Node.js-based utility that converts standard images (`.png`, `.jpg`, `.jpeg`, `.tiff`, `.gif`, `.bmp`) into optimized `.webp` images using the `sharp` image processing library. It helps reduce image file size significantly while retaining high visual quality, which is ideal for performance optimization in this web project.

## Table of Contents
- [Installation](#installation)
- [How to Run](#how-to-run)
  - [Bulk Conversion (Default)](#bulk-conversion-default)
  - [Specific Files or Directories](#specific-files-or-directories)
  - [Auto-delete Original Images](#auto-delete-original-images)
- [Configuration](#configuration)

---

## Installation

Before using the tool, make sure the project dependencies (specifically `sharp`) are installed. Run:

```bash
pnpm install
```

---

## How to Run

You can run the script via `pnpm` from the root directory.

### Bulk Conversion (Default)
By default, the script scans the `src/` directory recursively for any supported image files, converts them to `.webp` in their respective directories, and preserves the originals.

```bash
pnpm convert-png
```

### Specific Files or Directories
If you only want to convert a specific file or all matching images in a specific directory, pass the paths as arguments:

```bash
# Convert a single file (could be .png, .jpg, .jpeg, etc.)
pnpm convert-png src/img/image-header.png

# Convert all supported images in a specific directory
pnpm convert-png src/img/product
```

### Auto-delete Original Images
To automatically remove the source image files after a successful conversion, append the `-d` or `--delete` flag:

```bash
# Bulk convert under src/ and delete originals
pnpm convert-png --delete

# Convert specific file and delete the original
pnpm convert-png src/img/image-header.png -d
```

---

## Configuration

The script uses the following optimization configuration for `sharp`:
* **Quality**: `80` (Excellent balance of clarity and file size reduction)
* **Effort**: `6` (Maximum CPU effort/compression processing for optimal file size compression)
