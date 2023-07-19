import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { timeStamp } from 'console';
import mongoose, { HydratedDocument } from 'mongoose';

export type UserDocument = HydratedDocument<User>;

@Schema({timestamps: true})
export class User {

  
  @Prop({ required: true })
  email: string;

  @Prop({ required: true })
  password: string;

  @Prop()
  name: string;

  @Prop()
  birthday: Date;

  @Prop()
  gender: string;

  @Prop()
  address: string;

  @Prop()
  phone: number;

  @Prop({type: Object})
  company:{
    _id: mongoose.Schema.Types.ObjectId,
    name: string,
  }

  @Prop()
  role: string;

  @Prop()
  refreshToken: string;

  @Prop({type: Object})
  createdBy: {
    _id: mongoose.Schema.Types.ObjectId,
    email: string,
  };

  @Prop({type: Object})
  updatedBy: {
    _id: mongoose.Schema.Types.ObjectId,
    email: string,
  };

  @Prop({type: Object})
  deletedBy: {
    _id: mongoose.Schema.Types.ObjectId,
    email: string,
  };

  @Prop()
  createdAt: Date;

  @Prop()
  updatedAt: Date;


  @Prop()
  isDeleted: boolean;

  @Prop()
  deleteAt: Date;

}

export const UserSchema = SchemaFactory.createForClass(User);