const express = require('express');
const router= express.Router();

//conexion a ñla base de datos

const pool = require('../database');

router.get ('/add', (req, res)=>{
    //res.send('formulario');
    res.render('categorias/add')
});

router.post('/add', async(req,res ) =>{
    console.log(req.body);
    const {nombre,descripcion} = req.body;
    const nuevoReactivo ={
        nombre,descripcion
    };
    console.log(nuevoReactivo)
    await pool.query('insert into categorias set ?',[nuevoReactivo]);
    //res.send('Datos Procesados')
    res.redirect('/categorias/lista')
});

//recuperar los registros de la base de datos 
router.get('/lista', async (req, res)=>{
    const categorias = await pool.query('select * from categorias');
    console.log(categorias)
    res.render('categorias/listacategorias', {categorias:categorias})
});

//ahora modificar la vista, para mostrar los registros desde la base

router.get ('/eliminar/:id', async (req, res) => {
    const {id}= req.params;

    await pool.query('delete from categorias where id =? ', [id]);


 res.redirect('/categorias/lista')
})






module.exports = router;



