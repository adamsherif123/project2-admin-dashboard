"use client"

import { useMemo, useState } from "react"
import { Profile } from "@/lib/types"
import UsersTable from "./UsersTable"

export default function UsersWithSearch({ users }: { users: Profile[] }) {
  const [query, setQuery] = useState("")

  const filteredUsers = useMemo(() => {
    if (!query.trim()) return users
    const q = query.trim().toLowerCase()
    return users.filter(
      (user) =>
        (user.email ?? "").toLowerCase().includes(q) ||
        (user.first_name ?? "").toLowerCase().includes(q) ||
        (user.last_name ?? "").toLowerCase().includes(q)
    )
  }, [users, query])

  return (
    <div className="space-y-4">
      <div className="flex items-center gap-4">
        <label htmlFor="user-search" className="sr-only">
          Search users by first name, last name, or email
        </label>
        <input
          id="user-search"
          type="search"
          placeholder="Search by first name, last name, or email..."
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          className="w-full max-w-md rounded-md border border-slate-300 bg-white px-3 py-2 text-slate-900 placeholder:text-slate-400 focus:border-slate-500 focus:outline-none focus:ring-1 focus:ring-slate-500"
        />
        {query && (
          <span className="text-sm text-slate-500">
            {filteredUsers.length} of {users.length} users
          </span>
        )}
      </div>
      <UsersTable users={filteredUsers} />
    </div>
  )
}
