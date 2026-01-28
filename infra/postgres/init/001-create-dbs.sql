DO $$
BEGIN
  IF NOT EXISTS (SELECT FROM pg_database WHERE datname = 'forest_medusa') THEN
    CREATE DATABASE forest_medusa;
  END IF;
  IF NOT EXISTS (SELECT FROM pg_database WHERE datname = 'forest_strapi') THEN
    CREATE DATABASE forest_strapi;
  END IF;
END $$;
