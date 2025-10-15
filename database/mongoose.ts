import { error } from 'console';
import mongoose from 'mongoose';
import { cache } from 'react';

import dotenv from 'dotenv';
dotenv.config();

const MONGO_URI = process.env.MONGO_URI;


declare global{
    var mongooseCache: {
        conn: typeof mongoose | null ;
        promise: Promise<typeof mongoose > | null;
    }
}

let cached= global.mongooseCache;

if(!cached) {
    cached = global.mongooseCache ={conn: null , promise :null};
}

export const connectToDatabase = async () =>{
    if(!MONGO_URI) throw new Error('MONGO_URI must be set within .env');

    if(cached.conn) {
        console.log(`Using existing database connection`);
        return cached.conn;
    }

    if(!cached.promise) {
        console.log(`Attempting to connect to MongoDB: ${MONGO_URI}`);
        cached.promise = mongoose.connect(MONGO_URI, { bufferCommands: false});
    }

    try {
        cached.conn = await cached.promise;
        console.log(`Successfully connected to database (${process.env.NODE_ENV})`);
        return cached.conn;
    }catch(err) {
        cached.promise = mongoose.connect(MONGO_URI, { bufferCommands: false });
        console.error(`Failed to connect to database: ${err}`);
        throw err;
    }
}

export const testDatabaseConnection = async () => {
    try {
        const conn = await connectToDatabase();

        // Check if connection is ready
        if (conn.connection.readyState === 1) {
            console.log('✅ Database connection test successful');
            console.log(`Connected to MongoDB database: ${conn.connection.name}`);
            console.log(`Host: ${conn.connection.host}`);
            console.log(`Port: ${conn.connection.port}`);
            return { success: true, message: 'Database connection successful', details: {
                database: conn.connection.name,
                host: conn.connection.host,
                port: conn.connection.port
            }};
        } else {
            const states = ['disconnected', 'connected', 'connecting', 'disconnecting'];
            console.log(`❌ Database connection test failed: Connection state is ${states[conn.connection.readyState]}`);
            return { success: false, message: `Connection state is ${states[conn.connection.readyState]}` };
        }
    } catch (error) {
        console.error('❌ Database connection test failed:', error);
        // @ts-ignore
        return { success: false, message: `Connection error: ${error.message}` };
    }
}
