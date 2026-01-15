'use server'


import { headers } from "next/headers";
import { auth } from "../auth";
import prisma from "../prisma";




//signup user
export const signUp = async (
    email: string,
    password: string,
    displayName: string,
    userName: string,
    dateOfBirth?: Date
) => {

    const result = await auth.api.signUpEmail({
        body: { email, password, name: displayName, },
        headers: await headers(),
    });

    const updateData = await prisma.user.update({
        where: { id: result.user.id },
        data: { userName, ...(dateOfBirth && { dateOfBirth }) },
    });

    console.log("Update data:", updateData);


    return updateData;
}




//signin user
export const signIn = async (
    email: string,
    password: string
) => {
    const data = await auth.api.signInEmail({
        body: {
            email,
            password,
            rememberMe: true,
            callbackURL: '/channels'
        },
        // This endpoint requires session cookies.
        headers: await headers(),
    });

    return data;
}
