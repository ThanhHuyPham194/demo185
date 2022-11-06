import React from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import './MainButton.scss';
export default function MainButton({ src, width, height, children, redirect }) {
    const navigate = useNavigate();
    const [leftE, setLeftE] = useState(0);
    const [topE, setTopE] = useState(0);
    const handleNavigate = (path) => {
        navigate(path);
    };
    useEffect(() => {
        document.querySelectorAll(".mainButton").forEach(button => {
            button.addEventListener('mouseenter', (e) => {
                let coordinatesX = e.clientX - e.currentTarget.getBoundingClientRect().left + 1;
                let coordinatesY = e.clientY - e.currentTarget.getBoundingClientRect().top + 1;
                setLeftE(coordinatesX);
                setTopE(coordinatesY);
                e.currentTarget.lastChild.classList.add('zoomIn');
                e.currentTarget.lastChild.classList.remove('zoomOut');
            });
        });
        document.querySelectorAll(".mainButton").forEach(button => {
            button.addEventListener('mouseleave', (e) => {
                let coordinatesX = e.clientX - e.currentTarget.getBoundingClientRect().left + 1;
                let coordinatesY = e.clientY - e.currentTarget.getBoundingClientRect().top + 1;
                setLeftE(coordinatesX);
                setTopE(coordinatesY);
                e.currentTarget.lastChild.classList.add('zoomOut');
                e.currentTarget.lastChild.classList.remove('zoomIn');
            });
        });
    }, []);
    return (
        <div className='mainButton' style={{ width, height }} onClick={() => handleNavigate(redirect)}>
            <p>{children}</p>
            {src && <img src={src} alt="svg" />}
            <div className={`mainButton__circle`} style={{ left: leftE, top: topE }}></div>
        </div>
    );
}
