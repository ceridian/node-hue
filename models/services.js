"use strict";

module.exports = function(sequelize, DataTypes) {
	var SERVICE = sequelize.define('SERVICE', {
		serviceName: { type: DataTypes.STRING, allowNull: false },
		state: { type: DataTypes.STRING, allowNull: false }
	}, {
		classMethods: {
			associate: function(models){
				SERVICE.belongsTo(models.HOST);
			}
		}
	});
	return SERVICE;
};