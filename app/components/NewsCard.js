import Image from 'next/image'
import { Card, CardContent, CardFooter } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { CalendarIcon } from 'lucide-react'

export default function NewsCard({ id, title, category, excerpt, imageUrl, date, onReadMore }) {
  return (
    <Card className="overflow-hidden flex flex-col h-full">
      <div className="relative h-48 w-full">
        <Image
          src={imageUrl}
          alt={title}
          fill
          className="object-cover"
        />
        <div className="absolute top-4 left-4">
          <span className="px-3 py-1 bg-primary text-primary-foreground rounded-full text-sm font-medium">
            {category}
          </span>
        </div>
      </div>
      <CardContent className="flex-grow p-6">
        <div className="flex items-center text-sm text-muted-foreground mb-2">
          <CalendarIcon className="mr-2 h-4 w-4" />
          {new Date(date).toLocaleDateString()}
        </div>
        <h3 className="text-xl font-bold mb-2 line-clamp-2">{title}</h3>
        <p className="text-muted-foreground line-clamp-3">{excerpt}</p>
      </CardContent>
      <CardFooter className="p-6 pt-0">
        <Button 
          className="w-full" 
          variant="outline"
          onClick={() => onReadMore(id)}
        >
          Read More
        </Button>
      </CardFooter>
    </Card>
  )
}

