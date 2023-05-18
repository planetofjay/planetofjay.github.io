import React from 'react';
import PhotoItem from '../components/PhotoItem';
import { PhotoList } from '../helpers/PhotoList';
import '../styles/Photos.css';

export default function Photos() {
  return (
    <div className='photos'>
      <h1 className='photoTitle'>My Personal Works</h1>
      <h2 className='photoSubtitle'><i>Untitled. (2017 - 2020)</i></h2>
      <div className='photoList'>
        {PhotoList.map((photo, index) => {
          return (
            <PhotoItem
              key={index}
              id={index}
              image={photo.image}
            />
          );
        })}
      </div>
    </div>
  );
}