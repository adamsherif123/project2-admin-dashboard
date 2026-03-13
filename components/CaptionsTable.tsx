import { Caption } from "@/lib/types"

type Props = { captions: Caption[]; imageUrlMap?: Record<string, string> }

export default function CaptionsTable({ captions, imageUrlMap = {} }: Props) {
  return (
    <div className="overflow-x-auto rounded-2xl border border-slate-200 bg-white shadow-sm">
      <table className="min-w-full text-sm">
        <thead className="bg-slate-100 text-left">
          <tr>
            <th className="px-4 py-3 font-medium text-slate-700">Content</th>
            <th className="px-4 py-3 font-medium text-slate-700">Likes</th>
            <th className="px-4 py-3 font-medium text-slate-700">Public</th>
            <th className="px-4 py-3 font-medium text-slate-700">Featured</th>
            <th className="px-4 py-3 font-medium text-slate-700">Profile ID</th>
            <th className="px-4 py-3 font-medium text-slate-700">Image</th>
            <th className="px-4 py-3 font-medium text-slate-700">Created</th>
          </tr>
        </thead>
        <tbody>
          {captions.map((caption) => {
            const imageUrl = imageUrlMap[caption.image_id]
            return (
              <tr key={caption.id} className="border-t border-slate-200 align-top">
                <td className="max-w-md px-4 py-3 text-slate-800">{caption.content}</td>
                <td className="px-4 py-3 text-slate-800">{caption.like_count ?? 0}</td>
                <td className="px-4 py-3 text-slate-800">{caption.is_public ? "Yes" : "No"}</td>
                <td className="px-4 py-3 text-slate-800">{caption.is_featured ? "Yes" : "No"}</td>
                <td className="px-4 py-3 text-slate-800">{caption.profile_id}</td>
                <td className="px-4 py-3">
                  {imageUrl ? (
                    <img
                      src={imageUrl}
                      alt=""
                      className="h-14 w-14 rounded border border-slate-200 object-cover"
                    />
                  ) : (
                    <span className="text-slate-500">—</span>
                  )}
                </td>
                <td className="px-4 py-3 text-slate-800">
                  {new Date(caption.created_datetime_utc).toLocaleString()}
                </td>
              </tr>
            )
          })}
        </tbody>
      </table>
    </div>
  )
}