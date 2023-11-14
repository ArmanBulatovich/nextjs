import React from 'react'
import Breadcrumbs from '@/app/ui/breadcrumbs'
import { getUser } from '@/app/lib/users/data'
import { updateUser } from '@/app/lib/users/actions'
import { notFound } from 'next/navigation';

const Page = async ({params}: any) => {
  const { id } = params;
  const user: any = await getUser(id);
  
  if (!user) {
    notFound();
  }
  return (
    <div className="grid gap-y-8">
      <p className="text-[24px]">Edit User</p>

      <Breadcrumbs
        breadcrumbs={[
          { label: 'Users', href: '/dashboard/users' },
          {
            label: 'Create user',
            href: '/dashboard/users/add',
            active: true,
          },
        ]}
      />

      <form action={updateUser} className="grid gap-4">
        <input type="hidden" name="id" value={id}/>
        <input type="text" name='name' defaultValue={user?.name} required />
        <input type="email" name='email' defaultValue={user?.email} required />
        <button type="submit">Submit</button>
      </form>
    </div>
  )
}

export default Page