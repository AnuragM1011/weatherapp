import React from 'react';
// import MenuCard from "./MenuCard.js"

const MenuCard = ({ menuData }) => {
  return (
    <>
      <section className="main-card--cointainer">
        {menuData.map((curElem) => {
          const {id,name,category,image,description}=curElem; /*destructuring*/
          return (
            <>
              <div className="card-container" key={id}>
                <div className="card">
                  <div className="card-body">
                    <span className="card-number card-circle subtitle">{id}</span>
                    {/* inline stylesheet example below */}
                    {/* <span className="card-author subtitle" style={{color:"red"}}>Breakfast</span> */}
                    {/* example of creating object and use it */}
                    {/* <span className="card-author subtitle" style={myStyle}>Breakfast</span> */}

                    <span className="card-author subtitle"></span>
                    <h2 className="card-title">{name}</h2>
                    <span className="card-description subtle">{description}</span>
                    <div className="card-read">Read</div>
                  </div>
                  <img src={image} alt="images" className="card-media" />
                  <span className="card-tag subtle">Order Now</span>

                </div>
              </div>

            </>
          );
        })}
      </section>
    </>
  );
};


export default MenuCard;



