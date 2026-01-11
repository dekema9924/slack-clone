'use client'

import { useState } from 'react';
import {
    MessageSquare,
    Download,
    ChevronDown,
    MoreVertical,
    Bookmark,
    Forward,
    SmilePlus
} from 'lucide-react';


export interface Reaction {
    emoji: string;
    count: number;
}

export interface MessageInterface {
    id: number;
    author: string;
    timestamp: string;
    content: string;
    reactions?: Reaction[];
    replies?: number;
    repliedAt?: string;
    avatar: string;
    images?: string[];
    hasFiles?: boolean;
    fileCount?: number;
}

function Message({ message }: { message: MessageInterface }) {
    const [isHovered, setIsHovered] = useState(false);

    return (
        <div
            className="group relative"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
        >
            <div className="flex gap-3 hover:bg-[#2C2D31] px-4 py-2 -mx-4 rounded">
                {/* Avatar */}
                <img
                    src={message.avatar}
                    alt={message.author}
                    className="w-10 h-10 rounded shrink"
                />

                {/* Message Content */}
                <div className="flex-1 min-w-0">
                    {/* Author and Timestamp */}
                    <div className="flex items-baseline gap-2 mb-1">
                        <span className="text-white font-bold text-sm hover:underline cursor-pointer">
                            {message.author}
                        </span>
                        <span className="text-gray-400 text-xs">
                            {message.timestamp}
                        </span>
                    </div>

                    {/* Message Text */}
                    <p className="text-gray-200 text-sm leading-relaxed mb-2">
                        {message.content}
                    </p>

                    {/* File Attachments Header */}
                    {message.hasFiles && (
                        <div className="flex items-center gap-2 mb-2">
                            <button className="text-gray-400 hover:text-white text-xs flex items-center gap-1">
                                <span>{message.fileCount} files</span>
                                <ChevronDown className="w-3 h-3" />
                            </button>
                            <button className="text-gray-400 hover:text-white text-xs flex items-center gap-1">
                                <Download className="w-3 h-3" />
                                <span>Download all</span>
                            </button>
                        </div>
                    )}

                    {/* Images Grid */}
                    {message.images && (
                        <div className={`grid gap-1 mb-2 ${message.images.length === 2 ? 'grid-cols-2' :
                            message.images.length === 4 ? 'grid-cols-2' : 'grid-cols-1'
                            }`}>
                            {message.images.map((img: string, idx: number) => (
                                <img
                                    key={idx}
                                    src={img}
                                    alt={`Attachment ${idx + 1}`}
                                    className="rounded cursor-pointer hover:opacity-90 w-full h-auto object-cover"
                                    style={{ maxHeight: message.images && message.images.length === 2 ? '350px' : '280px' }}
                                />
                            ))}
                        </div>
                    )}

                    {/* Reactions */}
                    <div className="flex items-center gap-2 mt-2">
                        {message.reactions && message.reactions.map((reaction: Reaction, idx: number) => (
                            <button
                                key={idx}
                                className="flex items-center gap-1 px-2 py-0.5 bg-[#2C2D31] hover:bg-[#35363B] rounded-full border border-gray-600"
                            >
                                <span className="text-sm">{reaction.emoji}</span>
                                <span className="text-gray-300 text-xs font-semibold">{reaction.count}</span>
                            </button>
                        ))}
                        <button className="p-1 hover:bg-[#2C2D31] rounded">
                            <SmilePlus className="w-4 h-4 text-gray-400" />
                        </button>
                    </div>

                    {/* Reply Count */}
                    {message.replies && (
                        <button className="flex items-center gap-2 mt-2 text-blue-400 hover:underline text-xs">
                            <MessageSquare className="w-4 h-4" />
                            <span>{message.replies} reply</span>
                            <span className="text-gray-400">{message.repliedAt}</span>
                        </button>
                    )}
                </div>

                {/* Hover Actions */}
                {isHovered && (
                    <div className="absolute top-0 right-4 flex items-center gap-1 bg-[#2C2D31] border border-gray-600 rounded shadow-lg px-1 py-1">
                        <button className="p-1.5 hover:bg-[#35363B] rounded">
                            <SmilePlus className="w-4 h-4 text-gray-300" />
                        </button>
                        <button className="p-1.5 hover:bg-[#35363B] rounded">
                            <MessageSquare className="w-4 h-4 text-gray-300" />
                        </button>
                        <button className="p-1.5 hover:bg-[#35363B] rounded">
                            <Bookmark className="w-4 h-4 text-gray-300" />
                        </button>
                        <button className="p-1.5 hover:bg-[#35363B] rounded">
                            <Forward className="w-4 h-4 text-gray-300" />
                        </button>
                        <button className="p-1.5 hover:bg-[#35363B] rounded">
                            <MoreVertical className="w-4 h-4 text-gray-300" />
                        </button>
                    </div>
                )}
            </div>
        </div>
    );
}


export default Message