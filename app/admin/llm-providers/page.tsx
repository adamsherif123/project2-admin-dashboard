import { getLLMProviders } from "@/lib/queries"
import SimpleCRUD from "@/components/SimpleCRUD"

export default async function Page() {
  const data = await getLLMProviders()

  return (
    <div>
      <h1>LLM Providers</h1>
      <SimpleCRUD table="llm_provider" />
      <pre>{JSON.stringify(data, null, 2)}</pre>
    </div>
  )
}