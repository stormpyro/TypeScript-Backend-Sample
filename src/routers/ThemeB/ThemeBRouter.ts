import { Router, NextFunction, Request, Response } from "express";
import ThemeBController from "../../controllers/ThemeBController";

class ThemeBRouter {
    private _router = Router();
    private _controller = ThemeBController;

    get router(): Router {
        return this._router;
    }

    constructor(){
        this._configure();
    }

    private _configure(){
        this._router.get('/',(req:Request,res:Response,next:NextFunction)=>{
            res.status(200).json(this._controller.defaultMethod());
        });
    }


}

export = new ThemeBRouter().router;