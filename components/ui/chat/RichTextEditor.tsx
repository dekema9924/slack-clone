'use client'
import React, { useState } from 'react';
import {
    Bold,
    Italic,
    Underline,
    Strikethrough,
    Link,
    List,
    ListOrdered,
    Indent,
    Code,
    FileText,
    Plus,
    Type,
    Smile,
    AtSign,
    Image,
    Mic,
    Send,
    ChevronDown
} from 'lucide-react';

export default function RichTextEditor() {
    const [message, setMessage] = useState('');

    return (
        <div className="w-full bg-[#1F2227] p-4 fixed bottom-0">
            <div className="bg-[#2C2D31] border border-gray-600 rounded-lg overflow-hidden">
                {/* Formatting Toolbar */}
                <div className="flex items-center gap-1 px-3 py-2 border-b border-gray-600">
                    <ToolbarButton icon={<Bold className="w-4 h-4" />} />
                    <ToolbarButton icon={<Italic className="w-4 h-4" />} />
                    <ToolbarButton icon={<Underline className="w-4 h-4" />} />
                    <ToolbarButton icon={<Strikethrough className="w-4 h-4" />} />

                    <div className="w-px h-6 bg-gray-600 mx-1" />

                    <ToolbarButton icon={<Link className="w-4 h-4" />} />
                    <ToolbarButton icon={<List className="w-4 h-4" />} />
                    <ToolbarButton icon={<ListOrdered className="w-4 h-4" />} />
                    <ToolbarButton icon={<Indent className="w-4 h-4" />} />

                    <div className="w-px h-6 bg-gray-600 mx-1" />

                    <ToolbarButton icon={<Code className="w-4 h-4" />} />
                    <ToolbarButton icon={<FileText className="w-4 h-4" />} />
                </div>

                {/* Text Input Area */}
                <div className="relative">
                    <textarea
                        value={message}
                        onChange={(e) => setMessage(e.target.value)}
                        placeholder="Message #conference-renderatl"
                        className="w-full bg-transparent text-gray-200 placeholder-gray-500 px-4 py-3 resize-none focus:outline-none min-h-20"
                        rows={3}
                    />
                </div>

                {/* Bottom Toolbar */}
                <div className="flex items-center justify-between px-3 py-2 border-t border-gray-600">
                    <div className="flex items-center gap-1">
                        <ToolbarButton icon={<Plus className="w-5 h-5" />} />
                        <ToolbarButton icon={<Type className="w-5 h-5" />} label="Aa" />
                        <ToolbarButton icon={<Smile className="w-5 h-5" />} />
                        <ToolbarButton icon={<AtSign className="w-5 h-5" />} />
                        <ToolbarButton icon={<Image className="w-5 h-5" />} />
                        <ToolbarButton icon={<Mic className="w-5 h-5" />} />
                        <ToolbarButton icon={<FileText className="w-5 h-5" />} />
                    </div>

                    <div className="flex items-center gap-2">
                        <button className="p-2 hover:bg-[#35363B] rounded text-gray-300">
                            <Send className="w-5 h-5" />
                        </button>
                        <button className="p-2 hover:bg-[#35363B] rounded text-gray-300">
                            <ChevronDown className="w-4 h-4" />
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}

function ToolbarButton({ icon, label }: { icon?: React.ReactNode; label?: string }) {
    return (
        <button className="p-1.5 hover:bg-[#35363B] rounded text-gray-300 hover:text-white transition-colors">
            {label ? <span className="text-sm font-semibold">{label}</span> : icon}
        </button>
    );
}