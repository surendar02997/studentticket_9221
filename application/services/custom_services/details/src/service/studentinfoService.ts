import { Request, Response } from 'express';
import {studentinfoDao} from '../dao/studentinfoDao';
import { CustomLogger } from '../config/Logger'
let studentinfo = new studentinfoDao();

export class studentinfoService {
    
    constructor() { }
    
    public GpDelete(req: Request, callback){
    new CustomLogger().showLogger('info', 'Enter into studentinfoService.ts: GpDelete')
     const  studentinfoId = req.params.id;
     studentinfo.GpDelete(studentinfoId,(response)=>{
             new CustomLogger().showLogger('info', 'Exit from studentinfoService.ts: GpDelete')
         callback(response);
         });
    }
public GpSearch(req: Request, callback){
    new CustomLogger().showLogger('info', 'Enter into studentinfoService.ts: GpSearch')
     const  studentinfoData = req.query;
     studentinfo.GpSearch(studentinfoData,(response)=>{
             new CustomLogger().showLogger('info', 'Exit from studentinfoService.ts: GpSearch')
         callback(response);
         });
    }
public GpUpdate(req: Request, callback){
    new CustomLogger().showLogger('info', 'Enter into studentinfoService.ts: GpUpdate')
     const  studentinfoData = req.body;
     studentinfo.GpUpdate(studentinfoData,(response)=>{
             new CustomLogger().showLogger('info', 'Exit from studentinfoService.ts: GpUpdate')
         callback(response);
         });
    }
public GpGetAllValues(req: Request, callback){
    new CustomLogger().showLogger('info', 'Enter into studentinfoService.ts: GpGetAllValues')
     
     studentinfo.GpGetAllValues((response)=>{
             new CustomLogger().showLogger('info', 'Exit from studentinfoService.ts: GpGetAllValues')
         callback(response);
         });
    }
public GpCreate(req: Request, callback){
    new CustomLogger().showLogger('info', 'Enter into studentinfoService.ts: GpCreate')
     const  studentinfoData = req.body;
     studentinfo.GpCreate(studentinfoData,(response)=>{
             new CustomLogger().showLogger('info', 'Exit from studentinfoService.ts: GpCreate')
         callback(response);
         });
    }


}