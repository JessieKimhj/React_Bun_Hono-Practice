import { Hono } from "hono";

export const expensesRoute = new Hono()
.get("/", (c) =>{
    return c.json({expenses: []});
})
.post("/", (c) =>{
    return c.json({});
});
// .get("/:id", (c) =>{
//     return c.json({expenses: []});
// })
// .put("/:id", (c) =>{
//     return c.json({expenses: []});
// })
// .delete("/:id", (c) =>{
//     return c.json({expenses: []});
// })")