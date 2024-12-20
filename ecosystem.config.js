module.exports = {
  apps: [
    {
      name: 'my-nextjs-app', // Name of the application
      script: 'node_modules/next/dist/bin/next', // Path to the Next.js CLI
      args: 'start', // Next.js start command
      env: {
        NODE_ENV: 'production', // Environment variables
        PORT: 3000, // Port for your Next.js app
      },
    },
  ],
};
