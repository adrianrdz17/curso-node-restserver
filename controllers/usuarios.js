const { response, request } = require('express');

const usuariosGet = (req = request, res = response) => {
    const { q, nombre = 'No name', apikey, page = 1, limit = 10 } = req.query;

    res.status(202).json({
        msg: 'get api - controlador',
        q,
        nombre,
        apikey,
        page,
        limit,
    });
};

const usuariosPost = (req, res = response) => {
    const { nombre, edad } = req.body;

    res.json({
        msg: 'Post API - usuariosPost',
        nombre,
        edad,
    });
};

const usuariosPut = (req, res = response) => {
    const { id } = req.params;

    res.status(403).json({
        msg: 'put api - controlador',
        id,
    });
};

const usuariosPatch = (req, res = response) => {
    res.status(403).json({
        msg: 'patch api - controlador',
    });
};

const usuariosDelete = (req, res = response) => {
    res.status(403).json({
        msg: 'delete api - controlador',
    });
};

module.exports = {
    usuariosGet,
    usuariosPost,
    usuariosPut,
    usuariosPatch,
    usuariosDelete,
};
