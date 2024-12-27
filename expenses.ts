import { Hono } from "hono";
import { zValidator } from "@hono/zod-validator";
import z from "zod";

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

const createPostSchema = z.object({
    title : z.string().min(3).max(100),
    amount: z.number().int().positive()
})

export const  expensesRoute = new Hono()
.get("/", async(c) =>{
    return c.json({expenses: fakeExepenses});
})
.post("/", zValidator("json", createPostSchema),async(c) =>{
    const expense = await c.req.valid("json")
    fakeExepenses.push({...expense, id: fakeExepenses.length+1})
    // const expense = createPostSchema.parse(data)
    // console.log(expense.amount)
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