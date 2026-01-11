import { Hash } from "lucide-react";
import { Dispatch, SetStateAction } from "react";

interface ChannelItemProps {
    name: string;
    unread: any;
    activeChannel: any
    setActiveChannel: any
    id: any
}


function ChannelItem({ name, id, unread, setActiveChannel, activeChannel }: ChannelItemProps) {
    return (
        <button className="flex items-center justify-between w-full px-2 py-1 hover:bg-white/10 rounded group text-sm">
            <div onClick={() => setActiveChannel()} className="flex items-center gap-2 flex-1 min-w-0">
                <Hash className="w-4 h-4 shrink-0 text-gray-400 group-hover:text-white" />
                <p className={`${activeChannel === id ? "px-3 rounded-md bg-purple-400" : ""}`}>
                    <span className={`truncate ${unread ? 'text-white font-semibold' : 'text-gray-300 group-hover:text-white'}`}>
                        {name}
                    </span>
                </p>
            </div>
            {unread && (
                <span className="text-xs bg-white text-[#1a0d29] font-semibold px-1.5 py-0.5 rounded ml-2 flex-shrink">
                    {unread}
                </span>
            )}
        </button>
    );
}


export default ChannelItem