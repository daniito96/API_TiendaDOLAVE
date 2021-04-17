const express = require('express');
const router = express.Router();

const mysqlConnection = require('../db');


//obtener productos
router.get('/getProduct', (req, res) =>{
    mysqlConnection.query('SELECT a.id, a.name, a.url_image, a.price, a.discount, b.name as category FROM product a inner join category b on a.category = b.id', (err, rows, fields)=>{
        if(!err){
            res.json(rows);
        }else{
            console.log(err);
        }
    })
});

//obtener categorias
router.get('/getCategory', (req, res) =>{
    mysqlConnection.query('SELECT * FROM category ORDER BY name ASC', (err, rows, fields)=>{
        if(!err){
            res.json(rows);
        }else{
            console.log(err);
        }
    })
});

// obtener productos de una categoría
router.get('/:id', (req, res) =>{
    const { id } = req.params;
    console.log(id);
    mysqlConnection.query('SELECT * FROM product WHERE category = ?', [id], (err, rows, fields)=>{
        if(!err){
            res.json(rows);
        }else{
            console.log(err);
        }
    })
});


module.exports = router;

