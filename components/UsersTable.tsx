import { Profile } from "@/lib/types"

export default function UsersTable({ users }: { users: Profile[] }) {
  return (
    <div className="overflow-x-auto rounded-2xl border border-slate-200 bg-white shadow-sm">
      <table className="min-w-full text-sm">
        <thead className="bg-slate-100 text-left">
          <tr>
            <th className="px-4 py-3 font-medium text-slate-700">Email</th>
            <th className="px-4 py-3 font-medium text-slate-700">First Name</th>
            <th className="px-4 py-3 font-medium text-slate-700">Last Name</th>
            <th className="px-4 py-3 font-medium text-slate-700">Superadmin</th>
            <th className="px-4 py-3 font-medium text-slate-700">In Study</th>
            <th className="px-4 py-3 font-medium text-slate-700">Matrix Admin</th>
            <th className="px-4 py-3 font-medium text-slate-700">Created</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user) => (
            <tr key={user.id} className="border-t border-slate-200">
              <td className="px-4 py-3 text-slate-800">{user.email ?? "-"}</td>
              <td className="px-4 py-3 text-slate-800">{user.first_name ?? "-"}</td>
              <td className="px-4 py-3 text-slate-800">{user.last_name ?? "-"}</td>
              <td className="px-4 py-3 text-slate-800">{user.is_superadmin ? "Yes" : "No"}</td>
              <td className="px-4 py-3 text-slate-800">{user.is_in_study ? "Yes" : "No"}</td>
              <td className="px-4 py-3 text-slate-800">{user.is_matrix_admin ? "Yes" : "No"}</td>
              <td className="px-4 py-3 text-slate-800">
                {new Date(user.created_datetime_utc).toLocaleString()}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}