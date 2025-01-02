"use client"

import { motion } from "framer-motion"
import { BarChart3, FileStack, Users, Zap, Shield, Clock, Cloud, MessageSquare, Settings } from 'lucide-react'

const features = [
  {
    icon: <BarChart3 className="h-8 w-8" />,
    title: "Reporting",
    description: "Stay on top of things with always up-to-date reporting features.",
    color: "text-pink-500",
    bgColor: "bg-pink-500/10",
  },
  {
    icon: <FileStack className="h-8 w-8" />,
    title: "File Stack",
    description: "Never lose track of what's in stock with accurate inventory tracking.",
    color: "text-purple-500",
    bgColor: "bg-purple-500/10",
  },
  {
    icon: <Users className="h-8 w-8" />,
    title: "Share Around",
    description: "Organize all of your contacts, service providers, and invoices in one place.",
    color: "text-indigo-500",
    bgColor: "bg-indigo-500/10",
  },
  {
    icon: <Zap className="h-8 w-8" />,
    title: "Lightning Fast",
    description: "Experience blazing fast performance with our optimized infrastructure.",
    color: "text-blue-500",
    bgColor: "bg-blue-500/10",
  },
  {
    icon: <Shield className="h-8 w-8" />,
    title: "Enterprise Security",
    description: "Bank-grade security protocols to keep your data safe and secure.",
    color: "text-cyan-500",
    bgColor: "bg-cyan-500/10",
  },
  {
    icon: <Clock className="h-8 w-8" />,
    title: "24/7 Support",
    description: "Round-the-clock support to help you whenever you need assistance.",
    color: "text-teal-500",
    bgColor: "bg-teal-500/10",
  },
  {
    icon: <Cloud className="h-8 w-8" />,
    title: "Cloud Storage",
    description: "Access your files from anywhere with unlimited cloud storage.",
    color: "text-emerald-500",
    bgColor: "bg-emerald-500/10",
  },
  {
    icon: <MessageSquare className="h-8 w-8" />,
    title: "Team Chat",
    description: "Collaborate seamlessly with built-in team messaging and file sharing.",
    color: "text-green-500",
    bgColor: "bg-green-500/10",
  },
  {
    icon: <Settings className="h-8 w-8" />,
    title: "Customizable",
    description: "Tailor the platform to your needs with extensive customization options.",
    color: "text-yellow-500",
    bgColor: "bg-yellow-500/10",
  },
]

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1
    }
  }
}

const itemVariants = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.5
    }
  }
}

export default function Features() {
  return (
    <section className="w-full flex items-center justify-center py-12 md:py-24 lg:py-32 bg-gray-10 ">
      <div className="container px-4 md:px-6">
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tighter">
            Simplify everyday{" "}
            <span className="bg-gradient-to-r from-pink-500 to-purple-500 bg-clip-text text-transparent">
              business tasks
            </span>
          </h2>
          <p className="text-gray-600 md:text-lg max-w-[800px] mx-auto">
            Because you'd probably be a little confused if we suggested you complicate your everyday business tasks instead.
          </p>
        </div>

        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {features.map((feature, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="relative group"
            >
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-pink-500/20 to-purple-500/20 blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <div className="relative p-6 space-y-4 bg-white/5  rounded-2xl border shadow-md  border-white/10 hover:border-white/20 transition-colors">
                <div className={`${feature.bgColor} ${feature.color} w-12 h-12 rounded-lg flex items-center justify-center`}>
                  {feature.icon}
                </div>
                <h3 className="text-xl font-semibold text-black">
                  {feature.title}
                </h3>
                <p className="text-gray-400">
                  {feature.description}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

