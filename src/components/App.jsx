import { useState, useEffect } from 'react';
import Searchbar from 'components/Searchbar';
import ImageGallery from 'components/ImageGallery'; 
import Button from 'components/Button';
import Loader from 'components/Loader';
import { GetImages } from './Services/Api';
import './App.css';

export const App = () => {
  const [images, setImages] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');
  const [page, setPage] = useState(1);
  const [status, setStatus] = useState('idle');
  const [totalHits, setTotalHits] = useState(null);

  useEffect(() => {
    if (searchQuery === '') {
      return
    }

    setStatus('panding');
      
    GetImages(searchQuery, page)
      .then(images => {
        setImages(prevState => ([...prevState, ...images.hits]));
        setStatus('resolved');
        setTotalHits(images.totalHits);
      })
      .catch(error => console.log(error))
  }, [page, searchQuery])

  const handleSubmitForm = value => {
    setImages([]);
    setSearchQuery(value);
    setPage(1);
  }

  const handleClickButton = () => {
    setPage(prevState => (prevState + 1))
  }

  return (
      <div className='App'>
        <Searchbar onSubmit={handleSubmitForm} />
        <ImageGallery images={images} />
        {status === 'panding' && <Loader />}        
        {(images.length > 0) && (images.length < totalHits) && <Button onClick={handleClickButton} />} 
      </div>
    )
}
