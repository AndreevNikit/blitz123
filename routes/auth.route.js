const {Router} = require('express')
const router = Router()
const User = require('../models/User')
const {check, validationResult} = require('express-validator')
const bcrypt = require('bcryptjs')
const jwToken = require('jsonwebtoken')

router.post('/login',  

    [
        check('email', 'Некорректный email').isEmail(),
        check('password', 'Некорректный пароль').isLength({ min: 6})
    ],

    async (req, res) => {
    try{
        const errors = validationResult(req)
        if (!errors.isEmpty()) {
            return res.status(400).json({
                errors: errors.array(),
                message: 'Некорректные данные при регистрации'
            }) 
        }

        const { email, password } = req.body

        const isUsed = await User.findOne({ email })

        if (isUsed) {
            return res.status(409).json({message: 'Данный email уже занят, попробуйте другой.'})
        }

        const hashedPassword = await bcrypt.hash(password, 12)

        const user = new User({
            email, password: hashedPassword
        })

        await user.save()

        res.status(201).json({message: 'Пользователь создан!'})

    }
    catch (error) {
        console.log(error)
    }
})

router.post('/auth',  

    [
        check('email', 'Некорректный email').isEmail(),
        check('password', 'Некорректный password').exists()
    ],

    async (req, res) => {
    try{
        const errors = validationResult(req)
        if (!errors.isEmpty()) {
            return res.status(400).json({
                errors: errors.array(),
                message: 'Некорректные данные при регистрации'
            }) 
        }

        const { email, password } = req.body
        
        const user = await User.findOne({ email })

        if (!user) {
            return res.status(400).json({message: 'Такого email нет в базе.'})
        }

        const isMatch = bcrypt.compare(password, user.password)

        if(!isMatch) {
            return res.status(400).json({message: 'Неверный пароль!'})
        }

        const jwtSecret = 'lkfdsngo3ing392nuf02nfmgun3089g3n'

        const token = jwToken.sign(
            {userID: user.id},
            jwtSecret,
            {expiresIn: '1h'}
        )

        res.json({token, userID: user.id})


    }   catch (error) {
        console.log(error)
    }
})

module.exports = router