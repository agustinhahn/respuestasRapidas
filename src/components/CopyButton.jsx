import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Zoom } from 'react-toastify';
import jsonCopyText from "../data/copy.json"

const CopyButton = ({ titulo, content }) => {

    const copiarTextoAlPortapapeles = () => {
        navigator.clipboard.writeText(content)
        avisoCopy()
    }

    const randomNumber = Math.ceil((Math.random())*10)
    let ContentCopy = jsonCopyText.find(item => item.valor === randomNumber)



    
    const avisoCopy = () => {
        toast.success(`Esta copiado ${ContentCopy.content}`, {
            position: "bottom-center",
            autoClose: 300,
            hideProgressBar: true,
            closeOnClick: false,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "dark",
            transition: Zoom,
            });
    }
    return (
        <>
            <button className='copybutton' onClick={copiarTextoAlPortapapeles}>{titulo}</button>
            <ToastContainer />
        </>
    )
}

export default CopyButton