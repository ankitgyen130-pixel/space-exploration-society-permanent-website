import { Canvas } from "@react-three/fiber"

import Navbar from "./navbar";
import Mesh from "./mesh";
import Divisions from "./divisions";
import Event_list from "./event_list";
import Home from "./middle";

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


             {/* section ids are used in gsap timeline in mesh.jsx */}
            <section id="section-1">
                <Navbar />
                <div id="HOME"><Home /></div>
            </section>


            <section id="section-2">
                <div id="ABOUT"><Divisions /></div>
            </section>


            <section id="section-3">
                <div id="EVENTS"><Event_list /></div>
            </section>
        </>
    )
}
export default Hero