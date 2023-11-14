'use server';

import prisma from '../prisma';
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";

export const addUser = async (formData: any) => {
  const { name, email } = Object.fromEntries(formData);

  await prisma.user.create({data: { name, email }});

  revalidatePath("/dashboard/users");
  redirect("/dashboard/users");
}

export const updateUser = async (formData: any) => {
  const { id, name, email } = Object.fromEntries(formData);

  await prisma.user.update({
    where: { id: Number(id) },
    data: { name, email },
  });

  revalidatePath("/dashboard/users");
  redirect("/dashboard/users");
}