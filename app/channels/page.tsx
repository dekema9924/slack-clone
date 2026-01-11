import ChatContent from '@/components/layout/ChatContent';
import {
    Star,
    Hash,
    Users,
    Bell,
    Search,
    MoreVertical,
    Pin,
    FileText
} from 'lucide-react';

export default function GeneralChatpage() {
    return (
        <main className="w-full h-screen bg-[#1F2227] flex flex-col">
            {/* Top Header */}
            <div className="bg-[#2C2D31] border-b border-gray-700 px-4 py-2 flex items-center justify-between">
                {/* Left Section */}
                <div className="flex items-center gap-3">
                    <button className="p-1.5 hover:bg-white/10 rounded">
                        <Star className="w-5 h-5 text-gray-300" />
                    </button>
                    <div className="flex items-center gap-2">
                        <Hash className="w-5 h-5 text-gray-400" />
                        <h1 className="text-white font-bold text-lg">general</h1>
                    </div>
                </div>

                {/* Right Section */}
                <div className="flex items-center gap-2">
                    <button className="p-2 hover:bg-white/10 rounded flex items-center gap-2 text-gray-300">
                        <Users className="w-5 h-5" />
                        <span className="text-sm font-semibold">10,899</span>
                    </button>
                    <button className="p-2 hover:bg-white/10 rounded">
                        <Bell className="w-5 h-5 text-gray-300" />
                    </button>
                    <button className="p-2 hover:bg-white/10 rounded">
                        <Search className="w-5 h-5 text-gray-300" />
                    </button>
                    <button className="p-2 hover:bg-white/10 rounded">
                        <MoreVertical className="w-5 h-5 text-gray-300" />
                    </button>
                </div>
            </div>

            {/* Sub Navigation */}
            <div className="bg-[#2C2D31] border-b border-gray-700 px-4 py-2 flex items-center gap-4">
                <button className="flex items-center gap-2 px-3 py-1.5 text-white font-semibold border-b-2 border-blue-500">
                    <span className="text-sm">💬</span>
                    <span className="text-sm">Messages</span>
                </button>
                <button className="flex items-center gap-2 px-3 py-1.5 text-gray-400 hover:text-white text-sm">
                    <Pin className="w-4 h-4" />
                    <span>Pins</span>
                </button>
                {/* <button className="flex items-center gap-2 px-3 py-1.5 text-gray-400 hover:text-white text-sm">
                    <FileText className="w-4 h-4" />
                    <span>Files</span>
                </button> */}
                {/* <button className="px-3 py-1.5 text-gray-400 hover:text-white text-2xl leading-none">
                    +
                </button> */}
            </div>


            {/* Chat Content Area */}
            <div className="flex-1 overflow-y-auto px-4 py-4">
                {/* Chat messages will go here */}
                <ChatContent />
            </div>
        </main>
    );
}