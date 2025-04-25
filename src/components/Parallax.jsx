import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";



export default function Parallax() {
    const { scrollYProgress } = useScroll();
    const scaleX = useTransform(scrollYProgress, [0, 1], [0, 1]);

    return (
        <div id="example">
            
            <motion.div className="progress" style={{ scaleX }} />
            <StyleSheet />
        </div>
    );
}

function StyleSheet() {
    return (
        <style>{`
        html {
            scroll-snap-type: y mandatory;
        }
        @media (max-width: 500px) {
            .img-container > div {
                width: 150px;
                height: 200px;
            }

           
        }
        .progress {
            position: fixed;
            left: 0;
            right: 0;
            height: 5px;
            background: red;
            bottom: 20px;
            transform: scaleX(0);
        }
    `}</style>
    );
}
