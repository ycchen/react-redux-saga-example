import React from 'react';
import Button from '../containers/Button';
import NewsItem from '../containers/NewsItem'
import Loading from '../containers/Loading'
import Dog from '../containers/Dog'
import DogItem from '../containers/DogItem'


let App = () => (
  <div>
    <Button />
    <Dog/>
    <Loading />
    <NewsItem />
    <DogItem/>
  </div>
);


export default App;
