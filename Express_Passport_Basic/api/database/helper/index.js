function oneToOne(Model1, Model2) {
  Model1.hasOne(Model2);
  Model2.belongsTo(Model1);
}

function oneToMany(Model1, Model2) {
  Model1.hasMany(Model2);
  Model2.belongsTo(Model1);
}

function manyToMany(Model1, Model2, Model3) {
  Model1.belongsToMany(Model2, {
    through: Model3,
  });
  Model2.belongsToMany(Model1, {
    through: Model3,
  });
}

module.exports = {
  manyToMany: manyToMany,
  oneToMany: oneToMany,
  oneToOne: oneToOne,
};
