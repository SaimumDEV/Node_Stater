module.exports = (sequelize, type) => {
  const Address = sequelize.define(
    'address',
    {
      id: {
        type: type.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
      city: {
        type: type.STRING,
      },
      country: {
        type: type.STRING,
      },
    },
    {
      freezeTableName: true,
    }
  );

  return Address;
};
