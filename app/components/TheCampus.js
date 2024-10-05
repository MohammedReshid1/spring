import Image from 'next/image'

export default function TheCampus() {
  return (
    <section className="py-16 bg-muted">
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold mb-8 text-center">Experience Our Campus</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <Image src="/placeholder.svg" alt="Campus Building" width={400} height={300} className="rounded-lg" />
          <Image src="/placeholder.svg" alt="Library" width={400} height={300} className="rounded-lg" />
          <Image src="/placeholder.svg" alt="Student Life" width={400} height={300} className="rounded-lg" />
        </div>
        <p className="mt-8 text-center">Our state-of-the-art campus provides the perfect environment for learning, research, and personal growth.</p>
      </div>
    </section>
  )
}