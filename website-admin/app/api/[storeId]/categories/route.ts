import db from "@/lib/db";
import { auth } from "@clerk/nextjs/server"
import { NextResponse } from "next/server"

export async function POST(req: Request,
    { params }: { params: Promise<{ storeId: string }> }) {
    try {
        const { userId } = await auth()
        const body = await req.json()
        const { storeId } = await params;

        const { name, bannerId } = body

        if (!userId) {
            return new NextResponse("Unauthorized", { status: 401 })
        }

        if (!name) {
            return new NextResponse("Nama category perlu diinput", { status: 400 })
        }

        if (!bannerId) {
            return new NextResponse("Banner Id perlu diinput", { status: 400 })
        }

        if (!storeId) {
            return new NextResponse("Store id URL dibutuhkan", { status: 400 })
        }

        const storeByUserId = await db.store.findFirst({
            where: {
                id: storeId,
                userId
            }
        })

        if (!storeByUserId) {
            return new NextResponse("Unauthorized", { status: 401 })
        }

        const category = await db.category.create({
            data: {
                name,
                bannerId,
                storeId: storeId
            }
        })

        return NextResponse.json(category)

    } catch (error) {
        console.log("[CATEGORIES_POST]", error)
        return new NextResponse("Internal error", { status: 500 })
    }
}

export async function GET(req: Request,
    { params }: { params: Promise<{ storeId: string }> }) {
    try {
        const { storeId } = await params;

        if (!storeId) {
            return new NextResponse("Store id URL dibutuhkan", { status: 400 })
        }

        const categories = await db.category.findMany({
            where: {
                storeId: storeId
            }
        })

        return NextResponse.json(categories)

    } catch (error) {
        console.log("[CATEGORIES_GET]", error)
        return new NextResponse("Internal error", { status: 500 })
    }
}