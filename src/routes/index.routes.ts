import { Router } from "../../deps.ts"
import { ssr } from "../../page.ts";
import { addColor } from "../controller/index.controller.ts";
import { colors } from "../../colors.ts";

export const router = new Router()
.get("/", ({response}) => {
    response.body = ssr();
    console.log(colors)
  })
router.post('/', async ({response , request}) =>{
    const body = await request.body().value;
    const color = String(body);
    const color2 = color.slice(9,16);
    const add = "#";
    addColor(add.concat(color2))
  response.redirect('/')
})
