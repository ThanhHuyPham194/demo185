import React from 'react';
import { useEffect } from 'react';
import { createPortal } from 'react-dom';
import "./Portal.scss";
function createPortalWrapper() {
    const element = document.createElement("div");
    element.className = "portal__wrapper";
    return element;
}
const portalWrapperElm = createPortalWrapper();


const Portal = ({
    containerClassName = "",
    containerStyleInline = {},
    bodyClassName = "",
    bodyStyleInline = {},
    overlay = true,
    onClose,
    children,
}) => {
    useEffect(() => {
        document.body.appendChild(portalWrapperElm);
    }, []);
    const renderContent = (
        <div className={`portal ${containerClassName}`} style={containerStyleInline}>
            {
                overlay && (<div className='overlay' onClick={onClose}></div>)
            }
            <div className={`content ${bodyClassName}`} style={bodyStyleInline}>
                {children}
            </div>
        </div>
    );

    return createPortal(renderContent, portalWrapperElm);

};

export default Portal;