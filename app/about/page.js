'use client'

import { useState } from 'react'
import Image from 'next/image'
import { motion } from 'framer-motion'
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { TimerReset, BrainCircuit, Handshake, ScanEyeIcon, BriefcaseBusiness, SunDim } from 'lucide-react'

export default function About() {
  const [hoveredFounder, setHoveredFounder] = useState(null)

  const founders = [
    {
      name: "Biruk Tilahun",
      role: "General Manager",
      image: "/images/lady.png?height=400&width=400",
      description: "Dr. Chen is an education visionary with over 20 years of experience in curriculum development and educational technology."
    },
    {
      name: "Zemed Derib",
      role: "Primary School Principal",
      image: "/images/lady.png?height=400&width=400",
      description: "Prof. Johnson is a renowned expert in personalized learning and has published numerous papers on adaptive educational systems."
    },
    {
      name: "Muhdin Muzeyin",
      role: "Secondary School Principal",
      image: "/images/lady.png?height=400&width=400",
      description: "Sarah brings her expertise in EdTech and user experience design to create engaging and effective learning platforms."
    },
    {
      name: "Zelalem Biru",
      role: "Assessment & Quality Assurance Head",
      image: "/images/lady.png?height=400&width=400",
      description: "Sarah brings her expertise in EdTech and user experience design to create engaging and effective learning platforms."
    },
    {
      name: "Yewubdar Belay",
      role: "Kindergarten Principal",
      image: "/images/lady.png?height=400&width=400",
      description: "Sarah brings her expertise in EdTech and user experience design to create engaging and effective learning platforms."
    },

    {
      name: "Ajaiba Heyredin",
      role: "Kindergarten Principal",
      image: "/images/lady.png?height=400&width=400",
      description: "Sarah brings her expertise in EdTech and user experience design to create engaging and effective learning platforms."
    },

    {
      name: "Mohammed Abdela",
      role: "Legal Advisor",
      image: "/images/lady.png?height=400&width=400",
      description: "Sarah brings her expertise in EdTech and user experience design to create engaging and effective learning platforms."
    },

    {
      name: "Jemal Kedir",
      role: "Finance & Admin Head",
      image: "/images/lady.png?height=400&width=400",
      description: "Sarah brings her expertise in EdTech and user experience design to create engaging and effective learning platforms."
    }
  ]

  const values = [
    { icon: <BrainCircuit size={24} />, title: "Excellence", description: "We mean that every member of the school community is proud of his/her personal achievement, produces work of the highest quality, sets high standards and personal goals for improvement, and makes best use of talents, time and resources" },
    { icon: <Handshake size={24} />, title: "Respect", description: "All members of the school community treat each other decently and show respect for the opinions and work of others; value communal and individual property, the right and identity of others." },
    { icon: <ScanEyeIcon size={24} />, title: "Perseverance", description: "We press on and overcome difficulties to achieve our goals. We show perseverance when we remain optimistic despite difficulties, bounce back from setbacks and press on to reach our goals." },
    { icon: <TimerReset size={24} />, title: "Responsiveness", description: "We continually monitor the changing needs and requirements and provide appropriate program and services in a proactive, flexible and timely manner" },
    { icon: <BriefcaseBusiness size={24} />, title: "Professionalism", description: "We don’t either take action haphazardly or leave them for chance. Our actions, practices, decisions and interventions are guided and informed by scientific evidences and predefined principles" },
    { icon: <SunDim size={24} />, title: "Courage", description: "We will take measure; we admit our mistakes. Staff members treat learners, parents and other stakeholders with dignity and politeness at all times, embracing cultural diversity &tolerance" },
  ]

  return (
    <main className="container mx-auto px-4 py-8">
      <motion.section 
        className="text-center mb-16 relative py-20"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/campus.jpg"
            alt="Campus background"
            layout="fill"
            objectFit="cover"
            className="opacity-20"
          />
        </div>
        <div className="relative z-10 bg-white bg-opacity-80 p-8 rounded-lg">
          <h1 className="text-4xl font-bold mb-4 text-[#b18aa7]">About Spring of Knowledge Academy</h1>
          <p className="text-xl text-[#111827] max-w-2xl mx-auto">
            Nurturing minds, inspiring futures, and cultivating a lifelong love for learning.
          </p>
        </div>
      </motion.section>

      <motion.section 
        className="mb-16"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        <div className="flex flex-col md:flex-row items-center gap-8">
          <div className="md:w-1/2  ml-4 md:ml-[10%]">
            <h2 className="text-3xl font-semibold mb-4 text-[#b18aa7]">Our Mission</h2>
            <p className="text-lg text-[#111827]">
            Assuring the access to quality care & education for all children receiving our service
            </p>
          </div>
          <div className="md:w-1/9 max-w-md mx-auto">
            <Image
              src="/images/mission.png?height=300&width=300"
              alt="Spring of Knowledge Academy Logo"
              width={200}
              height={200}
              className="rounded-lg shadow-lg"
            />
          </div>
        </div>
      </motion.section>










<section className="mb-16">
 <h2 className="text-3xl font-semibold mb-8 text-center text-[#b18aa7]">Our Core Values</h2>
  <div className="grid grid-cols-1 md:grid-cols-2 gap-10 justify-items-center">
    <div className="space-y-6">
      {values.slice(0, 3).map((value, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 * index }}
        >
          <Card className="h-full transition-all duration-300 hover:shadow-lg hover:bg-[#111827] hover:text-[#b18aa7] group">
            <CardContent className="flex flex-col items-center p-6 h-64 justify-between">
              <div className="flex flex-col items-center mt-5 mb-auto">
                <div className="text-[#b18aa7] group-hover:text-white mb-4">
                  {value.icon}
                </div>
                <CardTitle className="mb-4 mt-5">{value.title}</CardTitle>
              </div>
              <p className="text-center text-sm mt-auto">{value.description}</p>
            </CardContent>
          </Card>
        </motion.div>
      ))}
    </div>

    <div className="space-y-6">
      {values.slice(3, 6).map((value, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 * index }}
        >
          
          <Card className="h-full transition-all duration-300 hover:shadow-lg hover:bg-[#111827] hover:text-[#b18aa7] group">
            <CardContent className="flex flex-col items-center p-6 h-64 justify-between">
              <div className="flex flex-col items-center mt-5 mb-auto">
                <div className="text-[#b18aa7] group-hover:text-white mb-4">
                  {value.icon}
                </div>
                <CardTitle className="mb-4 mt-5">{value.title}</CardTitle>
              </div>
              <p className="text-center text-sm mt-auto">{value.description}</p>
            </CardContent>
          </Card>
        </motion.div>
      ))}
    </div>
  </div>
