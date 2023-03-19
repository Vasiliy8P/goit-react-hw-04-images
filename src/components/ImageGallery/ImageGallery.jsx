import PropTypes from 'prop-types';
import ImageGalleryItem from 'components/ImageGalleryItem';
import './ImageGallery.css';

const ImageGallery = ({ images }) => {
    return (
        <ul className="ImageGallery">
            {images.map(image => (
                <div key={image.id} >
                    <ImageGalleryItem image={image} />
                </div>                
            ))}
        </ul>
    )
}

ImageGallery.propTypes = {
    images: PropTypes.array.isRequired,
    image: PropTypes.shape({
        id: PropTypes.number.isRequired,
    }),
}

export default ImageGallery;
