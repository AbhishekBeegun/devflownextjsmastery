import React from 'react'
import Image from 'next/image'

interface Props {
  imgUrl :string,
  alt : string,
  value : string | number,
  title : string,
  textstyles? : string,
  isAuthor? :boolean,
  href? : string
}

const Metric = ({ imgUrl, alt, value, title, textstyles, isAuthor, href } : Props) => {
  return (
    <div className='flex-center flex flex-wrap gap-1'>
      <Image
      src={imgUrl}
      width={16}
      height={16}
      alt={alt}
      className={`object-contain ${href ? 'rounded-full' : ''}`} />

      <p className={`${textstyles} flex items-center gap-1`}>
       <span>
        {value}
       </span>

       <span className={'small-regular line-clamp-1'}>
       {title}
       </span>

      </p>
    </div>
  )
}

export default Metric
