"use client"

import { useState } from "react"
import Link from "next/link"
import BranchSection from "./BranchSection"

const branches = [
  {
    id: 1,
    name: "Mekanisa Branch",
    image: "/images/SKA-132.jpg?height=900&width=800",
    description: "Our Mekanisa branch serves as a key location for our services in the area.",
  },
  {
    id: 2,
    name: "Jemo Branch",
    image: "/images/SKA-8.jpg?height=600&width=800",
    description: "The Jemo branch is an important hub for our operations in the region.",
  },
  {
    id: 3,
    name: "Torhayloch Branch",
    image: "/images/SKA-157.jpg?height=600&width=800",
    description: "Our Torhayloch branch provides essential services to the local community.",
  },
]

export default function BranchesDisplay() {
  const [selectedBranch, setSelectedBranch] = useState<number | null>(null)

  const handleButtonClick = (id: number) => {
    setSelectedBranch((prev) => (prev === id ? null : id))
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="flex flex-col sm:flex-row justify-between items-center mb-8 gap-4">
        <h1 className="text-3xl md:text-4xl font-bold">Our Branches</h1>
        <Link href="/" className="bg-[#1C74BB] text-white px-4 py-2 rounded-full hover:bg-blue-600 transition-colors">
          Back to Home Page
        </Link>
      </div>

      <div className="flex flex-wrap justify-center gap-3 mb-8">
        {branches.map((branch) => (
          <button
            key={branch.id}
            className={`py-2 px-4 rounded-full transition-all duration-300 ease-in-out 
                       ${
                         selectedBranch === branch.id
                           ? "bg-blue-500 text-white"
                           : "bg-white text-blue-500 border-2 border-blue-500"
                       }
                       hover:bg-blue-600 hover:text-white`}
            onClick={() => handleButtonClick(branch.id)}
          >
            {branch.name}
          </button>
        ))}
      </div>

      <div className="space-y-8">
        {branches.map((branch) => (
          <BranchSection
            key={branch.id}
            {...branch}
            isVisible={selectedBranch === null || selectedBranch === branch.id}
          />
        ))}
      </div>
    </div>
  )
}

