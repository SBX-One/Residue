# Project Overview
This project is a web-based circular economy marketplace platform, likely focused on industrial waste management and repurposing. It utilizes a modern frontend stack with HTML and Tailwind CSS for styling.

# Technologies
- **Styling:** Tailwind CSS (v4+)
- **Build System:** Tailwind CSS CLI
- **Language:** HTML/CSS/JavaScript (Vanilla)
- **Package Manager:** pnpm

# Building and Running
The project uses Tailwind CSS CLI for CSS compilation.

- **Development (Watch Mode):**
  ```bash
  pnpm watch
  ```
  This command compiles `src/css/input.css` into `src/css/output.css` and watches for changes.

- **Production Build:**
  ```bash
  pnpm build
  ```
  This command performs a one-time compilation of `src/css/input.css` into `src/css/output.css`.

# Development Conventions
- **Styling:** All custom styles and component definitions should be added to `src/css/input.css`.
- **Consistency:** Use Tailwind utility classes whenever possible. Avoid hard-coding colors or styles in HTML markup. Add new colors or design tokens to the `@theme` block in `src/css/input.css`.
- **Architecture:** The project is organized into `src/pages` for page-specific HTML and `src/css` for styles. Global styles and components are defined in `src/css/input.css`.
- **Formatting:** Use `.prettierrc` for consistent code formatting.

# Image Optimization
To convert images (PNG, JPG, JPEG, GIF, TIFF, BMP) into optimized WebP format for the project, use the image conversion utility:

- **Convert Images (Keeping originals):**
  ```bash
  pnpm convert-png
  ```

- **Convert Images (Deleting original images):**
  ```bash
  pnpm convert-png --delete
  ```

- **Convert specific files/folders:**
  ```bash
  pnpm convert-png <path_to_file_or_directory>
  ```

