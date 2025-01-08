import { Button } from "@/components/ui/button"

export default function CategorySelector({ categories, activeCategory, onSelect }) {
  return (
    <div className="flex flex-wrap gap-2 mb-6">
      {categories.map((category) => (
        <Button
          key={category}
          variant={activeCategory === category ? "default" : "outline"}
          onClick={() => onSelect(category)}
          className="text-sm"
        >
          {category}
        </Button>
      ))}
    </div>
  )
}

