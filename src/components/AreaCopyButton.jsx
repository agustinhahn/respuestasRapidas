import React from 'react'
import CopyButton from './CopyButton'
import VistaButton from './VistaButton'
import { useContext } from 'react';
import { ContextCart } from '../context/CartContext';
import ModalVistaPrevia from './ModalVistaPrevia';


const AreaCopyButton = ({ titulo, content, id, categoria }) => {

    const { modalVP, setModalVP } = useContext(ContextCart)


        return (
            <>
            { 
                modalVP === id ? (
                    <>
                    <div className='modalGral fade-in-top puff-out-center'>
                        <ModalVistaPrevia content={content} setModalVP={setModalVP} />
                    </div>
                </>
                ) : (
                    <>
                    <div className='areaCopyB'>
                    <div className='subAreaCopy'>
                        <CopyButton titulo={titulo} content={content}/>
                        <VistaButton setModalVP={setModalVP} modalVP={modalVP} id={id}/>
                    </div>
                </div>
                </>
                )
            }
            </>
        )}
export default AreaCopyButton
