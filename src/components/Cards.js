import React from 'react';
import './Cards.css';
import CardItem from './CardItem';

function Cards() {
  return (
    <div className='cards'>
        <h1>Stay connected, stay informed </h1>
         <h1> Get the region's top stories! y </h1>
      <div className='cards__container'>
        <div className='cards__wrapper'>
          <ul className='cards__items'>
            <CardItem
              src='images/Business-1.jpg'
              text='Play by the rules, but be ferocious..'
              label='Business'
              path='/services'
            />
            <CardItem
              src='images/Entertainment-1.jpg'
              text='In Hollywood if you dont have a shrink, people think youre crazy.'
              label='Entertainment'
              path='/services'
            />
          </ul>
          <ul className='cards__items'>
            <CardItem
              src='images/Health-1.jpg'
              text="Health is a state of complete harmony of the body, mind and spirit"
              label='Health'
              path='/services'
            />
            <CardItem
              src='images/Science-1.jpg'
              text='Science is a cemetery of dead ideas'
              label='Science'
              path='/products'
            />
            <CardItem
              src='images/Sport-1.jpg'
              text="There may be people that have more talent than you, but theres no excuse for anyone to work harder than you do."
              label='Sports'
              path='/sign-up'
            />
          </ul>
           <ul className='cards__items'>
            <CardItem
              src='images/Technology-1.jpg'
              text="It has become appallingly obvious that our technology has exceeded our humanity."
              label='Technology'
              path='/services'
            />
            </ul>
        </div>
      </div>
    </div>
  );
}

export default Cards;


