import { IProduct, getDeals, getPipedriveDeals } from "../integrations/pipedrive";
import { formatedProducts } from "./product";
import { dealModel } from "../models";
import { storeRequest } from "../integrations/bling";

export interface IDeal {
    id: number;
    name: string;
    total_value: number;
    expected_close_date: string;
    address: string | null;
    products: IProduct[] | null;
}

export async function createDeals(){

    const deals = await getPipedriveDeals()
    
     let formatedDeals: IDeal[] = [];
     for (const deal of deals){
         formatedDeals.push({
             id: deal.id,
             address: deal.org_id.address,
             name: deal.org_name,
             expected_close_date: deal.expected_close_date ?? "Pipedrive não retornou data de fechamento",
             total_value: deal.weighted_value,
             products: await formatedProducts(deal.id.toString())
         });
     }
     await storeRequest(formatedDeals);
     await dealModel.insertMany(formatedDeals);
}