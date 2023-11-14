import { User } from '@prisma/client';
import prisma from '../prisma';

export const getUsers = async ({ query, currentPage, limit }: any) => {
  try {
    const skip = (currentPage - 1) * limit;

    const [users, totalCount] = await Promise.all([
      prisma.user.findMany({
        where: {
          OR: [
            { name: { contains: query, mode: 'insensitive' } },
            { email: { contains: query, mode: 'insensitive' } },
          ],
        },
        select: {
          id: true,
          name: true,
          email: true,
        },
        skip: skip,
        take: limit,
      }),

      prisma.user.count({
        where: {
          OR: [ 
            { name: { contains: query, mode: 'insensitive' } },
            { email: { contains: query, mode: 'insensitive' } },
          ],
        },
      }),
    ]);

    return { users, totalPages: Math.ceil(totalCount / limit) };
  } catch (error) {
    console.error('Error in getUsers:', error);
    throw new Error('An error occurred while fetching users.');
  }
};

export const getUser = async (id: string) => {
  try {
    const user = await prisma.user.findUnique({
      where: { id: Number(id) },
    });

    return user;
  } catch (error) {
    console.error('Error in getUser:', error);
    throw new Error('An error occurred while fetching user.');
  }
};
