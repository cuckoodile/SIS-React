// Shadcn components
import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar"
import { AppSidebar } from "@/components/app-sidebar"
import {
  ArrowBigRightDash,
  ArrowBigLeftDash
} from "lucide-react"
// import { ThemeSwitcher } from "@/components/custom-switcher"


import React, { useState, useEffect, useRef } from "react"
import { useQuery } from "@tanstack/react-query"
import { Outlet, RouterProvider } from "react-router-dom"
import { getAllProductAPI } from "./api"


function App() {
  const [open, setOpen] = React.useState(true)
  const [isDarkMode, setIsDarkMode] = useState(false)
  const handleToggle = (mode) => { setIsDarkMode(mode) }
  const triggerLabelRef = useRef(null)

  const {data: products, isLoading} = useQuery ({
    queryKey: ['products'],
    queryFn: getAllProductAPI
  })


  return (
    <SidebarProvider open={open} onOpenChange={setOpen} >
      <main className="dark bg-background w-screen h-screen flex text-foreground">
        <AppSidebar   />
        <aside className="size-full">
          {/* Header content */}
          <header className="w-full p-2 border-b-2 flex items-center gap-2">
            <SidebarTrigger currentSate={open} labelIcon={open? ArrowBigLeftDash : ArrowBigRightDash} label={open ? 'Close' : 'Open'} className="bg-primary text-primary-foreground hover:bg-secondary hover:text-secondary-foreground" />
            {/* <ThemeSwitcher onToggle={handleToggle} /> */}
          </header>
          {/* Main content */}
          <section className="p-4">
            <Outlet />
          </section>
        </aside>
      </main>
    </SidebarProvider>
  )
}

export default App