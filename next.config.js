const { PHASE_DEVELOPMENT_SERVER } = require('next/constants');

module.exports = (phase) => {
  if (phase === PHASE_DEVELOPMENT_SERVER) {
    return {
      env: {
        mongodb_username: 'anderson',
        mongodb_password: 'uVhqhUgYF5FSdEcM',
        mongodb_clustername: 'cluster0',
        mongodb_database: 'auth-demo-dev',
      },
    };
  }

  return {
    env: {
      mongodb_username: 'anderson',
      mongodb_password: 'uVhqhUgYF5FSdEcM',
      mongodb_clustername: 'cluster0',
      mongodb_database: 'auth-demo',
    },
  };
};
