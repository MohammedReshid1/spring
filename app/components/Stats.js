export default function Stats() {
    const stats = [
      { label: 'Students', value: '10,000+' },
      { label: 'Courses', value: '200+' },
      { label: 'Graduation Rate', value: '95%' },
      { label: 'Career Placement', value: '88%' },
    ]
  
    return (
      <section className="py-16 bg-muted">
        <div className="container mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-4xl font-bold mb-2">{stat.value}</div>
                <div className="text-muted-foreground">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>
    )
  }