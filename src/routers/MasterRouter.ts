import { Router } from "express";
import ThemeARouter from "./ThemeA/ThemeARouter";
import ThemeBRouter from "./ThemeB/ThemeBRouter";


class MasterRouter {
    private _router = Router();
    private _subrouterA = ThemeARouter;
    private _subrouterB = ThemeBRouter;

    get router(): Router {
        return this._router;
    }

    constructor(){
        this._configure();
    }

    private _configure(){
        this._router.use('/themeA',this._subrouterA);
        this._router.use('/themeB',this._subrouterB);
    }
}

export = new MasterRouter().router;