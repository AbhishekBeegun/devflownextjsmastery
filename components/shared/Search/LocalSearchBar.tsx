"use client"

import Image from 'next/image'
import React from 'react'
import { Input } from "@/components/ui/input"

interface Props {
    route : string,
    iconPosition : string,
    imgSrc : string,
    placeholder : string,
    OtherClasses? :string
}


const LocalSearchBar = ({
    route,
    iconPosition,
    imgSrc,
    placeholder,
    OtherClasses
} : Props) => {
  return (
    <div className='relative w-full'>
     <div className={`bg-light-800 dark:bg-dark-400 relative flex min-h-[56px] grow items-center gap-4 rounded-[10px] px-4 ${OtherClasses}`}>
        <Image src={imgSrc} alt='search icon'
        width={24} height={24}
        className='cursor-pointer' />

        <Input 
        type='text'
        placeholder={placeholder}
        value={""}
        onChange={() => {}}
        className='paragraph-regular no-focus placeholder text-dark-400 border-none shadow-none outline-none dark:bg-dark-400 '/>

     </div>
    </div>
  )
}

export default LocalSearchBar