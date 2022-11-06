import React from 'react';
import Modal from '../../../../../components/ModalV2/Modal';
import useModal from '../../../../../hooks/useModal';
import './RelicDrawingItem.scss';
export default function RelicDrawingItem({ relicDrawing }) {
    const { show, setShow, nodeRef } = useModal();
    return (
        <>

            <div className='relicDrawingItem' >
                <img src={relicDrawing.image} alt="imageDrawing" onClick={() => setShow(!show)} />
                <Modal
                    visible={show}
                    onClose={() => { setShow(false); }}
                    containerClassName="relicDrawingItem__modal"
                    bodyClassName="relicDrawingItem__body"
                    ref={nodeRef}
                >
                    <div className="relicDrawingItem__body--image">
                        <img src={relicDrawing.imageMain} alt="anh ban ve ki thuat" />
                    </div>
                </Modal>
            </div>

        </>
    );
}
