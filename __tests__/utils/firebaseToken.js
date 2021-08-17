const player = {
  email: 'pedrinho@gmail.com',
  password: '123456'
}
const firebase = require('../../src/config/firebase-login-config')

console.log(firebase);


module.exports = async () => {
  await firebase
  .auth()
  .signInWithEmailAndPassword(player.email, player.password);

    const token = await firebase
      .auth()
      .currentUser.getIdToken(/* forceRefresh */ true);

  return token
}