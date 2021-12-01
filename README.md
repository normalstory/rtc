# rtc

### 환경세팅

  1) npm init -y
  
  2) npm install --save express
  
  3) npm install --save nodemon



### 보안이슈 대응방안
   1) 경고 - Uncaught TypeError: Cannot read properties of undefined (reading 'getUserMedia')
   
   2) 원인 - https://developer.mozilla.org/ko/docs/Web/API/MediaDevices/getUserMedia
   
   3) 해결
   
     1) 임시 - https://velog.io/@juna-dev/navigator.mediaDevices-undefined-해결
       
     2) 개선 - Netlify를 활용해서 https 기반 테스트 환경으로 변경 예정 
