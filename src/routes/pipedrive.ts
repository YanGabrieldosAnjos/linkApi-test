import { Router, Request, Response } from "express";
import { getDeals} from "../integrations/pipedrive/index";
import { createDeals } from "../controllers/deal";

const router = Router();


router.post("/dealsOnBling", async (req: Request, res: Response)=>{
  try {
    await createDeals();
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