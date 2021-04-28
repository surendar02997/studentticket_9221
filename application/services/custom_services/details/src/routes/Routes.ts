import { Request, Response, NextFunction } from "express";
import { studentinfoController } from '../controller/studentinfoController';


export class Routes {
    private studentinfo: studentinfoController = new studentinfoController();
    
    public routes(app): void {
          app.route('/health/entity-service').get((req: Request, res: Response) => {
            res.status(200).send({
                status: 'up'
            })
        })
        app.route('/studentinfo/:id').delete(this.studentinfo.GpDelete);
app.route('/studentinfo/get/search').get(this.studentinfo.GpSearch);
app.route('/studentinfo').put(this.studentinfo.GpUpdate);
app.route('/studentinfo').get(this.studentinfo.GpGetAllValues);
app.route('/studentinfo').post(this.studentinfo.GpCreate);
     }

}