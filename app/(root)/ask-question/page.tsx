import Question from '@/components/forms/Question'
import { getUserById } from '@/lib/actions/user.action'
// eslint-disable-next-line no-unused-vars
import { auth } from '@clerk/nextjs'
import { redirect } from 'next/navigation'
import React from 'react'

const Page = async () => {
  const {userId} = auth();

  if (!userId) redirect('/sign-in')

  const mongoUser = await getUserById({ userId })

  console.log(mongoUser)

  return (

    <div>
    <h1 className='h1-bold text-dark-100 dark:text-light-900'>Ask a question</h1>

    <div className='mt-9'>
    <Question mongoUserId={JSON.stringify(mongoUser._id)} />
    </div>
    </div>

  )
}

export default Page
