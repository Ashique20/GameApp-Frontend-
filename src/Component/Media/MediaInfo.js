import React, { useEffect } from "react";
import Media from "./Media";


const MediaInfo = () => {
   
    return (
        <div className="hero  bg-base-200     " style={{ backgroundImage: `url("https://coolbackgrounds.io/images/backgrounds/white/white-triangle-369b8d2d.jpg")` }}>
            {/* sent data to Media */}
            <div><h1 className="text-black font-bold text-4xl mb-[450%]">Our MEDIA</h1></div>
           <div className=" sm:grid grid-cols-1 lg:grid grid-cols-3 min-h-screen  mt-20 gap-5">
           <Media img='https://www.fbcelebrations.com/images/logo/vogue.png'></Media>
            <Media img='https://www.fbcelebrations.com/images/logo/pinkvilla.png'></Media>
            <Media img='https://www.fbcelebrations.com/images/logo/dainik-bhaskar.png'></Media>
            <Media img='https://www.fbcelebrations.com/images/logo/midday.png'></Media>
            <Media img='https://www.fbcelebrations.com/images/logo/wedding-sutra.png' className='w-10'></Media>
            <Media img='https://www.fbcelebrations.com/images/logo/economic-times.png'></Media>
            <Media img='https://www.fbcelebrations.com/images/logo/global-prime-news.png' className='w-10'></Media>
            <Media img='https://www.fbcelebrations.com/images/logo/The-Times.png' className='w-10'></Media>
            <Media img='https://www.fbcelebrations.com/images/logo/deccan-chronicle.png' className='w-10'></Media>
            
           </div>


        </div>
    )
}

export default MediaInfo;