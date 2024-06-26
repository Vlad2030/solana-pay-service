const SOLANA_NET = process.env.SOLANA_NET
const SOLANA_MAX_RPS = 10 ? process.env.SOLANA_MAX_RPS === "default": process.env.SOLANA_MAX_RPS
const SOLANA_CUSTOM_RPC = null ? process.env.SOLANA_CUSTOM_RPC?.length === 0 : process.env.SOLANA_CUSTOM_RPC

const BACKEND_SERVICE_NAME = process.env.BACKEND_SERVICE_NAME
const BACKEND_SERVICE_VERSION = process.env.BACKEND_SERVICE_VERSION
const BACKEND_SERVICE_IP = process.env.BACKEND_SERVICE_IP
const BACKEND_SERVICE_PORT = process.env.BACKEND_SERVICE_PORT
const BACKEND_SERVICE_LOG_LEVEL = process.env.BACKEND_SERVICE_LOG_LEVEL

const MONGODB_HOST = process.env.MONGODB_HOST
const MONGODB_PORT = process.env.MONGODB_PORT
const MONGO_INITDB_ROOT_USERNAME = process.env.MONGO_INITDB_ROOT_USERNAME
const MONGO_INITDB_ROOT_PASSWORD = process.env.MONGO_INITDB_ROOT_PASSWORD
const MONGODB_USER = process.env.MONGODB_USER
const MONGODB_PASSWORD = process.env.MONGODB_PASSWORD
