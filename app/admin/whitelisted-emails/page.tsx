import { getWhitelistedEmails } from "@/lib/queries"
import SimpleCRUD from "@/components/SimpleCRUD"

export default async function Page() {
  const data = await getWhitelistedEmails()

  return (
    <div>
      <h1>Whitelisted Emails</h1>
      <SimpleCRUD table="whitelisted_email" />
      <pre>{JSON.stringify(data, null, 2)}</pre>
    </div>
  )
}