import React, { useState, useEffect } from 'react'
import {  Row } from 'antd';
import PurchaseCard from './PurchaseCard';

const Purchase = () => {
  const [Shoes, setShoes] = useState([])

  const CLIENT_ID = "5jGWZuBSnYGA8FLGw6J7";
  const CLIENT_SECRET = "70wOaWB8Lf";
  // CORS 회피를 위한 프록시 서버 URL을 설정
  const CORS_PROXY = "https://cors-anywhere.herokuapp.com/";
  // 네이버 검색 API의 엔드포인트 URL
  const NAVER_API_URL = "https://openapi.naver.com/v1/search/shop.json";



  
  // 네이버 검색 API를 호출하는 비동기 함수 정의
  const searchNaver = async (query) => {
    const url = new URL(CORS_PROXY + NAVER_API_URL);
    url.searchParams.append("query", query);
    url.searchParams.append("display", 14);

    const response = await fetch(url, {
      mrthod: 'GET', 
      headers: {
        "X-Naver-Client-Id": CLIENT_ID,
        "X-Naver-Client-Secret": CLIENT_SECRET,
        "X-Requested-With": "XMLHttpRequest",
      },
    });
    // 응답이 성공적으로 완료되면 결과를 JSON 형식으로 변환하고 출력
    if (response.ok) {
      const data = await response.json();
      console.log(data);
      setShoes(data.items)
      
    } else {
      // 실패한 경우 에러 메시지를 출력
      console.error("API 호출 실패");
    }
  };

  useEffect(() => {
    searchNaver('CWPOCFTYZ220109100')
  }, []);
  
  // searchNaver('CWPOCFTYZ220109100')

//   const apiGet = async (type, param) => {
//     const apiUrl = 'https://openapi.naver.com/v1/search/' + type + '?query=' + param;
//     const resp = await fetch(apiUrl, {
//         method: 'GET',
//         headers: {
//             'Content-Type': 'application/json',
//             'X-Naver-Client-Id': CLIENT_ID,
//             'X-Naver-Client-Secret': CLIENT_SECRET
//         }
//     });
//     resp.json().then(data => {
//         setShoes(data.items);
//     });
// };

// useEffect(() => {
//     apiGet('shop', '무신사 스탠다드 MECFS101-WH');
// }, []);
// //ADD :: END

  return (
    <div>
      <Row gutter={[10, 10]} justify="center" style={{ position: 'relative', margin: '0 auto', }}>
      { Shoes.map((shoesInfo, index)=>{
        return(
             <React.Fragment key={shoesInfo.productId}>
                <PurchaseCard
                 title={shoesInfo.title}
                 id={shoesInfo.productId}
                 image={shoesInfo.image}
                 link={shoesInfo.link}
                />
             </React.Fragment>
        )
      })}
      </Row>
      
    </div>
  )
}

export default Purchase
