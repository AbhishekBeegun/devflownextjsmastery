import Link from 'next/link'
import React from 'react'
import RenderTag from '../shared/Tag/RenderTag'
import Metric from '../shared/Metric'
import { formatBigNumber } from '@/lib/utils'


interface Props {
    id:string,
    title:string,
    upvotes:number,
    views : number,
    answers:Array<object>,
    tags :{
        id : string,
        name :string,
    }[],
    author : {
        id : string,
        name :string,
        picture : string,
    }
}
const QuestionCard = ({id,title,upvotes,views,answers,tags,author }:Props) => {
  return (
    <div className='card-wrapper p-9 sm:px-11 rounded-[10px]'>
        <div className='flex'>
            <Link href={`/question/${id}`}>
             <h3 className='sm:h3-semibold base-semibold text-dark-200 dark:text-light-900 line-clamp-1 flex-1'>
             {title}
             </h3>
            </Link>
        </div>

        <div className='mt-3.5 flex flex-wrap gap-2'>
            {tags.map((tag) => (
                <RenderTag key={tag.id} id={tag.id} name={tag.name} />
            ))}
        </div>

        <div className='flex-between mt-6 w-full flex-wrap gap-3'>

        <Metric
            imgUrl='/assets/icons/avatar.svg'
            alt='user'
            value={author.name}
            title=' - Asked 1 hour ago'
            href={`/profile/${author.id}`}
            textstyles ='body-medium text-dark-400 dark:text-light-700 ' />

            
            <Metric
            imgUrl='/assets/icons/like.svg'
            alt='upvote'
            value={formatBigNumber(upvotes)}
            title='Votes'
            textstyles ='small-medium text-dark-400 dark:text-light-800 ' />

           <Metric
            imgUrl='/assets/icons/message.svg'
            alt='message'
            value={formatBigNumber(answers.length)}
            title='Answers'
            textstyles ='small-medium text-dark-400 dark:text-light-800 ' />

            <Metric
            imgUrl='/assets/icons/eye.svg'
            alt='eye'
            value={formatBigNumber(views)}
            title='Views'
            textstyles ='small-medium text-dark-400 dark:text-light-800 ' />
        </div>
    </div>
  )
}

export default QuestionCard