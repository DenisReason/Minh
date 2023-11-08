import express from 'express'
import jwt from 'jsonwebtoken'
import dotenv from 'dotenv'
import AuthenticationRouter from './Authentication.js';
import Authorization from './Authorization.js';
const firm18Router= express.Router();

dotenv.config()

firm18Router.use(express.json())


firm18Router.post('/Movie', (req, res, next) => {
    console.log('==============>>>');
    jwt.verify(req.body.Token, process.env.KEY, (err, decoded) => {
      if (err) {
        console.error('Lỗi khi decode JWT:', err);
        res.status(500).send('Lỗi khi decode JWT');
      }
      if (decoded) {
        // console.log(decoded);
         res.send(decoded);
         // CÓ THỂ VIẾT THÊM LOGIC Ở ĐÂY, VÍ DỤ KIỂM TRA DECODE CÓ THUỘC TÍNH AGE LÀ BAO NHIÊU TUỔI? 
         // KIỂM TRA CÁC BỘ PHIM ĐÃ LIKE ĐỂ HIỂN THỊ RA
      }
    });
  });

export default firm18Router