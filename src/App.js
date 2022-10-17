import React, { useState } from 'react';
import data from './data';
import List from './List';
function App() {
  const [people, setPeople] = useState(data);

  return (
    <main>
      <section className='container'>
        <h3> {people.length} urodzin dzisiaj</h3>
        <List people={people} />
        <button onClick={() => setPeople([])}>Wyczyść wszystko</button>
        <button onClick={() => setPeople(data)}>Odśwież</button>
      </section>
    </main>
  )
}

export default App;
