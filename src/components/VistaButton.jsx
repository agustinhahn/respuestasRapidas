import React, { useState } from 'react'
import ModalVistaPrevia from './ModalVistaPrevia'


const VistaButton = ({modalVP,setModalVP, id}) => {

    const handleButton = () =>{
        setButtonVista(true)
    }
    const [modalOpen, setModalOpen] = useState(false);

    const openModal = () => {
        if(id === modalVP){
            setModalVP(null)
        }
        else{
            setModalVP(id);
        }
    };

    const closeModal = () => {
        setModalOpen(false);
    };


    return (
        <div>
            <button className='buttonVista' onClick={openModal}>+</button>
        </div>
    )
}

export default VistaButton