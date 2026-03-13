import LoginButton from "@/components/LoginButton"

export default function LoginPage() {
  return (
    <main className="flex min-h-screen items-center justify-center bg-gray-50">
      <div className="w-full max-w-md rounded-2xl bg-white p-8 shadow">
        <h1 className="mb-3 text-2xl font-semibold">Admin Login</h1>
        <p className="mb-6 text-sm text-gray-600">
          Sign in with your Google account to access the admin dashboard.
        </p>
        <LoginButton />
      </div>
    </main>
  )
}