import axios from 'axios'



// await axios.get(
//   "https://openapi.naver.com/v1/search/shop.json",
//   {
//     params:{ query: '폴로 CWPOCFTYZ220109-100'},
//     header: {
//       "X-Naver-Client-Id": '5jGWZuBSnYGA8FLGw6J7',
//       "X-Naver-Client-Secret": '70wOaWB8Lf',
//     },
//   }
// ).then((response)=> {
//   console.log('response', response);
// })


// var express = require('express');
//   var app = express();
//   var client_id = '5jGWZuBSnYGA8FLGw6J7';
//   var client_secret = '70wOaWB8Lf';
//   app.get('/search/blog', function (req, res) {
//     var api_url = 'https://openapi.naver.com/v1/search/blog?query=' + encodeURI(req.query.query); // JSON 결과
//     var request = require('request');
//     var options = {
//         url: api_url,
//         headers: {'X-Naver-Client-Id':client_id, 'X-Naver-Client-Secret': client_secret}
//       };
//     request.get(options, function (error, response, body) {
//       if (!error && response.statusCode == 200) {
//         res.writeHead(200, {'Content-Type': 'text/json;charset=utf-8'});
//         res.end(body);
//       } else {
//         res.status(response.statusCode).end();
//         console.log('error = ' + response.statusCode);
//       }
//     });
//   });
//   app.listen(3000, function () {
//     console.log('http://127.0.0.1:3000/search/blog?query=검색어 app listening on port 3000!');
//   });

const CLIENT_ID = "5jGWZuBSnYGA8FLGw6J7";
const CLIENT_SECRET = "70wOaWB8Lf";
 
// CORS 회피를 위한 프록시 서버 URL을 설정
const CORS_PROXY = "https://cors-anywhere.herokuapp.com/";
 
// 네이버 검색 API의 엔드포인트 URL
const NAVER_API_URL = "https://openapi.naver.com/v1/search/webkr";
 
// 네이버 검색 API를 호출하는 비동기 함수 정의
const search = async (query) => {
 
  // 프록시 서버 URL에 검색 API URL 추가
  const url = NAVER_API_URL;
  
  // 요청 URL에 검색어를 추가
  url.searchParams.append("query", query);
 
  // 검색결과 건수
  url.searchParams.append("display", 10);
 
  // fetch API를 사용하여 네이버 검색 API를 호출
  const response = await fetch(url, {
 
    // API 호출에 필요한 헤더를 설정
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
  } else {
    // 실패한 경우 에러 메시지를 출력합니다
    console.error("API 호출 실패");
  }
};
