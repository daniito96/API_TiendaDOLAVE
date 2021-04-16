const express = require('express');
const router = express.Router();

const mysqlConnection = require('../db');


//obtener productos
router.get('/getProduct', (req, res) =>{
    mysqlConnection.query('SELECT * FROM product', (err, rows, fields)=>{
        if(!err){
            res.json(rows);
        }else{
            console.log(err);
        }
    })
});

//obtener categorias
router.get('/getCategory', (req, res) =>{
    mysqlConnection.query('SELECT * FROM category', (err, rows, fields)=>{
        if(!err){
            res.json(rows);
        }else{
            console.log(err);
        }
    })
});

//obtener productos de una categoría
// router.get('/:category', (req, res) =>{
//     const { category } = req.params;
//     mysqlConnection.query('SELECT * FROM product WHERE category = ?', [category], (err, rows, fields)=>{
//         if(!err){
//             res.json(rows);
//         }else{
//             console.log(err);
//         }
//     })
// });


module.exports = router;

