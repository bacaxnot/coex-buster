import express, {Express} from 'express';
import path from 'path';
import config from './config';

class ConfigServer {
    protected app:Express = express();

    constructor() {
        this.app.set('PORT', config.PORT);
        this.app.set('views', path.join(__dirname, './views'))
        this.app.set('view engine', 'ejs');
    }
}