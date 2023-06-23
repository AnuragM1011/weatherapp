import React, { useState } from 'react'
import "./styles.css";
import Menu from "./menuApi.js";
import MenuCard from "./MenuCard.js";
import Navbar from "./Navbar.js";
    const uniqueList=[       /*spread operator*/
        ... new Set(       
            Menu.map((curElem)=>{
                return curElem.category;
            })
        ),
        "All",
        
       
    ]; 

const Restaurant = () => {
    // another method to include css by object 
    // const myStyle={color:"red"};   
    const [menuData, setMenuData] = useState(Menu);
    const [menuList,setMenuList]= useState(uniqueList);

    const filterItem = (category) => {
        if(category==="All"){
            setMenuData(Menu);
            return;
        }
        const updatedList = Menu.filter((curElem) => {   /*see filter*/
            return curElem.category === category;
        });
        
        setMenuData(updatedList);
    }; 

    return (
        <>
           <Navbar filterItem={filterItem} menuList={menuList} />
            <MenuCard menuData={menuData} />

        </>

    );
};

export default Restaurant;  