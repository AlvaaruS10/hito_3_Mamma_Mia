import React from 'react';

const CardPizza = ({ name, description, price, ingredients, image }) => {
  return (
    <div className="card">
      <img src={image} alt={name} />
      <h2>{name}</h2>
      <p>{description}</p>
      <ul>
        {ingredients.map((ingredient, index) => (
          <li key={index}>{ingredient}</li>
        ))}
      </ul>
      <p>Precio: ${price}</p>
    </div>
  );
};

export default CardPizza;


