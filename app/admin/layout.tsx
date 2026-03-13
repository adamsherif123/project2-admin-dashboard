import AdminSidebar from "@/components/AdminSidebar"
import { requireSuperadmin } from "@/lib/auth"

export default async function AdminLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const { profile } = await requireSuperadmin()

  return (
    <div className="flex min-h-screen bg-slate-50">
      <AdminSidebar email={profile.email ?? ""} />
      <main className="flex-1 p-6 text-slate-900">{children}</main>
    </div>
  )
}