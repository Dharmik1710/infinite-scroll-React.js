import React, {useEffect, useState} from 'react';
import {Heading} from "./components/Heading";
import {Loader} from "./components/Loader";
import Gallery from "./components/Gallery";
import InfiniteScroll from 'react-infinite-scroll-component';

import axios from 'axios';
import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-size: border-box;
  }

  body {
    font-family: sans-serif;
    text-align: center;
    //margin: .5rem;
  }

`;

function App() {
  const [images, setImages] = useState([]);

  useEffect(() => {
    fetchImages();
  }, [])

  const fetchImages = () => {
    const apiRoot = 'https://api.unsplash.com';
    const accessKey = process.env.REACT_APP_ACCESSKEY;
    
    axios
    .get(`${apiRoot}/photos/random?client_id=${accessKey}&count=10`)
    .then(response => setImages([...images, ...response.data]))
  }
  
  return (
    <div className="App">
      <GlobalStyle />
      <Heading />
      <InfiniteScroll
        dataLength={images.length}
        next={fetchImages}
        hasMore={true}
        loader={<Loader />}>
        <Gallery elements={images}  />
      </InfiniteScroll>
    </div>
  );
}

export default App;