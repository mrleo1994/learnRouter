import React from 'react'
import { Card } from 'antd';
const { Meta } = Card;


export default function List({listShoe, handleAddToCart}) {
  return (
    <div style={{height:"max-content"}} className='row col-4'>
        {listShoe.map((item,index) => {
            return (
                <Card
                    key={index}
                    className='col-3'
                    hoverable
                    
                    cover={<img alt="example" src={item.image} />}
  >
                    <button onClick={() => { handleAddToCart(item) }}  className='btn btn-dark'>Add</button> 
                </Card>
            );}
        )}
    </div>
  )
}


// card antd