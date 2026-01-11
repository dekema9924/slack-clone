'use client'
import { useState } from 'react';
import SidebarItem from '../ui/ChannelSidebar/SidebarItem';
import ChannelItem from '../ui/ChannelSidebar/channelItem';
import {
    ChevronDown,
    Settings,
    SquarePen,
    Smile,
    MessageSquare,
    Headphones,
    Send,
    BookOpen,
    ChevronRight,
    Plus,
} from 'lucide-react';

export default function WorkspaceSidebar() {
    const [channelsOpen, setChannelsOpen] = useState(true);
    const [dmOpen, setDmOpen] = useState(false);
    const [activeChannel, setActiveChannel] = useState<null | number>(null)

    console.log(activeChannel)

    const channels = [
        { name: 'career-secured-the-bag', unread: 1, id: 1 },
        { name: 'career-secured-the...', unread: 1, id: 2 },
        { name: 'product-announceme...', unread: 9, id: 3 },
        { name: 'random', unread: 2, id: 4 },
        { name: 'academic-coding-help', unread: null, id: 5 },

    ];



    return (
        <div className="w-64 bg-[#1a0d29] text-gray-300 h-screen flex flex-col">
            {/* Workspace Header */}
            <div className="p-3 border-b border-gray-700/50 flex items-center justify-between">
                <button className="flex items-center gap-2 hover:bg-white/10 rounded px-2 py-1 flex-1">
                    <span className="text-white font-bold truncate">The Color...</span>
                    <ChevronDown className="w-4 h-4 shrink-0" />
                </button>
                <button className="p-1.5 hover:bg-white/10 rounded ml-1">
                    <Settings className="w-4 h-4" />
                </button>
                <button className="p-1.5 hover:bg-white/10 rounded ml-1">
                    <SquarePen className="w-4 h-4" />
                </button>
            </div>

            {/* Scrollable Content */}
            <div className="flex-1 overflow-y-auto">
                {/* Navigation Items */}
                <div className="px-2 py-3 space-y-0.5">
                    <SidebarItem icon={<Smile size={18} />} label="Get started" />
                    <SidebarItem icon={<MessageSquare size={18} />} label="Threads" />
                    <SidebarItem icon={<Headphones size={18} />} label="Huddles" />
                    <SidebarItem icon={<Send size={18} />} label="Drafts & sent" badge={1} />
                    <SidebarItem icon={<BookOpen size={18} />} label="Directories" badge="New" isNew />
                    <SidebarItem icon={<span className="text-base">👋</span>} label="Happy New Year!" emoji />
                </div>



                {/* Channels Section */}
                <div className="px-2 py-2 border-t border-gray-700/50">
                    <button
                        onClick={() => setChannelsOpen(!channelsOpen)}
                        className="flex items-center justify-between w-full px-2 py-1 hover:bg-white/10 rounded group"
                    >
                        <div className="flex items-center gap-2">
                            {channelsOpen ? <ChevronDown className="w-4 h-4" /> : <ChevronRight className="w-4 h-4" />}
                            <span className="font-semibold text-sm">Channels</span>
                        </div>
                    </button>

                    {channelsOpen && (
                        <div className="mt-1 space-y-0.5">
                            {channels.map((channel) => (
                                <ChannelItem
                                    activeChannel={activeChannel}
                                    setActiveChannel={() => setActiveChannel(channel.id)}
                                    key={channel.id}
                                    id={channel.id}
                                    name={channel.name}
                                    unread={channel.unread}
                                />
                            ))}
                            <button className="flex items-center gap-2 px-2 py-1 hover:bg-white/10 rounded w-full text-sm text-gray-400 hover:text-white">
                                <Plus className="w-4 h-4" />
                                <span>Add channels</span>
                            </button>
                        </div>
                    )}
                </div>

                {/* Direct Messages Section */}
                <div className="px-2 py-2 border-t border-gray-700/50">
                    <button
                        onClick={() => setDmOpen(!dmOpen)}
                        className="flex items-center justify-between w-full px-2 py-1 hover:bg-white/10 rounded"
                    >
                        <div className="flex items-center gap-2">
                            {dmOpen ? <ChevronDown className="w-4 h-4" /> : <ChevronRight className="w-4 h-4" />}
                            <span className="font-semibold text-sm">Direct messages</span>
                        </div>
                    </button>
                </div>
            </div>
        </div>
    );
}