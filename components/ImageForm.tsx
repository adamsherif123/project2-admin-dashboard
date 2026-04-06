"use client"

import { useState } from "react"
import { createClient } from "@/lib/supabase/client"
import { useRouter } from "next/navigation"

type Props = {
  initialData?: {
    id?: string
    url?: string
    is_common_use?: boolean
    profile_id?: string
    additional_context?: string
    is_public?: boolean
    image_description?: string
    celebrity_recognition?: string
  }
}

export default function ImageForm({ initialData }: Props) {
  const router = useRouter()
  const supabase = createClient()

  const [url, setUrl] = useState(initialData?.url ?? "")
  const [profileId, setProfileId] = useState(initialData?.profile_id ?? "")
  const [isCommonUse, setIsCommonUse] = useState(initialData?.is_common_use ?? false)
  const [isPublic, setIsPublic] = useState(initialData?.is_public ?? false)
  const [additionalContext, setAdditionalContext] = useState(initialData?.additional_context ?? "")
  const [imageDescription, setImageDescription] = useState(initialData?.image_description ?? "")
  const [celebrityRecognition, setCelebrityRecognition] = useState(
    initialData?.celebrity_recognition ?? ""
  )
  const [uploading, setUploading] = useState(false)

  // 🔥 FILE UPLOAD FUNCTION
  const handleFileUpload = async (file: File) => {
    try {
      setUploading(true)

      const filePath = `${Date.now()}-${file.name}`

      const { error } = await supabase.storage
        .from("images") // ⚠️ bucket name (change if needed)
        .upload(filePath, file)

      if (error) {
        console.error(error)
        alert("Upload failed")
        return
      }

      const { data } = supabase.storage
        .from("images")
        .getPublicUrl(filePath)

      setUrl(data.publicUrl)
    } catch (err) {
      console.error(err)
      alert("Upload error")
    } finally {
      setUploading(false)
    }
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()

    const payload = {
      url,
      profile_id: profileId,
      is_common_use: isCommonUse,
      is_public: isPublic,
      additional_context: additionalContext || null,
      image_description: imageDescription || null,
      celebrity_recognition: celebrityRecognition || null,
    }

    if (initialData?.id) {
      await supabase.from("images").update(payload).eq("id", initialData.id)
    } else {
      await supabase.from("images").insert(payload)
    }

    router.refresh()
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="space-y-4 rounded-2xl border border-slate-200 bg-white p-5 shadow-sm"
    >
      {/* 🔥 FILE INPUT */}
      <div>
        <label className="mb-1 block text-sm font-medium text-slate-700">
          Upload Image
        </label>
        <input
          type="file"
          onChange={(e) => {
            if (e.target.files?.[0]) {
              handleFileUpload(e.target.files[0])
            }
          }}
        />
        {uploading && (
          <p className="text-xs text-slate-500 mt-1">Uploading...</p>
        )}
      </div>

      {/* URL AUTO FILLED */}
      <div>
        <label className="mb-1 block text-sm font-medium text-slate-700">
          Image URL
        </label>
        <input
          className="w-full rounded-md border border-slate-300 bg-white px-3 py-2 text-slate-900"
          value={url}
          onChange={(e) => setUrl(e.target.value)}
          required
        />
      </div>

      <div>
        <label className="mb-1 block text-sm font-medium text-slate-700">
          Profile ID
        </label>
        <input
          className="w-full rounded-md border border-slate-300 px-3 py-2"
          value={profileId}
          onChange={(e) => setProfileId(e.target.value)}
          required
        />
      </div>

      <div>
        <label className="mb-1 block text-sm font-medium text-slate-700">
          Additional Context
        </label>
        <textarea
          className="w-full rounded-md border border-slate-300 px-3 py-2"
          value={additionalContext}
          onChange={(e) => setAdditionalContext(e.target.value)}
        />
      </div>

      <div>
        <label className="mb-1 block text-sm font-medium text-slate-700">
          Image Description
        </label>
        <textarea
          className="w-full rounded-md border border-slate-300 px-3 py-2"
          value={imageDescription}
          onChange={(e) => setImageDescription(e.target.value)}
        />
      </div>

      <div>
        <label className="mb-1 block text-sm font-medium text-slate-700">
          Celebrity Recognition
        </label>
        <textarea
          className="w-full rounded-md border border-slate-300 px-3 py-2"
          value={celebrityRecognition}
          onChange={(e) => setCelebrityRecognition(e.target.value)}
        />
      </div>

      <div className="flex gap-6">
        <label className="flex items-center gap-2 text-sm">
          <input
            type="checkbox"
            checked={isCommonUse}
            onChange={(e) => setIsCommonUse(e.target.checked)}
          />
          Common Use
        </label>

        <label className="flex items-center gap-2 text-sm">
          <input
            type="checkbox"
            checked={isPublic}
            onChange={(e) => setIsPublic(e.target.checked)}
          />
          Public
        </label>
      </div>

      <button className="rounded-lg bg-slate-800 px-4 py-2 text-white">
        {initialData?.id ? "Update Image" : "Create Image"}
      </button>
    </form>
  )
}