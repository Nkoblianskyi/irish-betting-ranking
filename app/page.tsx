"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Star, Shield, Award, Users, CheckCircle, X, Cookie } from "lucide-react"
import { bettingSites, type BettingSite } from "@/data/betting-sites"
import Image from "next/image"
import Link from "next/link"

export default function HomePage() {
  const [showCookieConsent, setShowCookieConsent] = useState(false)
  const [showModal, setShowModal] = useState(false)
  const [modalType, setModalType] = useState<"age" | "terms" | "ranking">("age")
  const [topSites, setTopSites] = useState<BettingSite[]>([])

  useEffect(() => {
    // Show cookie consent on first visit
    const hasConsent = localStorage.getItem("cookie-consent")
    if (!hasConsent) {
      setShowCookieConsent(true)
      // Also show ranking modal after a short delay
      setTimeout(() => {
        setShowModal(true)
        setModalType("ranking")
      }, 8000)
    }

    // Set top 3 sites for ranking modal
    setTopSites(bettingSites.slice(0, 3))
  }, [])

  const acceptCookies = () => {
    localStorage.setItem("cookie-consent", "accepted")
    setShowCookieConsent(false)
    // If ranking modal is not shown yet, show it
    if (!showModal) {
      setShowModal(true)
      setModalType("ranking")
    }
  }

  const openModal = (type: "age" | "terms" | "ranking") => {
    setModalType(type)
    setShowModal(true)
  }

  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }, (_, i) => <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />)
  }

  const currentDate = new Date().toLocaleDateString("en-GB", {
    year: "numeric",
    month: "long",
  })

  return (
    <div
      className="min-h-screen bg-cover bg-center bg-fixed"
      style={{ backgroundImage: "url('/hero.jpg')" }}
    >
      {/* Header */}
      <header className="bg-green-700 text-white py-3 shadow-lg">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-orange-500 rounded-full flex items-center justify-center">
                <Award className="w-4 h-4" />
              </div>
              <h1 className="text-lg sm:text-xl md:text-2xl font-bold">TopBettingIrishSites.com</h1>
            </div>
            <nav className="hidden lg:flex space-x-6">
              <Link href="#rankings" className="hover:text-orange-300 transition-colors">
                Rankings
              </Link>
              <Link href="#bonuses" className="hover:text-orange-300 transition-colors">
                Bonuses
              </Link>
              <Link href="#safety" className="hover:text-orange-300 transition-colors">
                Safe Gambling
              </Link>
              <Link href="#faq" className="hover:text-orange-300 transition-colors">
                FAQ
              </Link>
            </nav>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section
        className="relative bg-cover bg-center bg-no-repeat h-[200px] sm:h-[250px] overflow-hidden"
        style={{ backgroundImage: "url('/hero.jpg')" }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-60"></div>
        <div className="relative z-10 container mx-auto px-4 h-full flex flex-col justify-center text-center text-white">
          <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-2 text-shadow-lg">Top Irish Betting Sites</h1>
          <p className="text-base sm:text-lg md:text-xl mb-1 text-orange-300">Updated Monthly - {currentDate}</p>
          <p className="text-xs sm:text-sm mb-4 max-w-2xl mx-auto opacity-90 px-2">
            Discover Ireland's best betting sites with comprehensive rankings
          </p>

          <div className="flex flex-col sm:flex-row flex-wrap justify-center gap-2 sm:gap-3 mb-4 px-4">
            <button
              onClick={() => openModal("terms")}
              className="bg-orange-500 hover:bg-orange-600 text-white px-3 py-2 rounded-lg font-semibold transition-all duration-300 text-xs sm:text-sm hover:scale-105 animate-fadeIn"
              style={{ animationDelay: "300ms" }}
            >
              Advertiser Info
            </button>
            <button
              onClick={() => openModal("age")}
              className="bg-green-600 hover:bg-green-700 text-white px-3 py-2 rounded-lg font-semibold transition-all duration-300 text-xs sm:text-sm hover:scale-105 animate-fadeIn"
              style={{ animationDelay: "500ms" }}
            >
              18+ Only
            </button>
          </div>
        </div>
      </section>

      {/* Rankings Section */}
      <section id="rankings" className="py-8 sm:py-12 md:py-16 bg-white bg-opacity-95">
        <div className="container mx-auto px-4">
          <div className="space-y-4 sm:space-y-6">
            {bettingSites.map((site, index) => (
              <Card
                key={site.id}
                className="overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-[1.01] animate-fadeIn"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <Link href={site.url} target="_blank" rel="noopener noreferrer" className="block">
                  <CardContent className="p-4 sm:p-6">
                    <div className="flex flex-col space-y-4 sm:space-y-0 sm:flex-row sm:items-center sm:gap-6">
                      <div
                        className="flex items-center gap-3 sm:gap-4 justify-center sm:justify-start animate-fadeInUp"
                        style={{ animationDelay: `${index * 100 + 100}ms` }}
                      >
                        <div
                          className="bg-green-700 text-white w-10 h-10 sm:w-12 sm:h-12 rounded-full flex items-center justify-center text-lg sm:text-xl font-bold animate-bounce"
                          style={{ animationDuration: "2s", animationDelay: `${index * 0.3}s` }}
                        >
                          {index + 1}
                        </div>
                        <div className="w-32 sm:w-40 md:w-48 h-16 sm:h-20 md:h-24 flex-shrink-0 flex items-center justify-center">
                          <Image
                            src={site.logo || "/placeholder.svg"}
                            alt={site.name}
                            width={200}
                            height={80}
                            className="max-w-full max-h-full object-contain hover:scale-110 transition-transform duration-300"
                          />
                        </div>
                      </div>

                      <div
                        className="flex-1 text-center animate-fadeInUp"
                        style={{ animationDelay: `${index * 100 + 200}ms` }}
                      >
                        <h3 className="text-xl sm:text-2xl font-bold text-green-800 mb-2 hover:text-green-600 transition-colors">
                          {site.name}
                        </h3>
                        <div className="relative">
                          <Badge className="bg-gradient-to-r from-orange-500 to-orange-600 text-white text-sm sm:text-base md:text-lg px-4 py-2 sm:px-6 sm:py-3 mb-3 inline-block shadow-md hover:shadow-lg transform hover:scale-105 transition-all duration-300 border border-orange-400 shadow-orange-400/50">
                            {site.bonus}
                          </Badge>
                          <div className="absolute -top-1 -right-1 w-3 h-3 bg-red-500 rounded-full animate-ping"></div>
                        </div>
                        <div
                          className="flex items-center justify-center gap-2 mb-2 animate-fadeInUp"
                          style={{ animationDelay: `${index * 100 + 300}ms` }}
                        >
                          <div className="flex">{renderStars(site.rating)}</div>
                          <span className="font-semibold text-sm sm:text-base">{site.rating}</span>
                          <span className="text-gray-600 text-xs sm:text-sm">({site.reviewCount} reviews)</span>
                        </div>
                      </div>

                      <div
                        className="text-center animate-fadeInUp"
                        style={{ animationDelay: `${index * 100 + 400}ms` }}
                      >
                        <Button className="bg-gradient-to-r from-green-700 to-green-800 hover:from-green-600 hover:to-green-700 text-white px-6 py-3 sm:px-8 sm:py-4 text-base sm:text-lg mb-3 w-full sm:w-auto shadow-md hover:shadow-lg transform hover:scale-105 transition-all duration-300 border border-green-600 relative overflow-hidden group shadow-green-500/50">
                          <span className="absolute inset-0 bg-white opacity-0 group-hover:opacity-10 transition-opacity duration-500"></span>
                          <span className="relative z-10">Get Bonus</span>
                        </Button>
                        <div className="absolute inset-0 rounded-md bg-gradient-to-r from-green-400 to-green-600 opacity-0 group-hover:opacity-30 blur-sm transition-opacity duration-300"></div>
                        <p
                          className="text-xs sm:text-sm text-gray-600 px-2 animate-fadeInUp"
                          style={{ animationDelay: `${index * 100 + 500}ms` }}
                        >
                          Play responsibly. Terms and wagering conditions apply.
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Link>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Bonuses Section */}
      <section id="bonuses" className="py-8 sm:py-12 md:py-16 bg-gray-50 bg-opacity-95">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-center mb-8 sm:mb-12 text-green-800 px-4">
            Understanding Betting Bonuses
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 sm:gap-8">
            <Card className="text-center p-4 sm:p-6">
              <Award className="w-10 h-10 sm:w-12 sm:h-12 text-orange-500 mx-auto mb-3 sm:mb-4" />
              <h3 className="text-lg sm:text-xl font-semibold mb-2 sm:mb-3">Welcome Bonuses</h3>
              <p className="text-sm sm:text-base text-gray-600">
                Get extra value when you sign up with matched deposits and free bets.
              </p>
            </Card>

            <Card className="text-center p-4 sm:p-6">
              <Users className="w-10 h-10 sm:w-12 sm:h-12 text-orange-500 mx-auto mb-3 sm:mb-4" />
              <h3 className="text-lg sm:text-xl font-semibold mb-2 sm:mb-3">Loyalty Programs</h3>
              <p className="text-sm sm:text-base text-gray-600">
                Earn points and rewards for regular betting activity.
              </p>
            </Card>

            <Card className="text-center p-4 sm:p-6 sm:col-span-2 md:col-span-1">
              <CheckCircle className="w-10 h-10 sm:w-12 sm:h-12 text-orange-500 mx-auto mb-3 sm:mb-4" />
              <h3 className="text-lg sm:text-xl font-semibold mb-2 sm:mb-3">Fair Terms</h3>
              <p className="text-sm sm:text-base text-gray-600">
                We only recommend sites with reasonable wagering requirements.
              </p>
            </Card>
          </div>
        </div>
      </section>

      {/* How We Rank Section */}
      <section className="py-8 sm:py-12 md:py-16 bg-white bg-opacity-95">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-center mb-8 sm:mb-12 text-green-800 px-4">
            How We Select Our Rankings
          </h2>

          <div className="max-w-4xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
              <div className="space-y-4 sm:space-y-6">
                <div>
                  <h3 className="text-xl sm:text-2xl font-semibold mb-3 sm:mb-4 text-green-700">Safety & Licensing</h3>
                  <p className="text-sm sm:text-base text-gray-700">
                    All recommended sites must hold valid licenses from reputable gambling authorities. We verify their
                    regulatory status and check for any compliance issues.
                  </p>
                </div>

                <div>
                  <h3 className="text-xl sm:text-2xl font-semibold mb-3 sm:mb-4 text-green-700">User Experience</h3>
                  <p className="text-sm sm:text-base text-gray-700">
                    We evaluate website design, mobile compatibility, customer support quality, and overall ease of use
                    to ensure a smooth betting experience.
                  </p>
                </div>
              </div>

              <div className="space-y-4 sm:space-y-6">
                <div>
                  <h3 className="text-xl sm:text-2xl font-semibold mb-3 sm:mb-4 text-green-700">Odds & Markets</h3>
                  <p className="text-sm sm:text-base text-gray-700">
                    We compare odds across different sports and events, plus evaluate the variety and depth of betting
                    markets available.
                  </p>
                </div>

                <div>
                  <h3 className="text-xl sm:text-2xl font-semibold mb-3 sm:mb-4 text-green-700">Payment Options</h3>
                  <p className="text-sm sm:text-base text-gray-700">
                    Fast, secure payment processing with multiple deposit and withdrawal options suitable for Irish
                    customers.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Safe Gambling Section */}
      <section id="safety" className="py-8 sm:py-12 md:py-16 bg-green-700 text-white">
        <div className="container mx-auto px-4 text-center">
          <Shield className="w-12 h-12 sm:w-16 sm:h-16 mx-auto mb-4 sm:mb-6" />
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-6 sm:mb-8 px-4">Responsible Gambling</h2>

          <div className="max-w-3xl mx-auto">
            <p className="text-base sm:text-lg md:text-xl mb-6 sm:mb-8 px-4">
              Gambling should be fun and entertaining. If you feel like your gambling is becoming a problem, please seek
              help immediately.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6 text-left">
              <div className="bg-green-600 p-4 sm:p-6 rounded-lg">
                <h3 className="text-lg sm:text-xl font-semibold mb-2 sm:mb-3">Warning Signs</h3>
                <ul className="space-y-1 sm:space-y-2 text-sm sm:text-base">
                  <li>• Betting more than you can afford</li>
                  <li>• Chasing losses</li>
                  <li>• Neglecting responsibilities</li>
                  <li>• Lying about gambling activities</li>
                </ul>
              </div>

              <div className="bg-green-600 p-4 sm:p-6 rounded-lg">
                <h3 className="text-lg sm:text-xl font-semibold mb-2 sm:mb-3">Get Help</h3>
                <ul className="space-y-1 sm:space-y-2 text-sm sm:text-base">
                  <li>• Set deposit limits</li>
                  <li>• Take regular breaks</li>
                  <li>• Use self-exclusion tools</li>
                  <li>• Contact support organizations</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section id="faq" className="py-8 sm:py-12 md:py-16 bg-gray-50 bg-opacity-95">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-center mb-8 sm:mb-12 text-green-800 px-4">
            Frequently Asked Questions
          </h2>

          <div className="max-w-3xl mx-auto space-y-4 sm:space-y-6">
            <Card className="p-4 sm:p-6">
              <h3 className="text-lg sm:text-xl font-semibold mb-2 sm:mb-3">
                Are these betting sites legal in Ireland?
              </h3>
              <p className="text-sm sm:text-base text-gray-700">
                Yes, all recommended sites are licensed and regulated by reputable authorities and accept Irish
                customers legally.
              </p>
            </Card>

            <Card className="p-4 sm:p-6">
              <h3 className="text-lg sm:text-xl font-semibold mb-2 sm:mb-3">How often do you update your rankings?</h3>
              <p className="text-sm sm:text-base text-gray-700">
                We review and update our rankings monthly to ensure accuracy and reflect any changes in operator
                performance or offerings.
              </p>
            </Card>

            <Card className="p-4 sm:p-6">
              <h3 className="text-lg sm:text-xl font-semibold mb-2 sm:mb-3">
                Do you receive commissions from betting sites?
              </h3>
              <p className="text-sm sm:text-base text-gray-700">
                We may receive affiliate commissions, but this does not influence our rankings. Our reviews are based on
                objective criteria and user feedback.
              </p>
            </Card>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-8 sm:py-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 mb-6 sm:mb-8">
            <div className="sm:col-span-2 lg:col-span-1">
              <h3 className="text-lg sm:text-xl font-semibold mb-3 sm:mb-4">TopBettingIrishSites</h3>
              <p className="text-sm sm:text-base text-gray-400">
                Your trusted source for betting site reviews and rankings in Ireland.
              </p>
            </div>

            <div>
              <h4 className="text-base sm:text-lg font-semibold mb-3 sm:mb-4">Quick Links</h4>
              <ul className="space-y-1 sm:space-y-2 text-sm sm:text-base text-gray-400">
                <li>
                  <Link href="#rankings" className="hover:text-white">
                    Rankings
                  </Link>
                </li>
                <li>
                  <Link href="#bonuses" className="hover:text-white">
                    Bonuses
                  </Link>
                </li>
                <li>
                  <Link href="/privacy" className="hover:text-white">
                    Privacy Policy
                  </Link>
                </li>
                <li>
                  <Link href="/cookies" className="hover:text-white">
                    Cookie Policy
                  </Link>
                </li>
              </ul>
            </div>

            <div className="sm:col-span-2 lg:col-span-1">
              <h4 className="text-base sm:text-lg font-semibold mb-3 sm:mb-4">Responsible Gambling</h4>
              <div className="grid grid-cols-2 gap-3 sm:gap-4">
                <Link
                  href="https://www.gambleaware.org/"
                  className="bg-gray-800 p-3 sm:p-4 rounded text-center hover:bg-gray-700 transition-colors flex items-center justify-center"
                >
                  <Image
                    src="/gamble.webp"
                    alt="GambleAware"
                    width={120}
                    height={40}
                    className="h-8 sm:h-10 w-auto mx-auto hover:scale-105 transition-transform"
                  />
                </Link>
                <Link
                  href="https://www.begambleaware.org/"
                  className="bg-gray-800 p-3 sm:p-4 rounded text-center hover:bg-gray-700 transition-colors flex items-center justify-center"
                >
                  <Image
                    src="/bgambleaware.svg"
                    alt="Be Gamble Aware"
                    width={120}
                    height={40}
                    className="h-8 sm:h-10 w-auto mx-auto hover:scale-105 transition-transform"
                  />
                </Link>
                <Link
                  href="https://www.gamcare.org.uk/"
                  className="bg-gray-800 p-3 sm:p-4 rounded text-center hover:bg-gray-700 transition-colors flex items-center justify-center"
                >
                  <Image
                    src="/gamecare.svg"
                    alt="GamCare"
                    width={120}
                    height={40}
                    className="h-8 sm:h-10 w-auto mx-auto hover:scale-105 transition-transform"
                  />
                </Link>
                <Link
                  href="https://www.gamblingtherapy.org/"
                  className="bg-gray-800 p-3 sm:p-4 rounded text-center hover:bg-gray-700 transition-colors flex items-center justify-center"
                >
                  <Image
                    src="/gamblingcare.png"
                    alt="Gambling Therapy"
                    width={120}
                    height={40}
                    className="h-8 sm:h-10 w-auto mx-auto hover:scale-105 transition-transform"
                  />
                </Link>
              </div>
              <div className="mt-3 sm:mt-4 text-center">
                <Badge className="bg-orange-500">18+</Badge>
              </div>
            </div>

            <div>
              <h4 className="text-base sm:text-lg font-semibold mb-3 sm:mb-4">Contact</h4>
              <p className="text-xs sm:text-sm text-gray-400">
                For inquiries about our rankings or responsible gambling resources.
              </p>
            </div>
          </div>

          <div className="border-t border-gray-800 pt-6 sm:pt-8 text-center text-gray-400">
            <p className="text-xs sm:text-sm mb-3 sm:mb-4 px-4">
              <strong>Responsible Gambling</strong>
              <br />
              Bonuses and content are subject to change. Always review the terms on the bookmaker's official site before
              joining. 18+ only.
            </p>
            <p className="text-xs sm:text-sm">&copy; 2024 TopBettingIrishSites.com. All rights reserved.</p>
          </div>
        </div>
      </footer>

      {/* Cookie Consent Banner */}
      {showCookieConsent && (
        <div className="fixed bottom-0 left-0 right-0 bg-gray-900 text-white p-3 sm:p-4 z-50 animate-slideUp">
          <div className="container mx-auto flex flex-col sm:flex-row items-center justify-between gap-3 sm:gap-4">
            <div className="flex items-center gap-2 sm:gap-3 text-center sm:text-left">
              <Cookie className="w-5 h-5 sm:w-6 sm:h-6 flex-shrink-0 animate-spin-slow" />
              <p className="text-xs sm:text-sm">
                We use cookies to enhance your experience. By continuing to visit this site you agree to our use of
                cookies.
              </p>
            </div>
            <div className="flex gap-2 sm:gap-3 w-full sm:w-auto">
              <Link
                href="/cookies"
                className="text-orange-400 hover:underline text-xs sm:text-sm hover:text-orange-300 transition-colors"
              >
                Learn More
              </Link>
              <Button
                onClick={acceptCookies}
                className="bg-green-700 hover:bg-green-800 text-xs sm:text-sm px-3 py-1 sm:px-4 sm:py-2 hover:scale-105 transition-transform"
              >
                Accept
              </Button>
            </div>
          </div>
        </div>
      )}

      {/* Modal */}
      {showModal && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-3 sm:p-4 animate-fadeIn"
          onClick={(e) => {
            if (e.target === e.currentTarget) setShowModal(false)
          }}
        >
          <div
            className="bg-white rounded-lg w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg mx-auto max-h-[95vh] sm:max-h-[90vh] overflow-hidden flex flex-col animate-scaleIn"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="p-3 sm:p-4 md:p-5 flex-shrink-0">
              <div className="flex justify-between items-center mb-3 sm:mb-4">
                <h2 className="text-sm sm:text-base md:text-lg font-bold text-green-800 pr-2">
                  {modalType === "age" && "18+ Only"}
                  {modalType === "terms" && "Advertiser Info"}
                  {modalType === "ranking" && "Top Betting Sites"}
                </h2>
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={() => setShowModal(false)}
                  className="flex-shrink-0 hover:rotate-90 transition-transform duration-300"
                >
                  <X className="w-4 h-4" />
                </Button>
              </div>

              {modalType === "age" && (
                <div className="text-center">
                  <Shield className="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 text-orange-500 mx-auto mb-2 sm:mb-3 animate-pulse" />
                  <p className="text-xs sm:text-sm md:text-base mb-2 sm:mb-3">
                    You must be 18 or older to access betting sites. Please gamble responsibly.
                  </p>
                  <p className="text-xs sm:text-sm text-gray-600 mb-3 sm:mb-4">
                    If you have a gambling problem, seek help at{" "}
                    <Link
                      href="https://www.gambleaware.org/"
                      className="text-green-700 underline hover:text-green-500 transition-colors"
                    >
                      GambleAware.org
                    </Link>
                  </p>
                  <Button
                    onClick={() => setShowModal(false)}
                    className="bg-green-700 hover:bg-green-800 w-full text-xs sm:text-sm hover:scale-105 transition-transform"
                  >
                    I am 18+ and understand
                  </Button>
                </div>
              )}

              {modalType === "terms" && (
                <div className="overflow-y-auto max-h-[60vh]">
                  <p className="text-xs sm:text-sm mb-2 sm:mb-3">
                    This website contains affiliate links and we may receive compensation when you sign up through our
                    links. We are committed to providing honest and unbiased reviews.
                  </p>
                  <ul className="list-disc pl-3 sm:pl-4 space-y-1 text-xs sm:text-sm text-gray-700">
                    <li className="animate-fadeInUp animation-delay-100">
                      We may receive affiliate commissions from betting operators
                    </li>
                    <li className="animate-fadeInUp animation-delay-200">
                      Our rankings are based on objective criteria
                    </li>
                    <li className="animate-fadeInUp animation-delay-300">
                      All bonuses and promotions are subject to operator terms
                    </li>
                    <li className="animate-fadeInUp animation-delay-400">
                      Always verify terms on the official operator website
                    </li>
                  </ul>
                </div>
              )}

              {modalType === "ranking" && (
                <div className="space-y-2 sm:space-y-3">
                  {topSites.map((site, index) => (
                    <Link key={site.id} href={site.url} target="_blank" rel="noopener noreferrer" className="block">
                      <Card
                        className="p-2 sm:p-3 hover:shadow-lg transition-shadow duration-300 animate-fadeInUp hover:bg-gray-50"
                        style={{ animationDelay: `${index * 150}ms` }}
                      >
                        <div className="flex flex-col sm:flex-row items-center gap-2 sm:gap-3">
                          <div className="flex items-center gap-2 sm:gap-3 w-full sm:w-auto">
                            <div
                              className="bg-green-700 text-white w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8 rounded-full flex items-center justify-center text-xs sm:text-sm md:text-base font-bold flex-shrink-0 animate-bounce"
                              style={{ animationDuration: "2s", animationDelay: `${index * 0.2}s` }}
                            >
                              {index + 1}
                            </div>
                            <div className="w-16 sm:w-20 md:w-24 h-8 sm:h-10 md:h-12 flex-shrink-0 flex items-center justify-center">
                              <Image
                                src={site.logo || "/placeholder.svg"}
                                alt={site.name}
                                width={200}
                                height={80}
                                className="max-w-full max-h-full object-contain hover:scale-105 transition-transform duration-300"
                              />
                            </div>
                          </div>
                          <div className="flex-1 text-center sm:text-left w-full sm:w-auto">
                            <h3 className="font-semibold text-xs sm:text-sm md:text-base mb-1">{site.name}</h3>
                            <Badge className="bg-gradient-to-r from-orange-500 to-orange-600 text-white text-xs sm:text-sm px-2 py-1 mb-1 inline-block shadow-md hover:shadow-lg transform hover:scale-105 transition-all duration-300 border border-orange-400 shadow-orange-400/50">
                              {site.bonus}
                            </Badge>
                            <div className="flex items-center justify-center sm:justify-start gap-1 mb-2">
                              {Array.from({ length: 5 }, (_, i) => (
                                <Star
                                  key={i}
                                  className="w-3 h-3 sm:w-4 sm:h-4 fill-yellow-400 text-yellow-400 animate-starPulse"
                                  style={{ animationDelay: `${i * 0.1}s` }}
                                />
                              ))}
                              <span className="text-xs sm:text-sm ml-1">{site.rating}</span>
                            </div>
                            <Button
                              className="bg-gradient-to-r from-green-700 to-green-800 hover:from-green-600 hover:to-green-700 text-white px-3 py-1 sm:px-4 sm:py-2 text-xs sm:text-sm shadow-md hover:shadow-lg transform hover:scale-105 transition-all duration-300 border border-green-600 shadow-green-500/50"
                              onClick={(e) => e.stopPropagation()}
                            >
                              Get Bonus
                            </Button>
                          </div>
                        </div>
                      </Card>
                    </Link>
                  ))}
                </div>
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  )
}
