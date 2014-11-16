"use strict";

module.exports = function(sequelize, DataTypes) {
	var USER = sequelize.define('USER', {
		user: { type: DataTypes.STRING, allowNull: false },
		pass: { type: DataTypes.STRING, allowNull: false },
		email: DataTypes.STRING,
		firstName: DataTypes.STRING,
		lastName: DataTypes.STRING,
	});/*, {
		classMethods: {
			associate: function(models){
				USER.hasMany(models.JOB, {as: 'user'});
			}
		}
	});*/
	return USER;
};