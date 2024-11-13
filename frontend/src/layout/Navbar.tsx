'use client'

import {Button} from "@/components/ui/button.tsx"
import {Calendar, ChevronLeftIcon, ChevronRightIcon, MapPin, MessageSquareWarning, ScrollText} from 'lucide-react'
import { useCollapse } from '@/components/collapse-provider.tsx';
import {ThemeProvider} from "@/components/theme-provider.tsx";
import {ModeToggle} from "@/components/mode-toggle.tsx";


export default function Navbar() {
    const { collapsed, toggleCollapsed } = useCollapse();

    return (
        <nav className="bg-background border-b">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between h-16">
                    <div className="flex items-center">
                        <span className="font-bold text-xl">物資日曆</span>
                    </div>
                    <div className="flex items-center">
                        <Button variant="ghost" size="icon" className="ml-4">
                            <Calendar className="h-5 w-5"/>
                        </Button>
                        <Button variant="ghost" size="icon" className="ml-4">
                            <ScrollText className="h-5 w-5"/>
                        </Button>
                        <Button variant="ghost" size="icon" className="ml-4">
                            <MessageSquareWarning className="h-5 w-5"/>
                        </Button>
                        <Button variant="ghost" size="icon" className="ml-4">
                            <MapPin className="h-5 w-5"/>
                        </Button>
                        <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
                            <ModeToggle/>
                        </ThemeProvider>
                        <Button variant="ghost" onClick={toggleCollapsed} className={`${collapsed ? 'ml-2' : 'ml-4'}`}>
                            {collapsed ? <ChevronLeftIcon/> : <ChevronRightIcon/>}
                        </Button>
                    </div>
                </div>
            </div>
        </nav>
    )
}