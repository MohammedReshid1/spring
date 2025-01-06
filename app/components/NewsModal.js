import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogFooter,
} from "@/components/ui/dialog"
import { Button } from "@/components/ui/button"
import Image from 'next/image'
import { CalendarIcon, Share2, Linkedin, Twitter, Link } from 'lucide-react'

export default function NewsModal({ isOpen, onClose, news }) {
  if (!news) return null

  const handleShare = async (type) => {
    const url = window.location.href
    const title = news.title

    switch (type) {
      case 'share':
        if (navigator.share) {
          try {
            await navigator.share({
              title: title,
              text: news.excerpt,
              url: url,
            })
          } catch (err) {
            console.error('Error sharing:', err)
          }
        }
        break
      case 'linkedin':
        window.open(`https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(url)}`, '_blank')
        break
      case 'twitter':
        window.open(`https://twitter.com/intent/tweet?text=${encodeURIComponent(title)}&url=${encodeURIComponent(url)}`, '_blank')
        break
      case 'copy':
        try {
          await navigator.clipboard.writeText(url)
          alert('Link copied to clipboard!')
        } catch (err) {
          console.error('Error copying to clipboard:', err)
        }
        break
    }
  }

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
        <DialogFooter className="mt-6">
          <div className="flex gap-2 w-full justify-center">
            <Button
              variant="secondary"
              className="bg-[#18BEBC] hover:bg-[#4f8e90] text-white"
              onClick={() => handleShare('share')}
            >
              <Share2 className="w-4 h-4 mr-2" />
              Share
            </Button>
            <Button
              variant="secondary"
              className="bg-[#5f9ea0] hover:bg-[#4f8e90] text-white"
              onClick={() => handleShare('linkedin')}
            >
              <Linkedin className="w-4 h-4" />
            </Button>
            <Button
              variant="secondary"
              className="bg-[#5f9ea0] hover:bg-[#4f8e90] text-white"
              onClick={() => handleShare('twitter')}
            >
              <Twitter className="w-4 h-4" />
            </Button>
            <Button
              variant="secondary"
              className="bg-[#5f9ea0] hover:bg-[#4f8e90] text-white"
              onClick={() => handleShare('copy')}
            >
              <Link className="w-4 h-4" />
            </Button>
          </div>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  )
}

