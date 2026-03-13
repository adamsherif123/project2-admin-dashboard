"use client"

import { useRouter } from "next/navigation"
import { createClient } from "@/lib/supabase/client"
import { ImageRow } from "@/lib/types"

export default function ImagesTable({ images }: { images: ImageRow[] }) {
  const router = useRouter()

  const handleDelete = async (id: string) => {
    const supabase = createClient()
    await supabase.from("images").delete().eq("id", id)
    router.refresh()
  }

  return (
    <div className="overflow-x-auto rounded-2xl border border-slate-200 bg-white shadow-sm">
      <table className="min-w-full text-sm">
        <thead className="bg-slate-100 text-left">
            <tr>
                <th className="px-4 py-3 font-medium text-slate-700">Preview</th>
                <th className="px-4 py-3 font-medium text-slate-700">URL</th>
                <th className="px-4 py-3 font-medium text-slate-700">Profile ID</th>
                <th className="px-4 py-3 font-medium text-slate-700">Public</th>
                <th className="px-4 py-3 font-medium text-slate-700">Common Use</th>
                <th className="px-4 py-3 font-medium text-slate-700">Created</th>
                <th className="px-4 py-3 font-medium text-slate-700">Actions</th>
            </tr>
        </thead>
        <tbody>
          {images.map((image) => (
            <tr key={image.id} className="border-t border-slate-200">
              <td className="px-4 py-3">
                <img src={image.url} alt="img" className="h-14 w-14 rounded border border-slate-200 object-cover" />
              </td>
              <td className="max-w-xs truncate px-4 py-3 text-slate-800">{image.url}</td>
              <td className="px-4 py-3 text-slate-800">{image.profile_id}</td>
              <td className="px-4 py-3 text-slate-800">{image.is_public ? "Yes" : "No"}</td>
              <td className="px-4 py-3 text-slate-800">{image.is_common_use ? "Yes" : "No"}</td>
              <td className="px-4 py-3 text-slate-800">
                {new Date(image.created_datetime_utc).toLocaleString()}
              </td>
              <td className="px-4 py-3">
                <button
                  onClick={() => handleDelete(image.id)}
                  className="rounded bg-red-600 px-3 py-1.5 text-sm font-medium text-white hover:bg-red-700"
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}