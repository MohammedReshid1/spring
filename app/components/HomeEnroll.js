import Link from 'next/link'
import { Button } from "@/components/ui/button"

export default function HomeEnroll() {
  return (
    <section className="bg-primary text-primary-foreground py-16">
      <div className="container mx-auto text-center">
        <h2 className="text-3xl font-bold mb-4">Enroll Now for Fall 2024</h2>
        <p className="mb-8">Join our community of learners and start your journey towards excellence.</p>
        <Button asChild>
          <Link href="/enroll">Enroll Today</Link>
        </Button>
      </div>
    </section>
  )
}