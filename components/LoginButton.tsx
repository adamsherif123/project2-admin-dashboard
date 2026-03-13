"use client"

import { createClient } from "@/lib/supabase/client"

export default function LoginButton() {
  const handleLogin = async () => {
    const supabase = createClient()

    await supabase.auth.signInWithOAuth({
      provider: "google",
      options: {
        redirectTo: `${window.location.origin}/auth/callback`,
      },
    })
  }

  return (
    <button
      onClick={handleLogin}
      className="rounded-lg bg-black px-4 py-2 text-white"
    >
      Sign in with Google
    </button>
  )
}