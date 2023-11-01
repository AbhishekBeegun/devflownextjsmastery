import { Button } from '@/components/ui/button'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

interface Props {
  title : string,
  desc : string,
  route : string,
  btn : string
}
const NoResult = ({ title, desc, route, btn }: Props) => {
  return (
    <div className='mt-10 flex w-full flex-col items-center justify-center'>
      <Image src='/assets/images/light-illustration.png'
      alt='No Result Found'
      width={270}
      height={270}
      className='block object-contain dark:hidden' />

     <Image src='/assets/images/dark-illustration.png'
      alt='No Result Found'
      width={270}
      height={270}
      className='hidden object-contain dark:flex' />

      <h2 className='h2-bold mt-8 text-dark-200 dark:text-light-900'>
        {title}
      </h2>
      <p className='body-regular my-3.5 max-w-md text-center text-dark-500 dark:text-light-700'>
       {desc}
      </p>

      <Link href={route}>
       <Button className='paragraph-medium mt-5 min-h-[46px] rounded-lg bg-primary-500 px-4 py-3 text-light-900'>
        {btn}
       </Button>
      </Link>
    </div>
  )
}

export default NoResult
