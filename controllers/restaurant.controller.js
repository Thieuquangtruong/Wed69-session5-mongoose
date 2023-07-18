const mongoose = require('mongoose')
const Restaurant = require('../models/restaurant.model')

class restaurantController {
    async createRestaurant (req, res) {
        try {
            const newRestaurant = await Restaurant.create(req.body)
            return res.status(200).json(newRestaurant)
        } catch (error) {
            console.log(error)
            return res.status(500).json(error)
        }
    }
 
    async pagination(req, res) {
        try {
            const pageSize = req.query.pageSize || 3
            const pageIndex = req.query.pageIndex || 1  
            
            const result = await Restaurant.find().skip(pageSize * pageIndex - pageSize).limit(pageSize)
            return res.status(200).json({ restaurant: result})
        } catch (error) {
            console.log(error)
            return res.status(500).json(error)
        }
       
    }

    async getAllRestaurant(req, res) {
        try {
           const result = await Restaurant.find()
             
            return res.status(200).json({ restaurant: result})
        } catch (error) {
            console.log(error)
            return res.status(500).json(error)
        }
       
    }

    async getRestaurantByZipCode(req, res) {
        try {
            const zipCode = req.body.zipcode
            const result = await Restaurant.find({'address.zipcode': zipCode})
            return res.status(200).json({result})
        } catch (error) {
            return res.status(500).json({ error: 'Internal Server Error' })
        }
    }

}

module.exports = new restaurantController()
