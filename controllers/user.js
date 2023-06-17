'user strict'

const User = require('../models/user')
const service = require('../services')

async function signUp(req, res) {
    try {
        const findUser = await User.findOne({ email: req.body.email });

        if (Object.keys(findUser).length) {
            return res.status(500).send({ message: `Error al crear el usuario` })
        }

        const user = new User({
            email: req.body.email,
            displayName: req.body.displayName,

        });

        const savedUser = await user.save();

        res
            .status(200).send({ token: service.createToken(savedUser) })
    } catch (error) {
        res.status(500).send({ message: `Error al crear el usuario: ${error}` })
    }

}

async function signIn(req, res) {
    try {
        const user = await User.findOne({ email: req.body.email });
        if (!Object.keys(user).length) return res.status(404).send({ message: 'No existe el usuario' })
        req.user = user
        res.status(200).send({
            message: 'Te has logueado correctamente',
            token: service.createToken(user)
        })

    } catch (error) {
        res.status(500).send({ message: err })
    }

}

module.exports = {
    signUp,
    signIn
}