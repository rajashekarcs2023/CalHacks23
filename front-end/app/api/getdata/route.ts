import { NextResponse, NextRequest } from 'next/server'
import {
  getFirestore,
  doc,
  getDoc,
  collection,
  getDocs,
} from 'firebase/firestore'
import { app } from '@/lib/firebase'
const db = getFirestore(app)

export async function GET(request: NextRequest) {
  try {
    const docRef = doc(db, 'calhacks10', 'vmDW6wxBtcGLPiALDBnV')

    const snapshot = await getDoc(docRef)

    console.log('snapshot', snapshot)

    return NextResponse.json(snapshot.data())
  } catch (error) {
    console.error(error)
    return new NextResponse('An error occurred while fetching the signature', {
      status: 500,
    })
  }
}
