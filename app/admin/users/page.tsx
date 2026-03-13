import UsersWithSearch from "@/components/UsersWithSearch"
import { getProfiles } from "@/lib/queries"

export default async function UsersPage() {
  const users = await getProfiles()

  return (
    <div className="space-y-4">
      <div>
        <h1 className="text-3xl font-semibold text-slate-900">Users / Profiles</h1>
        <p className="mt-1 text-sm text-slate-600">
          Read-only view of all profiles.
        </p>
      </div>

      <UsersWithSearch users={users} />
    </div>
  )
}