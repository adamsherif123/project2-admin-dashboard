import ImageForm from "@/components/ImageForm"
import { createClient } from "@/lib/supabase/server"
import { notFound } from "next/navigation"

export default async function EditImagePage({
  params,
}: {
  params: Promise<{ id: string }>
}) {
  const { id } = await params
  const supabase = await createClient()

  const { data, error } = await supabase
    .from("images")
    .select("*")
    .eq("id", id)
    .single()

  if (error || !data) {
    notFound()
  }

  return (
    <div className="space-y-4">
      <h1 className="text-3xl font-semibold">Edit Image</h1>
      <ImageForm initialData={data} />
    </div>
  )
}