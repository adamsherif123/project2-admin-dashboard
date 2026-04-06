"use client"

import { createClient } from "@/lib/supabase/client"
import { useRouter } from "next/navigation"
import { useState } from "react"

export default function SimpleCRUD({ table }: { table: string }) {
  const supabase = createClient()
  const router = useRouter()
  const [json, setJson] = useState("{}")

  const handleCreate = async () => {
    const payload = JSON.parse(json)
    await supabase.from(table).insert(payload)
    router.refresh()
  }

  const handleDelete = async (id: string) => {
    await supabase.from(table).delete().eq("id", id)
    router.refresh()
  }

  return (
    <div className="space-y-4">
      <textarea
        className="w-full border p-2"
        rows={6}
        value={json}
        onChange={(e) => setJson(e.target.value)}
      />

      <button onClick={handleCreate} className="bg-black text-white px-4 py-2">
        Create
      </button>
    </div>
  )
}