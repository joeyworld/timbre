const resources = {};

// TODO add hostname / username / password after initializing rds
resources.database = {
  schema: 'timbre',
  dialect: 'mysql',
  hostname: 'rds_hostname',
  username: 'timbre',
  password: 'password',
};

resources.cache = {
  host: 'timbre-cache.n6gdus.ng.0001.apn2.cache.amazonaws.com',
};

module.exports = resources;
