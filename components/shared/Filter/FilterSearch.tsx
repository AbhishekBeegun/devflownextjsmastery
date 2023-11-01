'use client'
import React from 'react'
// eslint-disable-next-line no-unused-vars
import RenderTag from '../Tag/RenderTag'
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue
} from '@/components/ui/select'

  interface Props {
    filters : {
      name:string,
      value:string,
    }[],
    OtherClasses? :string,
    containerClasses?:string
  }
const FilterSearch = ({ filters, OtherClasses, containerClasses } : Props) => {
  return (
    <div>
        <div className={`relative ${containerClasses}`}>
        <Select>
  <SelectTrigger className={`${OtherClasses} w-full border-none bg-light-800 px-5 py-2.5 text-dark-300 shadow-none dark:bg-dark-400 dark:text-light-700`}>
    <SelectValue placeholder="Select a Filter" />
  </SelectTrigger>
  <SelectContent className='border-none bg-light-800 text-dark-300 shadow-none dark:bg-dark-400 dark:text-light-700 '>
    <SelectGroup>

    {filters.map((item) => (
      <SelectItem key={item.name} value={item.name}>{item.name}</SelectItem>
    ))}
    </SelectGroup>
  </SelectContent>
</Select>

        </div>
    </div>
  )
}

export default FilterSearch
