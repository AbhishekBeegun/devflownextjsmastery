import FilterSearch from '@/components/shared/Filter/FilterSearch'
import LocalSearchBar from '@/components/shared/Search/LocalSearchBar'
import { Button } from '@/components/ui/button'
import Link from 'next/link'
import { HomePageFilters } from '@/constants/filters'
import HomeFilters from '@/components/home/HomeFilters'
import NoResult from '@/components/shared/NoResult/NoResult'
import QuestionCard from '@/components/cards/QuestionCard'
import { getQuestions } from '@/lib/actions/question.action'

export default async function Home () {
  const result = await getQuestions({})

  console.log(result.questions)

  return (
    <>
    <div className="flex w-full flex-col-reverse justify-between gap-4 sm:flex-row sm:items-center">
      <h1 className="h1-bold text-dark-100 dark:text-light-900">All Questions</h1>

      <Link href='/ask-question'
      className="flex justify-end max-sm:w-full">
        <Button className="primary-gradient min-h-[46px] px-4 py-3 !text-light-900">
          Ask A Question
        </Button>
      </Link>
    </div>

    <div className="mt-11 flex flex-col justify-between gap-5 max-sm:flex-col sm:items-center lg:items-start">
      <LocalSearchBar
      route='/'
      iconPosition='left'
      imgSrc='./assets/icons/search.svg'
      placeholder="Search Questions"
      OtherClasses="flex-1"/>

      <FilterSearch
      filters={HomePageFilters}
      OtherClasses='min-h-[56px] sm:min-w-[170px]'
      containerClasses='hidden max-md:flex'
      />

      <HomeFilters />

      <div className="mt-10 flex w-full flex-col gap-6">
        {result.questions.length > 0
          ? result.questions.map((question) => (
          <QuestionCard
          key={question.id}
          id={question.id}
          title={question.title}
          upvotes={question.upvotes}
          author={question.author}
          views = {question.views}
          tags={question.tags}
          answers={question.answers}
           />
          ))
          : <NoResult
        title='Theres no question to show'
        desc='Be the first to break the silence!Ask a question and kickstart the discussion. our query could be the next big thing other learn from, Get Involved'
        btn='Ask a Question'
        route='/ask-question' />
        }

      </div>

    </div>
    </>
  )
}
