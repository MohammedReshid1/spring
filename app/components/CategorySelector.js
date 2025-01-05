/**
 * I added the following pages. 
 * /--------------------------------/
 *  *Inside "components" file are the following....
 *    -CategorySelection.js  (Known error on line no 24 (import statment));    ==========   god help u, u will need it 🤦‍♂️
 *    -News.js 
 *    -NewsCard.js
 *    -NewsModal.js
 *    -NewsSection.js
 * 
 * 
 * ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
 *    the other 4 files, name starting with "News", no other error was present but i cannot garantuee that there won't be any. even the CategorySection page was working perfectly before i left for lunch and came back and it just stopped working, i littrally changed nothing but it stopped working
 * ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
 * 
 *  *new folder named "data"... in it has the 2 new files...
 *     -news.js       (Small letters)
 *     -newsData.js
 * 
 *  *new folder named "news"... in it has the page.js file
 * 
 * */





'use client'

import { Button } from "@/components/ui/button"

export default function CategorySelector({ categories, activeCategory, onSelect }) {
  return (
    <div className="mb-8">
      <h2 className="text-2xl font-bold mb-4">Categories</h2>
      <div className="flex flex-wrap gap-2">
        <Button
          variant={activeCategory === 'All' ? "default" : "outline"}
          onClick={() => onSelect('All')}
          className="rounded-full"
        >
          All News
        </Button>
        {categories.map((category) => (
          <Button
            key={category}
            variant={activeCategory === category ? "default" : "outline"}
            onClick={() => onSelect(category)}
            className="rounded-full"
          >
            {category}
          </Button>
        ))}
      </div>
    </div>
  )
}

