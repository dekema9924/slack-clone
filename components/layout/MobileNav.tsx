
import { X } from 'lucide-react'
import { Slack } from 'lucide-react'
import Button from '../ui/Button'


interface props {
    setMenuOpen: any
    isMenuOpen: boolean
}

export default function MobileNav({ setMenuOpen, isMenuOpen }: props) {

    return (
        <>
            <nav className={`bg-blue-400 w-full transition-all duration-400 min-h-screen absolute -top-6 p-6 lg:hidden ${isMenuOpen ? "left-0" : "left-600"}`}>
                <div className='flex items-center justify-between'>
                    <Slack />

                    {/* //close menu */}
                    <div className='lg:hidden w-9 flex flex-col h-9 justify-center items-center bg-blue-900 rounded-xl cursor-pointer'>
                        <X onClick={() => setMenuOpen(false)} />
                    </div>
                </div>

                <ul className='no-scrollbar flex flex-col  items-start gap-6 my-4 text-lg font-semibold  w-full mt-20 h-80 overflow-y-scroll '>
                    <li className='btn_hover transition-all duration-500'>Home</li>
                    <li className='btn_hover transition-all duration-500'>Workspace</li>
                    <li className='btn_hover transition-all duration-500'>Download</li>
                    <li className='btn_hover transition-all duration-500'>Pricing</li>
                    <li className='btn_hover transition-all duration-500'>Discover</li>
                    <li className='btn_hover transition-all duration-500'>Blog</li>
                    <li className='btn_hover transition-all duration-500'>Safety</li>
                    <li className='btn_hover transition-all duration-500'>Auth</li>



                </ul>

                <div className='h-44 flex items-end'>
                    <Button
                        text='Sign in'
                        className='w-11/12 bg-white text-blue-800 font-bold text-xl rounded-2xl! h-12 '
                    />
                </div>
            </nav>
        </>
    )
}
