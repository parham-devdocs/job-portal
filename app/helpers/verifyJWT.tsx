// helpers/verifyJWT.ts
import { NextRequest } from 'next/server';
import jwt from 'jsonwebtoken';

export async function veifyJWT(request: NextRequest) {
  // 1. Try Authorization header (Bearer token)
  const authHeader = request.headers.get('authorization');
  let token: string | undefined;

  if (authHeader?.startsWith('Bearer ')) {
    token = authHeader.substring(7); // Remove "Bearer " prefix
  }

  if (!token) {
    token = request.cookies.get('token')?.value;
    console.log(request.cookies.get("token")?.value)
  }

  // 3. If no token found, throw error
  if (!token) {
    throw new Error('No token found');
  }

  console.log('Token extracted:', token.substring(0, 20) + '...'); // Debug log

  // 4. Verify and decode the JWT
  try {
    const decoded = jwt.verify(token, process.env.ACCESS_TOKEN_KEY!) as { userId: string };
    return decoded.userId;
  } catch (error) {
    console.error('JWT verification failed:', error);
    throw new Error('Invalid token');
  }
}