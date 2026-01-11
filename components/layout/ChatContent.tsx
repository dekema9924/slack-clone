

import Message from '../ui/chat/Message';
import { ChevronDown } from 'lucide-react';
import RichTextEditor from '../ui/chat/RichTextEditor';

export default function ChatContent() {
    const messages = [
        {
            id: 1,
            author: 'David Zekanna Akpunku',
            timestamp: '5:22 PM',
            content: 'Hey guy guys I\'m on the flight back to Dallas, I just wanna say a big thank you to colorstack for the opportunity to be at renderATL. It was an amazzzing experience!!',
            reactions: [{ emoji: '❤️', count: 3 }],
            replies: 1,
            repliedAt: '7 months ago',
            avatar: 'https://placehold.co/40x40/4A5568/FFF?text=DZ'
        },
        {
            id: 2,
            author: 'David Zekanna Akpunku',
            timestamp: '5:23 PM',
            content: 'Big thanks for the opportunity 🙏🏿🙏🏿',
            images: [
                'https://placehold.co/280x280/3B82F6/FFF?text=RenderATL+1',
                'https://placehold.co/280x280/EC4899/FFF?text=RenderATL+2',
                'https://placehold.co/280x280/F59E0B/FFF?text=RenderATL+3',
                'https://placehold.co/280x280/10B981/FFF?text=RenderATL+4'
            ],
            reactions: [{ emoji: '❤️', count: 4 }],
            hasFiles: true,
            fileCount: 4,
            avatar: 'https://placehold.co/40x40/4A5568/FFF?text=DZ'
        },
        {
            id: 3,
            author: 'Mekides Belle',
            timestamp: '7:45 AM',
            content: 'Thank you colorstack!',
            images: [
                'https://placehold.co/350x350/8B5CF6/FFF?text=Photo+1',
                'https://placehold.co/350x350/06B6D4/FFF?text=Photo+2'
            ],
            hasFiles: true,
            fileCount: 4,
            avatar: 'https://placehold.co/40x40/4A5568/FFF?text=MB'
        }
    ];
    return (
        <div className="flex-1 overflow-y-auto bg-[#1F2227] text-white">
            {/* Date Divider */}
            <div className="flex items-center justify-center py-4">
                <button className="px-4 py-1 bg-[#2C2D31] text-white text-sm rounded-full border border-gray-600 hover:bg-[#35363B] flex items-center gap-2">
                    June 13th, 2025
                    <ChevronDown className="w-4 h-4" />
                </button>
            </div>

            {/* Messages */}
            <div className="px-4 space-y-4">
                {messages.map((message) => (
                    <Message key={message.id} message={message} />
                ))}
            </div>

            {/* Date Divider */}
            <div className="flex items-center justify-center py-4">
                <button className="px-4 py-1 bg-[#2C2D31] text-white text-sm rounded-full border border-gray-600 hover:bg-[#35363B] flex items-center gap-2">
                    June 14th, 2025
                    <ChevronDown className="w-4 h-4" />
                </button>
            </div>

            {/* More Actions Button */}
            <div className="flex justify-center py-4">
                <button className="px-4 py-2 bg-[#2C2D31] text-white text-sm rounded hover:bg-[#35363B]">
                    More actions
                </button>
            </div>


            {/* //text-editor */}
            <RichTextEditor />
        </div>
    );
}