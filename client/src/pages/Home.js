import React from "react";
import Jumbotron from "../components/Jumbotron";
import VideoCard from "../components/VideoCard";

function Home() {
    return (
        <div>
            <div>
                <Jumbotron></Jumbotron>
            </div>
            <div className="homepage">
                <div className="videoSample">
                    <VideoCard>

                    </VideoCard>
                </div>
                <div className="merchSample">

                </div>
                <div className="contactSample">
                    <h1>email: <email>noasdjflj@asldkfj.com</email></h1>
                    <h1>telephone:555-555-5555</h1>
                </div>
            </div>
        </div>
    )
}

export default Home;

