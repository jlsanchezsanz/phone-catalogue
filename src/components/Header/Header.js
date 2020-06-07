import React from 'react';

export default function Header() {
  return (
    <div>
      <nav class='navbar navbar-dark bg-dark'>
        <a class='navbar-brand' href='./'>
          Phone Catalogue
        </a>
        <img src={require(`../../assets/cart.svg`)} alt='Cart' />
      </nav>
    </div>
  );
}
