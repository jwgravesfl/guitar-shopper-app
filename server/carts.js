const db = require('APP/db');
const Cart = db.model('carts');
const Guitar = db.model('guitars');
const Carts_Guitars = db.model('carts_guitars');

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
        Cart.findOne({
            where: {
                user_id: req.params.userId
            }, include: [Guitar]
        })
            .then(cart => res.json(cart))
            .catch(next))

    .post('/:cartId',
    // mustBeLoggedIn,
    (req, res, next) => {

        const cartProm = Cart.findOne({
            where: {
                id: req.params.cartId
            }
        });

        console.log('body', req.body)
        const guitarProm = Guitar.findOne({
            where: {
                id: req.body.guitarId
            }
        });

        const cartGuitar = Carts_Guitars.findOne({
            where: {
                cart_id: req.params.cartId,
                guitar_id: req.body.guitarId
            }
        })

        Promise.all([cartProm, guitarProm, cartGuitar])
            .then((proms) => {
                const cart = proms[0];
                const guitar = proms[1];
                const cgJoinTable = proms[2]
                cart.addGuitar(guitar.id)
                    .then(something => {
                        console.log(something)
                        if (!something.length) {
                            console.log('okajsdf');
                            cgJoinTable.quantity++;
                            cgJoinTable.save();

                        }
                    }); // addGuitar method is actually a find or create

                res.json(cart);
            })
    })


    .delete('/:cartId', (req, res, next) => {
        Cart.findById(req.params.cartId)
            .then(cart => 
            {console.log(req.body)
            cart.removeGuitar(req.body.guitarId)})
            .then(res.sendStatus(204))
    })

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
