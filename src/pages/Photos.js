import React from 'react';
import PhotoItem from '../components/PhotoItem';
import { PhotoList } from '../helpers/PhotoList';
import '../styles/Photos.css';

export default function Photos() {
  return (
    <div className='photos'>
      <h1 className='photoTitle'>My Personal Works</h1>
      <div className='photoList'>
        {PhotoList.map((photo, index) => {
          return (
            <PhotoItem
              key={index}
              id={index}
              name={photo.name}
              image={photo.image}
            />
          );
        })}
      </div>
    </div>
  );
}