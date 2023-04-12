const express = require('express');
const router= express.Router();

//conexion a la base de datos

const pool = require('../database');

router.get ('/add', (req, res)=>{
    //res.send('formulario');
    res.render('tiempos/add')
});

router.post('/add', async(req,res ) =>{
    console.log(req.body);
    const {videojuego, tiempo,descripcion} = req.body;
    const nuevoReactivo ={
        videojuego,tiempo,descripcion
    };
    console.log(nuevoReactivo)
    await pool.query('insert into tiempos set ?',[nuevoReactivo]);
    //res.send('Datos Procesados')
    res.redirect('/tiempos/lista')
});

//recuperar los registros de la base de datos 
router.get('/lista', async (req, res)=>{
    const tiempos = await pool.query('select * from tiempos');
    console.log(tiempos)
    res.render('tiempos/listatiempos', {tiempos:tiempos})
});

//ahora modificar la vista, para mostrar los registros desde la base

router.get ('/eliminar/:id', async (req, res) => {
    const {id}= req.params;

    await pool.query('delete from tiempos where id =? ', [id]);


 res.redirect('/tiempos/lista')
})






module.exports = router;