</section>




      <section className="mb-16">
        <h2 className="text-3xl font-semibold mb-8 text-center text-[#b18aa7]">Meet Our Department</h2>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {founders.map((founder, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 * index }}
              className="max-w-sm mx-auto w-full"
            >
              <Card 
                className="h-full transition-all duration-300 hover:shadow-lg overflow-hidden"
                onMouseEnter={() => setHoveredFounder(index)}
                onMouseLeave={() => setHoveredFounder(null)}
              >
              <div className="relative flex h-[125px] w-[100%] justify-center items-end">
                <Image
                  src={founder.image}
                  alt={founder.name}
                  width={100}
                  height={100}
                  className="transition-transform duration-300 hover:scale-110 object-cover"
                />
              </div>

                <CardContent className="p-6 bg-white">
                  <div className={`transition-colors duration-300 ${hoveredFounder === index ? 'bg-[#111827] text-white' : ''} p-4 rounded-lg`}>
                    <h3 className="text-xl font-semibold mb-1">{founder.name}</h3>
                    <p className={`text-sm mb-2 ${hoveredFounder === index ? 'text-[#b18aa7]' : 'text-gray-600'}`}>{founder.role}</p>
                    <p className="text-sm">{founder.description}</p>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </section>

      <motion.section 
        className="text-center"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.4 }}
      >


      


      <section className="py-16 px-6 m-8 bg-gradient-to-b from-purple-50 via-white to-gray-100 rounded-lg">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        {/* Left Text Section */}
        <div className="space-y-6 text-justify">
          <h2 className="text-4xl font-extrabold text-[#241620] leading-tight">
            Background of the School
          </h2>
          <p className="text-sm text-gray-700 leading-relaxed">
            Spring of Knowledge Academy S.C. is a legally established private
            school founded in 2006 to contribute to the human capital
            development program of the country. The school was established by
            seven mothers who were committed to providing access to quality
            education for children and young adults.
          </p>
          <p className="text-sm text-gray-700 leading-relaxed">
            The school operates two Kindergarten divisions, two Primary School
            divisions, and one Secondary School division in Addis Ababa and is
            expanding its coverage to nearby towns. It envisions growing into a
            College and then a university to support middle-income community
            groups.
          </p>
          <p className="text-sm text-gray-700 leading-relaxed">
            Additionally, the School aspires to become a renowned educational
            institution and center of excellence nationally and internationally
            by establishing an IGCSE Center for both learning and examination.
          </p>
        </div>

        {/* Right Visual Section */}
        <div className="relative group">
          <div className="rounded-lg overflow-hidden shadow-lg">
            <Image
              src="/images/heritage.png" // Replace with your school image
              alt="School Campus"
              width={700}
              height={300}
              className="object-cover transition-transform duration-300 ease-in-out group-hover:scale-105"
            />
          </div>
          <p className="text-center text-sm text-gray-500 mt-4">
            "Building a brighter future, one child at a time."
          </p>
        </div>
      </div>
    </section>





    <section className="py-16 px-6 m-8 bg-gradient-to-b to-purple-50 via-white from-gray-100 rounded-lg">

    <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center ">
        {/* Left Text Section */}
        <div className="relative group">
          <div className="bg-white shadow-lg p-4 rounded-lg">
            <Image
              src="/images/companytree.png"
              alt="Organizational Chart"
              width={650}
              height={550}
              className="object-contain rounded-lg transition-transform duration-300 ease-in-out group-hover:scale-105"
            />
          </div>
          <p className="text-sm text-gray-500 mt-2 text-center">
            Click to view a larger version of the chart.
          </p>
        </div>

        {/* Right Chart Section */}
        <div className="space-y-6 text-justify">
          <h2 className="text-4xl text-right font-bold text-gray-800">Organizational structure</h2>
          <p className="text-sm text-gray-600 leading-relaxed">
            The Company has a workable organizational structure which has its
            own high-level decision-making body, the Board of Directors, and
            its operational business is headed by the General Manager. For each
            branch and cycle, there are principals accountable for the General
            Manager. Moreover, centrally, there are assessment and quality
            assurance, ICT & online support, finance, admin, HR & general
            service managers reporting to the General Manager.
          </p>
          <p className="text-sm text-gray-600 leading-relaxed">
            Horizontally, there are executive management committees for the
            company and senior management committees for each branch. Deputy
            Principals, Academic Supervisors, Subject-area Department Heads,
            Compound Supervisors, Guidance & Counselors, Special Needs &
            Learning Support Officers, and School Nurses are under the
            supervision of the school principal of the particular branch.
          </p>
        </div>
      </div>
      </section>


      </motion.section>

    </main>
  )

}































