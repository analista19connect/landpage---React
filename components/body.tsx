import React = require('react');
import Section from './section';
import './style.css';

const Body = () => {
  const sectionA = [
    'Principal',
    'Teste principal',
    'https://cursinhoparamedicina.com.br/wp-content/uploads/2022/10/Paisagem-1.jpg',
    '',
    'N',
    '',
    'N',
    '',
    '2',
  ];

  return (
    <div className="body">
      {/* <Section /> */}
      <Section param={sectionA} />
    </div>
  );
};
export default Body;
