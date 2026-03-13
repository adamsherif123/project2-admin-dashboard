export default function UnauthorizedPage() {
    return (
      <main className="flex min-h-screen items-center justify-center bg-gray-50">
        <div className="rounded-2xl bg-white p-8 shadow">
          <h1 className="text-2xl font-semibold">Unauthorized</h1>
          <p className="mt-2 text-gray-600">
            You are signed in, but your profile is not marked as a superadmin.
          </p>
        </div>
      </main>
    )
  }