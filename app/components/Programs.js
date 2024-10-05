import Link from 'next/link'
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"

export default function Programs() {
  const programs = [
    { name: "Computer Science", description: "Learn to innovate and create cutting-edge technology solutions." },
    { name: "Business Administration", description: "Develop leadership skills and business acumen for the modern world." },
    { name: "Environmental Science", description: "Study the environment and learn to develop sustainable solutions." },
  ]

  return (
    <section className="py-16 bg-background">
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold mb-8 text-center">Our Programs</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {programs.map((program, index) => (
            <Card key={index}>
              <CardHeader>
                <CardTitle>{program.name}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>{program.description}</CardDescription>
              </CardContent>
              <CardFooter>
                <Button asChild>
                  <Link href={`/programs/${program.name.toLowerCase().replace(' ', '-')}`}>Learn More</Link>
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}