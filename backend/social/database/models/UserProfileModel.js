"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class UserProfile extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
        UserProfile.belongsTo(models.TenantProfile, {
            foreignKey: "tenant_id",
        });
    }
  }
  UserProfile.init(
    {
      id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true,
      },
        first_name: {
            type: DataTypes.STRING,
        },
        last_name: {
            type: DataTypes.STRING,
        },
        department: {
            type: DataTypes.STRING,
        },
        designation: {
            type: DataTypes.STRING,
        },
        tenant_id: {
            type: DataTypes.INTEGER,
        },
        image_url: {
            type: DataTypes.STRING,
        },
        city: {
            type: DataTypes.STRING,
        },
        country: {
            type: DataTypes.STRING,
        },
        bio: {
            type: DataTypes.STRING,
        },
        social_links: {
            type: DataTypes.JSON,
        },
        employee_id: {
            type: DataTypes.INTEGER,
        },
    },
    {
      sequelize,
      tableName: "User_Profile",
      modelName: "UserProfile",
      timestamps: false,
    }
  );
  return UserProfile;
};
