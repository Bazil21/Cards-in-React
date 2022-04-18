import React from 'react'; 
import './custom.css';
import Cards from './Cards';
import  faker  from '@faker-js/faker';

function App() {
  return (
    <div className="App">
        
      <Cards
      avatar = {faker.image.avatar()}
       name={ `${faker.name.firstName()} ${faker.name.lastName()}`} 
       title = {faker.name.jobTitle()}
       > <button class="button">Green</button>
       <button class="button button2">Blue</button>
       </Cards>
       <Cards
      avatar = {faker.image.avatar()}
       name={ `${faker.name.firstName()} ${faker.name.lastName()}`} 
       title = {faker.name.jobTitle()}
       />
        <Cards
      avatar = {faker.image.avatar()}
       name={ `${faker.name.firstName()} ${faker.name.lastName()}`} 
       title = {faker.name.jobTitle()}
       />
    </div>
  );
}

export default App;
