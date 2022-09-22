import ConfigServer from "./app";
<<<<<<< HEAD
import './helpers/connectionDB'
import TransactionModel from "./models/transaction.model";


const transactionInstance = new TransactionModel().Transaction
console.log(transactionInstance)
=======
import './helpers/db/db'
>>>>>>> b25ded814fd2d4effdaae30a2ac446fa8b3e01fc

class Server extends ConfigServer {

    _PORT:Number = this.app.get('PORT');

    constructor(){
        super();
    }

    listen(){
        this.app.listen(this._PORT, ()=>{
            console.log(`Server running to port ${this._PORT}`)
        })
    }
}

new Server().listen();