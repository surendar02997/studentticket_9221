
import * as mongoose from 'mongoose';

const Schema = mongoose.Schema;

export const studentinfoSchema = new Schema({
   created_date: { type: Date, default: Date.now },
   created_by: { type: String },
   last_modified_by: { type: String },
   last_modified_date: { type: Date, default: Date.now },
   name: String,
   stud_email: String
})

const studentinfoModel = mongoose.model('studentinfo', studentinfoSchema, 'studentinfo');
export default studentinfoModel;
