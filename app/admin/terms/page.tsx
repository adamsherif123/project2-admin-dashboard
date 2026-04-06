import { getTerms } from "@/lib/queries"
import SimpleCRUD from "@/components/SimpleCRUD"

export default async function Page() {
  const data = await getTerms()

  return (
    <div>
      <h1>Terms</h1>
      <SimpleCRUD table="terms" />
      <pre>{JSON.stringify(data, null, 2)}</pre>
    </div>
  )
}