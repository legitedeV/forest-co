module.exports = ({ env }) => ({
  upload: {
    config: {
      providerOptions: {
        sizeLimit: 25 * 1024 * 1024
      }
    }
  }
})
