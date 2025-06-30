'use client'

import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'

interface QuoteState {
  siteType: 'template' | 'custom'
  pages: {
    home: boolean
    contact: boolean
    booking: boolean
    additional: number
  }
  features: {
    bookingSystem: boolean
    contactForm: boolean
    whatsappButton: boolean
    blogSetup: boolean
    googleAnalytics: boolean
    seoSetup: boolean
  }
  hosting: {
    domainRegistration: boolean
    domainManagement: boolean
    hostingGuidance: boolean
    monthlySiteCare: boolean
  }
  socialMedia: {
    profileSetup: boolean
    strategyDoc: boolean
    monthlyManagement: boolean
  }
}

const PRICING = {
  siteTypes: {
    template: 3500,
    custom: 6500
  },
  pages: {
    contact: 500,
    booking: 800,
    additional: 400
  },
  features: {
    bookingSystem: 900,
    contactForm: 300,
    whatsappButton: 250,
    blogSetup: 600,
    googleAnalytics: 400,
    seoSetup: 800
  },
  hosting: {
    domainRegistration: 180,
    domainManagement: 300,
    hostingGuidance: 600,
    monthlySiteCare: 400
  },
  socialMedia: {
    profileSetup: 800,
    strategyDoc: 600,
    monthlyManagement: 1500
  }
}

