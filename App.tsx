import * as React from 'react';
import Body from './components/body';
import Footer from './components/footer';
import Header from './components/header';
import './style.css';

export default function App() {
  return (
    <div>
      <Header />
      <Body />
      <Footer />
    </div>
  );
}
