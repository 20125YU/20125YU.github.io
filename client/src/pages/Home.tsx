import { useState } from "react";
import Navigation from "@/components/Navigation";
import ArtworkCard from "@/components/ArtworkCard";
import DiaryCard from "@/components/DiaryCard";
import TodaySection from "@/components/TodaySection";
import ArtworkModal from "@/components/ArtworkModal";
import contentData from "@/data/content.json";
import type { Diary, Image } from "@/types/content";

export default function Home() {
  const [selectedArtwork, setSelectedArtwork] = useState<Image | null>(null);
  
  const artworks = contentData.images as Image[];
  const diaries = contentData.diaries as Diary[];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      <TodaySection
        latestDiary={diaries[0]}
        latestArtwork={artworks[0]}
      />

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16">
        <section className="mb-16">
          <h2 className="font-serif text-3xl md:text-4xl font-light mb-8">最新作品</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {artworks.slice(0, 3).map((artwork) => (
              <ArtworkCard
                key={artwork.id}
                id={artwork.id}
                title={artwork.title}
                imageUrl={artwork.url}
                date={artwork.date}
                category={artwork.category}
                onClick={() => setSelectedArtwork(artwork)}
              />
            ))}
          </div>
        </section>

        <section>
          <h2 className="font-serif text-3xl md:text-4xl font-light mb-8">最新日記</h2>
          <div className="grid md:grid-cols-2 gap-6 md:gap-8">
            {diaries.slice(0, 2).map((diary) => (
              <DiaryCard key={diary.id} {...diary} />
            ))}
          </div>
        </section>
      </main>

      <ArtworkModal
        artwork={selectedArtwork}
        open={!!selectedArtwork}
        onOpenChange={(open) => !open && setSelectedArtwork(null)}
      />
    </div>
  );
}
