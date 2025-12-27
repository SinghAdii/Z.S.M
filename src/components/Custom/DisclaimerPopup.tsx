"use client"

import React from "react"
import { Card, CardContent, CardFooter, CardTitle, CardDescription } from "@/components/ui/card"
import { Button } from "@/components/ui/button"

export default function DisclaimerPopup() {
  const [open, setOpen] = React.useState(true)

  if (!open) return null

  return (
    <div className="fixed right-4 bottom-6 z-50">
      <Card className="w-80 md:w-96 bg-sky-100 text-slate-900 shadow-lg ring-1 ring-sky-200">
        <CardContent>
          <div className="flex items-start gap-3">
            <div className="text-2xl">⚠️</div>
            <div>
              <CardTitle>Site Under Maintenance</CardTitle>
              <CardDescription>
                Our website is currently under maintenance and redeployment. Some
                content may be temporary - please contact us for clarifications.
              </CardDescription>
            </div>
          </div>
        </CardContent>
        <CardFooter className="justify-end gap-2">
          <Button variant="ghost" size="sm" onClick={() => setOpen(false)}>
            Dismiss
          </Button>
          <Button
            size="sm"
            onClick={() => {
              const el = document.getElementById("contact-section")
              if (el) el.scrollIntoView({ behavior: "smooth" })
            }}
          >
            Contact Us
          </Button>
        </CardFooter>
      </Card>
    </div>
  )
}
