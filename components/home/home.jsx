import { gsap } from "gsap"
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger"

gsap.registerPlugin(useGSAP,ScrollTrigger);
function Home(){
    useGSAP(()=>{
        const tl=gsap.timeline({
            scrollTrigger:{
                trigger:"#description",
                endTrigger:"#description",
                start:"top 50%",
                end: "bottom 60%",
                scrub: true,
            }      
        })
        tl
        .to("#line1",{
            color:"#ffc955",
        })
        .to("#line1",{
            color:"#ffffff",
        })
        .to("#line1",{
            color:"rgba(255, 255, 255, 0.584)",
        })
        .to("#line2",{
            color:"#ffc955",
        })
        .to("#line2",{
            color:"#ffffff",
        })
        .to("#line2",{
            color:"rgba(255, 255, 255, 0.584)",
        })
        .to("#line3",{
            color:"#ffc955",
        })
        .to("#line3",{
            color:"#ffffff",
        })
        .to("#line3",{
            color:"rgba(255, 255, 255, 0.584)",
        })
    },[])
    return(
        <div id='home_section'>
            <div id="title">
                <div id="left"></div>
                <div id="right">
                    <h1 id="main_title">
                        Explore Beyond The Horizon
                    </h1>
                    <p id="subtitles">with Space Exploration Society, IIT Bhilai </p>
                </div>
            </div>
            <div id="description">
                <span id="line1">Humanity's Greatest Adventure Begins With Curiosity. <br/></span>
                <span id="line2">Join us as we venture beyond Earth's skies and into the universe that has inspired humanity for millennia. </span>
                <span id="line3" className="line">Every star we observe reminds us that exploration begins with a single question.</span>
            </div>
        </div>
    )
}
export default Home