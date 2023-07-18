const router = require('express').Router()
const restaurantController = require('../controllers/restaurant.controller')

router.post('/', restaurantController.createRestaurant)
router.get('/paginate', restaurantController.pagination)
router.get('/', restaurantController.getAllRestaurant)
router.get('/getbyzipcode', restaurantController.getRestaurantByZipCode)

module.exports = router