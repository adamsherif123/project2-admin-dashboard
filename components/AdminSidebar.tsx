import Link from "next/link"

const navLinkClass =
  "block rounded-md px-3 py-2 text-slate-700 hover:bg-slate-100 hover:text-slate-900"

export default function AdminSidebar({ email }: { email: string }) {
  return (
    <aside className="w-64 border-r border-slate-200 bg-white p-5">
      <h2 className="mb-6 text-xl font-semibold text-slate-900">Humor Admin</h2>

      <nav className="space-y-0.5 text-sm">
        <Link href="/admin" className={navLinkClass}>
          Dashboard
        </Link>
        <Link href="/admin/users" className={navLinkClass}>
          Users
        </Link>
        <Link href="/admin/images" className={navLinkClass}>
          Images
        </Link>
        <Link href="/admin/captions" className={navLinkClass}>
          Captions
        </Link>
        <Link href="/admin/humor-flavors" className={navLinkClass}>
          Humor Flavors
        </Link>
        <Link href="/admin/humor-flavor-steps" className={navLinkClass}>
          Flavor Steps
        </Link>
        <Link href="/admin/humor-mix" className={navLinkClass}>
          Humor Mix
        </Link>

        <Link href="/admin/terms" className={navLinkClass}>
          Terms
        </Link>
        <Link href="/admin/caption-examples" className={navLinkClass}>
          Caption Examples
        </Link>

        <Link href="/admin/caption-requests" className={navLinkClass}>
          Caption Requests
        </Link>

        <Link href="/admin/llm-models" className={navLinkClass}>
          LLM Models
        </Link>
        <Link href="/admin/llm-providers" className={navLinkClass}>
          LLM Providers
        </Link>

        <Link href="/admin/llm-prompt-chains" className={navLinkClass}>
          Prompt Chains
        </Link>
        <Link href="/admin/llm-responses" className={navLinkClass}>
          Responses
        </Link>

        <Link href="/admin/allowed-domains" className={navLinkClass}>
          Allowed Domains
        </Link>
        <Link href="/admin/whitelisted-emails" className={navLinkClass}>
          Whitelisted Emails
        </Link>
      </nav>

      <div className="mt-8 border-t border-slate-200 pt-4 text-xs text-slate-500">
        Signed in as
        <div className="mt-1 break-all font-medium text-slate-800">{email}</div>
      </div>
    </aside>
  )
}
