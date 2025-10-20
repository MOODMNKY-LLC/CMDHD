"use client";

import * as React from "react";
import Link from "next/link";
import { usePathname, useSearchParams } from "next/navigation";

import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarRail,
} from "@/components/ui/sidebar";
import { TeamSwitcher } from "@/components/team-switcher";
import { NavUser } from "@/components/nav-user";
import { 
  getGroupsForSection, 
  type TrainingSection 
} from "@/lib/data/training-content";

interface TrainingSidebarProps {
  user?: any;
}

export function TrainingSidebar({ user }: TrainingSidebarProps) {
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const currentModule = searchParams.get("module");
  
  // Default to "presentation" section
  const [activeSection, setActiveSection] = React.useState<TrainingSection>("presentation");
  
  // Get groups based on active section
  const groups = getGroupsForSection(activeSection);

  return (
    <Sidebar collapsible="icon" variant="inset">
      <SidebarHeader>
        <TeamSwitcher 
          activeSection={activeSection} 
          onSectionChange={setActiveSection} 
        />
      </SidebarHeader>
      
      <SidebarContent>
        {groups.map((group) => (
          <SidebarGroup key={group.title}>
            <SidebarGroupLabel>
              <group.icon className="mr-2 h-4 w-4" />
              {group.title}
            </SidebarGroupLabel>
            <SidebarGroupContent>
              <SidebarMenu>
                {group.items.map((item) => {
                  // Check if this item is active
                  const isActive = 
                    pathname === item.href || 
                    (currentModule && item.href.includes(currentModule));
                  
                  // Check if it's an external link
                  const isExternal = item.href.startsWith("http");
                  
                  return (
                    <SidebarMenuItem key={item.label}>
                      <SidebarMenuButton 
                        asChild 
                        isActive={isActive}
                        tooltip={item.label}
                      >
                        {isExternal ? (
                          <a 
                            href={item.href} 
                            target="_blank" 
                            rel="noopener noreferrer"
                          >
                            <span>{item.label}</span>
                          </a>
                        ) : (
                          <Link href={item.href}>
                            <span>{item.label}</span>
                          </Link>
                        )}
                      </SidebarMenuButton>
                    </SidebarMenuItem>
                  );
                })}
              </SidebarMenu>
            </SidebarGroupContent>
          </SidebarGroup>
        ))}
      </SidebarContent>
      
      <SidebarFooter>
        <NavUser user={user} />
      </SidebarFooter>
      
      <SidebarRail />
    </Sidebar>
  );
}

