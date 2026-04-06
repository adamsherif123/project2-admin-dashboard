import { getCaptionExamples } from "@/lib/queries"
import SimpleCRUD from "@/components/SimpleCRUD"

export default async function Page() {
  const data = await getCaptionExamples()

  return (
    <div>
      <h1>Caption Examples</h1>
      <SimpleCRUD table="caption_example" />
      <pre>{JSON.stringify(data, null, 2)}</pre>
    </div>
  )
}