'use strict';
module.exports = function(sequelize, DataTypes) {
  var Folder = sequelize.define('Folder', {
    id:DataTypes.INTEGER,
    name: DataTypes.STRING,
    size: DataTypes.STRING,
    type: DataTypes.STRING,
    folder_id: DataTypes.INTEGER,
    user_id: DataTypes.INTEGER,
    forder_privacy: DataTypes.STRING,
    delete_status: DataTypes.STRING,
    created_at: DataTypes.STRING,
    copy_count: DataTypes.STRING,
    parent: DataTypes.STRING,
    has_copy: DataTypes.STRING

  }, {
    
    classMethods: {
      associate: function(models) {
        // associations can be defined here
      }
    }
  });
  return Folder;
};
