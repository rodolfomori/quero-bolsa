module.exports = {
  plugins: [
    [
      'module-resolver',
      {
        alias: {
          components: './src/components',
          containers: './src/containers',
        },
      },
    ],
  ],
}
