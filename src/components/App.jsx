import React, { Component } from 'react';
import Searchbar from 'components/Searchbar';
import ImageGallery from 'components/ImageGallery'; 
import Button from 'components/Button';
import Loader from 'components/Loader';
import { GetImages } from './Services/Api';
import './App.css';

export default class App extends Component {
  state = {
    images: [],
    searchQuery: '',
    page: 1,
    status: 'idle',
    totalHits: null,
  }

  componentDidUpdate = async (prevProps, prevState) => {
    const {searchQuery, page} = this.state;

    if (prevState.searchQuery !== searchQuery || prevState.page !== page) {  
      this.setState({ status: 'panding' });
      
      try {
        const images = await GetImages(searchQuery, page);

        this.setState(state => ({
          images: [...state.images, ...images.hits],
          status: 'resolved',
          totalHits: images.totalHits,
        }));
      } catch (error) {
        console.log(error);
      }
    }    
  }

  handleSubmitForm = value => {
    this.setState({
      images: [],
      searchQuery: value,
      page: 1,
    });
  }

  handleClickButton = () => {
    this.setState(prevState => ({
      page: prevState.page + 1,
    }))
  }

  render() {
    const { images, status, totalHits } = this.state;

    return (
      <div className='App'>
        <Searchbar onSubmit={this.handleSubmitForm} />
        <ImageGallery images={images} />
        {status === 'panding' && <Loader />}        
        {(images.length > 0) && (images.length < totalHits) && <Button onClick={this.handleClickButton} />} 
      </div>
    )
  }
};
