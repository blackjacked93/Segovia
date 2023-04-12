const express = require('express');
const router= express.Router();

//conexion a ñla base de datos

const pool = require('../database');

router.get ('/add', (req, res)=>{
    //res.send('formulario');
    res.render('rutas/add')
});

router.post('/add', async(req,res ) =>{
    console.log(req.body);
    const {num_ruta,ramal,distancia} = req.body;
    const nuevoReactivo ={
        num_ruta,ramal, distancia
    };
    console.log(nuevoReactivo)
    await pool.query('insert into rutas set ?',[nuevoReactivo]);
    //res.send('Datos Procesados')
    res.redirect('/rutas/lista')
});

//recuperar los registros de la base de datos 
router.get('/lista', async (req, res)=>{
    const rutas = await pool.query('select * from rutas');
    console.log(rutas)
    res.render('rutas/listarutas', {rutas:rutas})
});

//ahora modificar la vista, para mostrar los registros desde la base

router.get ('/eliminar/:id', async (req, res) => {
    const {id}= req.params;

    await pool.query('delete from rutas where id =? ', [id]);


 res.redirect('/rutas/lista')
})






module.exports = router;
