import React from 'react'
import { Col, Card } from 'antd';

const ShoesCard = (props) => {
  return (
    <Col >
      <Card
        hoverable
        style={{
          width:'250px', 
          height: '190px',
          
        }}
        cover={<a href={`/products/${props.id}`}>
          <img 
          style={{
            width:'250px', 
            height: '190px',
          }}
          src={`img/${props.name}`}
          alt={props.name}
          />
       </a>}
      >
      </Card>
    </Col>
  )
}

export default ShoesCard
