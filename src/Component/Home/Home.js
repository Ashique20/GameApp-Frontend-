import React from "react";
import Carousal from "./Carosal/Carosal";
import Story from "./Story/Story";
import Carosal from "./Carosal/Carosal";
import Services from "./Services/Services";
import MediaInfo from "../Media/MediaInfo";
import Chat from "../Form/Chat";
import All from "../All/All";
import Follow from "../Follow/Follow";



const Home = () => {

    return (
        <div>

            <Carosal></Carosal>
            <Story></Story>
            <Services></Services>
            <Chat></Chat>
            <MediaInfo></MediaInfo>
            <Follow></Follow>
            
            
            


        </div>
    )
}

export default Home;