import sharp from 'sharp'
import { readdir, stat } from 'fs/promises'
import { join, extname, basename } from 'path'

const assetsDir = './src/assets'

const files = await readdir(assetsDir)
const images = files.filter(f => /\.(png|jpe?g)$/i.test(f))

console.log(`Converting ${images.length} images to WebP...\n`)

for (const file of images) {
  const input  = join(assetsDir, file)
  const name   = basename(file, extname(file))
  const output = join(assetsDir, `${name}.webp`)
  const ext    = extname(file).toLowerCase()

  const before = (await stat(input)).size

  // Logo has transparency — use lossless WebP to preserve it perfectly
  const isLogo = file.toLowerCase().includes('logo')

  await sharp(input)
    .webp(isLogo
      ? { lossless: true }
      : { quality: 88, effort: 6 }
    )
    .toFile(output)

  const after = (await stat(output)).size
  const pct   = Math.round((1 - after / before) * 100)
  console.log(`  ${file}`)
  console.log(`    ${(before/1024).toFixed(0)}KB → ${(after/1024).toFixed(0)}KB  (-${pct}%)`)
}

console.log('\nDone.')
