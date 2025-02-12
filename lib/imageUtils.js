export const getImageUrl = (imagePath) => {
    if (!imagePath) return "/placeholder.svg";
    
    // Check if the imagePath is already a full URL
    if (imagePath.startsWith('http://') || imagePath.startsWith('https://')) {
      return imagePath;
    }
  
    // Remove any leading or trailing slashes
    const cleanPath = imagePath.replace(/^\/+|\/+$/g, "");
    
    // Ensure the path starts with 'images/' if it doesn't already
    const path = cleanPath.startsWith("images/") ? cleanPath : `images/${cleanPath}`;
    
    // Return the full URL
    return `https://springofknowledge.org/${path}`;
  };
  