const express= require('express');
const router = express.Router();
const pool = require('../database');



router.get('/add', async(req, res)=>{
    const categorias =  await pool.query('select * from categorias');
    console.log(categorias)
    res.render('preguntas/add',{categorias:categorias})
});

router.get ('/add', (req, res)=>{
    //res.send('formulario');
    res.render('preguntas/add')
});


router.post('/add', async (req, res)=>{
    console.log(req.body)
    const {idCategoria, nombre, opcion_1, opcion_2, opcion_3, correcta}=req.body;

    const nuevoReactivo ={
      nombre,opcion_1,opcion_2, opcion_3, correcta, idCategoria
    };
    await pool.query('insert into reactivos set ?', [nuevoReactivo]);

    res.redirect('/preguntas/lista')
});

router.get('/lista', async (req, res)=>{
    const reactivos = await pool.query('select * from reactivos');
    console.log(reactivos)
    res.render('preguntas/listareactivos', {reactivos:reactivos});
});

router.get ('/eliminar/:id', async (req, res) => {
    const {id}= req.params;

    await pool.query('delete from reactivos where id =? ', [id]);


 res.redirect('/preguntas/lista')
})

module.exports=router;