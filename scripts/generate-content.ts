import { readdir, readFile, writeFile } from "fs/promises";
import { resolve } from "path";
import yaml from "js-yaml";

interface ContentData {
  diaries: any[];
  images: any[];
}

async function generateContent() {
  const contentPath = resolve(process.cwd(), "content");
  const outputPath = resolve(process.cwd(), "client", "src", "data", "content.json");
  const data: ContentData = {
    diaries: [],
    images: [],
  };

  // Load diaries
  try {
    const diariesDir = resolve(contentPath, "diaries");
    const diaryFiles = await readdir(diariesDir);
    for (const file of diaryFiles) {
      if (file.endsWith(".yaml") || file.endsWith(".yml")) {
        const content = await readFile(resolve(diariesDir, file), "utf-8");
        const diary = yaml.load(content) as any;
        data.diaries.push(diary);
      }
    }
    // Sort by date descending
    data.diaries.sort((a, b) => {
      try {
        const dateA = new Date(a.date.replace(/年|月|日/g, "/").replace(/\/$/, ""));
        const dateB = new Date(b.date.replace(/年|月|日/g, "/").replace(/\/$/, ""));
        return dateB.getTime() - dateA.getTime();
      } catch {
        return 0;
      }
    });
  } catch (error) {
    console.warn("Failed to load diaries:", error);
  }

  // Load images
  try {
    const imagesFile = resolve(contentPath, "images", "images.yaml");
    const content = await readFile(imagesFile, "utf-8");
    const imagesData = yaml.load(content) as { images: any[] };
    data.images = imagesData.images || [];
  } catch (error) {
    console.warn("Failed to load images:", error);
  }

  // Write to JSON file
  await writeFile(outputPath, JSON.stringify(data, null, 2), "utf-8");
  console.log(`Content generated successfully: ${outputPath}`);
}

generateContent().catch(console.error);
