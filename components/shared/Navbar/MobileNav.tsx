'use client'

import React from 'react'
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetTrigger
} from '@/components/ui/sheet'
import Image from 'next/image'
import Link from 'next/link'
import { SignedOut } from '@clerk/nextjs'
import { Button } from '@/components/ui/button'
import { sidebarLinks } from '@/constants'
import { usePathname } from 'next/navigation'

const NavContent = () => {
  const pathname = usePathname()
  return (
        <section className='flex h-full flex-col gap-6 pt-16'>
            {sidebarLinks.map((item) => {
              const isActive = (pathname.includes(item.route) && item.route.length > 1) || pathname === item.route

              return (
                <SheetClose asChild key={item.route}>
                    <Link
                    className={`${isActive ? 'primary-gradient rounded-lg text-light-900' : 'text-dark-300 dark:text-light-900'}
                    flex items-center justify-start gap-4 bg-transparent p-4`}
                    href={item.route}>
                        <Image src={item.imgURL} alt={item.label} width={20} height={20}/>
                            <p className={`${isActive ? 'base-bold' : 'base-medium'}`}>{item.label}</p>
                    </Link>
                </SheetClose>
              )
            })}
        </section>
  )
}
const MobileNav = () => {
  return (
<Sheet>
  <SheetTrigger asChild>
    <Image
    src='./assets/icons/hamburger.svg'
    width={36}
    height={36}
    alt='Munu'
    className='invert-colors sm:hidden' />
  </SheetTrigger>
  <SheetContent side="left" className='background-light-900_dark200 border-none bg-white dark:bg-dark-200'>
  <Link href="/" className='flex items-center gap-1'>
         <Image src='./assets/images/site-logo.svg' width={23} height={23} alt='Devflow'/>

         <p className='h2-bold text-dark-100 dark:text-white'>Dev <span className='text-primary-500'>Flow</span></p>
    </Link>

        <div className='overflow-y-auto '>
            <SheetClose asChild>
                <NavContent />
            </SheetClose>

            <SignedOut>
                <div className='flex flex-col gap-3'>
                    <SheetClose asChild>
                        <Link href='/sign-in'>
                            <Button className='small-medium btn-secondary min-h-[41px] w-full rounded-lg px-4 py-3 shadow-none'>
                                <span className='text-white'>
                                    Log In
                                </span>
                            </Button>
                        </Link>
                    </SheetClose>

                    <SheetClose asChild>
                        <Link href='/sign-up'>
                            <Button className='small-medium light-border-2
                            btn-tertiary text-dark-400_light900 min-h-[41px] w-full rounded-lg px-4 py-3 shadow-none'>
                                <span className='text-white'>
                                    Sign Up
                                </span>
                            </Button>
                        </Link>
                    </SheetClose>
                </div>
            </SignedOut>
        </div>
  </SheetContent>
</Sheet>
  )
}

export default MobileNav
