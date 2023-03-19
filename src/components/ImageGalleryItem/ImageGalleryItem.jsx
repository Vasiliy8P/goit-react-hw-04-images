import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Modal from 'components/Modal';
import './ImageGalleryItem.css';

class ImageGalleryItem extends Component {
    state = {
        isOpenModal: false,
    }

    openModal = () => {
        this.setState({isOpenModal: true})
    }

    closeModal = () => {
        this.setState({isOpenModal: false})
    }
    
    render() {
        const { webformatURL, largeImageURL, tags } = this.props.image;
        return (
            <li className="ImageGalleryItem">
                <img src={webformatURL} alt={tags} onClick={this.openModal} className="ImageGalleryItem-image" />
                {this.state.isOpenModal && (
                    <Modal onClose={this.closeModal}>
                        <img src={largeImageURL} alt={tags} className="LargeImage" />
                    </Modal>
                )}                
            </li>
        )
    }
}

ImageGalleryItem.propTypes = {
    image: PropTypes.shape({
        webformatURL: PropTypes.string.isRequired,
        largeImageURL: PropTypes.string.isRequired,
        tags: PropTypes.string.isRequired,
    }),
}

export default ImageGalleryItem;