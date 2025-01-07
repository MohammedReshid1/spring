import Image from 'next/image'
import Link from 'next/link'
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"

export default function Programs() {
  const programs = [
    { 
      name: "Kindergarten Program", 
      description: "Where Little Learners Begin Big Adventures!",
      image: "/images/SKA-57.jpg"
    },
    { 
      name: "Primary School Program", 
      description: "Building Strong Foundations for Tomorrow's Leaders!",
      image: "/images/SKA-48.jpg"
    },
    { 
      name: "High School Program", 
      description: "Empowering Students to Achieve and Excel!.",
      image: "/images/SKA-85.jpg"
    },
  ]

  return (
    <section className="py-16 bg-background m-10">
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold mb-8 text-center">
          Our <span style={{ color: '#1C74BB' }}>Programs</span>
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {programs.map((program, index) => (
            <Card key={index} className="group relative overflow-hidden flex flex-col h-[400px] cursor-pointer">
              <CardHeader>
                <CardTitle>{program.name}</CardTitle>
              </CardHeader>
              <CardContent className="relative p-0 flex-grow ">
                <div className="absolute inset-0 mb-3">
                  <Image 
                    src={program.image} 
                    alt={program.name} 
                    fill
                    style={{ objectFit: 'cover' }}
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    className="transition-transform duration-300 group-hover:scale-105"
                  />
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <CardDescription className="absolute inset-x-0 bottom-0 h-full flex items-center justify-center p-4 text-white translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-in-out">
                  <span className="text-center">{program.description}</span>
                </CardDescription>
              </CardContent>
              <CardFooter className="justify-center relative z-10 mt-3">
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