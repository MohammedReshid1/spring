'use client'

import { useState } from 'react'
import Link from 'next/link'
import BranchSection from './BranchSection'

const branches = [
  {
    id: 1,
    name: 'Mekanisa Branch',
    image: '/images/SKA-132.jpg?height=600&width=800',
    description: 'Our Mekanisa branch serves as a key location for our services in the area.'
  },
  {
    id: 2,
    name: 'Jemo Branch',
    image: '/images/SKA-8.jpg?height=600&width=800',
    description: 'The Jemo branch is an important hub for our operations in the region.'
  },
  {
    id: 3,
    name: 'Torhayloch Branch',
    image: '/images/SKA-157.jpg?height=600&width=800',
    description: 'Our Torhayloch branch provides essential services to the local community.'
  }
]

export default function BranchesDisplay() {
  const [checkedButtons, setCheckedButtons] = useState<number[]>([])

  const handleButtonClick = (id: number) => {
    setCheckedButtons(prev => {
      if (prev.includes(id)) {
        return prev.filter(buttonId => buttonId !== id)
      } else {
        const newChecked = [...prev, id]
        return newChecked.length === 3 ? [] : newChecked
      }
    })
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-4xl font-bold">Our Branches</h1>
        <Link href="/" className="bg-[#1C74BB] text-white px-4 py-2 rounded-full hover:bg-blue-600 transition-colors">
          Back to Home Page
        </Link>
      </div>
      <div className="flex flex-wrap justify-center gap-4 mb-8">
        {branches.map(branch => (
          <button
            key={branch.id}
            className={`py-2 px-4 rounded-full transition-all duration-300 ease-in-out 
                       ${checkedButtons.includes(branch.id) 
                         ? 'bg-blue-500 text-white' 
                         : 'bg-white text-blue-500 border-2 border-blue-500'}
                       hover:bg-blue-600 hover:text-white`}
            onClick={() => handleButtonClick(branch.id)}
          >
            {branch.name}
          </button>
        ))}
      </div>
      <div className="space-y-8">
        {branches.map(branch => (
          <BranchSection
            key={branch.id}
            {...branch}
            isVisible={checkedButtons.length === 0 || checkedButtons.includes(branch.id)}
          />
        ))}
      </div>
    </div>
  )
}

