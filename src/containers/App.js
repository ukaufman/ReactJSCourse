import React, { useState, useEffect } from 'react';
import CardList from "../components/CardList";
import SearchBox from '../components/SearchBox';
import Scroll from '../components/Scroll';
import ErrorBoundry from '../components/ErrorBoundry';


function App() {
  // Hooks let us separate robots and searchfield states
  const [robots, setRobots] = useState([]);
  const [searchfield, setSearchfield] = useState('');
  // const [count, setCount] = useState(0);

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(response => response.json())
      .then(users => setRobots(users));
    // console.log(count);
  // }, [count])
  }, []);

  const onSearchChange = (event) => {
    setSearchfield(event.target.value);
  }

  const filteredRobots = robots.filter(robot => {
    return robot.name.toLowerCase().includes(searchfield.toLowerCase());
  });

  return !robots.length ? (
    <div className="tc">
      <h1 className='f2'>Loading...</h1>,
      <p className='f2'>The webpage is still loading, please wait...</p>
    </div>
  ) : (
    <div className='tc'>
      <h1 className="f2">RoboFriends</h1>
      {/* <button onClick={() => setCount(count + 1)}>Click Me!</button> */}
      <SearchBox searchChange={onSearchChange} />
      <Scroll>
        <ErrorBoundry>
          <CardList robots={filteredRobots} />
        </ErrorBoundry>

      </Scroll>
    </div>
  );
}

export default App;