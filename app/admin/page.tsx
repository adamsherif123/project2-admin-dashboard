import StatCard from "@/components/StatCard"
import { getDashboardStats, getMostLikedCaptions, getRecentImages } from "@/lib/queries"

export default async function AdminDashboardPage() {
  const stats = await getDashboardStats()
  const topCaptions = await getMostLikedCaptions()
  const recentImages = await getRecentImages()

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-semibold text-slate-900">Admin Dashboard</h1>
        <p className="mt-1 text-sm text-slate-600">
          Overview of users, images, and captions.
        </p>
      </div>

      <div className="grid grid-cols-1 gap-4 md:grid-cols-3 xl:grid-cols-6">
        <StatCard title="Profiles" value={stats.totalProfiles} />
        <StatCard title="Images" value={stats.totalImages} />
        <StatCard title="Captions" value={stats.totalCaptions} />
        <StatCard title="Public Images" value={stats.publicImages} />
        <StatCard title="Public Captions" value={stats.publicCaptions} />
        <StatCard title="Featured Captions" value={stats.featuredCaptions} />
      </div>

      <div className="grid gap-6 lg:grid-cols-2">
        <section className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
          <h2 className="mb-4 text-lg font-semibold text-slate-900">Most Liked Captions</h2>
          <div className="space-y-4">
            {topCaptions.map((caption) => (
              <div key={caption.id} className="border-b border-slate-100 pb-3 last:border-b-0">
                <div className="text-sm text-slate-800">{caption.content}</div>
                <div className="mt-1 text-xs text-slate-500">
                  Likes: {caption.like_count ?? 0}
                </div>
              </div>
            ))}
          </div>
        </section>

        <section className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
          <h2 className="mb-4 text-lg font-semibold text-slate-900">Recent Images</h2>
          <div className="space-y-4">
            {recentImages.map((image) => (
              <div key={image.id} className="flex items-center gap-3 border-b border-slate-100 pb-3 last:border-b-0">
                <img
                  src={image.url}
                  alt="uploaded"
                  className="h-14 w-14 rounded-lg border border-slate-200 object-cover"
                />
                <div className="min-w-0">
                  <div className="truncate text-sm text-slate-800">{image.id}</div>
                  <div className="text-xs text-slate-500">
                    {image.is_public ? "Public" : "Private"}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>
      </div>
    </div>
  )
}