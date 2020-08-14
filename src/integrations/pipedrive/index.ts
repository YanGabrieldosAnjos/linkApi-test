import axios from "axios";
import {IDealResponse, IProductResponse} from "./pipedriveTypes";
const {API_TOKEN, BASE_URL} = process.env;
import { uuid } from "uuidv4";
import {dealModel} from "../../models";

export interface IProduct {
    id: number;
    name: string;
    code: string;
    price: number;
    quantity: number;
}
export interface IDeal {
    id: number;
    name: string;
    total_value: number;
    expected_close_date: string;
    address: string | null;
    products: IProduct[] | null;
}

const pipedriveApi = axios.create({
    baseURL: BASE_URL,
    data: {
        json: true,
        resolveWithFullResponse: true,
    },
});

export async function getProducts(dealId: string): Promise<IProductResponse[] | null>{
    const res =  await pipedriveApi.get(`/${dealId}/products/?api_token=${API_TOKEN}`);
    const products: IProductResponse[] = res.data.data;
    
    if(!products){
        return null;
    }
    
    return products;
}

export async function getPipedriveDeals(): Promise<IDealResponse[]>{
    
    const res = await pipedriveApi.get(`/?api_token=${API_TOKEN}&status=won`);
    
    const deals: IDealResponse[] = res.data.data;
    
    return deals;   
}

export async function getDeals(){
    return dealModel.find();
}