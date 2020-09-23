import React from 'react'
import '../../App.css';
import CardItem from '../CardItem';

export default function About(){
    return (
    <div className='About'>
        <h1>About Us</h1>
      <div className='cards__container'>
        <div className='cards__wrapper'>
          <ul className='About_item'>
            <CardItem
              src='images/About-1.jpeg'
              text=''
              label='Dilip Natarajan'
              path='/services'
            />
        
            <CardItem
              src='images/About-2.jpeg'
              text=''
              label='Sun Bhattacharjee'
              path='/services'
            />
          </ul>
        </div>
      </div>
    </div>
  );
}





