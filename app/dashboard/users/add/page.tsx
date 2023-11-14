import React from 'react'
import Breadcrumbs from '@/app/ui/breadcrumbs'
import { addUser } from '@/app/lib/users/actions'

const Page = async () => {
  return (
    <div className="grid gap-y-8">
      <p className="text-[24px]">Add User</p>

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

      <form action={addUser} className="grid gap-4">
        <input type="text" name='name' placeholder='name' required />
        <input type="email" name='email' placeholder='email' required />
        <button type="submit">Submit</button>
      </form>
    </div>
    
  )
}

export default Page