import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog"
import Image from 'next/image'
import { CalendarIcon } from 'lucide-react'

export default function NewsModal({ isOpen, onClose, news }) {
  if (!news) return null

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-2xl">
        <DialogHeader>
          <DialogTitle className="text-2xl font-bold">{news.title}</DialogTitle>
        </DialogHeader>
        <div className="mt-4">
          <div className="relative h-64 w-full mb-4">
            <Image
              src={news.imageUrl}
              alt={news.title}
              fill
              className="object-cover rounded-lg"
            />
          </div>
          <div className="flex items-center gap-4 mb-4">
            <span className="px-3 py-1 bg-primary text-primary-foreground rounded-full text-sm font-medium">
              {news.category}
            </span>
            <div className="flex items-center text-sm text-muted-foreground">
              <CalendarIcon className="mr-2 h-4 w-4" />
              {new Date(news.date).toLocaleDateString()}
            </div>
          </div>
          <div className="space-y-4">
            <p className="text-muted-foreground">{news.excerpt}</p>
            <p className="text-muted-foreground">
              This is an expanded version of the story that provides more details and context about the news item.
              The full article would contain additional paragraphs, quotes, and related information that gives readers
              a comprehensive understanding of the topic.
            </p>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  )
}

