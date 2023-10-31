import React from 'react'
import { Card, Row, Col } from 'antd';

const { Meta } = Card;

const PurchaseCard = (props) => {
  return (
    <div>
        <Col span={24}>
          <Card
            hoverable
            style={{
              width: 240,
            }}
            cover={
            <a href={props.link}>
              <img 
                alt={props.title} 
                src={props.image}
                style={{width:'100%'}} />
            </a>}
          >
            <Meta title={props.title} />
          </Card>
        </Col>
    </div>
  )
}

export default PurchaseCard
