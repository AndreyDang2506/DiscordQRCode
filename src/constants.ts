import dotenv from "dotenv";
dotenv.config()

export const QRCode = "qrcode";
export const GoogleQRCodeURLRoot = "https://chart.googleapis.com/chart?cht=qr";
export const TOKEN = process.env.DISCORD_TOKEN || '';
export const CLIENT_ID = process.env.DISCORD_CLIENT_ID || '';
export const GUILD_ID = process.env.DISCORD_GUILD_ID || '';