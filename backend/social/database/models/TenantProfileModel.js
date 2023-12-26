"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class TenantProfile extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
    TenantProfile.hasMany(models.UserProfile, {
                foreignKey: "tenant_id",
                onDelete: "CASCADE",
     });
    }
  }
  TenantProfile.init(
    {
      id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true,
      },
      tenant_name: {
        type: DataTypes.STRING,
      },
      address: {
        type: DataTypes.JSON 
      },
      city: {
        type: DataTypes.STRING,
      },
        state: {
            type: DataTypes.STRING,
        },
        zip_code: {
            type: DataTypes.STRING,
        },
        phone: {
            type: DataTypes.STRING,
        },
        web_url: {
            type: DataTypes.STRING,
        },
    },
    {
      sequelize,
      tableName: "Tenant_Profile",
      modelName: "TenantProfile",
      timestamps: false,
    }
  );
  return TenantProfile;
};
