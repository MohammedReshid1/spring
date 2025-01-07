'use client';

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { ChevronDown, ChevronUp } from 'lucide-react';


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

const departments = [
  {
    name: "Computer Science",
    description: "Focus on cutting-edge technology, AI, and software development.",
    image: "/images/campus.jpg",
    details: "Our Computer Science department offers state-of-the-art labs, internship opportunities with tech giants, and a curriculum that covers everything from basic programming to advanced AI and machine learning techniques."
  },
  {
    name: "Business Administration",
    description: "Prepare for leadership roles in global organizations.",
    image: "/images/campus.jpg",
    details: "The Business Administration program provides a comprehensive understanding of modern business practices, including finance, marketing, operations, and strategy. Students gain hands-on experience through case studies and internships with leading companies."
  },
  {
    name: "Data Science",
    description: "Master data analytics, machine learning, and big data.",
    image: "/images/campus.jpg",
    details: "Our Data Science program combines statistics, computer science, and domain expertise to extract insights from complex datasets. Students work on real-world projects and have access to cutting-edge tools and technologies used in the industry."
  },
  {
    name: "Engineering",
    description: "Innovate and solve complex problems in various engineering fields.",
    image: "/images/campus.jpg",
    details: "The Engineering department offers specializations in mechanical, electrical, civil, and chemical engineering. Our program emphasizes hands-on learning, with access to advanced labs and opportunities to participate in national engineering competitions."
  },
  {
    name: "Environmental Science",
    description: "Study and protect our natural world and ecosystems.",
    image: "/images/campus.jpg",
    details: "The Environmental Science program focuses on understanding and addressing global environmental challenges. Students engage in fieldwork, laboratory research, and collaborate with local and international organizations on sustainability projects."
  },
  {
    name: "Psychology",
    description: "Understand human behavior and mental processes.",
    image: "/images/campus.jpg",
    details: "Our Psychology department offers a comprehensive curriculum covering cognitive, developmental, social, and clinical psychology. Students have opportunities to conduct research, participate in internships, and prepare for careers in counseling, research, or further graduate studies."
  },
];



export default function Departments() {
  const [selectedDept, setSelectedDept] = useState(null);
  const [hoveredFounder, setHoveredFounder] = useState(null)

  const handleCardClick = (index) => {
    setSelectedDept(selectedDept === index ? null : index);
  };

  return (
    <div className="bg-background text-foreground min-h-screen">
      <section className="flex items-center justify-center min-h-10vh bg-background">
        <h1 className="text-5xl font-bold text-[#1C74BB] text-center">Our Departments</h1>
      </section>


      <section className="departments px-4 md:px-8 py-12 relative">
        <motion.div
          className="department-cards grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, staggerChildren: 0.2 }}
        >
          {departments.map((dept, index) => (
            <motion.div
              key={index}
              className={`relative card flex flex-col bg-white/10 backdrop-blur-lg rounded-lg shadow-md overflow-hidden cursor-pointer ${
                selectedDept !== null && selectedDept !== index ? 'filter blur-sm' : ''
              }`}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              onClick={() => handleCardClick(index)}
            >
              <Image
                src={dept.image}
                alt={dept.name}
                width={400}
                height={200}
                className="w-full h-48 object-cover"
              />
              <div className="child p-4 flex-grow">
                <h3 className="text-lg font-semibold mb-2">{dept.name}</h3>
                <p className="text-gray-600">{dept.description}</p>
              </div>
              <AnimatePresence>
                {selectedDept === index && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: 'auto' }}
                    exit={{ opacity: 0, height: 0 }}
                    transition={{ duration: 0.3 }}
                    className="bg-gray-100 p-4"
                  >
                    <p className="text-sm text-gray-700 mb-4">{dept.details}</p>
                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        setSelectedDept(null);
                      }}
                      className="flex items-center justify-center w-full py-2 px-4 bg-[#001740] text-white rounded hover:bg-[#1C74BB] transition-colors"
                    >
                      <ChevronUp className="mr-2" size={16} />
                      Minimize
                    </button>
                  </motion.div>
                )}
              </AnimatePresence>
              {selectedDept !== index && (
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    handleCardClick(index);
                  }}
                  className="flex items-center justify-center w-full py-2 px-4 bg-gray-200 text-gray-700 hover:bg-gray-300 transition-colors"
                >
                  <ChevronDown className="mr-2" size={16} />
                  Learn More
                </button>
              )}
            </motion.div>
          ))}
        </motion.div>
      </section>
       <section className="mb-16">
        <h2 className="text-3xl font-semibold mb-8 text-center text-[#1C74BB]">Meet Our Department Heads</h2>
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
                    <p className={`text-sm mb-2 ${hoveredFounder === index ? 'text-[#1C74BB]' : 'text-gray-600'}`}>{founder.role}</p>
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
      />
    </div>
  );
}
