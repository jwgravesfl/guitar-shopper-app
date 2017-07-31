const db = require('APP/db')
const Cart = db.model('carts')

module.exports = require('express').Router()
    .get('/',
    (req, res, next) =>
        Cart.findAll()
            .then(carts => res.json(carts))
            .catch(next))
    .post('/',
    (req, res, next) =>
        Cart.create(req.body)
            .then(cart => res.status(201).json(cart))
            .catch(next))
    .get('/:userId',
    // mustBeLoggedIn,
    (req, res, next) =>
        cart.findOne({where: {
            user_id: req.params.userId
        }})
            .then(cart => res.json(cart))
            .catch(next))
    // .put('/:id',
    // // mustBeLoggedIn,
    // (req, res, next) =>
    //     Guitar.update(req.body, {where: {id:req.params.id}})
    //         .then(guitar => res.json(guitar))
    //         .catch(next))
    // .delete('/:id',
    // // mustBeLoggedIn,
    // (req, res, next) =>
    //     Guitar.destroy({
    //         where: {
    //             id: req.params.id
    //         }
    //     })
    //         .then(guitar => res.json(guitar))
    //         .catch(next));
