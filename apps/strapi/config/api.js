module.exports = ({ env }) => ({
  rest: {
    defaultLimit: 25,
    maxLimit: 100
  },
  token: {
    salt: env('JWT_SECRET')
  }
})
