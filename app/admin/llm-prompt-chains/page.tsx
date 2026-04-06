import { getLLMPromptChains } from "@/lib/queries"

export default async function Page() {
  const data = await getLLMPromptChains()

  return (
    <div>
      <h1>LLM Prompt Chains</h1>
      <pre>{JSON.stringify(data, null, 2)}</pre>
    </div>
  )
}