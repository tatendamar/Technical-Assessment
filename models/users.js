'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class users extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
    toJSON() {
      return {...this.get(), id: undefined, password: undefined}
    }
  }
  users.init({
    uuid: {
     type: DataTypes.UUID,
     defaultValue: DataTypes.UUIDV4
    },
    first_name: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notNull: {msg: 'User must have a name'},
        notEmpty: {msg: 'Input first name'},
      }
    },
    last_name: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notNull: {msg: 'User must have a name'},
        notEmpty: {msg: 'Input last name'},
      }
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
      validate: {
        notNull: {msg: 'Email must be provided'},
        notEmpty: {msg: 'Email should not be empty'},
        isEmail: {msg: 'Must be a valid email address'},
      }
    },
    gender: {
      type: DataTypes.STRING,
      allowNull: false,
       validate: {
        notNull: {msg: 'Gender must be provided'},
        notEmpty: {msg: 'Gender should not be empty'},
      }
    },
    hobbies:{
      type: DataTypes.STRING,
      allowNull: false,
       validate: {
        notNull: {msg: 'Hobbies must be provided'},
        notEmpty: {msg: 'Hobbies should not be empty'},
      }
    },
    occupation:{
      type: DataTypes.STRING,
      allowNull: false,
       validate: {
        notNull: {msg: 'Occupation must be provided'},
        notEmpty: {msg: 'Occupation should not be empty'},
      }
    },
    username: {
      type: DataTypes.STRING,
      allowNull: false,
       validate: {
        notNull: {msg: 'username must be provided'},
        notEmpty: {msg: 'username should not be empty'},
      }
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false,
       validate: {
        notNull: {msg: 'password must be provided'},
        notEmpty: {msg: 'password should not be empty'},
      }
    },
    address: {
      type: DataTypes.STRING,
      allowNull: false,
       validate: {
        notNull: {msg: 'Address must be provided'},
        notEmpty: {msg: 'Address should not be empty'},
      }
    }
  }, {
    sequelize,
    modelName: 'users',
  });
  return users;
};