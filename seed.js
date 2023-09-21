const {PrismaClient} = require("@prisma/client");
const {hash} = require("bcryptjs");

(async ()=>{
   try{
       const prisma = new PrismaClient()
       const user = await prisma.user.create({
           data : {
               email : "admin@gmail.com",
               role : "ADMIN",
               firstname : "Bollo",
               lastname : "Aggrey",
               password : await hash("admin", 10)
           }
       })
       console.log(user)
   }
   catch (error) {
       console.log(error.message)
   }

})()