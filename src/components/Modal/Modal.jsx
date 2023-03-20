import { useEffect } from 'react'
import PropTypes from 'prop-types';
import './Modal.css';

const Modal = ({ onClose, children }) => {

    useEffect(() => {
        window.addEventListener('keydown', handleKeyDown)

        function handleKeyDown(event) {
            if (event.code === "Escape") {
                onClose();
            }
        }

        return () => {
            window.removeEventListener('keydown', handleKeyDown)
        }
    }, [onClose])

    const handleBackdropClick = (event) => {
        if (event.target === event.currentTarget) {
            onClose();
        }
    }

    return (
        <div className="Overlay" onClick={handleBackdropClick}>
            <div className="Modal">{children}</div>
        </div>
    )    
}

Modal.propTypes = {
    onClose: PropTypes.func.isRequired,
}

export default Modal;