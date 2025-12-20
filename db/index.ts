import { drizzle } from 'drizzle-orm/postgres-js';
import postgres from 'postgres';
import "dotenv/config"

const connectionString = process.env.DATABASE_URL!;

declare global {
  var postgresClient: ReturnType<typeof postgres> | undefined;
}

const client = globalThis.postgresClient || postgres(connectionString, {
  prepare: false,
  ssl: 'require'
});

if (process.env.NODE_ENV !== 'production') {
  globalThis.postgresClient = client;
}

export const db = drizzle(client);