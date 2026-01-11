import React from 'react';

export default function FeatureSection() {
    return (
        <div className="w-full bg-black text-white">
            {/* Gamepad Header */}
            <div className="flex justify-center pt-20">
                <div className="w-32 h-32 bg-linear-to-br from-purple-300 to-purple-400 rounded-3xl transform rotate-12 shadow-2xl">
                    <div className="absolute inset-0 flex items-center justify-center">
                        {/* D-pad */}
                        <div className="absolute left-8 top-12">
                            <div className="relative w-8 h-8">
                                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-3 h-4 bg-purple-800 rounded-t"></div>
                                <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-3 h-4 bg-purple-800 rounded-b"></div>
                                <div className="absolute left-0 top-1/2 -translate-y-1/2 w-4 h-3 bg-purple-800 rounded-l"></div>
                                <div className="absolute right-0 top-1/2 -translate-y-1/2 w-4 h-3 bg-purple-800 rounded-r"></div>
                            </div>
                        </div>

                        {/* Buttons */}
                        <div className="absolute right-8 top-12">
                            <div className="relative w-8 h-8">
                                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-3 h-3 bg-purple-800 rounded-full"></div>
                                <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-3 h-3 bg-purple-800 rounded-full"></div>
                                <div className="absolute left-0 top-1/2 -translate-y-1/2 w-3 h-3 bg-purple-800 rounded-full"></div>
                                <div className="absolute right-0 top-1/2 -translate-y-1/2 w-3 h-3 bg-purple-800 rounded-full"></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Hero Section */}
            <div className="max-w-4xl mx-auto text-center px-6 py-20">
                <h1 className="text-5xl md:text-6xl font-black mb-8 leading-tight">
                    A PLATFORM OF<br />POSSIBILITIES
                </h1>
                <p className="text-xl text-gray-300 max-w-2xl mx-auto">
                    Whether you're launching your team or streamlining your workflow, Slax offers solutions to connect thousands of professionals.
                </p>
            </div>

            {/* Keep Players Engaged Section */}
            <div className="max-w-7xl mx-auto px-6 py-20">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                    {/* Left Content */}
                    <div>
                        <h2 className="text-5xl md:text-6xl font-black mb-6 leading-tight">
                            KEEP TEAMS<br />CONNECTED
                        </h2>
                        <p className="text-lg text-gray-300 mb-8 leading-relaxed">
                            Power team collaboration and enhance productivity by integrating Slax-powered communication features directly in your workspace.
                        </p>
                        <button className="bg-white text-black px-8 py-3 rounded-full font-bold hover:bg-gray-200 transition-colors">
                            Learn More
                        </button>
                    </div>

                    {/* Right Image - Chat Overlay Mockup */}
                    <div className="relative">
                        <div className="bg-linear-to-br from-gray-800 to-gray-900 rounded-3xl overflow-hidden shadow-2xl">
                            {/* Game background */}
                            <div className="aspect-video bg-linear-to-br from-orange-900/50 to-gray-800 relative">
                                {/* Discord Chat Overlay */}
                                <div className="absolute top-4 right-4 w-72 bg-[#2f3136] rounded-lg shadow-2xl overflow-hidden">
                                    {/* Chat Messages */}
                                    <div className="p-4 space-y-3">
                                        <ChatMessage
                                            avatar="bg-purple-500"
                                            name="Loky"
                                            time="10:04 AM"
                                            message="free to hang tm"
                                        />
                                        <ChatMessage
                                            avatar="bg-pink-500"
                                            name="Rose"
                                            time="10:03 AM"
                                            message="oo maybe"
                                        />
                                        <ChatMessage
                                            avatar="bg-purple-500"
                                            name="Loky"
                                            time="10:05 AM"
                                            message="cool check in later"
                                        />
                                        <ChatMessage
                                            avatar="bg-purple-500"
                                            name="Loky"
                                            time="Now"
                                            message="wanna game"
                                            isOnline
                                        />
                                    </div>

                                    {/* Input */}
                                    <div className="px-4 pb-4">
                                        <div className="bg-[#40444b] rounded-lg px-3 py-2 text-gray-400 text-sm">
                                            Message @Loky
                                        </div>
                                    </div>
                                </div>

                                {/* In-game chat messages */}
                                <div className="absolute bottom-4 left-4 space-y-2">
                                    <GameChatMessage name="Rose" message="lol that's funny" nameColor="text-pink-400" />
                                    <GameChatMessage name="To Rose" message="free to hang tm?" nameColor="text-blue-400" />
                                    <GameChatMessage name="Rose" message="oo maybe" nameColor="text-pink-400" />
                                    <GameChatMessage name="To Rose" message="cool check in later" nameColor="text-blue-400" />
                                    <GameChatMessage name="To Rose" message="wanna game" nameColor="text-blue-400" />
                                    <div className="bg-green-600/80 backdrop-blur-sm px-3 py-2 rounded text-white text-sm font-semibold">
                                        [DM] Rose:
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Build Your Community Section */}
            <div className="max-w-7xl mx-auto px-6 py-20">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                    {/* Left Image - Game Interface Mockup */}
                    <div className="order-2 lg:order-1">
                        <div className="bg-linear-to-br from-blue-900 to-blue-950 rounded-3xl overflow-hidden shadow-2xl p-8">
                            {/* Game Interface */}
                            <div className="bg-purple-800/30 rounded-t-xl p-4 mb-4">
                                <div className="flex items-center gap-3 mb-4">
                                    <div className="w-8 h-8 bg-white/10 rounded-full"></div>
                                    <span className="text-white font-semibold">hangout</span>
                                    <span className="text-gray-400 text-sm">playing</span>
                                    <span className="text-blue-400 text-sm">Port Party</span>
                                </div>
                            </div>

                            {/* Game View */}
                            <div className="aspect-video bg-linear-to-br from-purple-600 via-blue-500 to-cyan-400 rounded-lg relative overflow-hidden mb-4">
                                {/* Simplified game platform visual */}
                                <div className="absolute inset-0 flex items-center justify-center">
                                    <div className="w-full h-full relative">
                                        {/* Platform elements */}
                                        <div className="absolute bottom-1/4 left-1/4 w-32 h-2 bg-cyan-300 transform -skew-y-12"></div>
                                        <div className="absolute bottom-1/3 right-1/4 w-24 h-2 bg-purple-400 transform skew-y-12"></div>
                                    </div>
                                </div>
                            </div>

                            {/* Player Cards */}
                            <div className="grid grid-cols-4 gap-2">
                                <PlayerCard color="bg-purple-600" />
                                <PlayerCard color="bg-blue-500" />
                                <PlayerCard color="bg-pink-500" />
                                <PlayerCard color="bg-orange-500" />
                            </div>
                        </div>
                    </div>

                    {/* Right Content */}
                    <div className="order-1 lg:order-2">
                        <h2 className="text-5xl md:text-6xl font-black mb-6 leading-tight">
                            BUILD YOUR<br />WORKSPACE
                        </h2>
                        <p className="text-lg text-gray-300 mb-8 leading-relaxed">
                            Slax workspaces are more important than ever for connecting teams with your organization. Explore our playbook to build, engage, grow, and support your workspace.
                        </p>
                        <button className="bg-white text-black px-8 py-3 rounded-full font-bold hover:bg-gray-200 transition-colors">
                            Learn More
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}

