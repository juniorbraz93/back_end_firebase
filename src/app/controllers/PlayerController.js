const { Player } = require('../models')
const firebase = require('../../config/firebase-login-config')

class PlayerController {
  async index(req, res) {
    let player = await Player.findAll()
    
    return res.json({
      data: player,
    })
  }

  async register(req, res) {
    const player = req.body

    if (await Player.findOne({where: { email: player.email}})) {
      return res.json({
        message: "Player already exists"
      })
      
    } else {

      await Player.create({
        name: player.name,
        email: player.email,
      })

      return res.json({
        data: player,
        message: "Player successfully registered!"
      })

    }
   
  }

  async login(req, res) {
    try {
      const player = req.body

      await firebase
        .auth()
        .signInWithEmailAndPassword(player.email, player.password);

      const token = await firebase
        .auth()
        .currentUser.getIdToken(/* forceRefresh */ true);

      return res.status(200).send({
        token: token,
      })
      
    } catch (error) {

      console.log(error);

    }
  }
   
}


module.exports = new PlayerController()