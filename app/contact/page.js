"use client";

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { MapPin, Phone, Mail, Clock } from 'lucide-react';
import { GridPattern } from '@/components/ui/animated-grid-pattern';

const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({ ...prevState, [name]: value }));
  };

  
  const handleSubmit = async (e) => {
    e.preventDefault();
    
    // Data were sending to the backend
    const payload = {
      first_name: formData.name,
      email: formData.email,
      message: formData.subject + " \n" + formData.message,
    };
  
    try {
      const response = await fetch("http://57.129.71.13:8001/send_email", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(payload),
      });
  
      if (!response.ok) {
        throw new Error(`Error: ${response.statusText}`);
      }
  
      
      const result = await response.json();
      console.log("Email sent successfully:", result);
  
      setFormData({ name: "", email: "", subject: "", message: "" });
    } catch (error) {
      console.error("Failed to send email:", error);
      // Error mssage if needed
    }
  };
  

  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      <div className="absolute inset-0 z-0 opacity-20">
        <GridPattern width={32} height={32} />
      </div>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="max-w-7xl mx-auto relative z-10"
      >
        <h1 className="text-4xl font-bold text-center text-gray-900 mb-12">Contact Us</h1>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Contact Form */}
          <Card className="bg-white/80 backdrop-blur-sm">
            <CardHeader>
              <CardTitle>Send us a message</CardTitle>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <Label htmlFor="name">Name</Label>
                  <Input
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div>
                  <Label htmlFor="email">Email</Label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div>
                  <Label htmlFor="subject">Subject</Label>
                  <Input
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div>
                  <Label htmlFor="message">Message</Label>
                  <Textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                  />
                </div>
                <Button type="submit" className="w-full bg-[#1C74BB] hover:bg-[#9a7691]">
                  Send Message
                </Button>
              </form>
            </CardContent>
          </Card>
          {/* Map and Contact Info */}
          <div className="space-y-8">
            <Card className="bg-white/80 backdrop-blur-sm">
              <CardContent className="p-0">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d31528.295404547538!2d38.70751897544194!3d8.968744723241912!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x164b8104befd0b4f%3A0x6b035ee61a500cf!2zU3ByaW5nIG9mIEtub3dsZWRnZSBBY2FkZW15IHwgSmVtbyBCcmFuY2h8IOGIteGNheGIquGKleGMjSDhiqbhjY0g4YqW4YiM4YyFIOGKoOGKq-GLs-GImiB8IEplbW8gQnJhbmNo!5e0!3m2!1sen!2set!4v1728566467048!5m2!1sen!2set"
                  width="100%"
                  height="300"
                  style={{ border: 0 }}
                  allowFullScreen={true}
                  loading="lazy"
                ></iframe>
              </CardContent>
            </Card>

            <Card className="bg-white/80 backdrop-blur-sm">
              <CardHeader>
                <CardTitle>Contact Information</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-center space-x-2">
                  <MapPin className="text-[#1C74BB]" />
                  <span>Spring of knowledge academy | Jemo Campus</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Phone className="text-[#1C74BB]" />
                  <span>+251-96-053-1010</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Mail className="text-[#1C74BB]" />
                  <span>ethiospring@gmail.com</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Clock className="text-[#1C74BB]" />
                  <span>Monday - Friday: 8:00 AM - 5:00 PM</span>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default ContactPage;