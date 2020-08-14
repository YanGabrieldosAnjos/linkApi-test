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

export async function getProducts(dealId: string): Promise<IProduct[] | null>{
    const res =  await pipedriveApi.get(`/${dealId}/products/?api_token=${API_TOKEN}`);
    const products: IProductResponse[] = res.data.data;
    
    if(!products){
        return null;
    }
    let formatedProducts: IProduct[] = [];
    for(const product of products){
        formatedProducts.push({
           
                id: product.id,
                name:  product.name,
                code: uuid(),
                price: product.item_price,
                quantity:product.quantity,
             
        })
    }
    return formatedProducts;
}

export async function getPipedriveDeals(): Promise<IDeal[]>{
    
    const res = await pipedriveApi.get(`/?api_token=${API_TOKEN}&status=won`);
    
    const deals: IDealResponse[] = res.data.data;
    let formatedDeals: IDeal[] = [];
    for (const deal of deals){
        formatedDeals.push({
            id: deal.id,
            address: deal.org_id.address,
            name: deal.org_name,
            expected_close_date: deal.expected_close_date ?? "Pipedrive não retornou data de fechamento",
            total_value: deal.weighted_value,
            products: await getProducts(deal.id.toString())
        });
    }
    await dealModel.insertMany(formatedDeals);
    return formatedDeals;   
}

export async function getDeals(){
    return dealModel.find();
}