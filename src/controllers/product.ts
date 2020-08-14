import { uuid } from "uuidv4";
import { getProducts } from "../integrations/pipedrive";

export interface IProduct {
  id: number;
  name: string;
  code: string;
  price: number;
  quantity: number;
}

export async function formatedProducts(
  dealId: string
): Promise<IProduct[] | null> {
  const products = await getProducts(dealId);

  if (!products) {
    return null;
  }

  let formatedProducts: IProduct[] = [];

  for (const product of products) {
    formatedProducts.push({
      id: product.id,
      name: product.name,
      code: uuid(),
      price: product.item_price,
      quantity: product.quantity,
    });
  }
  return formatedProducts;
}
