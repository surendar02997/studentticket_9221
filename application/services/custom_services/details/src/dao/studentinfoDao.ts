import * as mongoose from 'mongoose';
import studentinfoModel from '../models/studentinfo';
import { CustomLogger } from '../config/Logger'


export class studentinfoDao {
    private studentinfo = studentinfoModel;
    constructor() { }
public GpDelete(studentinfoId, callback){
new CustomLogger().showLogger('info', 'Enter into studentinfoDao.ts: GpDelete')

this.studentinfo.findByIdAndRemove(studentinfoId).then((result)	=>	{
new CustomLogger().showLogger('info', 'Exit from studentinfoDao.ts: GpDelete');
callback(result);
}).catch((error)=>{
callback(error);
});}
public GpSearch(studentinfoData, callback){
new CustomLogger().showLogger('info', 'Enter into studentinfoDao.ts: GpSearch')
let andkey ;let and_obj = {} ;let orkey ;let or_obj = {} ;;Object.entries(studentinfoData).forEach(
                        ([key,value]) => {
                            if(value !== ''){
                                andkey = key;
                                and_obj[andkey] = value;
                            }
                            else{
                                orkey = key;
                                or_obj[orkey] = { $ne: '' }
                            }
                        }
                    );;
;
this.studentinfo.find({$and: [
                        {
                            $or: [
                               or_obj
                            ]
                        },
                        and_obj
                    ]}).then((result)	=>	{
new CustomLogger().showLogger('info', 'Exit from studentinfoDao.ts: GpSearch');
callback(result);
}).catch((error)=>{
callback(error);
});}
public GpUpdate(studentinfoData, callback){
new CustomLogger().showLogger('info', 'Enter into studentinfoDao.ts: GpUpdate')

this.studentinfo.findOneAndUpdate({ _id: studentinfoData._id }, studentinfoData, { new: true }).then((result)	=>	{
new CustomLogger().showLogger('info', 'Exit from studentinfoDao.ts: GpUpdate');
callback(result);
}).catch((error)=>{
callback(error);
});}
public GpGetAllValues(callback){
new CustomLogger().showLogger('info', 'Enter into studentinfoDao.ts: GpGetAllValues')

this.studentinfo.find().then((result)	=>	{
new CustomLogger().showLogger('info', 'Exit from studentinfoDao.ts: GpGetAllValues');
callback(result);
}).catch((error)=>{
callback(error);
});}
public GpCreate(studentinfoData, callback){
new CustomLogger().showLogger('info', 'Enter into studentinfoDao.ts: GpCreate')
let temp = new studentinfoModel(studentinfoData);
;
temp.save().then((result)	=>	{
new CustomLogger().showLogger('info', 'Exit from studentinfoDao.ts: GpCreate');
callback(result);
}).catch((error)=>{
callback(error);
});}


}