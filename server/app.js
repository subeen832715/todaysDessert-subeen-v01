// // module 설치 순서:  설치 모듈-> 불러온(다른 곳의 파일)모듈
// const express = require('express');
// const morgan = require('morgan')
// // const indexRouter = require('./routes')

// const app = express();
// app.use(morgan('dev'))
// /* morgan 기능 
// 1. next 
// 2. 접속 제대로 되고 있나 확인
// */

// // 특정한 주소로 요청은 첫 번째 인자에.
// // /hello 앞에는 hostname , port 가 붙는다.
// // 한번의 요청에는 한번의 응답만 하므로, / 에서 걸리므로, 아래로 갈 수 없다! 
// // use 대신 get 넣으면 중간경로에 걸리지 않는다

// /*
// app.get('/', (req, res, next) => {
//     res.status(200);   // 접속이라는 요청을 했을때 이러한 요청을 해라. // 213 이라는 요청을 해봐라.
//     res.send('root');
//     res.send('');
//     next();            // next 의 인자를 넘길 수 있다
// })
// app.use('/hi', indexRouter)

// app.get('/hello', (req, res) => {
//     res.status(300);   // 접속이라는 요청을 했을때 이러한 요청을 해라. // 213 이라는 요청도 해봐라.
//     res.send('hello');
// })
// */

// /*  url 에 post 요청하면 콜백을 요청한다. 
// fetch('url', {method: POST} 

// ) .then((users) => {
//     users.map(user => {

//     })        
// }) 
// */

// // send(express도), end(node만) 기능 상 차이없다.
// // express 만 설치해도 node_module 에 body-parser 설치되어 있다.
// const port = 3000;
// const hostname = "localhost";

// app.listen(port,hostname, ()=> {
//     console.log(port, hostname);
// })

// // 인터넷 주소창에 직접 타이핑 한 http://localhost:3000/ 이(가) 요청이다! 


// /* 그외 팁
// 1. start 만 run 필요없고, 다른것들은 run 필요하다.
// */

const express = require("express");
const morgan = require('morgan')
// const indexRouter = require('./routes')
const app = express();
app.use(morgan('dev'))

app.get('/', (req, res) => {
    res.send('connected')
})

const port = 4000;
//const hostname = "localhost";

app.listen(port)
console.log('listening on:', port)
//app.listen(port, hostname, () => {
//    console.log(port, hostname);
//})  