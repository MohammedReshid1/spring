// app/components/Hero.js (Tailwind CSS Example)
export default function Hero() {
  return (
    <section className="bg-main text-center py-16">
      <div className="container mx-auto">
        <h1 className="text-4xl font-bold">Welcome to Spring of Knowledge Academy</h1>
        <p className="mt-4 text-lg">Start your journey with us today!</p>
        <button className="mt-8 px-6 py-3 bg-secondary text-white rounded-md">Learn More</button>
      </div>
    </section>
  );
}