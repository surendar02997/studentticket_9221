import { Request, Response } from 'express';
import { studentinfoService } from '../service/studentinfoService';
import { CustomLogger } from '../config/Logger'
let studentinfo = new studentinfoService();

export class studentinfoController {
    
    constructor() { }
    
    public GpDelete(req: Request, res: Response) {
studentinfo.GpDelete(req, (response) => {
                new CustomLogger().showLogger('info', 'Enter into studentinfoController.ts: GpDelete');
     res.status(200);
     res.json(response);
                new CustomLogger().showLogger('info', 'Exit from studentinfoController.ts: GpDelete');
    })}
public GpSearch(req: Request, res: Response) {
studentinfo.GpSearch(req, (response) => {
                new CustomLogger().showLogger('info', 'Enter into studentinfoController.ts: GpSearch');
     res.status(200);
     res.json(response);
                new CustomLogger().showLogger('info', 'Exit from studentinfoController.ts: GpSearch');
    })}
public GpUpdate(req: Request, res: Response) {
studentinfo.GpUpdate(req, (response) => {
                new CustomLogger().showLogger('info', 'Enter into studentinfoController.ts: GpUpdate');
     res.status(200);
     res.json(response);
                new CustomLogger().showLogger('info', 'Exit from studentinfoController.ts: GpUpdate');
    })}
public GpGetAllValues(req: Request, res: Response) {
studentinfo.GpGetAllValues(req, (response) => {
                new CustomLogger().showLogger('info', 'Enter into studentinfoController.ts: GpGetAllValues');
     res.status(200);
     res.json(response);
                new CustomLogger().showLogger('info', 'Exit from studentinfoController.ts: GpGetAllValues');
    })}
public GpCreate(req: Request, res: Response) {
studentinfo.GpCreate(req, (response) => {
                new CustomLogger().showLogger('info', 'Enter into studentinfoController.ts: GpCreate');
     res.status(200);
     res.json(response);
                new CustomLogger().showLogger('info', 'Exit from studentinfoController.ts: GpCreate');
    })}


}