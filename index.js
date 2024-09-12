const express=require("express");
const zod=require("zod");
const app=express();
// 
// {
// email:string=> email
// password:atleast 8 letters 
// country:"IN","US"
//}
const schema = zod.object({
    email:zod.string().email(),
    password:zod.string().min(8),
})
app.use(express.json( ));

app.post("/login",function(req,res){
    const response=schema.safeParse(req.body)

    if(!response.success){
        res.status(411).json({
            msg:"input is invalid"
        })
    }
    else{
    res.send({
        response
    })}
});

app.listen(3000);
