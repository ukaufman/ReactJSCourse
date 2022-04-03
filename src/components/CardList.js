import React from 'react';
import Card from './Card';

const CardList = ({ robots }) => {
  // map es para hacer bucles. Se podría usar foreach pero no lo recomienda

  // const cardsArray = robots.map((user, idx) => {
  //   return (<Card 
  //     key={idx} 
  //     id={robots[idx].id} 
  //     name={robots[idx].name} 
  //     email={robots[idx].email}
  //     />
  //   );
  // })

  return (
  <div>
    {/* Para evaluar en JS hay que ponerlo entre llaves */}
    {/* {cardsArray} */}
    {
      robots.map((user, idx) => {
        return (<Card 
          key={idx} 
          id={robots[idx].id} 
          name={robots[idx].name} 
          email={robots[idx].email}
          />
        );
      })
    }
  </div>
  );
}

export default CardList;