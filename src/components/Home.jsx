import React from 'react'
import CardPizza from './CardPizza'
import { pizzas } from '../pizzas'

const Home = () => {
  return (
    <div className="container-fluid">
      <h1>Nuestras Pizzas</h1>
      <div className="row">
      {pizzas.map((pizza) => (
      <div className="col-sm-12 col-md-6 col-lg-4" key={pizza.id}>
        <CardPizza
          key={pizza.id}
          name={pizza.name}
          description={pizza.desc}
          price={pizza.price}
          ingredients={pizza.ingredients}
          image={pizza.img}
        />
        </div>
      ))}
    </div>
    </div>
  );
};

export default Home

