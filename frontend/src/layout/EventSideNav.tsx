'use client'

import {useEffect, useState} from 'react'
import {Button} from "@/components/ui/button"
import {Input} from "@/components/ui/input"
import {ScrollArea} from "@/components/ui/scroll-area"
import {Select, SelectContent, SelectItem, SelectTrigger, SelectValue} from "@/components/ui/select"
import {CalendarIcon, FilterIcon} from 'lucide-react'
import {useCollapse} from '@/components/collapse-provider'

type Event = {
    id: string
    title: string
    date: string
    type: string
}

const eventTypes = [
    {value: "all", label: "所有分類"},
    {value: "hygiene", label: "衛生用品"},
    {value: "food", label: "食物"},
    {value: "clothing", label: "衣服"},
    {value: "other", label: "其他"},
]

export default function EventSidenav({events}: { events: Event[] }) {
    const [filteredEvents, setFilteredEvents] = useState<Event[]>(events)
    const [searchTerm, setSearchTerm] = useState('')
    const [selectedType, setSelectedType] = useState('all')
    const {collapsed} = useCollapse();

    useEffect(() => {
        const filtered = events.filter(event =>
            event.title.toLowerCase().includes(searchTerm.toLowerCase()) &&
            (selectedType === 'all' || event.type === selectedType)
        )
        setFilteredEvents(filtered)
    }, [searchTerm, selectedType, events])

    return (
        <div
            className={`fixed right-0 ${collapsed ? 'w-6' : 'w-64'} h-screen bg-background border-l border-border flex flex-col shadow-lg transition-all duration-300`}>
            <div className="p-4 border-border flex items-center justify-between">
                {!collapsed && <h2 className="text-lg font-semibold mr-4 mt-4">即將到來</h2>}
            </div>
            {!collapsed && (
                <div className="w-60 self-center">
                    <Input
                        placeholder="搜尋..."
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                        className="mb-2"
                    />
                    <Select value={selectedType} onValueChange={setSelectedType}>
                        <SelectTrigger>
                            <SelectValue placeholder="Filter by type"/>
                        </SelectTrigger>
                        <SelectContent>
                            {eventTypes.map((type) => (
                                <SelectItem key={type.value} value={type.value}>
                                    {type.label}
                                </SelectItem>
                            ))}
                        </SelectContent>
                    </Select>
                </div>
            )}
            {!collapsed && (
                <ScrollArea className="flex-grow">
                    {filteredEvents.map((event) => (
                        <div key={event.id} className="p-4 border-b border-border">
                            <h3 className="font-medium">{event.title}</h3>
                            <p className="text-sm text-muted-foreground flex items-center mt-1">
                                <CalendarIcon className="w-4 h-4 mr-1"/>
                                {event.date}
                            </p>
                            <p className="text-sm flex items-center mt-1">
                                <FilterIcon className="w-4 h-4 mr-1"/>
                                {eventTypes.find(type => type.value === event.type)?.label || event.type}
                            </p>
                        </div>
                    ))}
                </ScrollArea>
            )}
            {!collapsed && (
                <div className="p-4 border-t border-border text-accent-foreground">
                    <Button variant='outline' className='text-card-foreground w-full'>更多功能開發中</Button>
                </div>
            )}
        </div>
    )
}