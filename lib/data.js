// lib/data.js
export async function getAllEvents() {
    try {
      const response = await fetch("https://api.springofknowledge.org/events")
      const data = await response.json()
  
      if (data.status === "success" && Array.isArray(data.events)) {
        return data.events.map((event) => ({
          id: event.id,
          title: event.title,
          description: event.description,
          imageUrl: event.image,
          date: new Date(event.starts_on * 1000).toISOString().split("T")[0],
        }))
      } else {
        throw new Error("Failed to fetch events from API")
      }
    } catch (error) {
      console.error("Error fetching events:", error)
      return [] // Return an empty array in case of error
    }
  }
  
  