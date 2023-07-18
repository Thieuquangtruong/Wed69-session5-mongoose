const router = require('express').Router()
const userRouter = require('./user')
const customerRouter = require('./customer')
const restaurantRouter = require('./restaurant')


router.use('/user', userRouter)
router.use('/customer', customerRouter)
router.use('/restaurant', restaurantRouter)


module.exports = router