import { useState } from 'react';
import PropTypes from 'prop-types';
import Modal from 'components/Modal';
import './ImageGalleryItem.css';

const ImageGalleryItem = ({ image: { webformatURL, largeImageURL, tags }}) => {
    const [isOpenModal, setIsOpenModal] = useState(false)

    const openModal = () => {
        setIsOpenModal(true);
    }

    const closeModal = () => {
        setIsOpenModal(false);
    }
    
    return (
        <li className="ImageGalleryItem">
            <img src={webformatURL} alt={tags} onClick={openModal} className="ImageGalleryItem-image" />
            {isOpenModal && (
                <Modal onClose={closeModal}>
                    <img src={largeImageURL} alt={tags} className="LargeImage" />
                </Modal>
            )}
        </li>
    );
}

ImageGalleryItem.propTypes = {
    image: PropTypes.shape({
        webformatURL: PropTypes.string.isRequired,
        largeImageURL: PropTypes.string.isRequired,
        tags: PropTypes.string.isRequired,
    }),
}

export default ImageGalleryItem;