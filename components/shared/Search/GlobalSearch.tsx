import Image from 'next/image'
import React from 'react'
import { Input } from '@/components/ui/input'

const GlobalSearch = () => {
  return (
    <div className='relative w-full max-w-[600px] max-lg:hidden'>
        <div className='relative flex min-h-[56px] grow items-center gap-1 rounded-xl bg-light-800 px-4 dark:bg-dark-400'>
            <Image src='./assets/icons/search.svg' alt='search'
            width={24} height={24}
            className='cursor-pointer' />

            <Input
            type='text'
            placeholder='Search Globally'

            className='paragraph-regular no-focus placeholder border-none text-dark-400 shadow-none outline-none dark:bg-dark-400 '/>

        </div>
    </div>
  )
}

export default GlobalSearch
