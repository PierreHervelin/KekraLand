
import { User } from "../data/data";
import ProduitCard from "./ProduitCard";
import React, { useEffect, useState } from 'react';

const Panier = (props) => {
  const [produits, setProduits] = useState(User.panier.produits.slice());


  const update = () => {
    setProduits(User.panier.produits.slice());
  };

  useEffect(() => {
    if (!produits.length) {
      setProduits(["Le panier est vide"]);
    }
  }, [produits]);

  console.log("test", User.panier.getProduits());

  const clickOnValid=()=>{
    const link=document.createElement('a')
    link.href=`/paiement`
    link.click()
  }

  return (
    <div className={`Panier ${props.active ? "active" : ""}`}>
      <h3>Panier</h3>
      <div className="content">
        {User.panier.getProduits().map((produit, i) => (
          <ProduitCard
            key={produit.id ? produit.id : i}
            produit={produit}
            update={update}
          />
        ))}
      </div>
      <div className="total">{`Total : ${User.panier.getTotalPrice()}€`}</div>
      <button onClick={clickOnValid}>Valider</button>
      <div
        className="cross"
        fill="white"
        stroke="white"
        onClick={() => {
          props.close();
          setTimeout(() => {
            document.body.style.overflow = "initial";
          }, 500);
        }}
      >
        +
      </div>
    </div>
  );
};

export default Panier;
