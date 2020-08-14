import axios from "axios";
import urlencode from "urlencode";
import { IDeal } from "../../controllers/deal";
const { API_TOKEN_BLING, BASE_URL_BLING } = process.env;
const apiKey = API_TOKEN_BLING;

const url = BASE_URL_BLING;
const blingApi = axios.create({
  baseURL: url,
  data: {
    json: true,
    resolveWithFullResponse: true,
  },
});

export async function storeRequest(deals: IDeal[]) {
  await Promise.all(
    deals.map(async (deal) => {
      const xml = urlencode(`<?xml version="1.0" encoding="UTF-8"?>
        <pedido>
            <cliente>
                <nome>${deal.name}</nome>
                <endereco>${deal.address}</endereco>
                <itens>
                ${deal.products?.map(
                  (product) => `
                        <item>
                            <codigo>${product.code}</codigo>
                            <descricao>${product.name}</descricao>
                            <un>Un</un>
                            <qtde>${product.quantity}</qtde>
                            <vlr_unit>${product.price}</vlr_unit>
                        </item>`
                )}
                </itens>
                <parcelas>
                </parcelas>
            </cliente>
        </pedido>`);

      await blingApi.post(`?apikey=${apiKey}&xml=${xml}`);
    })
  );
}
