import React from 'react';
import "./ModalBase.scss";
import { CSSTransition } from 'react-transition-group';
import Portal from '../../Portal/Portal';
export default function ModalBase({ visible, onClose, children, bodyClassName = "", containerClassName = "" }) {

    return (
        <>
            <CSSTransition in={visible} timeout={250} classNames="zoom" unmountOnExit>
                {(status) => (
                    <Portal
                        visible={status !== "exited"}
                        onClose={onClose}
                        containerClassName={containerClassName}
                        bodyStyle={{ transition: "all 500ms ease" }}
                        bodyClassName={bodyClassName}
                    >
                        {children}
                    </Portal>
                )}
            </CSSTransition>
        </>
    );
}
