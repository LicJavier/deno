import { Application , config } from "./deps.ts";
import {router} from './src/routes/index.routes.ts'

const app = new Application();


app.use(router.routes())
app.use(router.allowedMethods())
const  {PORT}  = config();

console.log(`Escuchando en puerto ${PORT}`)
await app.listen({ port: Number(PORT) });
