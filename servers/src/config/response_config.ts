
export const responseConfig=(res:any,data:any,mess:any,code:any)=>{
    res.json({
        statusCode:code,
        data:data,
        message:mess,
        date: new Date
    })   
}