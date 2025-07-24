// src/app/api/feedback/route.ts
import { NextResponse } from 'next/server'
import prisma from '@/lib/prisma'

export async function GET() {
  const feedbacks = await prisma.feedback.findMany({
    orderBy: { createdAt: 'desc' },
  })
  return NextResponse.json(feedbacks)
}

export async function POST(req) {
  try {
    const body = await req.json()
    const { name, message } = body

    if (!name || !message) {
      return NextResponse.json({ error: 'Missing fields' }, { status: 400 })
    }

    const newFeedback = await prisma.feedback.create({
      data: { name, message },
    })

    return NextResponse.json(newFeedback, { status: 201 })
  } catch (error) {
    console.error('API POST /feedback error:', error)
    return NextResponse.json(
      { error: 'Failed to submit feedback' },
      { status: 500 }
    )
  }
}
