import React from 'react';
import { useNavigate } from 'react-router-dom';

export default function PhotoItem({ name, image, id }) {
  const navigate = useNavigate();

  return (
    <div
      className='photoItem'
      onClick={() => {
        navigate('/photography/' + id);
      }}
    >
      <div 
        style={{ backgroundImage: `url(${image})`}}
        className='picImage'
      />
      <h1>{name}</h1>
    </div>
  )
}