const admin = require("../../src/config/firebase-config")

const email = 'pedrinho@gmail.com'

module.exports = async () => {
  return await admin
    .auth()
    .getUserByEmail(email)
    .then(async (userRecord) => {
      const uid = userRecord.uid
      await admin
        .auth()
        .deleteUser(uid)
        .then(() => {
          console.log('Successfully deleted user');
        })
        .catch((error) => {
          console.log('Error deleting user:', error);
        });
    })
    .catch((error) => {
      console.log('Error fetching user data:', error);
    })
}