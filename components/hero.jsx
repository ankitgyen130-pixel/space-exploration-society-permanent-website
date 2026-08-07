import * as THREE from "three"
import { Canvas, useThree} from "@react-three/fiber"
import { OrbitControls, useGLTF, useTexture, useAnimations} from "@react-three/drei";
import { color, normalMap, texture } from "three/tsl";
import { useEffect,useRef} from "react";

import { gsap } from "gsap"
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger"

gsap.registerPlugin(useGSAP,ScrollTrigger);


function Mesh(){
    const model=useGLTF("/models/blackholeS.glb");
    const{camera,scene,gl}=useThree();



    const {actions} = useAnimations(model.animations,model.scene);
    useEffect(()=>{
        actions["Take 001"].play();
    },[actions])


    const blackhole = useRef(model);  
    useGSAP(()=>{
        const tl = gsap.timeline({
            scrollTrigger:{
                trigger:"#section-1",
                endTrigger:"#section-9",
                start:"top top",
                end:"bottom bottom",
                scrub: true
            }
        })
        tl
        .to(blackhole.current.scene.position,{
            z:"4",
            x:"0.3"
        },"first")
        .to(blackhole.current.scene.rotation,{
            z:"0"
        },"first")
        .to(camera,{
            fov:"37",
            onUpdate: () => camera.updateProjectionMatrix()
        },"first")
        .to(camera,{
            fov:"23",
            onUpdate: () => camera.updateProjectionMatrix()
        },"second")
        .to(blackhole.current.scene.position,{
            x:"0.2"
        })
    })



    useGSAP(()=>{
        const tl=gsap.timeline({
            scrollTrigger:{
                trigger:"#end",
                endTrigger:"#end",
                start:"top 40%",
                end: "bottom 35%",
                scrub: true
            }      
        })
        tl
        .to("#line1",{
            color:"#ffc955",
        })
        .to("#line1",{
            color:"#ffffff",
        })
        .to("#line2",{
            color:"#ffc955",
        })
        .to("#line2",{
            color:"#ffffff",
        })
        .to("#line3",{
            color:"#ffc955",
        })
        .to("#line3",{
            color:"#ffffff",
        })
    },[])

    return(
        <primitive object={model.scene} position={[-1,-0.2,3.5]} rotation={[0,0,-Math.PI/5]}/>
    )
}

function Hero(){
    return (
        <>
            <Canvas style={{
                height:"100vh",
                width: "100vw",
                position: "fixed",
                top:0,
                left:0,
                zIndex: 0
            }}>
                <Mesh />
            </Canvas>
            <section id="section-1">
                <nav>
                    <img src="/images/ses_logo_final.png"/>
                    <div>
                        <p>_ABOUT</p>
                        <p>_CONTACT</p>
                        <p>_BLOG</p>
                    </div>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="#ffe6b4"><path d="M3 4H21V6H3V4ZM9 11H21V13H9V11ZM3 18H21V20H3V18Z"></path></svg>
                </nav>
                <div id="middle">
                    <div id="left"></div>
                    <div id="right">
                        <h1>
                            Explore Beyond The Horizon
                        </h1>
                    </div>
                </div>
                <div id="end">
                    <span id="line1">Humanity's Greatest Adventure Begins With Curiosity. <br/></span>
                    <span id="line2">Join us as we venture beyond Earth's skies and into the universe that has inspired humanity for millennia. </span>
                    <span id="line3" className="line">Every star we observe reminds us that exploration begins with a single question.</span>
                </div>
            </section>
            <section id="section-2"></section>
            <section id="section-9"></section>
        </>
    )
}
export default Hero