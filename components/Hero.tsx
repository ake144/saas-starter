import { Button } from "@/components/ui/button"
import { ArrowRight, CheckCircle } from 'lucide-react'
import Link from "next/link"

export default function Hero() {
  return (
    <section className="w-full items-center justify-center flex  py-24 md:py-32 lg:py-40 xl:py-48 bg-gradient-to-br from-indigo-600 via-purple-600 to-pink-500 overflow-hidden">
      <div className="container px-4 md:px-6 relative">
        <div className="flex flex-col items-center space-y-4 text-center relative z-10">
          <div className="space-y-2">
            <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl lg:text-7xl/none bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-300">
              Revolutionize Your Workflow
            </h1>
            <p className="mx-auto max-w-[700px] text-xl text-gray-200 md:text-2xl/relaxed lg:text-base/relaxed xl:text-2xl/relaxed">
              Boost productivity and streamline your business processes with our cutting-edge SaaS solution.
            </p>
          </div>
          <div className="space-x-4">
            <Button asChild className="bg-white text-purple-600 hover:bg-gray-100 hover:text-purple-700 text-lg py-6 px-8">
              <Link href="/sign-in">
                Get Started
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
            <Button variant="outline" className="text-gray-800 border-white hover:bg-white/10 text-lg py-6 px-8">
              Learn More
            </Button>
          </div>
          <div className="flex justify-center space-x-4 text-sm text-gray-200 mt-8">
            <span className="flex items-center"><CheckCircle className="mr-1 h-5 w-5 text-green-400" /> 30-day free trial</span>
            <span className="flex items-center"><CheckCircle className="mr-1 h-5 w-5 text-green-400" /> No credit card required</span>
          </div>
        </div>
        <div className="absolute inset-0 scale-x-[-1]" aria-hidden="true">
          <div className="absolute h-[50rem] w-[90rem] -translate-x-[30rem] -top-40 left-1/2 [mask-image:radial-gradient(closest-side,white,transparent)] bg-gradient-to-r from-indigo-200 via-purple-200 to-pink-200 opacity-20 blur-2xl"></div>
        </div>
      </div>
    </section>
  )
}

