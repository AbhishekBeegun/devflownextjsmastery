"use server"

import User from "@/database/user.model";
import { connectToDB } from "../mongoose"
import { CreateUserParams, DeleteUserParams, UpdateUserParams } from "./shared.types";
import { revalidatePath } from "next/cache";
import Question from "@/database/question.model";

export async function getUserById(params  : any) {
    try {
        connectToDB();

        const {userId} = params;

        const user = await User.findOne({clerkId : userId});

        return user;
    } catch (error) {
        console.log(error)
        throw error
    }
}

export async function createuser(userData : CreateUserParams) {
    try {
        connectToDB();

        const newUser = await User.create(userData);
        return newUser
    } catch (error) {
        console.log(error)
        throw error
    }
}

export async function updateUser(userData : UpdateUserParams) {
    try {
        connectToDB();

        const { clerkId ,updateData,path} = userData

        await User.findOneAndUpdate({clerkId} , updateData , {
            new : true,
        });

        revalidatePath(path)
    } catch (error) {
        console.log(error)
        throw error
    }
}

export async function deleteUser(userId  : DeleteUserParams) {
    try {
        connectToDB();
   const {clerkId} = userId;

   const user = await User.findOneAndDelete({clerkId});

   if (!user) {
    throw new Error('User not found');
   }


   // eslint-disable-next-line no-unused-vars
   const userQuestionIds = await Question.find({author : user._id}).distinct('_id');

   await Question.deleteMany({ author : user._id})

//    TODO ;; del answers also

const deletedUser = await User.findByIdAndDelete(user._id);

return deletedUser
    } catch (error) {
        console.log(error)
        throw error
    }
}





