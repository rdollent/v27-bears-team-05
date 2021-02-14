import React, { useDispatch, useSelector } from 'react'
import { toggleModalAction} from '../../actions/index.js'
import './index.css'
import Modal from '../../elements/components/Modal.js'

const Modal = () => {
    const dispatch = useDispatch()
    const state = useSelector((state) => state.modalReducer)
    return (
        <Modal onClick={() => dispatch(toggleModalAction())}>
            
        </Modal>
    )
}

export default Modal
