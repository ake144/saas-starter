"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Switch } from "@/components/ui/switch"

export default function Pricing() {
  const [isAnnual, setIsAnnual] = useState(false)

  const plans = [
    {
      name: "Starter",
      price: isAnnual ? 99 : 9,
      features: ["5 Projects", "Up to 10 Users", "10GB Storage", "Basic Support"]
    },
    {
      name: "Pro",
      price: isAnnual ? 199 : 19,
      features: ["Unlimited Projects", "Unlimited Users", "100GB Storage", "Priority Support", "Advanced Analytics"]
    },
    {
      name: "Enterprise",
      price: "Custom",
      features: ["Everything in Pro", "Dedicated Account Manager", "Custom Integrations", "99.99% Uptime SLA"]
    }
  ]

  return (
    <section className="w-full items-center justify-center flex  py-12 md:py-24 lg:py-32">
      <div className="container px-4 md:px-6">
        <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl text-center mb-12">Pricing Plans</h2>
        <div className="flex justify-center items-center space-x-4 mb-8">
          <span>Monthly</span>
          <Switch checked={isAnnual} onCheckedChange={setIsAnnual} />
          <span>Annual (Save 20%)</span>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {plans.map((plan, index) => (
            <Card key={index} className={index === 1 ? "border-purple-600 border-2" : ""}>
              <CardHeader>
                <CardTitle>{plan.name}</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-4xl font-bold mb-4">
                  {typeof plan.price === "number" ? `$${plan.price}` : plan.price}
                  {typeof plan.price === "number" && <span className="text-sm font-normal">/{isAnnual ? "year" : "month"}</span>}
                </div>
                <ul className="space-y-2">
                  {plan.features.map((feature, i) => (
                    <li key={i} className="flex items-center">
                      <svg
                        className="w-4 h-4 mr-2 text-green-500"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                      </svg>
                      {feature}
                    </li>
                  ))}
                </ul>
              </CardContent>
              <CardFooter>
                <Button className="w-full">{index === 2 ? "Contact Sales" : "Get Started"}</Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}

