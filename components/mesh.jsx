import { useThree} from "@react-three/fiber"
import { useGLTF, useAnimations} from "@react-three/drei";
import { useEffect,useRef} from "react";

import { gsap } from "gsap"
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger"

gsap.registerPlugin(useGSAP,ScrollTrigger);

function Mesh(){
    const model=useGLTF("/models/blackholeS.glb");
    const{camera}=useThree();



    const {actions} = useAnimations(model.animations,model.scene);
    useEffect(()=>{
        actions["Take 001"].play();
    },[actions])


    const blackhole = useRef(model);  
    useGSAP(()=>{
        const tl = gsap.timeline({
            scrollTrigger:{
                trigger:"#section-1",
                endTrigger:"#section-4",
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


    return(
        <primitive object={model.scene} position={[-1,-0.2,3.5]} rotation={[0,0,-Math.PI/5]}/>
    )
}

export default Mesh