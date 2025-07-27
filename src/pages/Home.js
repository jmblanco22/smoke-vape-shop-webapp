import React from 'react';
import { Link } from 'react-router-dom';
import styled from '@emotion/styled';
import { motion } from 'framer-motion';

// --- Styled Components for the "Urban Neon" Theme ---

const HomeContainer = styled.div`
  height: calc(100vh - 80px); /* Full viewport minus header */
  background-color: #0c0c0c; /* Pitch black */
  color: #fff;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
  position: relative;
  text-align: center;
  padding: 2rem;
`;

const GlitchText = styled(motion.h1)`
  font-family: 'Courier New', Courier, monospace;
  font-size: 5rem;
  font-weight: 700;
  text-transform: uppercase;
  position: relative;
  text-shadow: 
    0 0 5px #ff00ff, 
    0 0 10px #ff00ff, 
    0 0 20px #ff00ff, 
    0 0 40px #00ffff, 
    0 0 80px #00ffff;

  /* The Glitch effect using pseudo-elements */
  &::before,
  &::after {
    content: 'ELEVATE'; /* Must match the text content */
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: #0c0c0c;
    overflow: hidden;
  }

  &::before {
    left: 2px;
    text-shadow: -2px 0 #ff00ff;
    animation: glitch-anim-1 2s infinite linear alternate-reverse;
  }

  &::after {
    left: -2px;
    text-shadow: -2px 0 #00ffff, 2px 2px #ff00ff;
    animation: glitch-anim-2 2s infinite linear alternate-reverse;
  }

  @keyframes glitch-anim-1 {
    0% { clip-path: inset(15% 0 86% 0); }
    /* ... (add more steps for a complex glitch) ... */
    100% { clip-path: inset(80% 0 10% 0); }
  }

  @keyframes glitch-anim-2 {
    0% { clip-path: inset(68% 0 12% 0); }
    /* ... (add more steps for a complex glitch) ... */
    100% { clip-path: inset(40% 0 45% 0); }
  }
`;

const NeonButton = styled(motion(Link))`
  font-family: 'Courier New', Courier, monospace;
  font-size: 1.2rem;
  padding: 1rem 2.5rem;
  margin-top: 2rem;
  display: inline-block;
  text-decoration: none;
  color: #00ffff;
  border: 2px solid #00ffff;
  border-radius: 5px;
  text-transform: uppercase;
  background: transparent;
  box-shadow: 
    inset 0 0 10px #00ffff, 
    0 0 10px #00ffff;
  transition: color 0.3s, text-shadow 0.3s, box-shadow 0.3s;

  &:hover {
    color: #0c0c0c;
    background: #00ffff;
    box-shadow: 0 0 40px #00ffff;
    text-shadow: 0 0 5px #0c0c0c;
  }
`;

const Home = () => {
  return (
    <HomeContainer>
      <div>
        <GlitchText
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.5 }}
        >
          ELEVATE
        </GlitchText>
        <NeonButton
          to="/products"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1 }}
        >
          Enter the Void
        </NeonButton>
      </div>
    </HomeContainer>
  );
};

export default Home;
