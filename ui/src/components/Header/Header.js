import React from 'react';

export default function Header() {
  return (
    <div>
      <nav className='navbar navbar-dark bg-dark'>
        <a className='navbar-brand' href='./'>
          Phone Catalogue
        </a>
        <img src={require(`../../assets/cart.svg`)} alt='Cart' />
      </nav>
    </div>
  );
}
