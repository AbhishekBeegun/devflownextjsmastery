import React from 'react'
import RenderTag from '../Tag/RenderTag'
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
  } from "@/components/ui/select"
const FilterSearch = () => {

    const Filters = [
        {id : 1 , Name : "Newest"},
        {id : 2 , Name : "Recommended"},
        {id : 3 , Name : "Frequent"},
        {id : 4 , Name : "Unanswered"},
    ]
  return (
    <div>
        <div className='w-full items-start gap-6 hidden lg:flex'>
        {Filters.map((item) =>(
        <RenderTag key={item.id} name={item.Name} id={item.id}  />
        ))}
        </div>

        <div className='lg:hidden'>
        <Select>
  <SelectTrigger className="w-full bg-light-800 dark:bg-dark-400 border-none shadow-none text-dark-300 dark:text-light-700 ">
    <SelectValue placeholder="Select a Filter" />
  </SelectTrigger>
  <SelectContent className='bg-light-800 dark:bg-dark-400 text-dark-300 dark:text-light-700 border-none shadow-none '>
    {Filters.map((item) => (
    <SelectItem key={item.id} value={item.Name}>{item.Name}</SelectItem>
    ))}
  </SelectContent>
</Select>
        </div>
    </div>
  )
}

export default FilterSearch