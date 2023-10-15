'use client'

import React from 'react'
import { HomePageFilters } from '@/constants/filters'
import { Button } from '../ui/button'

const HomeFilters = () => {

    const active = 'newest' ;

  return (
    <div className='mt-1 flex-wrap gap-3 md:flex hidden'>
        {HomePageFilters.map((item) => (
         <Button
         className={`body-medium rounded-lg px-6 py-3 capitalize shadow-none ${active === item.value ? 'bg-primary-100 text-primary-500' : 'bg-light-800 text-light-500 hover:bg-light-800 dark:bg-dark-300'}`}
         key={item.value} onClick={() => {console.log(item.value)}}>
            {item.name}            
         </Button>
        ))}
    </div>
  )
}

export default HomeFilters