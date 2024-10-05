import Hero from './components/Hero'
import HomeEnroll from './components/HomeEnroll'
import DrivenByExcellence from './components/DrivenByExcellence'
import Stats from './components/Stats'
import WhatMakesUsDifferent from './components/WhatMakesUsDifferent'
import Testimonials from './components/Testimonials'
import Programs from './components/Programs'
import TheCampus from './components/TheCampus'

export default function Home() {
  return (
    <>
      <Hero />
      <HomeEnroll />
      <DrivenByExcellence />
      <Stats />
      <WhatMakesUsDifferent />
      <Testimonials />
      <Programs />
      <TheCampus />
    </>
  )
}