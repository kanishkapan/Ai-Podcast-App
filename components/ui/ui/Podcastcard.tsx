import Image from 'next/image';
import React from 'react';

interface PodcastCardProps {
  imgUrl: string;
  title: string;
  description: string;
  podcastId: number;
}

const PodcastCard = ({
  imgUrl,
  title,
  description,
  podcastId,
}: PodcastCardProps) => {
  return (
    <div className="cursor-point">
      <figure className="flex flex-col gap-2">
        <Image 
          src={imgUrl}
          width={174}
          height={174}
          alt="podcast image"
          className='aspect-square h-fit w-full rounded-xl 2xl:size-[200px]'
        />

       
      </figure>


      <div className='flex flex-col '>

      <h2 className='text-16 truncate font-bold text-white-1'>{title}</h2>
      <p className='text-12 truncate font-normal capitalize text-white-4'>{description}</p>
      </div>
    </div>
  );
};

export default PodcastCard;
