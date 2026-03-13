import { redirect } from "next/navigation"
import { createClient } from "@/lib/supabase/server"

export async function requireSuperadmin() {
  const supabase = await createClient()

  const {
    data: { user },
  } = await supabase.auth.getUser()

  if (!user) {
    redirect("/login")
  }

  console.log("AUTH USER ID:", user.id)
  console.log("AUTH USER EMAIL:", user.email)

  const { data: profile, error } = await supabase
    .from("profiles")
    .select("id, email, is_superadmin, first_name, last_name")
    .eq("id", user.id)
    .single()

  if (error || !profile) {
    redirect("/unauthorized")
  }

  if (!profile.is_superadmin) {
    redirect("/unauthorized")
  }

  return { supabase, user, profile }
}