import React = require('react');
import './style.css';

export default function Section(param: any) {
  let dados = param.param;
  console.log(dados);
  const sectionStyle = dados[8] === 1 ? 'sectionone' : 'sectiontwo';
  if (dados[8] === '1') {
    return (
      <div className={sectionStyle}>
        <div className="row">
          <div className="col-md-6">
            <h1>{dados[0]}</h1>
            <p>{dados[1]}</p>
          </div>
          <div className="col-md-6">
            <img src={dados[2]} />
          </div>
        </div>
      </div>
    );
  } else if (dados[8] === '2') {
    return (
      <div className={sectionStyle}>
        <div className="row">
          <div className="col-md-6">
            <img src={dados[2]} />
          </div>
          <div className="col-md-6">
            <h1>{dados[0]}</h1>
            <p>{dados[1]}</p>
          </div>
        </div>
      </div>
    );
  }
}
