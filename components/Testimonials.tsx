"use client"

import { useEffect, useState } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ChevronLeft, ChevronRight } from 'lucide-react'
import { motion } from 'framer-motion'

export default function Testimonials() {
  const testimonials = [
    {
      quote: "This SaaS platform has completely transformed our business operations. It's intuitive, powerful, and incredibly efficient.",
      author: "Jane Doe",
      company: "Tech Innovators Inc."
    },
    {
      quote: "The analytics capabilities are unmatched. We've gained invaluable insights that have driven our growth strategy.",
      author: "John Smith",
      company: "Data Driven Co."
    },
    {
      quote: "Customer support is top-notch. Any issues we've had were resolved quickly and professionally.",
      author: "Emily Johnson",
      company: "Startup Success Ltd."
    }
  ]

  const [currentIndex, setCurrentIndex] = useState(0)

  const nextTestimonial = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length)
  }

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1))
    }, 5000)

    return () => clearInterval(interval)
  }, [])

  const prevTestimonial = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + testimonials.length) % testimonials.length)
  }

  return (
    <section className="w-full items-center justify-center flex py-12 md:py-24 lg:py-32">
      <div className="container px-4 md:px-6">
        <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl text-center mb-12">What Our Customers Say</h2>
        <div className="relative">
          <motion.div
            key={currentIndex}
            initial={{ opacity: 0, translateY: 20 }}
            animate={{ opacity: 1, translateY: 0 }}
            exit={{ opacity: 0, translateY: -20 }}
            transition={{ duration: 0.5 }}
          >
            <Card className="max-w-2xl mx-auto">
              <CardContent className="pt-10">
                <blockquote className="text-xl italic mb-4">"{testimonials[currentIndex].quote}"</blockquote>
                <p className="font-semibold">{testimonials[currentIndex].author}</p>
                <p className="text-sm text-gray-500">{testimonials[currentIndex].company}</p>
              </CardContent>
            </Card>
          </motion.div>
          <Button variant="outline" className="absolute top-1/2 left-0 transform -translate-y-1/2" onClick={prevTestimonial}>
            <ChevronLeft className="h-6 w-6" />
          </Button>
          <Button variant="outline" className="absolute top-1/2 right-0 transform -translate-y-1/2" onClick={nextTestimonial}>
            <ChevronRight className="h-6 w-6" />
          </Button>
        </div>
      </div>
    </section>
  )
}