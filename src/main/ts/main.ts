/**
 * NE PAS MODIFIER CE FICHIER
 */

import express = require('express');
import bodyParser = require('body-parser');

const PORT = 8080;
const PUBLIC_DIR = 'client';
const app = express();

import { Chessboard, createInitialChessboard } from './chessboard';
import { processMove } from './movements';
import { BLUE_POSITIONS, GREY_POSITIONS, RED_POSITIONS, WHITE_POSITIONS, YELLOW_POSITIONS } from './position';

class HttpServer {
    port: number;

    constructor(port: number) {
        this.port = port;
    }

    public onStart(): void {
        const chessboard: Chessboard = createInitialChessboard();
        const app: express.Application = express();

        app.use(bodyParser.json());
        app.use(bodyParser.urlencoded({ extended: true }));
        app.use(express.static(PUBLIC_DIR));
        app.set('view engine', 'ejs');

        app.listen(this.port, () => {
            console.log("Application lancée à l'adresse http://localhost:" + this.port);
        });

        app.get('/', (req: express.Request, res: express.Response) => {
            res.render('index', { error: null });
        });

        app.get('/status.js', (req: express.Request, res: express.Response) => {
            const allPositions = {white : WHITE_POSITIONS, red :RED_POSITIONS , yellow: YELLOW_POSITIONS, blue : BLUE_POSITIONS, grey : GREY_POSITIONS}
            const boardPositionsStatement = 'var positionsJSON= ' + JSON.stringify(allPositions)
            const boardJSONStatement = 'var boardJSON= ' + JSON.stringify(chessboard)
            res.end(boardJSONStatement + "\n" + boardPositionsStatement);
        });

        app.post('/', (req: express.Request, res: express.Response) => {
            const unparsedMove: string = req.body.move;
            const didPerfom: boolean = processMove(chessboard, unparsedMove);
            const message: string = didPerfom ? '' : 'Invalid movement!';
            res.render('index', { error: message });
        });
    }
}

const server: HttpServer = new HttpServer(PORT);
server.onStart();
