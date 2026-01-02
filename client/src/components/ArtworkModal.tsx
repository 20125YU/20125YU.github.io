import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";
import { Badge } from "@/components/ui/badge";
import { Calendar, ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";

import type { Image } from "@/types/content";

interface ArtworkModalProps {
  artwork: Image | null;
  open: boolean;
  onOpenChange: (open: boolean) => void;
  onPrevious?: () => void;
  onNext?: () => void;
}

export default function ArtworkModal({
  artwork,
  open,
  onOpenChange,
  onPrevious,
  onNext,
}: ArtworkModalProps) {
  if (!artwork) return null;

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-5xl max-h-[90vh] p-0 overflow-hidden">
        <div className="grid md:grid-cols-[1fr,400px] gap-0 h-full">
          <div className="relative bg-muted flex items-center justify-center p-8">
            <img
              src={artwork.url}
              alt={artwork.title}
              className="max-w-full max-h-[70vh] object-contain rounded-lg"
              data-testid="img-artwork-detail"
            />
            
            {onPrevious && (
              <Button
                variant="secondary"
                size="icon"
                className="absolute left-4 top-1/2 -translate-y-1/2"
                onClick={onPrevious}
                data-testid="button-previous-artwork"
              >
                <ChevronLeft className="w-5 h-5" />
              </Button>
            )}
            
            {onNext && (
              <Button
                variant="secondary"
                size="icon"
                className="absolute right-4 top-1/2 -translate-y-1/2"
                onClick={onNext}
                data-testid="button-next-artwork"
              >
                <ChevronRight className="w-5 h-5" />
              </Button>
            )}
          </div>

          <div className="p-8 space-y-6 overflow-y-auto">
            <DialogHeader>
              <DialogTitle className="font-serif text-3xl font-medium" data-testid="text-modal-title">
                {artwork.title}
              </DialogTitle>
              <DialogDescription className="sr-only">
                {artwork.description || `作品：${artwork.title}`}
              </DialogDescription>
            </DialogHeader>

            <div className="space-y-4">
              <div className="flex items-center gap-3 flex-wrap">
                <div className="flex items-center gap-1.5 text-sm text-muted-foreground">
                  <Calendar className="w-4 h-4" />
                  <span data-testid="text-modal-date">{artwork.date}</span>
                </div>
                {artwork.category && (
                  <Badge variant="secondary">{artwork.category}</Badge>
                )}
              </div>

              {artwork.description && (
                <div className="space-y-2">
                  <h4 className="font-serif font-medium text-lg">創作故事</h4>
                  <p className="text-muted-foreground leading-relaxed" data-testid="text-modal-description">
                    {artwork.description}
                  </p>
                </div>
              )}
            </div>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}
