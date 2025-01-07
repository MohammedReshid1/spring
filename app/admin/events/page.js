// 'use client'

// import { useState } from 'react'
// import { motion } from 'framer-motion'
// import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
// import { Input } from "@/components/ui/input"
// import { Button } from "@/components/ui/button"
// import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs"
// import { Label } from "@/components/ui/label"
// import { Textarea } from "@/components/ui/textarea"
// import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"

// export default function AdminEventsPage() {
//   const [activeTab, setActiveTab] = useState('new')
//   const [eventForm, setEventForm] = useState({
//     name: '',
//     date: '',
//     endDate: '',
//     timezone: '',
//     organizer: 'Spring Of Knowledge Academy',
//     responsible: '',
//     language: '',
//     visibility: 'Public',
//     venue: '',
//     limitRegistrations: '',
//     badgeDimension: 'A6'
//   })

//   const handleInputChange = (e) => {
//     const { name, value } = e.target
//     setEventForm(prev => ({ ...prev, [name]: value }))
//   }

//   const handleSelectChange = (name, value) => {
//     setEventForm(prev => ({ ...prev, [name]: value }))
//   }

//   const handleSubmit = (e) => {
//     e.preventDefault()
//     console.log('Event form submitted:', eventForm)
//     // Here you would typically send this data to your backend
//   }

//   return (
//     <main className="container mx-auto px-4 py-8">
//       <h1 className="text-4xl font-bold mb-8 text-center text-[#1C74BB]">Event Management</h1>

//       <Tabs value={activeTab} onValueChange={setActiveTab} className="mb-8">
//         <TabsList>
//           <TabsTrigger value="new">New</TabsTrigger>
//           <TabsTrigger value="booked">Booked</TabsTrigger>
//           <TabsTrigger value="announced">Announced</TabsTrigger>
//           <TabsTrigger value="ended">Ended</TabsTrigger>
//           <TabsTrigger value="cancelled">Cancelled</TabsTrigger>
//         </TabsList>
//       </Tabs>

//       <motion.div
//         initial={{ opacity: 0, y: 20 }}
//         animate={{ opacity: 1, y: 0 }}
//         transition={{ duration: 0.3 }}
//       >
//         <Card>
//           <CardHeader>
//             <CardTitle>Create New Event</CardTitle>
//           </CardHeader>
//           <CardContent>
//             <form onSubmit={handleSubmit} className="space-y-4">
//               <div>
//                 <Label htmlFor="name">Event Name</Label>
//                 <Input
//                   id="name"
//                   name="name"
//                   value={eventForm.name}
//                   onChange={handleInputChange}
//                   placeholder="e.g. Conference for Architects"
//                   className="border-[#1C74BB] focus:ring-[#1C74BB] focus:border-[#1C74BB]"
//                 />
//               </div>

//               <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
//                 <div>
//                   <Label htmlFor="date">Start Date</Label>
//                   <Input
//                     id="date"
//                     name="date"
//                     type="datetime-local"
//                     value={eventForm.date}
//                     onChange={handleInputChange}
//                     className="border-[#1C74BB] focus:ring-[#1C74BB] focus:border-[#1C74BB]"
//                   />
//                 </div>
//                 <div>
//                   <Label htmlFor="endDate">End Date</Label>
//                   <Input
//                     id="endDate"
//                     name="endDate"
//                     type="datetime-local"
//                     value={eventForm.endDate}
//                     onChange={handleInputChange}
//                     className="border-[#1C74BB] focus:ring-[#1C74BB] focus:border-[#1C74BB]"
//                   />
//                 </div>
//               </div>

//               <div>
//                 <Label htmlFor="timezone">Timezone</Label>
//                 <Select name="timezone" onValueChange={(value) => handleSelectChange('timezone', value)}>
//                   <SelectTrigger className="border-[#1C74BB] focus:ring-[#1C74BB] focus:border-[#1C74BB]">
//                     <SelectValue placeholder="Select timezone" />
//                   </SelectTrigger>
//                   <SelectContent>
//                     <SelectItem value="Africa/Addis_Ababa">Africa/Addis_Ababa</SelectItem>
//                     {/* Add more timezone options as needed */}
//                   </SelectContent>
//                 </Select>
//               </div>

//               <div>
//                 <Label htmlFor="responsible">Responsible</Label>
//                 <Input
//                   id="responsible"
//                   name="responsible"
//                   value={eventForm.responsible}
//                   onChange={handleInputChange}
//                   placeholder="Email of responsible person"
//                   className="border-[#1C74BB] focus:ring-[#1C74BB] focus:border-[#1C74BB]"
//                 />
//               </div>

//               <div>
//                 <Label htmlFor="language">Language</Label>
//                 <Select name="language" onValueChange={(value) => handleSelectChange('language', value)}>
//                   <SelectTrigger className="border-[#1C74BB] focus:ring-[#1C74BB] focus:border-[#1C74BB]">
//                     <SelectValue placeholder="Select language" />
//                   </SelectTrigger>
//                   <SelectContent>
//                     <SelectItem value="en">English</SelectItem>
//                     <SelectItem value="am">Amharic</SelectItem>
//                     {/* Add more language options as needed */}
//                   </SelectContent>
//                 </Select>
//               </div>

//               <div>
//                 <Label htmlFor="venue">Venue</Label>
//                 <Input
//                   id="venue"
//                   name="venue"
//                   value={eventForm.venue}
//                   onChange={handleInputChange}
//                   placeholder="Event venue"
//                   className="border-[#1C74BB] focus:ring-[#1C74BB] focus:border-[#1C74BB]"
//                 />
//               </div>

//               <div>
//                 <Label htmlFor="limitRegistrations">Limit Registrations</Label>
//                 <Input
//                   id="limitRegistrations"
//                   name="limitRegistrations"
//                   type="number"
//                   value={eventForm.limitRegistrations}
//                   onChange={handleInputChange}
//                   placeholder="Maximum number of registrations"
//                   className="border-[#1C74BB] focus:ring-[#1C74BB] focus:border-[#1C74BB]"
//                 />
//               </div>

//               <Button type="submit" className="bg-[#1C74BB] hover:bg-[#9a7691] text-white">
//                 Create Event
//               </Button>
//             </form>
//           </CardContent>
//         </Card>
//       </motion.div>
//     </main>
//   )
// }