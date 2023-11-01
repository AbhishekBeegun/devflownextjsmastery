import Navbar from '@/components/shared/Navbar/Navbar'
import LeftSidebar from '@/components/shared/Sidebar/LeftSidebar'
import RightSidebar from '@/components/shared/Sidebar/RightSidebar'
import React from 'react'

const Layout = ({ children } : { children : React.ReactNode}) => {
  return (
    <main className='relative bg-light-850 dark:bg-dark-100'>
        <Navbar/>

        <div className='flex'>
            <LeftSidebar/>
            <section className='flex min-h-screen flex-1 flex-col px-6 pb-6 pt-36 max-md:pt-14 sm:px-14'>
             <div className='mx-auto w-full max-w-5xl'>
                {children}
             </div>
            </section>

            <RightSidebar />
        </div>

    </main>
  )
}

export default Layout
