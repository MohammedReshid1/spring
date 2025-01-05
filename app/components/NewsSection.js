'use client'

import { useState, useMemo } from 'react'
import { newsData } from '../data/news'
import CategorySelector from './CategorySelector'
import NewsCard from './NewsCard'
import NewsModal from './NewsModal'

export default function NewsSection() {
  const [activeCategory, setActiveCategory] = useState('All')
  const [selectedNews, setSelectedNews] = useState(null)
  const [isModalOpen, setIsModalOpen] = useState(false)

  const categories = useMemo(() => {
    const uniqueCategories = [...new Set(newsData.map(item => item.category))]
    return uniqueCategories.sort()
  }, [])

  const filteredNews = useMemo(() => {
    if (activeCategory === 'All') return newsData
    return newsData.filter(news => news.category === activeCategory)
  }, [activeCategory])

  const handleReadMore = (id) => {
    const news = newsData.find(item => item.id === id)
    setSelectedNews(news)
    setIsModalOpen(true)
  }

  return (
    <div className="container mx-auto px-4">
      <div className="text-center mb-8">
        <h1 className="text-4xl font-bold mb-4">Latest News</h1>
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
        {filteredNews.map((news) => (
          <NewsCard 
            key={news.id} 
            {...news} 
            onReadMore={handleReadMore}
          />
        ))}
      </div>

      <NewsModal 
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        news={selectedNews}
      />
    </div>
  )
}

