//  Archivo para la configuración inicial del proyecto

// Creación de las referencias(Módulos)

const express = require ('express');
const morgan = require ('morgan');
const path = require('path');
const exphbs = require('express-handlebars')

// Instancias

const app = express ();



// Configuraciones

app.set('port', process.env.port || 4002);

app.set('views', path.join(__dirname, 'views'));

app.engine('.hbs', exphbs.engine({
    dafaultLayout: 'main',
    layoutsDir:path.join(app.get('views'), 'layouts'),
    partialsDir:path.join(app.get('views'), 'partials'),
    extname: '.hbs',
    helpers: require('./lib/handlebars')
}));

app.set('view engine', '.hbs')

// middlewars

app.use (morgan ('dev'));
app.use(express.urlencoded({extended:false}));
app.use(express.json());

// Variables globales

// Routes
app.use(require('./routes'));
app.use('/categorias', require('./routes/categorias'));
app.use('/preguntas', require('./routes/preguntas.js'))
app.use('/tiempos', require('./routes/tiempos'))





//app.use(require('./routes/index.js'));
app.use(require('./routes/'))

// Recursos públicos

app.use(express.static(path.join(__dirname, 'public')));

// Servidor

app.listen(app.get('port'), () => {
    console.log('Servidor inicializado:', app.get('port'));

    
app.use ('preguntas', require('./routes/preguntas.js'));
});