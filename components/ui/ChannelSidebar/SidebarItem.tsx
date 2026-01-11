

function SidebarItem({ icon, label, badge, isNew, emoji }: { icon: React.ReactNode; label: string; badge?: string | number; isNew?: boolean; emoji?: any }) {
    return (
        <button className="flex items-center justify-between w-full px-2 py-1 hover:bg-white/10 rounded group text-sm">
            <div className="flex items-center gap-2">
                <span className={emoji ? "" : "text-gray-400 group-hover:text-white"}>{icon}</span>
                <span className="group-hover:text-white">{label}</span>
            </div>
            {badge && (
                <span className={`text-xs px-1.5 py-0.5 rounded ${isNew ? 'bg-blue-600 text-white' : 'bg-white text-[#1a0d29] font-semibold'
                    }`}>
                    {badge}
                </span>
            )}
        </button>
    );
}


export default SidebarItem
