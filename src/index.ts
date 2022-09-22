import ConfigServer from "./app";
import './helpers/db/connectionDB'

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