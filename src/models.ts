import {Document, createConnection, set} from 'mongoose';
const {MONGO_USER, MONGO_PASSWORD, DB_NAME, DB_URI} = process.env;

import * as s from './schemas';
import { IProduct } from './controllers/product';

export const mongoOptions = {
    user: MONGO_USER,
    pass: MONGO_PASSWORD,
    useNewUrlParser: true,
    dbName: DB_NAME,
    authSource: 'admin'
};

const uri = DB_URI;

const conn =  createConnection(uri!, mongoOptions);

conn.on(
    "error",
    console.log.bind(console, "Erro ao conectar")
);
conn.once(
    "open",
    console.log.bind(console, "Conexão estabelecida")
);

set('useCreateIndex', true);


interface IDBDeal extends Document {
    id: number;
    name: string;
    total_value: number;
    expected_close_date: string;
    address: string | null;
    products: Array<IProduct> | null;
}

export const dealModel = conn.model<IDBDeal>("deals", s.dealSchema);

