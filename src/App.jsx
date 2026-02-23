import React, { Component } from 'react'
import { data } from 'react-router-dom';
import Bakery from './Bakery';

export default class App extends Component {
  constructor(){
    super();
    this.state = {menu:[
      {name:"Chocolate icecream",price:"Rs.60",img:"choco Icecream.png"},
      {name:"Chocolate cookies",price:"Rs.70",img:"choco cookies.png"},
      {name:"Chocolate cake",price:"Rs.130",img:"choco cake.png"},

    ]}
  }
  render() {
    const{menu}=this.state;
    return (
      <div>
        <div className='app'></div>
        <div className='header'>Bakery Catalog - 2500032388- Lavanya Vellanki</div>
        <div className='section'>
          {menu.map((data)=>(
            <Bakery data={data}/>
          ))}
          </div>
          <div className='footer'>Copyright @ 2026.All rights reserved. - Lavanya vellanki </div>

      </div>
    )
  }
}
