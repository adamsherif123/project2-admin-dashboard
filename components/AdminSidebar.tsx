import Link from "next/link"

export default function AdminSidebar({ email }: { email: string }) {
  return (
    <aside className="w-64 border-r border-slate-200 bg-white p-5">
      <h2 className="mb-6 text-xl font-semibold text-slate-900">Humor Admin</h2>

      <nav className="space-y-0.5 text-sm">
        <Link href="/admin" className="block rounded-md px-3 py-2 text-slate-700 hover:bg-slate-100 hover:text-slate-900">
          Dashboard
        </Link>
        <Link href="/admin/users" className="block rounded-md px-3 py-2 text-slate-700 hover:bg-slate-100 hover:text-slate-900">
          Users
        </Link>
        <Link href="/admin/images" className="block rounded-md px-3 py-2 text-slate-700 hover:bg-slate-100 hover:text-slate-900">
          Images
        </Link>
        <Link href="/admin/captions" className="block rounded-md px-3 py-2 text-slate-700 hover:bg-slate-100 hover:text-slate-900">
          Captions
        </Link>
      </nav>

      <div className="mt-8 border-t border-slate-200 pt-4 text-xs text-slate-500">
        Signed in as
        <div className="mt-1 break-all font-medium text-slate-800">{email}</div>
      </div>
    </aside>
  )
}