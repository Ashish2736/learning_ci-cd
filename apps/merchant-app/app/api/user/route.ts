import { NextResponse } from "next/server"
import  prisma  from "@repo/db/client";

export const GET = async () => {
    await prisma.user.create({
        data: {
            email: "asd",
            name: "adsads",
            password:"lol",
            number:"123"
        }
    })
    return NextResponse.json({
        message: "hi there"
    })
}