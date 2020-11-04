module.exports = {
  apps: [
    {
      name: 'NodeApiClient',
      script: './src/index.js',
      instances: 1,
      watch: './src/index.js',
    },
    {
      name: 'ThumbnailCreator',
      script: './services/serviceThumbnailCreator.js',
      instances: 1,
      watch: './services/serviceThumbnailCreator.js',
    },
  ],

  deploy: {
    production: {
      user: 'SSH_USERNAME',
      host: 'SSH_HOSTMACHINE',
      ref: 'origin/master',
      repo: 'GIT_REPOSITORY',
      path: 'DESTINATION_PATH',
      'pre-deploy-local': '',
      'post-deploy': 'npm install && pm2 reload ecosystem.config.js --env production',
      'pre-setup': '',
    },
  },
};
