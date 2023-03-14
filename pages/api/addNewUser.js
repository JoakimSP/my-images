import prisma from "../../lib/prisma"

export default async function handle(req, res) {
    const {
        username,
        firstname,
        lastname,
        email,
        password,
        rpassword
    } = req.body.accountInfo 
    res.status(200).json({ message: "You've successfully been registerd" })

    console.log(req.body.accountInfo)

    async function addNewAccount(){
    const post = await prisma.photographer.create({
    data : {
        userName : username,
        firstName: firstname,
        lastName : lastname,
        email : email,
        password : password
    }})}

    try {
        await addNewAccount()
    } catch (e) {
        console.error(e)
    } finally {
        await prisma.$disconnect()
    }
}


