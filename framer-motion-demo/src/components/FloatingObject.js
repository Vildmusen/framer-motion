import { motion } from "framer-motion"
import React from "react";
import { useState } from 'react';
import '../App.css';
import logo from '../logo.svg';

const FloatingObject = () => {
    
    const [isVisible, setVisible] = useState(true);
    const [x, setX] = useState(0);
    const [y, setY] = useState(0);

    const randomizePosition = () => {
        isVisible ? setVisible(false) : setVisible(true)
        const newX = (Math.random() * window.innerWidth) - 500;
        const newY = (Math.random() * window.innerHeight) - 400;
        setX(newX < 0 ? 0 : newX)
        setY(newY < 0 ? 0 : newY)
    }

    return (
        <motion.div animate={{ opacity: isVisible ? 1 : 0.1, x: x, y: y }} onClick={randomizePosition} className={'Logo-holder'}>
            <img src={logo} className="App-logo" alt="logo" />
        </motion.div>
    )
}

export default FloatingObject;