import { getUsers } from '@/app/lib/users/data'
import {Suspense} from 'react'
import Search from '@/app/ui/search'
import Pagination from '@/app/ui/pagination'
import Link from 'next/link'

const Page = async ({
  searchParams,
}: {
  searchParams?: {
    query?: string;
    page?: string;
  };
}) => {
  const query = searchParams?.query || '';
  const currentPage = Number(searchParams?.page) || 1;

  const { users, totalPages } = await getUsers({query, currentPage, limit: 2})
  return (
    <div className="grid gap-y-8">
      <p className="text-[24px]">Customers Page</p>

      <div className="flex items-center justify-between">
        <div className="w-[30%]">
          <Search placeholder="Search invoices..." />
        </div>

        <Link href='/dashboard/users/add' className='px-4 py-2 bg-sky-400 rounded'>Add</Link>
      </div>

      <Suspense fallback={'Loading ...'}>
        {users.map((u: any) => {
            return (
            <Link href={`/dashboard/users/${u.id}`} key={u.id}>
              <span>{u.id}. </span>
              <span className="mr-5">{u.name}</span>
              <span>{u.email}</span>
            </Link>)
        })}
      </Suspense>

      {users.length > 0 && (
        <div className="mt-5 flex w-full justify-center">
          <Pagination totalPages={totalPages} />
        </div>
      )}
    </div>
  )
}

export default Page
