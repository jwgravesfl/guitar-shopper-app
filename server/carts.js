const db = require('APP/db');
const Cart = db.model('carts');
const Guitar = db.model('guitars');
const Carts_Guitars = db.model('carts_guitars');
const Order = db.model('orders');
const PurchaseItem = db.model('purchaseItems');

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
        Cart.findOrCreate({
            where: {
                user_id: req.params.userId
            }, include: [Guitar]
        })
            .then(cart => res.json(cart[0]))
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

    .post('/checkout', (req, res, next) => {
        var completedOrder;

        Order.create({
            address: req.body.address,
            city: req.body.city,
            state: req.body.state,
            zipcode: req.body.zipcode,
            creditCardNumber: req.body.card-number,
            cardHolderName: req.body.card-holder-name,
            expirationMonth: req.body.expiry-month,
            expirationYear: req.body.expiry-year
        })
        .then(order => {
            completedOrder = order;
            const purchaseItems = req.body.guitars.map((guitar) => {
                return {
                    orderId: order.id,
                    price: guitar.price,
                    guitarId: guitar.id
                }
            })
            return Promise.all(purchaseItems)
            .map(item => {
                return PurchaseItem.create(item)
            })
        })
        .then(() => {
            res.status(201).json(completedOrder);
        })
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
