import React from 'react';

function App() {
  const todos = [
    'Go to market',
    'Buy food',
    'Make dinner'
  ];
  let todoElements = todos.map(ele => <li>{ele}</li>)
  return (
    <div className="App">
      <ul>
        {todoElements}
      </ul>
    </div>
  );
}

export default App;
