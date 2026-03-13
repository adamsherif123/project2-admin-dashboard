import { createClient } from "@/lib/supabase/server"

export async function getDashboardStats() {
  const supabase = await createClient()

  const [
    profilesRes,
    imagesRes,
    captionsRes,
    publicImagesRes,
    publicCaptionsRes,
    featuredCaptionsRes,
  ] = await Promise.all([
    supabase.from("profiles").select("*", { count: "exact", head: true }),
    supabase.from("images").select("*", { count: "exact", head: true }),
    supabase.from("captions").select("*", { count: "exact", head: true }),
    supabase
      .from("images")
      .select("*", { count: "exact", head: true })
      .eq("is_public", true),
    supabase
      .from("captions")
      .select("*", { count: "exact", head: true })
      .eq("is_public", true),
    supabase
      .from("captions")
      .select("*", { count: "exact", head: true })
      .eq("is_featured", true),
  ])

  return {
    totalProfiles: profilesRes.count ?? 0,
    totalImages: imagesRes.count ?? 0,
    totalCaptions: captionsRes.count ?? 0,
    publicImages: publicImagesRes.count ?? 0,
    publicCaptions: publicCaptionsRes.count ?? 0,
    featuredCaptions: featuredCaptionsRes.count ?? 0,
  }
}

export async function getProfiles() {
  const supabase = await createClient()

  const { data, error } = await supabase
    .from("profiles")
    .select("*")
    .order("created_datetime_utc", { ascending: false })

  if (error) throw error
  return data
}

export async function getImages() {
  const supabase = await createClient()

  const { data, error } = await supabase
    .from("images")
    .select("*")
    .order("created_datetime_utc", { ascending: false })

  if (error) throw error
  return data
}

export async function getCaptions() {
  const supabase = await createClient()

  const { data, error } = await supabase
    .from("captions")
    .select("*")
    .order("created_datetime_utc", { ascending: false })
    .limit(200)

  if (error) throw error
  return data
}

export async function getMostLikedCaptions() {
  const supabase = await createClient()

  const { data, error } = await supabase
    .from("captions")
    .select("*")
    .order("like_count", { ascending: false })
    .limit(5)

  if (error) throw error
  return data
}

export async function getRecentImages() {
  const supabase = await createClient()

  const { data, error } = await supabase
    .from("images")
    .select("*")
    .order("created_datetime_utc", { ascending: false })
    .limit(5)

  if (error) throw error
  return data
}