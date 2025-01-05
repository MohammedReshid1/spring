'use client'

import { useState, useMemo } from 'react'
import { newsData } from '../data/newsData'
import NewsCard from './NewsCard'
import CategorySelector from './CategorySelector'

export default function News() {
  const [activeCategory, setActiveCategory] = useState('All')

  const categories = useMemo(() => {
    const allCategories = newsData.map(item => item.category)
    return ['All', ...new Set(allCategories)]
  }, [])

  const filteredNews = useMemo(() => {
    return activeCategory === 'All'
      ? newsData
      : newsData.filter(item => item.category === activeCategory)
  }, [activeCategory])

  return (
    <section className="container mx-auto px-4 py-8">
      <h2 className="text-3xl font-bold mb-6">Latest News</h2>
      <CategorySelector
        categories={categories}
        activeCategory={activeCategory}
        onCategoryChange={setActiveCategory}
      />
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredNews.map((newsItem) => (
          <NewsCard key={newsItem.id} {...newsItem} />
        ))}
      </div>
    </section>
  )
}

