import axios from "axios";
import {IDealResponse, IProductResponse} from "./pipedriveTypes";
const {API_TOKEN_PIPEDRIVE, BASE_URL_PIPEDRIVE} = process.env;

import {dealModel} from "../../models";

const pipedriveApi = axios.create({
    baseURL: BASE_URL_PIPEDRIVE,
    data: {
        json: true,
        resolveWithFullResponse: true,
    },
});

export async function getProducts(dealId: string): Promise<IProductResponse[] | null>{
    const res =  await pipedriveApi.get(`/${dealId}/products/?api_token=${API_TOKEN_PIPEDRIVE}`);
    const products: IProductResponse[] = res.data.data;
    
    if(!products){
        return null;
    }
    
    return products;
}

export async function getPipedriveDeals(): Promise<IDealResponse[]>{
    
    const res = await pipedriveApi.get(`/?api_token=${API_TOKEN_PIPEDRIVE}&status=won`);
    
    const deals: IDealResponse[] = res.data.data;
    
    return deals;   
}

export async function getDeals(){
    return dealModel.find();
}