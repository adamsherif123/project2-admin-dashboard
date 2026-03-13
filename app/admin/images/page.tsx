import ImageForm from "@/components/ImageForm"
import ImagesTable from "@/components/ImagesTable"
import { getImages } from "@/lib/queries"

export default async function ImagesPage() {
  const images = await getImages()

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-semibold text-slate-900">Images</h1>
        <p className="mt-1 text-sm text-slate-600">
          Create, read, update, and delete image records.
        </p>
      </div>

      <ImageForm />
      <ImagesTable images={images} />
    </div>
  )
}