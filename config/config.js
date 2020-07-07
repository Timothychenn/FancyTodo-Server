module.exports = {
  "development": {
    "username": process.env.CONFIG_USERNAME,
    "password": process.env.CONFIG_PASSWORD,
    "database": "Fancy_ToDo_App",
    "host": process.env.CONFIG_HOST,
    "dialect": "postgres"
  },
  "test": {
    "username": "root",
    "password": null,
    "database": "database_test",
    "host": "127.0.0.1",
    "dialect": "mysql"
  },
  "production": {
    "username": "root",
    "password": null,
    "database": "database_production",
    "host": "127.0.0.1",
    "dialect": "mysql"
  }
}