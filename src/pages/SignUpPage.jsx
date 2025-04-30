import { useState } from "react";
import { Link } from "react-router-dom";

export default function SignUpPage() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log({ firstName, lastName, email, password });
    // Add actual sign-up logic here
  };


  return (
    <div className="flex min-h-screen bg-black">
      {/* Left Section */}
      <div className="relative hidden w-1/2 p-8 lg:block">
        <div className="h-full w-full overflow-hidden rounded-3xl bg-gradient-to-b from-amber-500 via-amber-600 to-amber-700 ">
          <div className="flex h-full flex-col items-center justify-center px-8 text-center">
            <div
              className="relative"
              style={{
                fontFamily: "system-ui, sans-serif",
                textShadow: "2px 2px 4px rgba(0,0,0,0.2)",
              }}
            >
              <h2 className="text-9xl font-bold tracking-tighter leading-none text-white">RENT</h2>
              <h2 className="text-9xl font-bold tracking-tighter leading-none text-white mt-0">EAZY</h2>
              <div className="absolute -inset-4 border-4 border-white/30 rounded-3xl -z-10"></div>
              <div className="absolute top-1/2 left-0 right-0 h-1 bg-white/40 -translate-y-1/2 transform"></div>
            </div>
          </div>
        </div>
      </div>

      {/* Right Section */}
      <div className="flex w-full items-center justify-center bg-black p-6 lg:w-1/2">
        <div className="w-full max-w-md rounded-3xl p-12">
          <div className="mx-auto max-w-sm">
            <h2 className="mb-2 text-3xl font-bold text-white">Sign Up Account</h2>
            <p className="mb-8 text-gray-400">Enter your personal data to create your account.</p>

            <div className="mb-8 grid gap-4">
              <button className="h-12 w-full border border-gray-800 text-white bg-transparent hover:bg-gray-800 rounded-md flex items-center justify-center">
                <svg className="mr-2 h-5 w-5" viewBox="0 0 24 24">
                  {/* Google Logo Paths */}
                  <path
                    d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
                    fill="#4285F4"
                  />
                  <path
                    d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
                    fill="#34A853"
                  />
                  <path
                    d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
                    fill="#FBBC05"
                  />
                  <path
                    d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
                    fill="#EA4335"
                  />
                </svg>
                Google
              </button>
            </div>

            <div className="relative mb-8">
              <div className="absolute inset-0 flex items-center">
                <div className="w-full border-t border-gray-800"></div>
              </div>
              <div className="relative flex justify-center text-sm">
                <span className="bg-black px-2 text-gray-400">Or</span>
              </div>
            </div>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid gap-4 md:grid-cols-2">
                <input
                  className="h-12 w-full rounded-md border border-gray-800 bg-gray-900 text-white px-3 py-2 placeholder:text-gray-400"
                  placeholder="First Name"
                  type="text"
                  value={firstName}
                  onChange={(e) => setFirstName(e.target.value)}
                />
                <input
                  className="h-12 w-full rounded-md border border-gray-800 bg-gray-900 text-white px-3 py-2 placeholder:text-gray-400"
                  placeholder="Last Name"
                  type="text"
                  value={lastName}
                  onChange={(e) => setLastName(e.target.value)}
                />
              </div>

              <input
                className="h-12 w-full rounded-md border border-gray-800 bg-gray-900 text-white px-3 py-2 placeholder:text-gray-400"
                placeholder="example@domain.com"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />

              <div>
                <input
                  className="h-12 w-full rounded-md border border-gray-800 bg-gray-900 text-white px-3 py-2 placeholder:text-gray-400"
                  placeholder="Password"
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
                <p className="text-sm text-gray-400 mt-1">Must be at least 8 characters.</p>
              </div>

              <button
                type="submit"
                className="h-12 w-full rounded-md bg-white text-black hover:bg-gray-100 transition"
              >
                Sign Up
              </button>

              <p className="text-center text-sm text-gray-400">
                Already have an account?{" "}
                <Link to="/LoginPage" className="text-white hover:underline">
                  Log in
                </Link>
              </p>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}