import { IDeal } from "../pipedrive";
import axios from "axios";
import urlencode from "urlencode";
const apiKey = `be6d60e62877d4223ae282aad8278cc2df3856a692f9ed68debe2db4690c9aefd9bf65a9`;

const url = "https://bling.com.br/Api/v2/pedido/json/";
const blingApi = axios.create({
    baseURL: url,
    data: {
        json: true,
        resolveWithFullResponse: true,
    },
});

export async function storeRequest(deals: IDeal[]){


    await Promise.all(deals.map(async (deal) =>{
        const xml = urlencode(`<?xml version="1.0" encoding="UTF-8"?>
        <pedido>
            <cliente>
                <nome>${deal.name}</nome>
                <endereco>${deal.address}</endereco>
                <itens>
                ${
                    deal.products?.map(product =>`
                        <item>
                            <codigo>${product.code}</codigo>
                            <descricao>${product.name}</descricao>
                            <un>Un</un>
                            <qtde>${product.quantity}</qtde>
                            <vlr_unit>${product.price}</vlr_unit>
                        </item>`,
                    )
                }
                </itens>
                <parcelas>
                </parcelas>
            </cliente>
        </pedido>`);

       await blingApi.post(`?apikey=${apiKey}&xml=${xml}`)
       
    }));
}