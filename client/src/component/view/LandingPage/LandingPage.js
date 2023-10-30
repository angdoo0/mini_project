import React, { useEffect, useState} from 'react'
import { useParams } from 'react-router-dom';
import { Button, Row } from 'antd';
import ShoesCard from '../Content/ShoesCard';
import { AiOutlineDoubleLeft, AiOutlineDoubleRight } from "react-icons/ai";


const LandingPage = () => {

  var MECFS101_WH ={
    name: '무신사 스탠다드 MECFS101-WH.jpg',
    id: 0,
    path: '/products/1',
  }
  var NBP7DF738G_15 ={
    name: '폴로 CWPOCFTYZ220109-100.jpg',
    id: 1,
    path: '/products/2',
  }
  var PM107508_03 ={
    name: '푸마 107508-03.jpg',
    id: 2,
    path: '/products/3',
  }

  const MainShoes = [MECFS101_WH, NBP7DF738G_15, PM107508_03];

  return (
  <span style={{position: 'relative'}}>
      <Row gutter={[10, 10]} justify="center" style={{ position: 'relative', margin: '0 auto', }}>
        <AiOutlineDoubleLeft />
          {MainShoes.map((shoes, index)=>{
            return(
                 <React.Fragment key={shoes.id}>
                    <ShoesCard 
                     name={shoes.name}
                     id={shoes.id}
                    />
                 </React.Fragment>
            )
          })}
          <AiOutlineDoubleRight /> 
      </Row>

    <div style={{
      margin: '60px 0'
      }}>
      <div style={{
        display: 'flex',
        justifyContent: 'center',
        alignContent: 'center',
      
      }}
      >
        원하는 신발을 빠르게 찾을 수 있게 ShoeSpeed가 도와줄게요!
      </div>
      <div style={{
        display: 'flex',
        justifyContent: 'center',
        alignContent: 'center',
        marginTop: '30px'}}>
          <Button type="primary" htmlType="submit" className="login-form-button" 
            style={{ 
              fontWeight: 'bold', 
              WebkitTextStroke: '0.1px gray', color: 'black',
              background: "#ffeb38", 
              }} >
              <a href="/login" style={{  fontWeight: 'bold', }}>회원가입</a>
          </Button>
      </div>
    </div>
  </span>
  )
}

export default LandingPage
