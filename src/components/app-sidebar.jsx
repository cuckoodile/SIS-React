import * as React from "react"
import {
  AudioWaveform,
  Command,
  GalleryVerticalEnd,
  SquareTerminal,
  Home,
  NotebookText
} from "lucide-react"

import { NavMain } from "@/components/nav-main"
import { NavProjects } from "@/components/nav-projects"
import { NavUser } from "@/components/nav-user"
import { TeamSwitcher } from "@/components/team-switcher"
import {
  Sidebar,
  SidebarHeader,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarFooter,
  SidebarRail,
} from "@/components/ui/sidebar"

// This is sample data.
const data = {
  user: {
    name: "shadcn",
    email: "m@example.com",
    avatar: "/avatars/shadcn.jpg",
  },
  teams: [
    {
      name: "Acme Inc",
      logo: GalleryVerticalEnd,
      plan: "Enterprise",
    },
    {
      name: "Acme Corp.",
      logo: AudioWaveform,
      plan: "Startup",
    },
    {
      name: "Evil Corp.",
      logo: Command,
      plan: "Free",
    },
  ],
  navMain: [
    {
      id: 1,
      title: "Dashboard",
      url: "/",
      icon: Home,
    },
    {
      id: 2,
      title: "About",
      url: "/about",
      icon: NotebookText,
    },
    {
      id: 3,
      title: "Contact",
      url: "/contact",
      icon: SquareTerminal,
    },
  ],
}

export function AppSidebar({
  ...props
}) {
  return (
    (<Sidebar collapsible="icon" {...props}>
      <SidebarHeader>
        <TeamSwitcher teams={data.teams} />
      </SidebarHeader>
      <SidebarContent className="list-none px-2">
        {/* <NavMain items={data.navMain} /> */}
        {data.navMain.map((page) => (
          <SidebarMenuItem key={page.title}>
            <SidebarMenuButton asChild tooltip={page.title}>
              <a href={page.url}>
                <page.icon />
                <span>{page.title}</span>
              </a>
            </SidebarMenuButton>
          </SidebarMenuItem>
        ))}
      </SidebarContent>
      <SidebarFooter>
        <NavUser user={data.user} />
      </SidebarFooter>
      <SidebarRail />
    </Sidebar>)
  );
}
