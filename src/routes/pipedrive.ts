import { Router, Request, Response } from "express";
import {getPipedriveDeals, getDeals} from "../integrations/pipedrive/index";
import { storeRequest } from "../integrations/bling";

const router = Router();


router.post("/deals", async (req: Request, res: Response)=>{
  try {
    const deals = await getPipedriveDeals();
    await storeRequest(deals);
    res.send("Oportunidades inseridas com sucesso na bling!");
  }catch(error){
    console.log(error);
  }
});

router.get("/dealsOnBling", async (req: Request, res: Response)=>{
  try {
    const deals = await getDeals();
    res.json(deals);
  }catch(error){
    console.log(error);
  }
});
export default router;  