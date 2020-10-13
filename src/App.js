import React from 'react';
import logo from './logo.svg';
import './App.css';
import BookList from './containers/book-list';
import BookDetail from './containers/book-detail';

function App() {
  return (
    <div className="App">
      <BookList />
      <BookDetail />
    </div>
  );
}

export default App;
