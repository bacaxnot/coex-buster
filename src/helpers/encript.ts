import bcrypt from "bcrypt";

interface IBcrypt{
    encript(password_text:string): Promise<string>
    compare (password_text:string, hashpassword:string):Promise<boolean>

}
class bcryptClass implements IBcrypt{
    
    async encript(password_text:string):Promise<string>{
        const encrypt = async (password_text:string)=>{
            const hash:string = await bcrypt.hash(password_text, 10)
            return hash
        }
        const res = await encrypt(password_text)
        return res
    }

    async compare(password_text:string, hashpassword:string):Promise<boolean>{
        const comparar = async(password_text:string, hashpassword:string)=>{
            return await bcrypt.compare(password_text, hashpassword)
        }
        const res = await this.compare(password_text, hashpassword)
        return res
    }

}

export default bcryptClass




