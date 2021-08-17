module.exports = (sequelize, DataTypes) => {
  const Player = sequelize.define(
    'Player',
    {
      name: DataTypes.STRING,
      email: DataTypes.STRING,
    }
    );

  return Player
};