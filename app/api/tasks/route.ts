// Before Server Actions
// that's how it was done before

import db from '@/utils/db'

import { NextResponse, NextRequest } from 'next/server'

export const GET = async () => {
  const tasks = await db.task.findMany({
    orderBy: {
      createdAt: 'desc'
    }
  })
  // return Response.json({ data: tasks });
  return NextResponse.json({ data: tasks })
}

export const POST = async (request: NextRequest) => {
  const data = await request.json()
  const task = await db.task.create({
    data: {
      content: data.content
    }
  })
  return NextResponse.json({ data: task })
}
