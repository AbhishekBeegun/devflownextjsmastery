import Link from 'next/link'
import React from 'react'
import { Badge } from "@/components/ui/badge"



interface Props {
    id:number,
    name:string,
    tq?:any,
    showCount?: boolean
}
const RenderTag = ({id,name,tq,showCount} : Props) => {
  return (
    <Link href={`/tags/${id}`}
    className='flex justify-between gap-2'>
    <Badge className='subtle-medium bg-light-800 dark:bg-dark-300 text-light-400 dark:text-light-500 rounded-md border-none px-4 py-2 uppercase'>{name}</Badge>

    {showCount && (
        <p className='text-dark-500 dark:text-light-500 small-medium'>{tq}</p>
    )}
    </Link>
  )
}

export default RenderTag