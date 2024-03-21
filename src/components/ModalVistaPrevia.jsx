import React from 'react'

const ModalVistaPrevia = ({content,setModalVP}) => {

    const closeModal = () =>{
        setModalVP(false)
    }

    return (
            <div className="divModal">
                <p className='textModal'>{content}</p>
                <button onClick={closeModal}>Cerrar</button>
            </div>
    );
}

export default ModalVistaPrevia