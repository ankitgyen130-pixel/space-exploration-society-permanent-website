import { Canvas } from "@react-three/fiber"
import Navbar from "./navbar/navbar";
import Mesh from "./mesh";
import Divisions from "./divisions/divisions.jsx";
import Event_list from "./events/event_list.jsx";
import Home from "./home/home.jsx";
import Projects from "./projects/projects_list.jsx";
import Links from "./links/links.jsx";
import Join from "./links/join.jsx";
import Members from "./teams/members.jsx";
import Footer from "./footer/footer.jsx";

function Hero(){
    return (
        <div id="hero">
            <Canvas style={{
                height:"100%",
                width: "100%",
                position: "fixed",
                top:0,
                left:0,
                zIndex: 0
            }}>
            <Mesh />
            </Canvas>
             {/* section ids are used in gsap timeline in mesh.jsx */}
            <Navbar />
            <div id="contents">
                <section id="section-1">
                    <div id="HOME"><Home /></div>
                </section>

                <section id="section-2">
                    <div id="ABOUT">
                        <Divisions />
                        <Join />
                    </div>
                </section>

                <section id="section-3">
                    <div id="EVENTS"><Event_list /></div>
                </section>

                <section id="section-4">
                    <div id="PROJECTS"><Projects /></div>
                </section>

                <section id="section-5">
                    <div id="TEAM"><Members /></div>
                    <footer id="CONTACT"><Footer /></footer>
                </section>
            </div>
        </div>
    )
}
export default Hero