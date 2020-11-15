import React from "react";
import "./Home.css";
import Product from "./Product";

function Home() {
  return (
    <div className="home">
      <div className="home__container">
        <img
          className="home__image"
          src="https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB428684220_.jpg"
          alt=""
        />
        <div className="home__row">
          <Product 
          id='12532156596'
          title='The lean startup' price={29.99} image='https://images-na.ssl-images-amazon.com/images/I/51Zymoq7UnL._AC_SY400_.jpg'
          rating={5} />
          <Product
          id='49538094'
          title='Kenwood kMix Stand Mixer forBaking,stylish kitchen Mixer with k-beater, Dough hook and whish, 5 litre glass bowl'
          price={239.00}
          rating={4}
          image='https://kitchenaid-h.assetsadobe.com/is/image/content/dam/global/kitchenaid/countertop-appliance/portable/images/hero-RRK150ER.tif'/>
        </div>

        <div className="home__row">

            <Product
             id='12532156596'
             title='samsung lcr8irgonm 90' 
             price={129.99} image='https://images-na.ssl-images-amazon.com/images/I/71Swqqe7XAL._AC_SX466_.jpg'
             rating={3} />
             <Product
             id='49538091'
             title='Amazon Echo (3rd)generation | Smart speaker with Alexa, Charcoal Fabric'
             price={98.99}
             rating={2}
             image='https://images-na.ssl-images-amazon.com/images/I/61EfNDEsB-L._AC_SL1000_.jpg'/>
            <Product
            id='12532156597'
            title='samsung lcr8irgonm 90' 
            price={129.99} image='https://images-na.ssl-images-amazon.com/images/I/71Swqqe7XAL._AC_SX466_.jpg'
            rating={3}            
            />
            <Product
            id='12532156598'
            title='samsung lcr8irgonm 90' 
            price={129.99} image='https://images-na.ssl-images-amazon.com/images/I/71Swqqe7XAL._AC_SX466_.jpg'
            rating={3}           
            
            />
        </div>

        <div className="home__row">
            <Product
            id='12532156590'
            title='samsung lcr8irgonm 90' 
            price={129.99} image='https://images-na.ssl-images-amazon.com/images/I/71Swqqe7XAL._AC_SX466_.jpg'
            rating={3}
            
            />
        </div>
      </div>
    </div>
  );
}

export default Home;
