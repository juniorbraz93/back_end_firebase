const admin = require("../../config/firebase-config")

module.exports = (req, res, next) => {
  async function validateFirebaseIdToken() {
    const idToken = req.headers.authorization.split(' ')[1];
    try {
      const decodedIdToken = await admin.auth().verifyIdToken(idToken);
      req.user = decodedIdToken;
      next();
      return;
    } catch (error) {
      res.status(403).send({error, message: 'Unauthorized'});
      return;
    }
  }
  validateFirebaseIdToken()
};