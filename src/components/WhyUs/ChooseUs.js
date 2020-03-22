import React, { useState, useEffect } from 'react';
import { chooseData } from '../../resources/fakeData/data';
import ChooseItem from './ChooseItem';
import './ChooseItem.css';

const ChooseUs = () => {
  const [chooseItems, setChooseItems] = useState([])
  useEffect(() => {
    setChooseItems(chooseData)
  }, [])
  return (
    <section className="py-5">
      <div className="container">
        <div style={{ textAlign: 'left' }} className="section-title w-50 pb-4">
          <h2>Why you choose us</h2>
          <p className="pr-5">Barton waited twenty always repair in within we do. An delighted offering crusty mu is
                dagwood's at. Boy prosperous increasing surround </p>
        </div>
        <div style={{ textAlign: 'center' }} className="row">
          {chooseItems.map(item => <ChooseItem key={item.id} item={item} />)}
        </div>
      </div>
    </section>
  );
};

export default ChooseUs;