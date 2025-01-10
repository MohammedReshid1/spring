'use client'

import { useState, useMemo, useEffect } from 'react'
// import { newsData } from '../data/news'
import CategorySelector from './CategorySelector'
import NewsCard from './NewsCard'
import NewsModal from './NewsModal'
import { Button } from "@/components/ui/button"
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog"

export default function NewsSection() {
  const [news, setNews] = useState([])
  const [activeCategory, setActiveCategory] = useState('All')
  const [selectedNews, setSelectedNews] = useState(null)
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [isFullListOpen, setIsFullListOpen] = useState(false)
  const [error, setError] = useState(null)
  const [isLoading, setIsLoading] = useState(false)


  //.. Fetching news from the db
  useEffect(() => {
    const fetchNews = async () => {
      setIsLoading(true)
      try {
        const response = await fetch('https://api.springofknowledge.org/news')
        const data = await response.json()

        if (data.status === 'success' && Array.isArray(data.articles)) {
          const formattedNews = data.articles.map(article => ({
            id: article.id,
            headline: article.headline,
            description: article.description,
            image: article.image || "/images/campus.jpg?height=200&width=300", // Placeholder image
            category: article.category,
            date: new Date(article.date * 1000 || Date.now()).toISOString().split('T')[0],
            location: article.location
          }))
          setNews(formattedNews)
        } else {
          throw new Error('Failed to fetch news from API')
        }
      } catch (error) {
        console.error('Error fetching news:', error)
        setError('Failed to load news. Please try again later.')
      } finally {
        setIsLoading(false)
      }
    }
    fetchNews()
  }, [])

  const categories = useMemo(() => {
    const uniqueCategories = [...new Set(news.map(item => item.category))]
    return ['All', ...uniqueCategories.sort()]
  }, [news])

  const filteredNews = useMemo(() => {
    if (activeCategory === 'All') return news
    return news.filter(newsItem => newsItem.category === activeCategory)
  }, [activeCategory, news])

  const handleReadMore = (id) => {
    const newsItem = news.find(item => item.id === id)
    setSelectedNews(newsItem)
    setIsModalOpen(true)
  }

  return (
    <div className="relative h-[80vh] overflow-hidden">
      <div className="h-full">
        <div className="container mx-auto px-4 h-full">
          <div className="text-center mb-8">
            <h1 className="text-4xl font-bold mb-4 mt-10">Latest <span style={{ color: '#1C74BB' }}>News</span></h1>
            <p className="text-xl text-muted-foreground">
              Stay updated with our latest news and updates
            </p>
          </div>

          <CategorySelector
            categories={categories}
            activeCategory={activeCategory}
            onSelect={setActiveCategory}
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredNews.map((newsItem) => (
              <NewsCard
                key={newsItem.id}
                {...newsItem}
                onReadMore={handleReadMore}
              />
            ))}
          </div>
        </div>
      </div>

      {/* White mask with gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent to-white pointer-events-auto" />

      {/* Read More button */}
      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 z-10">
        <Button onClick={() => setIsFullListOpen(true)} className="bg-blue-600 text-white hover:bg-blue-700">
          Read More
        </Button>
      </div>

      <NewsModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        news={selectedNews}
      />

      <Dialog open={isFullListOpen} onOpenChange={setIsFullListOpen}>
        <DialogContent className="max-w-7xl h-[90vh]">
          <DialogHeader>
            <DialogTitle className="text-3xl font-bold mb-6">All News</DialogTitle>
          </DialogHeader>
          <div className="overflow-y-auto h-full">
            <CategorySelector
              categories={categories}
              activeCategory={activeCategory}
              onSelect={setActiveCategory}
            />
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-6">
              {filteredNews.map((newsItem) => (
                <NewsCard
                  key={newsItem.id}
                  {...newsItem}
                  onReadMore={handleReadMore} // Modified to only open NewsModal without closing the full list
                />
              ))}
            </div>
          </div>
        </DialogContent>
      </Dialog>
    </div>
  )
}

