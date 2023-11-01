'use client'
import React from 'react'
import { sidebarLinks } from '@/constants'
import { usePathname } from 'next/navigation'
import Link from 'next/link'
import Image from 'next/image'
import { SignedOut } from '@clerk/nextjs'

import { Button } from '@/components/ui/button'

const LeftSidebar = () => {
  const pathname = usePathname()
  return (
  <section className='light-border custom-scrollbar sticky left-0 top-0 flex h-screen flex-col justify-between overflow-y-auto border-r bg-light-900 p-6 pt-36 shadow-light-300 dark:bg-dark-200 dark:shadow-none max-sm:hidden lg:w-[266px]'>

            <div className='flex flex-1 flex-col gap-6'>
            {sidebarLinks.map((item) => {
              const isActive = (pathname.includes(item.route) && item.route.length > 1) || pathname === item.route

              return (

                    <Link
                    key={item.route}
                    className={`${isActive ? 'primary-gradient rounded-lg text-light-900' : 'text-dark-300 dark:text-light-900'}
                    flex items-center justify-start gap-4 bg-transparent p-4`}
                    href={item.route}>
                        <Image src={item.imgURL} alt={item.label} width={20} height={20}/>
                            <p className={`${isActive ? 'base-bold' : 'base-medium'} max-lg:hidden`}>{item.label}</p>
                    </Link>

              )
            })}
            </div>

            <SignedOut>
                <div className='flex flex-col gap-3'>

                        <Link href='/sign-in'>
                            <Button className='small-medium btn-secondary min-h-[41px] w-full rounded-lg px-4 py-3 shadow-none'>

                                <Image src='/assets/icons/account.svg'
                                alt='login'
                                width={20}
                                height={20}
                                className='lg:hidden' />
                                <span className='text-white max-lg:hidden '>
                                    Log In
                                </span>
                            </Button>
                        </Link>

                        <Link href='/sign-up'>
                            <Button className='small-medium light-border-2
                            btn-tertiary text-dark-400_light900 min-h-[41px] w-full rounded-lg px-4 py-3 shadow-none'>
                                <Image src='/assets/icons/sign-up.svg'
                                alt='login'
                                width={20}
                                height={20}
                                className='lg:hidden'/>
                                <span className='text-white max-lg:hidden'>
                                    Sign Up
                                </span>
                            </Button>
                        </Link>

                </div>
            </SignedOut>

  </section>
  )
}

export default LeftSidebar
