import React from "react";
import styled from "styled-components";
import { motion, useMotionValue, useTransform } from "framer-motion";

const Container = styled.div`
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  border-radius: 5px;
  height: 100%;
  overflow: hidden;
  background: #63B3ED;
 // background: linear-gradient(180deg, #ff008c 0%, rgb(211, 9, 225) 100%);
`;

const Square = styled(motion.div)`
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 8px;
  background: #fff;
  width: 150px;
  height: 150px;
`;

function FramerMotion() {
  const x = useMotionValue(0);
  const background = useTransform(
    x,
    [-150, 0, 150],
    ["#ff008c", "#7700ff", "rgb(230, 255, 0)"]
  );
  return (
    <>
    <Container>
      <Square 
       drag="x"
       dragConstraints={{left: 0, right: 0}}
       style={{ fontSize: "48px"}}
     >
      <p>🔛</p>
     </Square>

      <Square 
       animate={{
 	 scale: [1,2,2,1,1],
	 rotate: [0, 0, 360, 360, 0],
         borderRadius: ["20%", "20%", "50%", "50%", "20%"]	
       }}
       transition={{
        duration: 2,
        ease: "easeInOut",
        times: [0, 0.2, 0.5, 0.8, 1],
        loop: Infinity,
        repeatDelay: 1
      }}
     >
      {/* TODO: Add my version here*/}
    	<a href="https://ecgc2.csb.app/" target="_blank" style={{ color:"#595959", margin: "5px", textAlign:"center"}}>
	  <p>
	    Wanna see something cool? Click here 👀
          </p>
   	</a>
     </Square>

    </Container>
    </>
  );
}

export default FramerMotion;
