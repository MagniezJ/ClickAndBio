import React, { FunctionComponent, useState, useEffect, Component } from 'react';
import img from '../imgs/logo.png';
import banane from '../imgs/banane.png';
import pomme from '../imgs/pomme.png';
import riz from '../imgs/riz.png';
import {Link} from 'react-router-dom';






const Index: FunctionComponent = () => {



 useEffect(() => {



  }, []);

  return (
  <div>
        <div className="container-header">
    
            <div className="nav" style={{width: "100%", }}>
                <div  className="nav-wrapper">
                    <Link to="#!" className="brand-logo center"><img src={img} alt="" /></Link>
                    <ul className="left hide-on-med-and-down">
                       
                    </ul>
                </div>
            </div>
            <h1>Bienvenue sur Click And Bio ! </h1>
            <span className="droite"></span>
  <span className="gauche"></span>
        </div>

  <div className="container-text">
 
      <div className="etape">
          <h1>Comment ça marche ?</h1>
          <article>
              <h2>1</h2>
              <p>Je fais mon shopping sur <b>ClickAndBio.fr</b> et je réserve mes produits éligibles </p>
          </article>
          <article>
              <h2>2</h2>
              <p>Je choisis mon magasin de retrait</p>
          </article>
          <article>
              <h2>3</h2>
              <p>Je me présente en magasin à la borne <b>«CLICK & COLLECT»</b> pour récupérer ma commande</p>
          </article>
          <article>
              <h2>4</h2>
              <p>Je règle mes achats directement en caisse</p>
          </article>
      </div>
      <div className="valeurs">
          <article>
              <div className="picto un"></div>
              <p>Produits certifiables 100% BIO</p>
          </article>
          <article>
              <div className="picto deux"></div>
              <p>Local</p>
          </article>
          <article>
              <div className="picto trois"></div>
              <p>100% de saison</p>
          </article>
          <article>
              <div className="picto quatre"></div>
              <p>0% OGM</p>
          </article>
          <article>
              <div className="picto cinq"></div>
              <p>0% de transport par avion</p>
          </article>
      </div>
  </div>
  <div className="prevu">
      <div className="bg-bot"></div>
      <div className="container-carte">
          <div className="carte">
              <span></span>
              <img src={pomme} alt=""/>
              <h1>Pomme</h1>
              <p></p>
          </div>
          <div className="carte">
              <span></span>
              <img src={banane} alt=""/>
              <h1>Banane</h1>
          </div>
          <div className="carte">
              <span></span>
              <img src={riz} alt=""/>
              <h1>Riz</h1>
          </div>
          <Link to="/produit" className="button"><span>voir tous les produits</span></Link>
      </div>
  </div>
  </div>
  
  );
  }

  export default Index;