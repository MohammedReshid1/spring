"use client"

import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogFooter } from "@/components/ui/dialog"
import { Button } from "@/components/ui/button"
import Image from "next/image"
import { CalendarIcon, Share2, Linkedin, Twitter, Link } from "lucide-react"
import { useState, useEffect } from "react"
import { useModal } from '@/app/contexts/ModalContext'

export default function NewsModal({ isOpen, onClose, news, modalId }) {
  const { activeModal, openModal, closeModal } = useModal()
  const [isClient, setIsClient] = useState(false)

  useEffect(() => {
    setIsClient(true)
    if (isOpen && news) {
      openModal(modalId)
    }
  }, [isOpen, modalId, news])

  const handleClose = () => {
    closeModal()
    onClose()
  }

  // Early return if no news data
  if (!news || !isOpen) return null

  return (
    <Dialog open={isOpen && activeModal === modalId} onOpenChange={handleClose}>
      <DialogContent className="max-w-2xl w-11/12 max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="text-2xl font-bold">{news.headline}</DialogTitle>
        </DialogHeader>
        <div className="mt-4">
          <div className="relative h-48 sm:h-64 w-full mb-4">
            <Image
              src={news.imageUrl || news.image || "/placeholder.svg"}
              alt={news.headline}
              fill
              style={{ objectFit: 'cover' }}
              className="rounded-lg"
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
            <p className="text-muted-foreground">{news.description}</p>
            <p className="text-muted-foreground">
              {/* Here will be the insertion of the news content for future purposes */}
              This is an expanded version of the story that provides more details and context about the news item. The
              full article would contain additional paragraphs, quotes, and related information that gives readers a
              comprehensive understanding of the topic.
            </p>
          </div>
        </div>
        <DialogFooter className="mt-6 sticky bottom-0 bg-background pt-4">
          <div className="flex gap-2 w-full justify-center">
            <Button
              variant="secondary"
              className="bg-[#1C74BB] hover:bg-[#4f8e90] text-white"
              onClick={() => handleShare("share")}
            >
              <Share2 className="w-4 h-4 mr-2" />
              Share
            </Button>
            <Button
              variant="secondary"
              className="bg-[#5f9ea0] hover:bg-[#4f8e90] text-white"
              onClick={() => handleShare("linkedin")}
            >
              <Linkedin className="w-4 h-4" />
            </Button>
            <Button
              variant="secondary"
              className="bg-[#5f9ea0] hover:bg-[#4f8e90] text-white"
              onClick={() => handleShare("twitter")}
            >
              <Twitter className="w-4 h-4" />
            </Button>
            <Button
              variant="secondary"
              className="bg-[#5f9ea0] hover:bg-[#4f8e90] text-white"
              onClick={() => handleShare("copy")}
            >
              <Link className="w-4 h-4" />
            </Button>
          </div>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  )
}

