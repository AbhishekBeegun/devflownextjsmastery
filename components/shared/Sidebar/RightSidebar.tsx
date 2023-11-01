import Link from 'next/link'
import React from 'react'
import Image from 'next/image'
import RenderTag from '../Tag/RenderTag'
const RightSidebar = () => {
  const Hotquestion = [
    { id: 1, title: 'How do I use Express as acustom server in Next JS?' },
    { id: 2, title: 'How to use Server Components' },
    { id: 3, title: 'Css is better than tailwind css prove me wrong' },
    { id: 4, title: 'This will be the next DEV.to' },
    { id: 5, title: 'Best Practices for data fetching in a Next.Js application with SSR !' }
  ]

  const PopularTags = [
    { id: 1, name: 'Javascript', totalQuestions: 5 },
    { id: 2, name: 'React', totalQuestions: 12 },
    { id: 3, name: 'NEXT', totalQuestions: 4 },
    { id: 4, name: 'CSS', totalQuestions: 1 },
    { id: 5, name: 'Solid', totalQuestions: 5 }
  ]
  return (
    <section className='light-border custom-scrollbar sticky right-0 top-0 flex h-screen flex-col overflow-y-auto border-l bg-light-900 p-6 pt-36 shadow-light-300 dark:bg-dark-200 dark:shadow-none max-sm:hidden lg:w-[350px]'>

        <div>
            <h3 className='h3-bold text-dark-200 dark:text-light-900'>Top Questions</h3>

            <div className='mt-7 flex w-full flex-col gap-[30px]'>
                {Hotquestion.map((item) => (
                    <Link
                    className='flex cursor-pointer items-center justify-between gap-7'
                    href={`/questions/${item.id}`} key={item.id}>
                        <p className='body-medium text-dark-500 dark:text-light-700'>{item.title}</p>
                        <Image src='/assets/icons/chevron-right.svg'
                        alt='chevron-right'
                        width={20}
                        height={20} />
                    </Link>
                ))}
            </div>
        </div>

        <div className='mt-16'>
        <h3 className='h3-bold text-dark-200 dark:text-light-900'>Popular Tags</h3>

        <div className='mt-7 flex flex-col gap-4'>
            {PopularTags.map((item) => (
             <RenderTag key={item.id} name={item.name} id={item.id} tq={item.totalQuestions} showCount />
            ))}
        </div>
        </div>

    </section>
  )
}

export default RightSidebar
