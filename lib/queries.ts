import { createClient } from "@/lib/supabase/server"

function describeSupabaseError(error: unknown): string {
  if (error && typeof error === "object") {
    const e = error as {
      message?: string
      code?: string
      details?: string
      hint?: string
    }
    const parts = [e.message, e.code, e.details, e.hint].filter(
      (p): p is string => Boolean(p)
    )
    if (parts.length) return parts.join(" | ")
  }
  try {
    return JSON.stringify(error)
  } catch {
    return String(error)
  }
}

async function safeSelectAll(table: string) {
  const supabase = await createClient()
  const { data, error } = await supabase.from(table).select("*")

  if (error) {
    const detail = describeSupabaseError(error)
    console.error(`Supabase error in table "${table}":`, detail, error)
    throw new Error(`Failed to read table "${table}": ${detail}`)
  }

  return data
}

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

  if (error) {
    console.error('Supabase error in table "profiles":', error)
    throw new Error("Failed to read table: profiles")
  }

  return data
}

export async function getImages() {
  const supabase = await createClient()
  const { data, error } = await supabase
    .from("images")
    .select("*")
    .order("created_datetime_utc", { ascending: false })

  if (error) {
    console.error('Supabase error in table "images":', error)
    throw new Error("Failed to read table: images")
  }

  return data
}

export async function getCaptions() {
  const supabase = await createClient()
  const { data, error } = await supabase
    .from("captions")
    .select("*")
    .order("created_datetime_utc", { ascending: false })
    .limit(200)

  if (error) {
    console.error('Supabase error in table "captions":', error)
    throw new Error("Failed to read table: captions")
  }

  return data
}

export async function getMostLikedCaptions() {
  const supabase = await createClient()
  const { data, error } = await supabase
    .from("captions")
    .select("*")
    .order("like_count", { ascending: false })
    .limit(5)

  if (error) {
    console.error('Supabase error in table "captions":', error)
    throw new Error("Failed to read table: captions")
  }

  return data
}

export async function getRecentImages() {
  const supabase = await createClient()
  const { data, error } = await supabase
    .from("images")
    .select("*")
    .order("created_datetime_utc", { ascending: false })
    .limit(5)

  if (error) {
    console.error('Supabase error in table "images":', error)
    throw new Error("Failed to read table: images")
  }

  return data
}

// =====================
// FINAL CORRECT TABLE NAMES
// =====================

export async function getHumorFlavors() {
  return safeSelectAll("humor_flavors")
}

export async function getHumorFlavorSteps() {
  return safeSelectAll("humor_flavor_steps")
}

export async function getHumorMix() {
  return safeSelectAll("humor_themes") // confirmed from error
}

export async function getCaptionRequests() {
  return safeSelectAll("caption_requests")
}

export async function getLLMPromptChains() {
  return safeSelectAll("llm_prompt_chains")
}

export async function getLLMResponses() {
  return safeSelectAll("llm_model_responses")
}

export async function getTerms() {
  return safeSelectAll("terms")
}

export async function getCaptionExamples() {
  return safeSelectAll("caption_examples")
}

export async function getLLMModels() {
  return safeSelectAll("llm_models")
}

export async function getLLMProviders() {
  return safeSelectAll("llm_providers")
}

export async function getAllowedDomains() {
  return safeSelectAll("allowed_signup_domains")
}

export async function getWhitelistedEmails() {
  return safeSelectAll("whitelist_email_addresses")
}