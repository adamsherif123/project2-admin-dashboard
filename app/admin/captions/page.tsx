import CaptionsTable from "@/components/CaptionsTable"
import { getCaptions, getImages } from "@/lib/queries"

export default async function CaptionsPage() {
  const [captions, images] = await Promise.all([getCaptions(), getImages()])
  const imageUrlMap: Record<string, string> = Object.fromEntries(
    images.map((img) => [img.id, img.url])
  )

  return (
    <div className="space-y-4">
      <div>
        <h1 className="text-3xl font-semibold text-slate-900">Captions</h1>
        <p className="mt-1 text-sm text-slate-600">
          Read-only view of caption records.
        </p>
      </div>

      <CaptionsTable captions={captions} imageUrlMap={imageUrlMap} />
    </div>
  )
}