import { getLLMResponses } from "@/lib/queries"

export default async function Page() {
  const data = await getLLMResponses()

  return (
    <div>
      <h1>LLM Responses</h1>
      <pre>{JSON.stringify(data, null, 2)}</pre>
    </div>
  )
}