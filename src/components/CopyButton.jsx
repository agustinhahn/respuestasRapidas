import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Zoom } from 'react-toastify';
const CopyButton = ({ titulo, content }) => {

    const copiarTextoAlPortapapeles = () => {
        navigator.clipboard.writeText(content)
        avisoCopy()
    }


    const avisoCopy = () => {
        toast.success('Esta copiado crack', {
            position: "bottom-center",
            autoClose: 200,
            hideProgressBar: true,
            closeOnClick: false,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light",
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