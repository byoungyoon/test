module.exports = {
  apps: [
    {
      name: (process.env.ENV_STR ? process.env.ENV_STR + '-' : '') + 'frontend',
      script: './node_modules/next/dist/bin/next',
      args: 'start -p 3000', // Specify the port you want to use
      watch: false,
      // cwd:"",
      interpreter_args: '',
      // instances:-1,
      env: {
        NODE_ENV: 'production', // Change to 'production' for production environment
      },
    },
  ],
};
