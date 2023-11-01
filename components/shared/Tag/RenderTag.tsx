import Link from 'next/link'
import React from 'react'
import { Badge } from '@/components/ui/badge'

interface Props {
    id:string,
    name:string,
    tq?:any,
    showCount?: boolean
}
const RenderTag = ({ id, name, tq, showCount } : Props) => {
  return (
    <Link href={`/tags/${id}`}
    className='flex justify-between gap-2'>
    <Badge className='subtle-medium rounded-md border-none bg-light-800 px-4 py-2 uppercase text-light-400 dark:bg-dark-300 dark:text-light-500'>{name}</Badge>

    {showCount && (
        <p className='small-medium text-dark-500 dark:text-light-500'>{tq}</p>
    )}
    </Link>
  )
}

export default RenderTag
