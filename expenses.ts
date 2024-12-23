import { Hono } from "hono";

type Expense = {
    id: number,
    title: string,
    amount : number
}

const fakeExepenses: Expense[] = [
    {
        id: 1,
        title: "test",
        amount: 100
    }, 
    {
        id: 2,
        title: "test2",
        amount: 200
    }
]

export const expensesRoute = new Hono()
.get("/", async(c) =>{
    return c.json({expenses: fakeExepenses});
})
.post("/", async(c) =>{
    const expense = await c.req.json()
    console.log({expense})

    return c.json({expense});
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