"use client"

import { useState, useEffect } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

export default function Stats() {
  const [count1, setCount1] = useState(0)
  const [count2, setCount2] = useState(0)
  const [count3, setCount3] = useState(0)

  useEffect(() => {
    const interval1 = setInterval(() => setCount1(prev => Math.min(prev + 1, 98)), 20)
    const interval2 = setInterval(() => setCount2(prev => Math.min(prev + 100, 10000)), 20)
    const interval3 = setInterval(() => setCount3(prev => Math.min(prev + 1, 250)), 20)

    return () => {
      clearInterval(interval1)
      clearInterval(interval2)
      clearInterval(interval3)
    }
  }, [])

  return (
    <section className="w-full items-center justify-center flex  py-12 md:py-24 lg:py-32 bg-gray-100">
      <div className="container px-4 md:px-6">
        <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl text-center mb-12">Our Impact</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <Card>
            <CardHeader>
              <CardTitle>Customer Satisfaction</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-4xl font-bold">{count1}%</p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle>Active Users</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-4xl font-bold">{count2.toLocaleString()}+</p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle>Global Partners</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-4xl font-bold">{count3}+</p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}

