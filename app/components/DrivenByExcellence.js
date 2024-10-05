import Image from 'next/image'

export default function DrivenByExcellence() {
  return (
    <section className="py-16 bg-background">
      <div className="container mx-auto flex flex-col md:flex-row items-center">
        <div className="md:w-1/2 mb-8 md:mb-0" px-4 py-2>
          <Image src="/images/driven_by_excellence.jpg" alt="Excellence" width={500} height={300} className="rounded-lg" />
        </div>
        <div className="md:w-1/2 md:pl-8">
          <h2 className="text-3xl font-bold mb-4">Driven by Excellence</h2>
          <p className="mb-4">Our institution is committed to fostering an environment of academic rigor, innovation, and personal growth.</p>
          <p>We strive to empower our students with the knowledge, skills, and experiences they need to excel in their chosen fields and make a positive impact on the world.</p>
        </div>
      </div>
    </section>
  )
}