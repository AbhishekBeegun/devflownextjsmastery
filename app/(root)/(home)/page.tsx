import FilterSearch from "@/components/shared/Filter/FilterSearch";
import LocalSearchBar from "@/components/shared/Search/LocalSearchBar";
import { Button } from "@/components/ui/button";
import { UserButton } from "@clerk/nextjs";
import Link from "next/link";
 
export default function Home() {
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


      <FilterSearch/>

    </div>
    </>
  )
}