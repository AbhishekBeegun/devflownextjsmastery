import Image from 'next/image'
import React from 'react'
import { Input } from "@/components/ui/input"


const GlobalSearch = () => {
  return (
    <div className='relative w-full max-w-[600px] max-lg:hidden'>
        <div className='bg-light-800 dark:bg-dark-400 relative flex min-h-[56px] grow items-center gap-1 rounded-xl px-4'>
            <Image src='./assets/icons/search.svg' alt='search'
            width={24} height={24}
            className='cursor-pointer' />

            <Input 
            type='text'
            placeholder='Search Globally'
            value={""}
            className='paragraph-regular no-focus placeholder text-dark-400 border-none shadow-none outline-none dark:bg-dark-400 '/>

        </div>
    </div>
  )
}

export default GlobalSearch