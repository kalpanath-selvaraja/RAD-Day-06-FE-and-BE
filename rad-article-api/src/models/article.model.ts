import {Schema, Types} from "mongoose"
import { timeStamp } from "node:console"



export interface IArticle extends Document{
    title: string
    content: string
    author: Types.ObjectId
    imageURL: string
    tags: string[]
    isVisible: boolean
    favorites: Types.ObjectId[]
    createdAt: Date
    updatedAt: Date
}

new Schema<IArticle>(
    {
        title :{ type: String, required: true },
        content: { type: String, required: true },
        author:{
            type: Schema.Types.ObjectId,
            ref: "system_users",
            required : true,
        },
        imageURL: { type: String, default: "" },
        tags: { type: [String], default: [] },
        isVisible: { type: Boolean, default: true },
        favorites: [{
            type :Schema.Types.ObjectId, 
            ref: "system_users"}]
        
    },
    {timestamps: true}
    
)