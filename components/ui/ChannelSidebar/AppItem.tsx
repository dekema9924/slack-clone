

interface AppItemProps {
    name: string;
    unread: number | boolean;
    icon: React.ReactNode;
}

function AppItem({ name, unread, icon }: AppItemProps) {
    return (
        <button className="flex items-center justify-between w-full px-2 py-1 hover:bg-white/10 rounded group text-sm">
            <div className="flex items-center gap-2 flex-1 min-w-0">
                <span className="text-base flex">{icon}</span>
                <span className={`truncate ${unread ? 'text-white font-semibold' : 'text-gray-300 group-hover:text-white'}`}>
                    {name}
                </span>
            </div>
            {unread && (
                <span className="text-xs bg-white text-[#1a0d29] font-semibold px-1.5 py-0.5 rounded ml-2 flex-shrink-0">
                    {unread}
                </span>
            )}
        </button>
    );
}

export default AppItem