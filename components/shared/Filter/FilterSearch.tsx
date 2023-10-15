'use client'
import React from 'react'
import RenderTag from '../Tag/RenderTag'
import {
    Select,
    SelectContent,
    SelectGroup,
    SelectItem,
    SelectTrigger,
    SelectValue,
  } from "@/components/ui/select"


  interface Props {
    filters : {
      name:string,
      value:string,
    }[],
    OtherClasses? :string ,
    containerClasses?:string
  }
const FilterSearch = ({filters,OtherClasses,containerClasses} : Props) => {
  return (
    <div>
        <div className={`relative ${containerClasses}`}>
        <Select>
  <SelectTrigger className={`${OtherClasses} w-full px-5 py-2.5 bg-light-800 dark:bg-dark-400 border-none shadow-none text-dark-300 dark:text-light-700`}>
    <SelectValue placeholder="Select a Filter" />
  </SelectTrigger>
  <SelectContent className='bg-light-800 dark:bg-dark-400 text-dark-300 dark:text-light-700 border-none shadow-none '>
    <SelectGroup>
    
    {filters.map((item) => (
      <SelectItem value={item.name}>{item.name}</SelectItem>
      ))}
    </SelectGroup>
  </SelectContent>
</Select>

        </div>
    </div>
  )
}

export default FilterSearch