export default function StatCard({
    title,
    value,
  }: {
    title: string
    value: string | number
  }) {
    return (
      <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
        <div className="text-sm font-medium text-slate-500">{title}</div>
        <div className="mt-2 text-3xl font-semibold tracking-tight text-slate-900">{value}</div>
      </div>
    )
  }