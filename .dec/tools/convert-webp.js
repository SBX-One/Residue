const fs = require('fs');
const path = require('path');

// Check if sharp is installed
let sharp;
try {
  sharp = require('sharp');
} catch (e) {
  console.error('\x1b[31mError: "sharp" library is not installed.\x1b[0m');
  console.error('Please run \x1b[36mpnpm add -D sharp\x1b[0m first.');
  process.exit(1);
}

const SUPPORTED_INPUT_EXTENSIONS = ['.png', '.jpg', '.jpeg', '.tiff', '.gif', '.bmp'];

// Helper to format bytes
function formatBytes(bytes, decimals = 2) {
  if (bytes === 0) return '0 Bytes';
  const k = 1024;
  const dm = decimals < 0 ? 0 : decimals;
  const sizes = ['Bytes', 'KB', 'MB', 'GB'];
  const i = Math.floor(Math.log(bytes) / Math.log(k));
  return parseFloat((bytes / Math.pow(k, i)).toFixed(dm)) + ' ' + sizes[i];
}

// Recursively find files with given extensions
function getFiles(dir, exts, fileList = []) {
  if (!fs.existsSync(dir)) return fileList;
  const files = fs.readdirSync(dir);
  for (const file of files) {
    const filePath = path.join(dir, file);
    const stat = fs.statSync(filePath);
    if (stat.isDirectory()) {
      if (file !== 'node_modules' && !file.startsWith('.')) {
        getFiles(filePath, exts, fileList);
      }
    } else {
      const ext = path.extname(file).toLowerCase();
      if (exts.includes(ext)) {
        fileList.push(filePath);
      }
    }
  }
  return fileList;
}

async function convertToWebp(filePath, deleteOriginal = false) {
  const dirName = path.dirname(filePath);
  const extName = path.extname(filePath);
  const baseName = path.basename(filePath, extName);
  const outputPath = path.join(dirName, `${baseName}.webp`);

  if (extName.toLowerCase() === '.webp') {
    console.log(`\x1b[33m⚠ Skipped (Already WebP):\x1b[0m ${path.relative(process.cwd(), filePath)}`);
    return;
  }

  try {
    const originalStats = fs.statSync(filePath);
    const originalSize = originalStats.size;

    // Convert to webp with good quality vs file size trade-off
    await sharp(filePath)
      .webp({ quality: 80, effort: 6 })
      .toFile(outputPath);

    const newStats = fs.statSync(outputPath);
    const newSize = newStats.size;

    const savings = originalSize - newSize;
    const savingsPercent = ((savings / originalSize) * 100).toFixed(1);

    console.log(`\x1b[32m✔ Converted:\x1b[0m ${path.relative(process.cwd(), filePath)}`);
    console.log(`  Size: ${formatBytes(originalSize)} ➔ ${formatBytes(newSize)} (-${savingsPercent}%)`);

    if (deleteOriginal) {
      fs.unlinkSync(filePath);
      console.log(`  \x1b[33mDeleted original:\x1b[0m ${path.relative(process.cwd(), filePath)}`);
    }
  } catch (error) {
    console.error(`\x1b[31m✖ Failed to convert ${filePath}:\x1b[0m`, error.message);
  }
}

async function main() {
  const args = process.argv.slice(2);
  const deleteOriginal = args.includes('--delete') || args.includes('-d');
  
  // Filter out flags from the arguments
  const fileArgs = args.filter(arg => !arg.startsWith('-'));

  let targets = [];

  if (fileArgs.length > 0) {
    // Files or directories specified in arguments
    for (const arg of fileArgs) {
      const resolvedPath = path.resolve(process.cwd(), arg);
      if (!fs.existsSync(resolvedPath)) {
        console.warn(`\x1b[33mWarning: Path not found: ${arg}\x1b[0m`);
        continue;
      }

      const stat = fs.statSync(resolvedPath);
      if (stat.isDirectory()) {
        targets.push(...getFiles(resolvedPath, SUPPORTED_INPUT_EXTENSIONS));
      } else {
        const ext = path.extname(resolvedPath).toLowerCase();
        if (SUPPORTED_INPUT_EXTENSIONS.includes(ext)) {
          targets.push(resolvedPath);
        } else if (ext === '.webp') {
          console.warn(`\x1b[33mWarning: File is already WebP: ${arg}\x1b[0m`);
        } else {
          console.warn(`\x1b[33mWarning: Unsupported image format: ${arg} (supported: ${SUPPORTED_INPUT_EXTENSIONS.join(', ')})\x1b[0m`);
        }
      }
    }
  } else {
    // Default: find all supported images under src/
    console.log('No specific files provided. Scanning "src" directory for images to convert...');
    const srcDir = path.join(process.cwd(), 'src');
    targets = getFiles(srcDir, SUPPORTED_INPUT_EXTENSIONS);
  }

  if (targets.length === 0) {
    console.log('\x1b[34mNo matching images found to convert.\x1b[0m');
    return;
  }

  console.log(`Found ${targets.length} file(s) to convert. Starting conversion...\n`);
  for (const file of targets) {
    await convertToWebp(file, deleteOriginal);
  }
  console.log('\n\x1b[32mDone!\x1b[0m');
}

main().catch(err => {
  console.error('Unhandled error:', err);
  process.exit(1);
});
