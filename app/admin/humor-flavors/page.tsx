import { getHumorFlavors } from "@/lib/queries"

export default async function Page() {
  const data = await getHumorFlavors()

  return (
    <div>
      <h1 className="text-2xl font-semibold mb-4">Humor Flavors</h1>
      <pre>{JSON.stringify(data, null, 2)}</pre>
    </div>
  )
}