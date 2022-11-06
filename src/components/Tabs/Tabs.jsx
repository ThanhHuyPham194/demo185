import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Tabs.scss';
export default function Tabs({ setType, setIsMore, type, isDetail }) {

    const [widthLine, setWidthLine] = useState(0);
    const [distanceLeft, setDistanceLeft] = useState(0);
    let navigate = useNavigate();
    const handleTabs = (name) => (e) => {
        let widthLine = e.currentTarget.offsetWidth;
        let leftDistance = e.currentTarget.offsetLeft;
        if (setType) {
            setType(name);
        }
        if (setIsMore) {
            setIsMore(false);
        }

        setWidthLine(widthLine + 20);
        setDistanceLeft(leftDistance - 10);
        if (isDetail) {
            navigate(`/news?type=${name}`);
        }
    };
    useEffect(() => {
        let target = document.querySelector('.tabItemActive');
        setWidthLine(target.offsetWidth + 20);
        setDistanceLeft(target.offsetLeft - 10);
    }, []);
    return (
        <div className="tabs">
            <div className={`tabItem ${type === 'relics' && 'tabItemActive'}`} onClick={handleTabs('relics')} >
                Di tích
            </div>
            <div className={`tabItem ${type === 'activity' && 'tabItemActive'}`} onClick={handleTabs('activity')} >
                Hoạt động
            </div>

            <div className={`tabItem ${type === 'propagate' && 'tabItemActive'}`} onClick={handleTabs('propagate')} >
                Tuyên truyền
            </div>
            <div className="line" style={{ width: widthLine + 'px', left: distanceLeft || '44%' }}></div>
        </div>
    );
}
