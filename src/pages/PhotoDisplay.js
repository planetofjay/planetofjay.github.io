import React from 'react';
import { useParams } from 'react-router-dom';
import { PhotoList } from '../helpers/PhotoList';
import '../styles/PhotoDisplay.css';

export default function PhotoDisplay() {
  const { id } = useParams();
  const photo = PhotoList[id];

  return (
    <div className='photo'>
      <img src={photo.image} alt='photos' />
      <p><i>{photo.location}</i></p>
    </div>
  );
}