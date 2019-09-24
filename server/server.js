require('./config/config');

const EXPRESS = require('express');
const APP = EXPRESS();
const BODYPARSER = require('body-parser');
const { list } = require('./cp/cp');

//Middlewares pasan primero por aqui
APP.use(BODYPARSER.urlencoded({extended: false}));
APP.use(BODYPARSER.json());

//obtener registros
APP.get('/cp/:cp', (_req, _res) => {
    const response = list(_req.params.cp);
    if(response.length <= 0) {
        _res.status(202).json({error: true, mensaje: 'codigo postal no encontrado', status: 202})
    } else {
        _res.status(200).json({data: response, error: false, status: 200});
    }
});

APP.listen(process.env.PORT, () => {
    console.log(`escuchando puerto ${process.env.PORT}`);
});