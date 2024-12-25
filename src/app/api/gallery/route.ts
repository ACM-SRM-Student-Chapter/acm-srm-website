
import { NextResponse } from 'next/server';
import { promises as fs } from 'fs';
import path from 'path';
export const dynamic = "force-static" 
export async function GET() {
  try {
    const galleryDir = path.join(process.cwd(), 'public', 'images', 'gallery');
    const files = await fs.readdir(galleryDir);
    
    const imageFiles = files.filter(file => {
      const ext = path.extname(file).toLowerCase();
      return ['.png', '.jpg', '.jpeg'].includes(ext);
    });


    const images = imageFiles.map((file, index) => {
      const sizes = ['small', 'medium', 'large'];
      const randomSize = sizes[Math.floor(Math.random() * sizes.length)];
      
      return {
        id: index + 1,
        src: `/images/gallery/${file}`,
        alt: `Gallery Image ${index + 1}`,
        size: randomSize,
        category: determineCategory(file)
      };
    });

    return NextResponse.json(images);
  } catch (error) {
    console.error('Error reading gallery:', error);
    return NextResponse.json({ error: 'Failed to load gallery' }, { status: 500 });
  }
}

function determineCategory(filename: string): string {
  const lowerFilename = filename.toLowerCase();
  if (lowerFilename.includes('event')) return 'Events';
  if (lowerFilename.includes('workshop')) return 'Workshops';
  if (lowerFilename.includes('team')) return 'Team';
  return 'Events'; // Default category
}