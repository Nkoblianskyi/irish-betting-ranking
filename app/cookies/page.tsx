import Link from "next/link"
import { Cookie, ArrowLeft } from "lucide-react"

export default function CookiePolicy() {
  return (
    <div className="min-h-screen bg-white">
      <header className="bg-green-700 text-white py-4">
        <div className="container mx-auto px-4">
          <Link href="/" className="flex items-center gap-2 hover:text-orange-300">
            <ArrowLeft className="w-5 h-5" />
            Back to Home
          </Link>
        </div>
      </header>

      <div className="container mx-auto px-4 py-12">
        <div className="max-w-4xl mx-auto">
          <div className="flex items-center gap-3 mb-8">
            <Cookie className="w-8 h-8 text-green-700" />
            <h1 className="text-4xl font-bold text-green-800">Cookie Policy</h1>
          </div>

          <div className="prose prose-lg max-w-none">
            <p className="text-gray-600 mb-8">Last updated: {new Date().toLocaleDateString("en-GB")}</p>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-green-700 mb-4">What Are Cookies</h2>
              <p>
                Cookies are small text files that are placed on your computer or mobile device when you visit our
                website. They help us provide you with a better experience by remembering your preferences and analyzing
                how you use our site.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-green-700 mb-4">Types of Cookies We Use</h2>

              <div className="space-y-6">
                <div>
                  <h3 className="text-xl font-semibold text-green-600 mb-2">Essential Cookies</h3>
                  <p>
                    These cookies are necessary for the website to function properly. They enable basic functions like
                    page navigation and access to secure areas.
                  </p>
                </div>

                <div>
                  <h3 className="text-xl font-semibold text-green-600 mb-2">Analytics Cookies</h3>
                  <p>
                    We use these cookies to understand how visitors interact with our website, helping us improve our
                    services.
                  </p>
                </div>

                <div>
                  <h3 className="text-xl font-semibold text-green-600 mb-2">Marketing Cookies</h3>
                  <p>
                    These cookies track your browsing habits to show you relevant advertisements and measure the
                    effectiveness of our marketing campaigns.
                  </p>
                </div>

                <div>
                  <h3 className="text-xl font-semibold text-green-600 mb-2">Preference Cookies</h3>
                  <p>These cookies remember your settings and preferences to provide a more personalized experience.</p>
                </div>
              </div>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-green-700 mb-4">Managing Cookies</h2>
              <p className="mb-4">You can control and manage cookies in various ways:</p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Browser settings: Most browsers allow you to block or delete cookies</li>
                <li>Cookie consent banner: Use our cookie preferences center</li>
                <li>Opt-out tools: Use industry opt-out tools for advertising cookies</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-green-700 mb-4">Third-Party Cookies</h2>
              <p>
                We may use third-party services that place cookies on your device. These include analytics providers,
                advertising networks, and social media platforms. Each third party has their own privacy and cookie
                policies.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-green-700 mb-4">Updates to This Policy</h2>
              <p>
                We may update this Cookie Policy from time to time. Any changes will be posted on this page with an
                updated revision date.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-green-700 mb-4">Contact Us</h2>
              <p>If you have any questions about our use of cookies, please contact us through our website.</p>
            </section>
          </div>
        </div>
      </div>
    </div>
  )
}
