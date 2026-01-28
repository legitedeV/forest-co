module.exports = ({ env }) => ({
  connection: {
    client: 'postgres',
    connection: {
      host: env('DATABASE_HOST', 'postgres'),
      port: env.int('DATABASE_PORT', 5432),
      database: env('DATABASE_NAME', 'forest_strapi'),
      user: env('DATABASE_USERNAME', 'forest'),
      password: env('DATABASE_PASSWORD', 'forest'),
      ssl: env.bool('DATABASE_SSL', false)
    },
    pool: { min: 0, max: 10 }
  }
})
