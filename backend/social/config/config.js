const { POSTGRES_PASSWORD, POSTGRES_USERNAME,SOCIAL_DB,POSTGRES_HOST } = process.env;
module.exports = {
  development: {
    username: POSTGRES_USERNAME,
    password: POSTGRES_PASSWORD,
    database: SOCIAL_DB,
    host: POSTGRES_HOST,
    dialect: "postgres",
  },
};
