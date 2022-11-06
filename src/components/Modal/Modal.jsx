import React from 'react';
import ReactDOM from 'react-dom';
import './Modal.scss';
export default function Modal({ children, closeModal }) {
    return ReactDOM.createPortal(
        <div className="modal" onClick={closeModal} >
            {children}
        </div >,
        document.querySelector('body'),
    );
}
