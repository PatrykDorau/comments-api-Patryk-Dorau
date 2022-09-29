module.exports = (sequelize, DataTypes) => {
  
  const Comment = sequelize.define('comment', 
  {
    message: DataTypes.STRING,
    author: DataTypes.STRING,
  },
  {
    freezeTableName: false
  });

  return Comment;
}