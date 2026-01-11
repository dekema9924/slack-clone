
import ChatHeader from '@/components/layout/ChatHeader'
import Sidebar from '@/components/layout/Sidebar'
import React from 'react'


export default function layout({ children }: { children: React.ReactNode }) {
    return (
        <div className='bg-blue-400 min-h-screen flex'>
            {/* <ChatHeader /> */}

            <Sidebar />
            {children}

        </div>
    )
}
