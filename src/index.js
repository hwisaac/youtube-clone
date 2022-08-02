// node_modules 에서 express를 찾아라
import express from "express";
// morgan 을 임포트 하기
import morgan from "morgan";

const app = express() ; 
const logger = morgan('dev');
const home = (req, res) =>{
    console.log ("I will respond");
    return res.send("hello");
}
const login = (req,res) => {
    return res.send("login");
};

// mrgan logger 함수는 middleware를 리턴한다
app.use(logger);

//누군가 어떤 / 라는 route로 get request를 보내면, 실행할 콜백함수.
app.get( "/" , home)
app.get( "/login" , login)

const handleListening = () => console.log("server listening on port 4000")

// 4000 포트를 열자 리퀘스트 오면 실행할 콜백함수는 handleListening 
app.listen(4000, handleListening)