function ChatMessage({ avatar, name, time, message, isOnline }: {
    avatar: string;
    name: string;
    time: string;
    message: string;
    isOnline?: boolean;
}) {
    return (
        <div className="flex gap-3">
            <div className={`w-8 h-8 ${avatar} rounded-full shrink relative`}>
                {isOnline && (
                    <div className="absolute -bottom-0.5 -right-0.5 w-3 h-3 bg-green-500 border-2 border-[#2f3136] rounded-full"></div>
                )}
            </div>
            <div className="flex-1 min-w-0">
                <div className="flex items-baseline gap-2 mb-1">
                    <span className="text-white font-semibold text-sm">{name}</span>
                    <span className="text-gray-400 text-xs">{time}</span>
                </div>
                <p className="text-gray-300 text-sm">{message}</p>
            </div>
        </div>
    );
}

function GameChatMessage({ name, message, nameColor }: {
    name: string;
    message: string;
    nameColor: string;
}) {
    return (
        <div className="bg-black/50 backdrop-blur-sm px-3 py-1.5 rounded text-sm">
            <span className={`${nameColor} font-semibold`}>{name}: </span>
            <span className="text-white">{message}</span>
        </div>
    );
}

function PlayerCard({ color }: { color: string }) {
    return (
        <div className={`${color} aspect-square rounded-lg flex items-center justify-center`}>
            <div className="w-8 h-8 bg-white/30 rounded-full"></div>
        </div>
    );
}