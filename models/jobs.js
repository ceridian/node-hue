"use strict";

module.exports = function(sequelize, DataTypes) {
	var JOB = sequelize.define('JOB', {
		type: { type: DataTypes.STRING, allowNull: false },
		statement: DataTypes.STRING,
		outDest: { type: DataTypes.STRING, allowNull: false },
		jobID: { type: DataTypes.STRING, allowNull: false },
		startDtTm: { type: DataTypes.DATETIME, allowNull: false },
		endDtTm: DataTypes.DATE
	});/*, {
		classMethods: {
			associate: function(models){
				JOB.belongsTo(models.USER);
			}
		}
	});*/
	return JOB;
};