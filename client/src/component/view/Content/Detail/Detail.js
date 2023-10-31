import React from 'react'
import {useParams} from 'react-router-dom'
import { Col, Row, Button, Space  } from 'antd';
import {LoremIpsum} from 'react-lorem-ipsum'
import Feature from './Feature';
import { AiOutlineDoubleLeft, AiOutlineDoubleRight } from "react-icons/ai";
import './detail.css'

const Detail = () => {

  const review_style = {
    padding: '8px 0',
    margin: '0 auto',
    fontSize: '15px',
    fontWeight: 'bold',
    background: '#fdd835',
  };

  return (
    <div className='container' style={{ margin: '0 auto', width: '1400px'}}>

      <div className='side' style={{ padding: 0}}>
        <a href='/' >Men</a >
        <br/><br/>
        <a href='/' >-&nbsp;스니커즈</a >
      </div>

      <div className='mainImage' style={{ width:'600px', margin: '0 auto'}}>
        <AiOutlineDoubleLeft />
        <img src= '/img/폴로 CWPOCFTYZ220109-100.jpg' alt='폴로 CWPOCFTYZ220109-100'
        style= {{ width: '90%'}} />
        <AiOutlineDoubleRight /> 
        <p style= {{ position:'relative', textAlign: 'center', bottom: '-50px' }}>전체보기</p>
      </div>

      <div className='description' style={{fontWeight: 'bold'}}> 
        제품명:&nbsp; 폴로 키즈 코트 포 레더 스니커즈(CWPOCFTYZ220109100) <br /><br />
        가격:&nbsp; 99999999원<br /><br />
        제품소재:&nbsp;  인조가죽<br /><br />
        사이즈:&nbsp; 200, 205, 210, 215, 220, 225  

      </div>

      <div className='feature' >
      <Space className='f_button' style={{width: '100%', display: 'flex', alignContent: 'center', padding: 0}} >
        <Feature />
      </Space>
      </div>

      <div className='purchase' style={{ textAlign: 'center', position: 'relative', right: '50px'}}>
        <Button type="primary" 
          htmlType="submit" 
          className="purchase-button" 
          style={{ 
            width: '100px', 
            height: '45px',
            fontWeight: 'bold', 
            color: 'black',
            background: "skyblue",
            }} >
            <a href="/products/:productId/purchase">구매하기</a>
        </Button>
        <span>&nbsp;&nbsp;&nbsp;</span>
        <Button type="primary" 
          htmlType="submit" 
          className="cart-button"  
          style={{ 
            width: '100px', 
            height: '45px', 
            fontWeight: 'bold', 
            color: 'black',
            background: "#fdd835", 
            }} >
            <a href="/">장바구니</a>
        </Button>
        <p>구매하기를 누르면 타사이트로 이동합니다.</p>
      </div>

      <div className='recommend'>
        <span style={{position: 'relative', left: '50px'}}>
          타 사이트에 있는 후기를 종합했어요.&nbsp;&nbsp;
            <a href='/' style={{fontSize: '14px', color: 'blue', textDecoration: 'none'}}>
              후기 더보기
            </a>
        </span>
        <Row style={{ textAlign: 'center', display: 'flex', justifyContent: 'content'}} >
          <Col className="gutter-row" span={6} >
            <div style={review_style}>size</div>
            <LoremIpsum p={1}  avgWordsPerSentence={4}/>
          </Col>
          <Col className="gutter-row" span={6}>
            <div style={review_style}>Color</div>
            <LoremIpsum p={1}  avgWordsPerSentence={4}/>
          </Col>
          <Col className="gutter-row" span={6}>
            <div style={review_style}>착용감</div>
            <LoremIpsum p={1} avgWordsPerSentence={4}/>
          </Col>
          <Col className="gutter-row" span={6}>
            <div style={review_style}>사용자의 발맞춤 정도</div>
            <LoremIpsum p={1}  avgWordsPerSentence={4} />
          </Col>  
    </Row>
      </div>
    </div>
  )
}

export default Detail
