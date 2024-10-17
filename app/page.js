// 'use client'

// import { useRef, useEffect } from 'react'
// import Hero from './components/Hero'
// import HomeEnroll from './components/HomeEnroll'
// import DrivenByExcellence from './components/DrivenByExcellence'
// import Stats from './components/Stats'
// import WhatMakesUsDifferent from './components/WhatMakesUsDifferent'
// import Testimonials from './components/Testimonials'
// import Programs from './components/Programs'
// import TheCampus from './components/TheCampus'

// export default function Home() {
//   const sectionRefs = useRef([])

//   useEffect(() => {
//     const observerOptions = {
//       root: null,
//       rootMargin: '0px',
//       threshold: 0.1
//     }

//     const observerCallback = (entries) => {
//       entries.forEach((entry) => {
//         if (entry.isIntersecting) {
//           entry.target.classList.add('sticky-section')
//         } else {
//           entry.target.classList.remove('sticky-section')
//         }
//       })
//     }

//     const observer = new IntersectionObserver(observerCallback, observerOptions)

//     sectionRefs.current.forEach((ref) => {
//       if (ref) observer.observe(ref)
//     })

//     return () => {
//       sectionRefs.current.forEach((ref) => {
//         if (ref) observer.unobserve(ref)
//       })
//     }
//   }, [])

//   const addToRefs = (el) => {
//     if (el && !sectionRefs.current.includes(el)) {
//       sectionRefs.current.push(el)
//     }
//   }

//   return (
//     <div className="overflow-y-scroll h-screen snap-y snap-mandatory">
//       <section ref={addToRefs} className="snap-start min-h-screen flex items-center justify-center">
//         <Hero />
//       </section>
//       <section ref={addToRefs} className="snap-start min-h-screen flex items-center justify-center">
//         <DrivenByExcellence />
//       </section>
//       <section ref={addToRefs} className="snap-start min-h-screen flex items-center justify-center">
//         <Stats />
//       </section>
//       <section ref={addToRefs} className="snap-start min-h-screen flex items-center justify-center">
//         <WhatMakesUsDifferent />
//       </section>
//       <section ref={addToRefs} className="snap-start min-h-screen flex items-center justify-center">
//         <Testimonials />
//       </section>
//       <section ref={addToRefs} className="snap-start min-h-screen flex items-center justify-center">
//         <Programs />
//       </section>
//       <section ref={addToRefs} className="snap-start min-h-screen flex items-center justify-center">
//         <TheCampus />
//       </section>
//       <section ref={addToRefs} className="snap-start min-h-screen flex items-center justify-center">
//         <HomeEnroll />
//       </section>
//     </div>
//   )
// }
import Hero from './components/Hero' 
import HomeEnroll from './components/HomeEnroll' 
import DrivenByExcellence from './components/DrivenByExcellence' 
import Stats from './components/Stats' 
import WhatMakesUsDifferent from './components/WhatMakesUsDifferent' 
import Testimonials from './components/Testimonials' 
import Programs from './components/Programs' 
import TheCampus from './components/TheCampus'

export default function Home() { 
  return ( <> 
    <Hero /> 
    <DrivenByExcellence /> 
    <Stats /> 
    <WhatMakesUsDifferent /> 
    <Testimonials /> 
    <Programs /> 
    <TheCampus /> 
    <HomeEnroll /> 
    </> 
  ) }
  