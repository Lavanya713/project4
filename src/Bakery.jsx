import React, { Component } from 'react'

export default class Bakery extends Component {
  render() {
    const {data}=this.props;
    const BASEURL = import.meta.env.BASE_URL;
    return (
      <div className='bakery'>
                <img src={BASEURL + data.img} alt='' />
                <h3>{data.name}</h3>
                <p>
                    <span>Price</span>
                    <span>{data.price}</span>
                </p>
                
            </div>
        );
    }
}