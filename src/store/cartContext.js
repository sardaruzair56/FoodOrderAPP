import React from "react";


const cartContext=React.createContext({
    item:[],
    amount:0,
    itemAdd : (item)=>{},
    itemRemove : (id) =>{} 
})
export default cartContext;