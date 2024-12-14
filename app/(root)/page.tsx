import React from "react";
import { Button } from "@/components/ui/button";
import { podcastData } from "@/constants"; // Ensure this path is correct
import PodcastCard from "@/components/ui/ui/Podcastcard"; // Corrected import path

const Page = () => {
  return (
    <div className="mt-9 flex bg-black-1 flex-col gap-9">
      <section className="flex flex-col gap-5">
        <h1 className="text-20 font-bold bg-black-1 text-white-1">Trending Podcasts</h1>
       
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {podcastData.map((podcast) => (
            <PodcastCard 
              key={podcast.id} 
              imgUrl={podcast.imgURL} 
              title={podcast.title} 
              description={podcast.description} 
            />
          ))}
        </div>
      </section>
    </div>
  );
};

export default Page;