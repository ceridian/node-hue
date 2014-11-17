"use strict";

module.exports = function(sequelize, DataTypes) {
	var HOST = sequelize.define('HOST', {
		ipAddr: { type: DataTypes.STRING, allowNull: false },
		hostName: { type: DataTypes.STRING, allowNull: false },
		cpuCount: { type: DataTypes.STRING, allowNull: false },
		os: { type: DataTypes.STRING, allowNull: false },
		totalMem: { type: DataTypes.INTEGER, allowNull: false },
	}, {
		classMethods: {
			associate: function(models){
				HOST.hasMany(models.SERVICE, {as: 'host_id'});
			}
		}
	});
	return HOST;
};