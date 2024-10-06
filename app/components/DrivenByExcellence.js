import Image from 'next/image'

export default function DrivenByExcellence() {
  return (
    <section className="py-16 bg-background">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="flex flex-col items-center lg:flex-row lg:items-center lg:justify-between gap-8 lg:gap-16">
          <div className="w-full lg:w-1/2 max-w-2xl">
            <Image 
              src="/images/driven_by_excellence.jpg" 
              alt="Excellence" 
              width={800} 
              height={600} 
              className="rounded-lg w-full h-auto object-cover" 
            />
          </div>
          <div className="w-full lg:w-1/2 max-w-2xl flex flex-col justify-center">
            <h2 className="text-3xl font-bold mb-6">Driven by Excellence</h2>
            <p className="mb-4">
              Our institution is committed to fostering an environment of academic rigor, innovation, and personal growth.
            </p>
            <p>
              We strive to empower our students with the knowledge, skills, and experiences they need to excel in their chosen fields and make a positive impact on the world.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}