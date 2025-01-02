import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"

export default function CTA() {
  return (
    <section className="w-full items-center justify-center flex py-12 md:py-24 lg:py-32 bg-purple-600">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center space-y-4 text-center">
          <div className="space-y-2">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl text-white">
              Ready to Get Started?
            </h2>
            <p className="mx-auto max-w-[700px] text-gray-200 md:text-xl">
              Join thousands of satisfied customers and revolutionize your workflow today.
            </p>
          </div>
          <div className="w-full max-w-sm space-y-2">
            <form className="flex space-x-2">
              <Input
                className="flex-1"
                placeholder="Enter your email"
                type="email"
              />
              <Button type="submit" className="bg-white text-purple-600 hover:bg-gray-100">
                Sign Up
              </Button>
            </form>
            <p className="text-xs text-gray-200">
              By signing up, you agree to our{" "}
              <a href="#" className="underline underline-offset-2">
                Terms & Conditions
              </a>
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