export default function QuoteCalculator() {
  const [quote, setQuote] = useState<QuoteState>({
    siteType: 'template',
    pages: {
      home: true,
      contact: false,
      booking: false,
      additional: 0
    },
    features: {
      bookingSystem: false,
      contactForm: false,
      whatsappButton: false,
      blogSetup: false,
      googleAnalytics: false,
      seoSetup: false
    },
    hosting: {
      domainRegistration: false,
      domainManagement: false,
      hostingGuidance: false,
      monthlySiteCare: false
    },
    socialMedia: {
      profileSetup: false,
      strategyDoc: false,
      monthlyManagement: false
    }
  })

  const [totals, setTotals] = useState({
    onceOff: 0,
    monthlyRecurring: 0,
    yearlyRecurring: 0,
    timeline: '5-7 working days'
  })

  useEffect(() => {
    const calculateTotals = () => {
      let onceOff = PRICING.siteTypes[quote.siteType]
      let monthlyRecurring = 0
      let yearlyRecurring = 0
      let timelineWeeks = quote.siteType === 'template' ? 1 : 2

      // Pages
      if (quote.pages.contact) onceOff += PRICING.pages.contact
      if (quote.pages.booking) onceOff += PRICING.pages.booking
      onceOff += quote.pages.additional * PRICING.pages.additional

      // Features
      Object.entries(quote.features).forEach(([feature, enabled]) => {
        if (enabled) {
          onceOff += PRICING.features[feature as keyof typeof PRICING.features]
          if (feature === 'bookingSystem') timelineWeeks += 1
        }
      })

      // Hosting
      if (quote.hosting.domainRegistration) yearlyRecurring += PRICING.hosting.domainRegistration
      if (quote.hosting.domainManagement) yearlyRecurring += PRICING.hosting.domainManagement
      if (quote.hosting.hostingGuidance) yearlyRecurring += PRICING.hosting.hostingGuidance
      if (quote.hosting.monthlySiteCare) monthlyRecurring += PRICING.hosting.monthlySiteCare

      // Social Media
      if (quote.socialMedia.profileSetup) onceOff += PRICING.socialMedia.profileSetup
      if (quote.socialMedia.strategyDoc) onceOff += PRICING.socialMedia.strategyDoc
      if (quote.socialMedia.monthlyManagement) monthlyRecurring += PRICING.socialMedia.monthlyManagement

      const timeline = timelineWeeks === 1 ? '5-7 working days' : timelineWeeks === 2 ? '10-14 working days' : `${timelineWeeks * 7}-${(timelineWeeks + 1) * 7} working days`

      setTotals({ onceOff, monthlyRecurring, yearlyRecurring, timeline })
    }

    calculateTotals()
  }, [quote])

  const toggleFeature = (section: keyof QuoteState, feature: string, value?: any) => {
    setQuote(prev => ({
      ...prev,
      [section]: typeof prev[section] === 'object' 
        ? { ...prev[section], [feature]: value !== undefined ? value : !prev[section][feature] }
        : value
    }))
  }

  const exportQuote = () => {
    const quoteData = {
      ...quote,
      totals,
      timestamp: new Date().toISOString()
    }
    
    const blob = new Blob([JSON.stringify(quoteData, null, 2)], { type: 'application/json' })
    const url = URL.createObjectURL(blob)
    const a = document.createElement('a')
    a.href = url
    a.download = `website-quote-${Date.now()}.json`
    document.body.appendChild(a)
    a.click()
    document.body.removeChild(a)
    URL.revokeObjectURL(url)
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-blue-900 to-purple-900 text-white">
      <div className="max-w-6xl mx-auto px-4 py-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h1 className="text-4xl md:text-6xl font-bold mb-4 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
            Build Your Site
          </h1>
          <p className="text-xl text-gray-300">Get an instant quote for your dream website</p>
        </motion.div>

        <div className="grid lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2 space-y-8">
            {/* Site Type */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.1 }}
              className="bg-white/10 backdrop-blur-md rounded-xl p-6 border border-white/20"
            >
              <h2 className="text-2xl font-bold mb-4 flex items-center">
                🏗️ Site Type
              </h2>
              <div className="grid md:grid-cols-2 gap-4">
                {[
                  { key: 'template', label: 'Template-Based', price: 3500, desc: 'Quick setup with proven designs' },
                  { key: 'custom', label: 'Custom WordPress', price: 6500, desc: 'Fully customized to your brand' }
                ].map(({ key, label, price, desc }) => (
                  <button
                    key={key}
                    onClick={() => toggleFeature('siteType', '', key)}
                    className={`p-4 rounded-lg border-2 transition-all ${
                      quote.siteType === key
                        ? 'border-blue-400 bg-blue-400/20'
                        : 'border-white/30 hover:border-white/50'
                    }`}
                  >
                    <div className="text-left">
                      <div className="font-semibold">{label}</div>
                      <div className="text-blue-400 font-bold">R{price.toLocaleString()}</div>
                      <div className="text-sm text-gray-300">{desc}</div>
                    </div>
                  </button>
                ))}
              </div>
            </motion.div>

            {/* Pages */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2 }}
              className="bg-white/10 backdrop-blur-md rounded-xl p-6 border border-white/20"
            >
              <h2 className="text-2xl font-bold mb-4 flex items-center">
                📄 Pages Needed
              </h2>
              <div className="space-y-3">
                <div className="flex items-center justify-between p-3 bg-green-400/20 rounded-lg border border-green-400/30">
                  <div>
                    <span className="font-semibold">Home Page</span>
                    <span className="text-sm text-gray-300 ml-2">(Always included)</span>
                  </div>
                  <span className="text-green-400 font-bold">FREE</span>
                </div>
                
                {[
                  { key: 'contact', label: 'Contact Page', price: 500 },
                  { key: 'booking', label: 'Booking Page', price: 800 }
                ].map(({ key, label, price }) => (
                  <label key={key} className="flex items-center justify-between p-3 bg-white/5 rounded-lg cursor-pointer hover:bg-white/10 transition-colors">
                    <div className="flex items-center">
                      <input
                        type="checkbox"
                        checked={quote.pages[key as keyof typeof quote.pages] as boolean}
                        onChange={() => toggleFeature('pages', key)}
                        className="mr-3 scale-125"
                      />
                      <span className="font-semibold">{label}</span>
                    </div>
                    <span className="text-blue-400 font-bold">+R{price}</span>
                  </label>
                ))}

                <div className="flex items-center justify-between p-3 bg-white/5 rounded-lg">
                  <div className="flex items-center">
                    <span className="font-semibold mr-4">Additional Pages</span>
                    <div className="flex items-center space-x-2">
                      <button
                        onClick={() => toggleFeature('pages', 'additional', Math.max(0, quote.pages.additional - 1))}
                        className="w-8 h-8 rounded-full bg-red-500 hover:bg-red-600 flex items-center justify-center"
                      >
                        -
                      </button>
                      <span className="w-8 text-center">{quote.pages.additional}</span>
                      <button
                        onClick={() => toggleFeature('pages', 'additional', quote.pages.additional + 1)}
                        className="w-8 h-8 rounded-full bg-green-500 hover:bg-green-600 flex items-center justify-center"
                      >
                        +
                      </button>
                    </div>
                  </div>
                  <span className="text-blue-400 font-bold">+R{(quote.pages.additional * 400).toLocaleString()}</span>
                </div>
              </div>
            </motion.div>

            {/* Features */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.3 }}
              className="bg-white/10 backdrop-blur-md rounded-xl p-6 border border-white/20"
            >
              <h2 className="text-2xl font-bold mb-4 flex items-center">
                ⚡ Features
              </h2>
              <div className="grid md:grid-cols-2 gap-3">
                {[
                  { key: 'bookingSystem', label: 'Booking System', price: 900, desc: 'Full appointment booking' },
                  { key: 'contactForm', label: 'Contact Form', price: 300, desc: 'Custom contact forms' },
                  { key: 'whatsappButton', label: 'WhatsApp Button', price: 250, desc: 'Direct WhatsApp integration' },
                  { key: 'blogSetup', label: 'Blog Setup', price: 600, desc: 'Content management system' },
                  { key: 'googleAnalytics', label: 'Google Analytics', price: 400, desc: 'Traffic tracking setup' },
                  { key: 'seoSetup', label: 'SEO Setup', price: 800, desc: 'Search engine optimization' }
                ].map(({ key, label, price, desc }) => (
                  <label key={key} className="flex items-start p-3 bg-white/5 rounded-lg cursor-pointer hover:bg-white/10 transition-colors">
                    <input
                      type="checkbox"
                      checked={quote.features[key as keyof typeof quote.features]}
                      onChange={() => toggleFeature('features', key)}
                      className="mr-3 mt-1 scale-125"
                    />
                    <div className="flex-1">
                      <div className="font-semibold">{label}</div>
                      <div className="text-sm text-gray-300">{desc}</div>
                      <div className="text-blue-400 font-bold">+R{price}</div>
                    </div>
                  </label>
                ))}
              </div>
            </motion.div>

            {/* Hosting & Setup */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.4 }}
              className="bg-white/10 backdrop-blur-md rounded-xl p-6 border border-white/20"
            >
              <h2 className="text-2xl font-bold mb-4 flex items-center">
                🌐 Setup & Hosting
              </h2>
              <div className="space-y-3">
                {[
                  { key: 'domainRegistration', label: 'Domain Registration', price: 180, period: '/year' },
                  { key: 'domainManagement', label: 'Domain Management', price: 300, period: '/year' },
                  { key: 'hostingGuidance', label: 'Hosting Plan Setup', price: 600, period: '/year' },
                  { key: 'monthlySiteCare', label: 'Monthly Site Care', price: 400, period: '/month' }
                ].map(({ key, label, price, period }) => (
                  <label key={key} className="flex items-center justify-between p-3 bg-white/5 rounded-lg cursor-pointer hover:bg-white/10 transition-colors">
                    <div className="flex items-center">
                      <input
                        type="checkbox"
                        checked={quote.hosting[key as keyof typeof quote.hosting]}
                        onChange={() => toggleFeature('hosting', key)}
                        className="mr-3 scale-125"
                      />
                      <span className="font-semibold">{label}</span>
                    </div>
                    <span className="text-blue-400 font-bold">+R{price}{period}</span>
                  </label>
                ))}
              </div>
            </motion.div>

            {/* Social Media */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.5 }}
              className="bg-white/10 backdrop-blur-md rounded-xl p-6 border border-white/20"
            >
              <h2 className="text-2xl font-bold mb-4 flex items-center">
                📱 Social Media
              </h2>
              <div className="space-y-3">
                {[
                  { key: 'profileSetup', label: 'Profile Setup', price: 800, period: '', desc: 'Professional social media profiles' },
                  { key: 'strategyDoc', label: 'Strategy Document', price: 600, period: '', desc: 'Custom social media strategy' },
                  { key: 'monthlyManagement', label: 'Monthly Management', price: 1500, period: '/month', desc: 'Full social media management' }
                ].map(({ key, label, price, period, desc }) => (
                  <label key={key} className="flex items-start p-3 bg-white/5 rounded-lg cursor-pointer hover:bg-white/10 transition-colors">
                    <input
                      type="checkbox"
                      checked={quote.socialMedia[key as keyof typeof quote.socialMedia]}
                      onChange={() => toggleFeature('socialMedia', key)}
                      className="mr-3 mt-1 scale-125"
                    />
                    <div className="flex-1">
                      <div className="font-semibold">{label}</div>
                      <div className="text-sm text-gray-300">{desc}</div>
                      <div className="text-blue-400 font-bold">+R{price.toLocaleString()}{period}</div>
                    </div>
                  </label>
                ))}
              </div>
            </motion.div>
          </div>

          {/* Quote Summary */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }}
            className="lg:sticky lg:top-8 space-y-6"
          >
            <div className="bg-gradient-to-br from-blue-600 to-purple-600 rounded-xl p-6 border border-white/20">
              <h3 className="text-2xl font-bold mb-4">💰 Your Quote</h3>
              
              <div className="space-y-4">
                <div className="bg-white/20 rounded-lg p-4">
                  <div className="text-sm text-gray-200">Total Once-Off Cost</div>
                  <div className="text-3xl font-bold text-white">R{totals.onceOff.toLocaleString()}</div>
                </div>

                {totals.monthlyRecurring > 0 && (
                  <div className="bg-white/20 rounded-lg p-4">
                    <div className="text-sm text-gray-200">Monthly Recurring</div>
                    <div className="text-xl font-bold text-white">R{totals.monthlyRecurring.toLocaleString()}/month</div>
                  </div>
                )}

                {totals.yearlyRecurring > 0 && (
                  <div className="bg-white/20 rounded-lg p-4">
                    <div className="text-sm text-gray-200">Yearly Recurring</div>
                    <div className="text-xl font-bold text-white">R{totals.yearlyRecurring.toLocaleString()}/year</div>
                  </div>
                )}

                <div className="bg-white/20 rounded-lg p-4">
                  <div className="text-sm text-gray-200">Timeline</div>
                  <div className="text-lg font-bold text-white">{totals.timeline}</div>
                </div>
              </div>

              <button
                onClick={exportQuote}
                className="w-full mt-6 bg-white text-blue-600 font-bold py-3 px-6 rounded-lg hover:bg-gray-100 transition-colors"
              >
                📥 Export Quote
              </button>

              <div className="mt-4 text-center">
                <a 
                  href="mailto:hello@yoursite.com?subject=Website Quote Request"
                  className="text-blue-200 hover:text-white underline"
                >
                  Send this quote via email
                </a>
              </div>
            </div>

            <div className="bg-white/10 backdrop-blur-md rounded-xl p-6 border border-white/20">
              <h4 className="font-bold mb-2">💡 What's Included:</h4>
              <ul className="text-sm space-y-1 text-gray-300">
                <li>• Responsive mobile design</li>
                <li>• Professional layout</li>
                <li>• Basic SEO optimization</li>
                <li>• Contact information setup</li>
                <li>• Social media links</li>
                <li>• 30-day support period</li>
              </ul>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  )
}