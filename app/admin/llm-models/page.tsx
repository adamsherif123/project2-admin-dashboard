import { getLLMModels } from "@/lib/queries"
import SimpleCRUD from "@/components/SimpleCRUD"

export default async function Page() {
  const data = await getLLMModels()

  return (
    <div>
      <h1>LLM Models</h1>
      <SimpleCRUD table="llm_model" />
      <pre>{JSON.stringify(data, null, 2)}</pre>
    </div>
  )
}