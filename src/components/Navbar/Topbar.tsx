import React from 'react'
import { CartIcon, NotificationIcon,  } from '../icons'
import Image from 'next/image'
import { inter,geist } from '@/lib/fonts'
import Search from './Search'

function Topbar() {
    return (
        <div className='w-full h-20 flex flex-row items-center justify-between px-8 bg-white border-b border-[#BCCBB94D]'>
            <div className='w-3/5 flex flex-row gap-12 items-center justify-center'>
                <div className={` text-2xl text-[#161D16] font-bold ${geist.className}`}>ProjectVerse</div>
                <div className='w-3/6'><Search /></div>
            </div>
            <div className='flex flex-row justify-center items-center gap-4'>
                <div><NotificationIcon /></div>
                <div><CartIcon /></div>
                <div className='w-5 h-6  flex items-center justify-center'><div className='w-0.5 h-6 bg-[#BCCBB9] '></div></div>
                <div className='flex flex-row gap-2 items-center justify-center'>
                    <div className='flex flex-col items-start justify-center  '>
                        <span className={`text-sm text-[#161D16] font-bold ${geist.className}`}>Alex Rivera</span>
                        <span className={`text-xs text-[#3D4A3D] font-normal ${inter.className}`}>Senior Architect</span>
                    </div>
                    <div>
                        <div className='w-10 h-10 border-2 border-[#22C55E] rounded-full'><Image src="/Topbar/ProfileImage.png" alt="Alex Rivera" width={40} height={40} /></div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Topbar