import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Zoom } from 'react-toastify';
import jsonCopyText from "../data/copy.json"

const CopyButton = ({ titulo, content }) => {

    const copiarTextoAlPortapapeles = () => {
        navigator.clipboard.writeText(content)
        avisoCopy()
    }

    // const randomNumber = Math.ceil((Math.random()) * 10)
    // let ContentCopy = jsonCopyText.find(item => item.valor === randomNumber)

    const avisoCopy = () => {
        toast.success("copiado", {
            position: "bottom-center",
            autoClose: 5,
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
            <ToastContainer style={{ width: "150px"}}/>
        </>
    )
}

export default CopyButton