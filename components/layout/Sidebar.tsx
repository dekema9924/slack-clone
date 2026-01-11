

import { House } from 'lucide-react';
import { MessageCircleMore } from 'lucide-react';
import { Bell } from 'lucide-react';
import { Ellipsis } from 'lucide-react';
import Image from 'next/image';
import placeholderImage from '@/public/images/hero/placeholder.avif'
import WorkspaceSidebar from './WorkspaceSideBar';



export default function Sidebar() {
    return (
        <>
            <aside className='flex '>
                <div className='min-h-screen border-r border-gray-700 bg-[#1a0d29] w-22 flex flex-col justify-between items-center'>
                    <ul className='flex flex-col gap-4'>
                        <li className='mt-10'>
                            <House className='bg-blue-300 text-blue-900  p-2 w-10 h-10 rounded-md' />
                            <p className='font-semibold '>Home</p>
                        </li>
                        <li className=''>
                            <MessageCircleMore className='bg-blue-300 text-blue-900  p-2 w-10 h-10 rounded-md' />
                            <p className='font-semibold '>DMs</p>
                        </li>
                        <li className=''>
                            <Bell className='bg-blue-300 text-blue-900  p-2 w-10 h-10 rounded-md' />
                            <p className='font-semibold '>Activity</p>
                        </li>
                        <li className=''>
                            <Ellipsis className='bg-blue-300 text-blue-900  p-2 w-10 h-10 rounded-md' />
                            <p className='font-semibold '>More</p>
                        </li>

                    </ul>

                    <div className="relative w-12 h-12 rounded-lg overflow-hidden bottom-10">
                        <Image
                            src={placeholderImage}
                            alt='profileImage'
                            width={100}
                            height={100}
                            className='object-cover after:border w-full h-full rounded-lg relative'

                        />
                        <span className="absolute bottom-0 right-0 w-3 h-3 bg-green-400 rounded-full ring-2 ring-white" />

                    </div>
                </div>

                <WorkspaceSidebar />
            </aside>
        </>
    )
}
