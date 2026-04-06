import { getAllowedDomains } from "@/lib/queries"
import SimpleCRUD from "@/components/SimpleCRUD"

export default async function Page() {
  const data = await getAllowedDomains()

  return (
    <div>
      <h1>Allowed Domains</h1>
      <SimpleCRUD table="allowed_signup_domain" />
      <pre>{JSON.stringify(data, null, 2)}</pre>
    </div>
  )
}