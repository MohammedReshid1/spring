import Image from "next/image"
import { Card, CardContent, CardFooter } from "@/components/ui/card"
import { Button } from "@/components/ui/button"

export default function NewsCard({ id, headline, description, imageUrl, category, date, location, onReadMore }) {
  return (
    <Card className="overflow-hidden">
      <div className="relative h-48 w-full">
        <Image src={imageUrl || "/placeholder.svg"} alt={headline} fill style={{ objectFit: "cover" }} />
      </div>
      <CardContent className="p-4">
        <h3 className="text-xl font-semibold mb-2">{headline}</h3>
        <p className="text-sm text-gray-600 mb-2">{description}</p>
        <p className="text-xs text-gray-500">
          {category} | {date} | {location}
        </p>
      </CardContent>
      <CardFooter>
        <Button onClick={() => onReadMore(id)} variant="outline" className="w-full">
          Read More
        </Button>
      </CardFooter>
    </Card>
  )
}

