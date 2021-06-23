import { Document, Schema as MSchema } from 'mongoose';
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Field, ObjectType } from '@nestjs/graphql';

@ObjectType()
@Schema()
export class User {
    @Field(() => String)
    _id: MSchema.Types.ObjectId;

    @Field(() => String)
    @Prop({ required: true })
    username?: string;

    @Field(() => String)
    @Prop({ required: true })
    name?: string;

    @Field(() => String)
    @Prop({ required: true })
    lastname?: string;

    @Field(() => String)
    @Prop({ required: true })
    email?: string;
}

export type UserDocument = User & Document;
export const UserSchema = SchemaFactory.createForClass(User);