import { NextRequest, NextResponse } from "next/server";
import { db } from "@/lib/db";
import { Prisma } from "@prisma/client";

// GET /api/data - Fetch all data with optional category filter
export async function GET(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url);
    const categoryId = searchParams.get("category");
    const search = searchParams.get("search");
    const dataType = searchParams.get("type");
    const isNew = searchParams.get("new");

    const where: Prisma.DataItemWhereInput = {};

    if (categoryId && categoryId !== "all") {
      where.categoryId = categoryId;
    }

    if (search) {
      where.OR = [
        { title: { contains: search } },
        { titleFr: { contains: search } },
        { description: { contains: search } },
        { tags: { contains: search } },
        { period: { contains: search } },
      ];
    }

    if (dataType && dataType !== "all") {
      where.dataType = dataType;
    }

    if (isNew === "true") {
      where.isNew = true;
    }

    const items = await db.dataItem.findMany({
      where,
      include: { category: true },
      orderBy: [{ isNew: "desc" }, { crawledAt: "desc" }],
    });

    const categories = await db.category.findMany({
      orderBy: { order: "asc" },
    });

    return NextResponse.json({ items, categories });
  } catch (error) {
    console.error("Error fetching data:", error);
    return NextResponse.json(
      { error: "Failed to fetch data" },
      { status: 500 }
    );
  }
}