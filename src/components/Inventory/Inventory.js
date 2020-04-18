import React, { useEffect } from 'react';
import cardData from '../../resources/fakeData/cardData.json';
import { useState } from 'react';

const Inventory = () => {
    
    const [addData, setAddData] = useState(null);
    useEffect(() => {
        setAddData(cardData);
    }, [])
    const handleAddInventory = ()=>{
        fetch('http://localhost:5200/addAllProducts',{
            method:'POST',
            body:JSON.stringify(addData),
            headers:{
                "Content-type": "application/json; charset=UTF-8"
            }
        })
        .then(res=>res.json())
        .then(data =>{
            console.log("Data Inserted Successful",data);
            
        })
    }
    return (
        <div className="container">
            <h1>Add Inventory Data</h1>
            <button className="btn btn-danger p-2" onClick={handleAddInventory}>Add Inventory</button>
        </div>
    );
};

export default Inventory;