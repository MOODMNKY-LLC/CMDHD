"use client";

import * as React from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";
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
  useSidebar,
} from "@/components/ui/sidebar";
import { GraduationCap, ChevronRight } from "lucide-react";
import { trainingData } from "@/lib/data";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";

export function TrainingSidebar() {
  const pathname = usePathname();
  const { open } = useSidebar();

  // Calculate progress (mock for now - can be enhanced with actual completion tracking)
  const totalItems = trainingData.reduce((sum, section) => sum + section.items.length, 0);
  const completedItems = 0; // This would come from user progress tracking
  const progressPercentage = (completedItems / totalItems) * 100;

  return (
    <Sidebar collapsible="icon" className="border-r">
      <SidebarHeader className="border-b border-sidebar-border">
        <div className="flex items-center gap-2 px-2 py-2">
          <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-primary text-primary-foreground">
            <GraduationCap className="h-5 w-5" />
          </div>
          {open && (
            <div className="flex flex-col">
              <span className="text-sm font-semibold">CMDHD Training</span>
              <span className="text-xs text-muted-foreground">Professional Boundaries</span>
            </div>
          )}
        </div>
      </SidebarHeader>

      <SidebarContent>
        {trainingData.map((section, sectionIndex) => {
          const SectionIcon = section.icon;

          return (
            <SidebarGroup key={sectionIndex}>
              <SidebarGroupLabel className="text-xs font-semibold">
                <SectionIcon className="h-4 w-4 mr-2" />
                {open && <span>{section.title}</span>}
              </SidebarGroupLabel>
              <SidebarGroupContent>
                <SidebarMenu>
                  {section.items.map((item, itemIndex) => {
                    const isActive = pathname === item.href;

                    return (
                      <SidebarMenuItem key={itemIndex}>
                        <SidebarMenuButton
                          asChild
                          isActive={isActive}
                          tooltip={!open ? item.label : undefined}
                        >
                          <Link href={item.href}>
                            <ChevronRight className="h-4 w-4 opacity-50" />
                            <span>{item.label}</span>
                          </Link>
                        </SidebarMenuButton>
                      </SidebarMenuItem>
                    );
                  })}
                </SidebarMenu>
              </SidebarGroupContent>
            </SidebarGroup>
          );
        })}
      </SidebarContent>

      <SidebarFooter className="border-t border-sidebar-border">
        {open ? (
          <div className="px-4 py-3 space-y-2">
            <div className="flex items-center justify-between text-xs">
              <span className="text-muted-foreground">Training Progress</span>
              <Badge variant="secondary" className="text-xs">
                {completedItems}/{totalItems}
              </Badge>
            </div>
            <Progress value={progressPercentage} className="h-1.5" />
          </div>
        ) : (
          <div className="px-2 py-3 flex justify-center">
            <Badge variant="secondary" className="text-xs">
              {completedItems}/{totalItems}
            </Badge>
          </div>
        )}
      </SidebarFooter>

      <SidebarRail />
    </Sidebar>
  );
}

