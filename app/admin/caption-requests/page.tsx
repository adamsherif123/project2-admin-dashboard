import { getCaptionRequests } from "@/lib/queries"

export default async function Page() {
  const data = await getCaptionRequests()

  return (
    <div>
      <h1 className="text-2xl font-semibold mb-4">Caption Requests</h1>
      <pre>{JSON.stringify(data, null, 2)}</pre>
    </div>
  )
}