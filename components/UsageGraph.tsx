"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { ResponsiveContainer, LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from "recharts"
import { ChartContainer, ChartTooltip, ChartTooltipContent } from "@/components/ui/chart"

const data = [
  { name: "Jan", users: 4000, tasks: 2400 },
  { name: "Feb", users: 3000, tasks: 1398 },
  { name: "Mar", users: 2000, tasks: 9800 },
  { name: "Apr", users: 2780, tasks: 3908 },
  { name: "May", users: 1890, tasks: 4800 },
  { name: "Jun", users: 2390, tasks: 3800 },
  { name: "Jul", users: 3490, tasks: 4300 },
]

export default function UsageGraph() {
  return (
    <section className="w-full items-center justify-center flex overflow-hidden   py-12 md:py-24 lg:py-32 bg-gray-100">
      <div className="container px-4 md:px-6">
        <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl text-center mb-12">Platform Usage</h2>
        <Card className="w-full max-w-4xl mx-auto">
          <CardHeader>
            <CardTitle>User and Task Growth</CardTitle>
            <CardDescription>Monthly active users and completed tasks</CardDescription>
          </CardHeader>
          <CardContent>
            <ChartContainer
              config={{
                users: {
                  label: "Active Users",
                  color: "hsl(var(--chart-1))",
                },
                tasks: {
                  label: "Completed Tasks",
                  color: "hsl(var(--chart-2))",
                },
              }}
              className="h-[400px]"
            >
              <ResponsiveContainer width="100%" height="100%">
                <LineChart data={data}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="name" />
                  <YAxis />
                  <ChartTooltip content={<ChartTooltipContent />} />
                  <Legend />
                  <Line type="monotone" dataKey="users" stroke="var(--color-users)" activeDot={{ r: 8 }} />
                  <Line type="monotone" dataKey="tasks" stroke="var(--color-tasks)" />
                </LineChart>
              </ResponsiveContainer>
            </ChartContainer>
          </CardContent>
        </Card>
      </div>
    </section>
  )
}

