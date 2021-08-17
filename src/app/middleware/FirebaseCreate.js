const admin = require("../../config/firebase-config")

module.exports = (req, res, next) => {
  async function create() {
    try {
      await admin.auth().createUser({
        email: req.body.email,
        password: req.body.password,
      });

    } catch (error) {
      console.log(error);
      return res.status(401).send({erro: error, message: 'Error de Criação.'})
    }
  }
  create()

  next()
}