'use client'

import { useState, useEffect, useCallback } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import Link from 'next/link'

interface Tooltip {
  title: string
  description: string
  features?: string[]
}

interface ServiceItem {
  id: string
  name: string
  customCode?: number
  wordpress?: number
  template?: number
  price?: number
  tooltip: Tooltip
  category?: string
}

interface QuoteState {
  developmentType: 'custom' | 'wordpress' | 'template'
  projectDiscovery: Record<string, boolean>
  pages: Record<string, boolean | number>
  design: Record<string, boolean>
  functionality: Record<string, boolean>
  ecommerce: Record<string, boolean>
  mobile: Record<string, boolean>
  seo: Record<string, boolean>
  integrations: Record<string, boolean>
  hosting: Record<string, boolean>
  industrySpecific: Record<string, boolean>
  maintenance: string
}

const PROJECT_DISCOVERY: ServiceItem[] = [
  {
    id: 'consultation',
    name: 'Initial Consultation',
    price: 0,
    tooltip: {
      title: 'FREE Initial Consultation',
      description: 'Comprehensive needs assessment and scope definition session',
      features: ['1 hour session', 'Needs assessment', 'Scope definition', 'Timeline planning']
    }
  },
  {
    id: 'requirements',
    name: 'Detailed Requirements Document',
    price: 1200,
    tooltip: {
      title: 'Professional Project Documentation',
      description: 'Written scope, wireframes, and detailed timeline',
      features: ['Written project scope', 'Wireframe layouts', 'Detailed timeline', 'Clear expectations']
    }
  },
  {
    id: 'competitor',
    name: 'Competitor Analysis',
    price: 800,
    tooltip: {
      title: 'Market Research & Analysis',
      description: 'Analysis of 5 competitor websites to inform your strategy',
      features: ['5 competitor sites analyzed', 'Feature comparison', 'Market positioning', 'Opportunity identification']
    }
  },
  {
    id: 'userJourney',
    name: 'User Journey Mapping',
    price: 1500,
    tooltip: {
      title: 'Customer Experience Planning',
      description: 'Detailed customer flow documentation and optimization',
      features: ['Customer flow mapping', 'Touchpoint identification', 'Conversion optimization', 'User experience design']
    }
  }
]

const BASIC_PAGES: ServiceItem[] = [
  {
    id: 'homepage',
    name: 'Homepage',
    customCode: 2800,
    wordpress: 2200,
    template: 1500,
    tooltip: {
      title: 'Professional Homepage',
      description: 'Your main landing page with hero section, features, and call-to-actions',
      features: ['Hero section', 'Features showcase', 'Testimonials', 'Clear CTAs', 'Mobile responsive']
    }
  },
  {
    id: 'about',
    name: 'About Page',
    customCode: 800,
    wordpress: 600,
    template: 400,
    tooltip: {
      title: 'Tell Your Story',
      description: 'Professional about page showcasing your story, team, and values',
      features: ['Company story', 'Team profiles', 'Mission & values', 'Trust building elements']
    }
  },
  {
    id: 'services',
    name: 'Services Page',
    customCode: 1200,
    wordpress: 900,
    template: 600,
    tooltip: {
      title: 'Showcase Your Services',
      description: 'Detailed service listings with descriptions and pricing',
      features: ['Service listings', 'Detailed descriptions', 'Pricing display', 'Booking integration ready']
    }
  },
  {
    id: 'contact',
    name: 'Contact Page',
    customCode: 900,
    wordpress: 700,
    template: 500,
    tooltip: {
      title: 'Make Contact Easy',
      description: 'Contact form, map, business details, and social links',
      features: ['Contact form', 'Google Maps', 'Business details', 'Social media links', 'WhatsApp integration']
    }
  },
  {
    id: 'portfolio',
    name: 'Portfolio/Gallery',
    customCode: 1500,
    wordpress: 1200,
    template: 800,
    tooltip: {
      title: 'Showcase Your Work',
      description: 'Professional portfolio with filterable categories and lightbox',
      features: ['Image gallery', 'Category filters', 'Lightbox viewing', 'Project descriptions']
    }
  },
  {
    id: 'blog',
    name: 'Blog/News Page',
    customCode: 1200,
    wordpress: 800,
    template: 600,
    tooltip: {
      title: 'Content Management',
      description: 'Blog system for content marketing and news updates',
      features: ['Post listings', 'Categories & tags', 'Search functionality', 'Social sharing']
    }
  }
]

const ADVANCED_PAGES: ServiceItem[] = [
  {
    id: 'dashboard',
    name: 'Custom Dashboard',
    customCode: 5000,
    wordpress: 3500,
    template: 0,
    tooltip: {
      title: 'Business Intelligence Dashboard',
      description: 'Custom analytics and data visualization for your business',
      features: ['User analytics', 'Data visualization', 'Real-time updates', 'Custom metrics']
    }
  },
  {
    id: 'memberPortal',
    name: 'Member Portal',
    customCode: 4000,
    wordpress: 3000,
    template: 2000,
    tooltip: {
      title: 'Exclusive Member Area',
      description: 'Protected content area with user profiles and exclusive content',
      features: ['User login system', 'Member profiles', 'Protected content', 'Subscription management']
    }
  },
  {
    id: 'bookingSystem',
    name: 'Booking System Page',
    customCode: 3500,
    wordpress: 2500,
    template: 1800,
    tooltip: {
      title: 'Online Appointment System',
      description: 'Complete booking system with calendar and payment integration',
      features: ['Calendar integration', 'Payment processing', 'Email confirmations', 'Cancellation management']
    }
  }
]

const DESIGN_SERVICES: ServiceItem[] = [
  {
    id: 'wireframes',
    name: 'Wireframe Creation',
    price: 1500,
    tooltip: {
      title: 'Site Structure Planning',
      description: 'Low-fidelity layouts showing site structure and user flow',
      features: ['Site structure', 'User flow mapping', 'Layout planning', 'Functionality overview']
    }
  },
  {
    id: 'mockups',
    name: 'Mockup Design',
    price: 2500,
    tooltip: {
      title: 'Visual Design Concepts',
      description: 'High-fidelity visual designs with 3 concept options',
      features: ['3 design concepts', 'High-fidelity visuals', 'Brand integration', 'Responsive layouts']
    }
  },
  {
    id: 'designSystem',
    name: 'Design System',
    price: 3500,
    tooltip: {
      title: 'Brand Consistency Guide',
      description: 'Complete design system for consistent branding across all touchpoints',
      features: ['Color palette', 'Typography system', 'Component library', 'Usage guidelines']
    }
  },
  {
    id: 'animations',
    name: 'Custom Animations',
    price: 1800,
    tooltip: {
      title: 'Interactive Elements',
      description: 'Scroll animations, hover effects, and micro-interactions',
      features: ['Scroll animations', 'Hover effects', 'Loading animations', 'Micro-interactions']
    }
  }
]

const FUNCTIONALITY_FEATURES: ServiceItem[] = [
  {
    id: 'contactForm',
    name: 'Advanced Contact Forms',
    price: 1400,
    tooltip: {
      title: 'Professional Contact System',
      description: 'Custom contact forms with validation and spam protection',
      features: ['Form validation', 'Spam protection', 'Email notifications', 'Custom fields']
    }
  },
  {
    id: 'liveChat',
    name: 'Live Chat Integration',
    price: 1200,
    tooltip: {
      title: 'Real-time Customer Support',
      description: 'WhatsApp Business API or professional chat system',
      features: ['Real-time messaging', 'Mobile notifications', 'Chat history', 'Automated responses']
    }
  },
  {
    id: 'userManagement',
    name: 'User Management System',
    price: 2500,
    tooltip: {
      title: 'Complete User System',
      description: 'User registration, login, profiles, and role management',
      features: ['User registration', 'Secure login', 'User profiles', 'Role permissions']
    }
  },
  {
    id: 'paymentForms',
    name: 'Payment Integration',
    price: 2800,
    tooltip: {
      title: 'Secure Payment Processing',
      description: 'PayFast, Stripe, or PayPal integration with secure forms',
      features: ['Multiple payment gateways', 'Secure processing', 'Receipt generation', 'Refund management']
    }
  }
]

const ECOMMERCE_FEATURES: ServiceItem[] = [
  {
    id: 'productCatalog',
    name: 'Product Catalog',
    customCode: 3500,
    wordpress: 2500,
    template: 0,
    tooltip: {
      title: 'Professional Product Showcase',
      description: 'Complete product management with categories and search',
      features: ['Product listings', 'Category management', 'Advanced search', 'Inventory tracking']
    }
  },
  {
    id: 'shoppingCart',
    name: 'Shopping Cart & Checkout',
    customCode: 3000,
    wordpress: 2200,
    template: 0,
    tooltip: {
      title: 'Complete E-commerce Solution',
      description: 'Full shopping cart with secure checkout process',
      features: ['Shopping cart', 'Secure checkout', 'Guest checkout', 'Order management']
    }
  },
  {
    id: 'inventoryManagement',
    name: 'Inventory Management',
    customCode: 2800,
    wordpress: 2000,
    template: 0,
    tooltip: {
      title: 'Stock Control System',
      description: 'Real-time inventory tracking with low stock alerts',
      features: ['Stock tracking', 'Low stock alerts', 'Inventory reports', 'Supplier management']
    }
  }
]

const SEO_SERVICES: ServiceItem[] = [
  {
    id: 'technicalSEO',
    name: 'Technical SEO Audit',
    price: 2000,
    tooltip: {
      title: 'Complete SEO Analysis',
      description: 'Comprehensive technical SEO audit and optimization',
      features: ['Site speed analysis', 'Mobile optimization', 'Technical fixes', 'Performance report']
    }
  },
  {
    id: 'onPageSEO',
    name: 'On-Page SEO',
    price: 1800,
    tooltip: {
      title: 'Content Optimization',
      description: 'Meta tags, headings, and content optimization for search engines',
      features: ['Meta tag optimization', 'Heading structure', 'Content optimization', 'Internal linking']
    }
  },
  {
    id: 'localSEO',
    name: 'Local SEO Setup',
    price: 2500,
    tooltip: {
      title: 'Local Business Optimization',
      description: 'Google My Business setup and local search optimization',
      features: ['Google My Business', 'Local citations', 'Review management', 'Local schema markup']
    }
  },
  {
    id: 'analytics',
    name: 'Analytics & Tracking',
    price: 1200,
    tooltip: {
      title: 'Performance Monitoring',
      description: 'Google Analytics, Search Console, and conversion tracking',
      features: ['Google Analytics', 'Search Console', 'Conversion tracking', 'Custom reports']
    }
  }
]

const HOSTING_SERVICES: ServiceItem[] = [
  {
    id: 'domainSetup',
    name: 'Domain Registration & Setup',
    price: 600,
    tooltip: {
      title: 'Professional Domain Setup',
      description: 'Domain registration and DNS configuration',
      features: ['Domain registration', 'DNS setup', 'Email forwarding', 'SSL certificate']
    }
  },
  {
    id: 'hostingSetup',
    name: 'Hosting Configuration',
    price: 1200,
    tooltip: {
      title: 'Server Setup & Configuration',
      description: 'Professional hosting setup with security and performance optimization',
      features: ['Server configuration', 'Security setup', 'Backup system', 'Performance optimization']
    }
  },
  {
    id: 'sslSecurity',
    name: 'SSL & Security Setup',
    price: 1000,
    tooltip: {
      title: 'Website Security',
      description: 'SSL certificate installation and security monitoring',
      features: ['SSL certificate', 'Security monitoring', 'Malware protection', 'Firewall setup']
    }
  }
]

const MAINTENANCE_PACKAGES = [
  {
    id: 'basic',
    name: 'Basic Care',
    price: 1500,
    tooltip: {
      title: 'Essential Maintenance',
      description: 'Basic updates, backups, and monitoring',
      features: ['Monthly updates', 'Daily backups', 'Uptime monitoring', '48-hour response']
    }
  },
  {
    id: 'business',
    name: 'Business Care',
    price: 2500,
    tooltip: {
      title: 'Complete Business Support',
      description: 'Everything in Basic plus content updates and SEO',
      features: ['Everything in Basic', 'Content updates', 'SEO monitoring', '24-hour response']
    }
  },
  {
    id: 'premium',
    name: 'Premium Care',
    price: 3500,
    tooltip: {
      title: 'Priority Support & Analytics',
      description: 'Complete support with priority response and analytics',
      features: ['Everything in Business', 'Priority support', 'Analytics reports', '4-hour response']
    }
  }
]

export default function QuoteCalculator() {
  const [quote, setQuote] = useState<QuoteState>({
    developmentType: 'wordpress',
    projectDiscovery: {},
    pages: {},
    design: {},
    functionality: {},
    ecommerce: {},
    mobile: {},
    seo: {},
    integrations: {},
    hosting: {},
    industrySpecific: {},
    maintenance: 'none'
  })

  const [expandedSections, setExpandedSections] = useState<Record<string, boolean>>({
    projectDiscovery: false,
    pages: false,
    design: false,
    functionality: false,
    ecommerce: false,
    seo: false,
    hosting: false,
    maintenance: false
  })

  const [totals, setTotals] = useState({
    oneTime: 0,
    monthly: 0,
    originalPrice: 0,
    savings: 0
  })

  const [showTooltip, setShowTooltip] = useState<string | null>(null)

  const calculateTotals = useCallback(() => {
    let oneTime = 0
    let monthly = 0
    let originalPrice = 0
    let selectedServicesCount = 0

    // Project Discovery
    PROJECT_DISCOVERY.forEach(service => {
      if (quote.projectDiscovery[service.id]) {
        oneTime += service.price || 0
        originalPrice += service.price || 0
        selectedServicesCount++
      }
    })

    // Pages
    const getPagePrice = (service: ServiceItem) => {
      switch (quote.developmentType) {
        case 'custom':
          return service.customCode || 0
        case 'wordpress':
          return service.wordpress || 0
        case 'template':
          return service.template || 0
        default:
          return 0
      }
    }

    [...BASIC_PAGES, ...ADVANCED_PAGES].forEach(service => {
      if (quote.pages[service.id]) {
        const price = getPagePrice(service)
        oneTime += price
        originalPrice += price * 1.2 // 20% markup for individual pricing
        selectedServicesCount++
      }
    })

    // Design Services
    DESIGN_SERVICES.forEach(service => {
      if (quote.design[service.id]) {
        oneTime += service.price || 0
        originalPrice += (service.price || 0) * 1.15 // 15% markup
        selectedServicesCount++
      }
    })

    // Functionality
    FUNCTIONALITY_FEATURES.forEach(service => {
      if (quote.functionality[service.id]) {
        oneTime += service.price || 0
        originalPrice += (service.price || 0) * 1.1 // 10% markup
        selectedServicesCount++
      }
    })

    // E-commerce
    ECOMMERCE_FEATURES.forEach(service => {
      if (quote.ecommerce[service.id]) {
        const price = getPagePrice(service)
        oneTime += price
        originalPrice += price * 1.25 // 25% markup for e-commerce
        selectedServicesCount++
      }
    })

    // SEO
    SEO_SERVICES.forEach(service => {
      if (quote.seo[service.id]) {
        oneTime += service.price || 0
        originalPrice += (service.price || 0) * 1.15
        selectedServicesCount++
      }
    })

    // Hosting
    HOSTING_SERVICES.forEach(service => {
      if (quote.hosting[service.id]) {
        oneTime += service.price || 0
        originalPrice += (service.price || 0) * 1.1
        selectedServicesCount++
      }
    })

    // Maintenance
    const maintenanceService = MAINTENANCE_PACKAGES.find(pkg => pkg.id === quote.maintenance)
    if (maintenanceService) {
      monthly += maintenanceService.price
    }

    // Bundle discount calculation
    let bundleDiscount = 0
    if (selectedServicesCount >= 8) {
      bundleDiscount = oneTime * 0.15 // 15% bundle discount
    } else if (selectedServicesCount >= 5) {
      bundleDiscount = oneTime * 0.1 // 10% bundle discount
    } else if (selectedServicesCount >= 3) {
      bundleDiscount = oneTime * 0.05 // 5% bundle discount
    }

    oneTime -= bundleDiscount
    const savings = Math.max(0, originalPrice - oneTime)

    setTotals({ oneTime, monthly, originalPrice, savings })
  }, [quote])

  useEffect(() => {
    calculateTotals()
  }, [quote, calculateTotals])

  const toggleSection = (section: string) => {
    setExpandedSections(prev => ({
      ...prev,
      [section]: !prev[section]
    }))
  }

  const toggleService = (section: keyof QuoteState, serviceId: string) => {
    setQuote(prev => {
      const sectionData = prev[section] as Record<string, boolean | number>
      return {
        ...prev,
        [section]: {
          ...sectionData,
          [serviceId]: !sectionData[serviceId]
        }
      }
    })
  }

  const setDevelopmentType = (type: 'custom' | 'wordpress' | 'template') => {
    setQuote(prev => ({ ...prev, developmentType: type }))
  }

  const setMaintenance = (packageId: string) => {
    setQuote(prev => ({ ...prev, maintenance: packageId }))
  }

  const Tooltip = ({ service, children }: { service: ServiceItem; children: React.ReactNode }) => (
    <div className="relative inline-block">
      <div
        onMouseEnter={() => setShowTooltip(service.id)}
        onMouseLeave={() => setShowTooltip(null)}
        className="cursor-help"
      >
        {children}
      </div>
      <AnimatePresence>
        {showTooltip === service.id && (
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 10 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 10 }}
            className="absolute z-50 p-4 bg-gray-900 text-white rounded-lg shadow-xl border border-gray-700 w-80 left-full ml-2 top-0"
          >
            <h4 className="font-bold text-blue-400 mb-2">{service.tooltip.title}</h4>
            <p className="text-sm text-gray-300 mb-3">{service.tooltip.description}</p>
            {service.tooltip.features && (
              <ul className="text-xs space-y-1">
                {service.tooltip.features.map((feature, index) => (
                  <li key={index} className="flex items-center">
                    <span className="w-1 h-1 bg-blue-400 rounded-full mr-2"></span>
                    {feature}
                  </li>
                ))}
              </ul>
            )}
            {/* Simple arrow pointing to question mark */}
            <div className="absolute top-4 -left-2 w-0 h-0 border-t-[6px] border-b-[6px] border-r-[8px] border-t-transparent border-b-transparent border-r-gray-700"></div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )

  const SectionHeader = ({ title, icon, isExpanded, onClick }: {
    title: string
    icon: string
    isExpanded: boolean
    onClick: () => void
  }) => (
    <motion.button
      onClick={onClick}
      className="w-full flex items-center justify-between p-4 bg-white/5 hover:bg-white/10 rounded-lg transition-colors border border-white/10"
      whileHover={{ scale: 1.01 }}
      whileTap={{ scale: 0.99 }}
    >
      <div className="flex items-center gap-3">
        <span className="text-2xl">{icon}</span>
        <h3 className="text-xl font-bold">{title}</h3>
      </div>
      <motion.div
        animate={{ rotate: isExpanded ? 180 : 0 }}
        transition={{ duration: 0.3 }}
      >
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
        </svg>
      </motion.div>
    </motion.button>
  )

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-background to-background text-foreground relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 w-[200%] h-[200%] -top-1/2 -left-1/2 opacity-30">
        <div className="absolute inset-0 bg-[conic-gradient(from_0deg,rgba(147,51,234,0.1),rgba(59,130,246,0.1),rgba(167,139,250,0.1),rgba(99,102,241,0.1),rgba(139,92,246,0.1),rgba(124,58,237,0.1),rgba(147,51,234,0.1))] animate-spin" style={{ animationDuration: '30s' }}></div>
      </div>
      
      {/* Star field */}
      <div className="absolute inset-0">
        {Array.from({ length: 50 }).map((_, i) => (
          <motion.div
            key={i}
            className="absolute bg-white rounded-full opacity-20"
            style={{
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              width: `${1 + Math.random()}px`,
              height: `${1 + Math.random()}px`,
            }}
            animate={{ opacity: [0.2, 0.8, 0.2] }}
            transition={{ duration: 2 + Math.random() * 3, repeat: Infinity }}
          />
        ))}
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 py-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-12"
        >
          <div className="flex items-center justify-center gap-4 mb-6">
            <Link 
              href="/"
              className="flex items-center gap-2 px-4 py-2 bg-white/10 hover:bg-white/20 rounded-full transition-colors text-sm"
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
              </svg>
              Back to Home
            </Link>
          </div>
          
          <h1 className="text-4xl md:text-6xl font-bold mb-4 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
            Craft Your Vision
          </h1>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Build exactly what you need with our interactive project configurator. 
            Select your features and watch your project come to life.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-4 gap-8">
          {/* Main Configuration */}
          <div className="lg:col-span-3 space-y-6">
            
            {/* Development Type */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              className="bg-white/5 backdrop-blur-md rounded-xl p-6 border border-white/10"
            >
              <h2 className="text-2xl font-bold mb-6 flex items-center gap-3">
                <span className="text-3xl">🏗️</span>
                Development Approach
              </h2>
              <div className="grid md:grid-cols-3 gap-4">
                {[
                  { key: 'template', label: 'Template Based', desc: 'Fast & affordable', icon: '⚡', price: 'From R8,500' },
                  { key: 'wordpress', label: 'WordPress', desc: 'Flexible & manageable', icon: '🎨', price: 'From R15,000' },
                  { key: 'custom', label: 'Custom Code', desc: 'Unlimited possibilities', icon: '🚀', price: 'From R25,000' }
                ].map(({ key, label, desc, icon, price }) => (
                  <motion.button
                    key={key}
                    onClick={() => setDevelopmentType(key as 'custom' | 'wordpress' | 'template')}
                    className={`p-4 rounded-lg border-2 transition-all ${
                      quote.developmentType === key
                        ? 'border-blue-400 bg-blue-400/20'
                        : 'border-white/20 hover:border-white/40'
                    }`}
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <div className="text-2xl mb-2">{icon}</div>
                    <div className="font-semibold">{label}</div>
                    <div className="text-sm text-gray-400">{desc}</div>
                    <div className="text-blue-400 font-bold text-sm mt-2">{price}</div>
                  </motion.button>
                ))}
              </div>
            </motion.div>

            {/* Project Discovery */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.1 }}
              className="bg-white/5 backdrop-blur-md rounded-xl border border-white/10 overflow-hidden"
            >
              <SectionHeader
                title="Project Discovery & Planning"
                icon="📋"
                isExpanded={expandedSections.projectDiscovery}
                onClick={() => toggleSection('projectDiscovery')}
              />
              <AnimatePresence>
                {expandedSections.projectDiscovery && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    className="overflow-hidden"
                  >
                    <div className="p-6 space-y-3">
                      {PROJECT_DISCOVERY.map(service => (
                        <div key={service.id} className="flex items-center justify-between">
                          <Tooltip service={service}>
                            <label className="flex items-center cursor-pointer">
                              <input
                                type="checkbox"
                                checked={Boolean(quote.projectDiscovery[service.id])}
                                onChange={() => toggleService('projectDiscovery', service.id)}
                                className="mr-3 scale-125"
                              />
                              <div className="flex items-center gap-2">
                                <span className="font-medium">{service.name}</span>
                                <svg className="w-4 h-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                                </svg>
                              </div>
                            </label>
                          </Tooltip>
                          <span className="text-blue-400 font-bold">
                            {service.price === 0 ? 'FREE' : `R${service.price?.toLocaleString()}`}
                          </span>
                        </div>
                      ))}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>

            {/* Pages Section */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2 }}
              className="bg-white/5 backdrop-blur-md rounded-xl border border-white/10 overflow-hidden"
            >
              <SectionHeader
                title="Pages & Structure"
                icon="📄"
                isExpanded={expandedSections.pages}
                onClick={() => toggleSection('pages')}
              />
              <AnimatePresence>
                {expandedSections.pages && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    className="overflow-hidden"
                  >
                    <div className="p-6 space-y-6">
                      <div>
                        <h4 className="font-bold mb-3 text-green-400">Essential Pages</h4>
                        <div className="space-y-3">
                          {BASIC_PAGES.map(service => (
                            <div key={service.id} className="flex items-center justify-between">
                              <Tooltip service={service}>
                                <label className="flex items-center cursor-pointer">
                                  <input
                                    type="checkbox"
                                    checked={Boolean(quote.pages[service.id])}
                                    onChange={() => toggleService('pages', service.id)}
                                    className="mr-3 scale-125"
                                  />
                                  <div className="flex items-center gap-2">
                                    <span className="font-medium">{service.name}</span>
                                    <svg className="w-4 h-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                                    </svg>
                                  </div>
                                </label>
                              </Tooltip>
                              <span className="text-blue-400 font-bold">
                                R{(quote.developmentType === 'custom' ? service.customCode : 
                                   quote.developmentType === 'wordpress' ? service.wordpress : 
                                   service.template)?.toLocaleString()}
                              </span>
                            </div>
                          ))}
                        </div>
                      </div>
                      
                      <div>
                        <h4 className="font-bold mb-3 text-purple-400">Advanced Pages</h4>
                        <div className="space-y-3">
                          {ADVANCED_PAGES.map(service => (
                            <div key={service.id} className="flex items-center justify-between">
                              <Tooltip service={service}>
                                <label className="flex items-center cursor-pointer">
                                  <input
                                    type="checkbox"
                                    checked={Boolean(quote.pages[service.id])}
                                    onChange={() => toggleService('pages', service.id)}
                                    className="mr-3 scale-125"
                                    disabled={quote.developmentType === 'template' && !service.template}
                                  />
                                  <div className="flex items-center gap-2">
                                    <span className={`font-medium ${quote.developmentType === 'template' && !service.template ? 'text-gray-500' : ''}`}>
                                      {service.name}
                                    </span>
                                    <svg className="w-4 h-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9-9 0 11-18 0 9 9 0 0118 0z" />
                                    </svg>
                                  </div>
                                </label>
                              </Tooltip>
                              <span className="text-blue-400 font-bold">
                                {quote.developmentType === 'template' && !service.template ? 
                                  'N/A' : 
                                  `R${(quote.developmentType === 'custom' ? service.customCode : 
                                       quote.developmentType === 'wordpress' ? service.wordpress : 
                                       service.template)?.toLocaleString()}`
                                }
                              </span>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>

            {/* Continue with other sections... */}
            {/* Design Services */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.3 }}
              className="bg-white/5 backdrop-blur-md rounded-xl border border-white/10 overflow-hidden"
            >
              <SectionHeader
                title="Design & User Experience"
                icon="🎨"
                isExpanded={expandedSections.design}
                onClick={() => toggleSection('design')}
              />
              <AnimatePresence>
                {expandedSections.design && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    className="overflow-hidden"
                  >
                    <div className="p-6 space-y-3">
                      {DESIGN_SERVICES.map(service => (
                        <div key={service.id} className="flex items-center justify-between">
                          <Tooltip service={service}>
                            <label className="flex items-center cursor-pointer">
                              <input
                                type="checkbox"
                                checked={Boolean(quote.design[service.id])}
                                onChange={() => toggleService('design', service.id)}
                                className="mr-3 scale-125"
                              />
                              <div className="flex items-center gap-2">
                                <span className="font-medium">{service.name}</span>
                                <svg className="w-4 h-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                                </svg>
                              </div>
                            </label>
                          </Tooltip>
                          <span className="text-blue-400 font-bold">R{service.price?.toLocaleString()}</span>
                        </div>
                      ))}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>

            {/* Functionality */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.4 }}
              className="bg-white/5 backdrop-blur-md rounded-xl border border-white/10 overflow-hidden"
            >
              <SectionHeader
                title="Functionality & Features"
                icon="⚡"
                isExpanded={expandedSections.functionality}
                onClick={() => toggleSection('functionality')}
              />
              <AnimatePresence>
                {expandedSections.functionality && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    className="overflow-hidden"
                  >
                    <div className="p-6 space-y-3">
                      {FUNCTIONALITY_FEATURES.map(service => (
                        <div key={service.id} className="flex items-center justify-between">
                          <Tooltip service={service}>
                            <label className="flex items-center cursor-pointer">
                              <input
                                type="checkbox"
                                checked={Boolean(quote.functionality[service.id])}
                                onChange={() => toggleService('functionality', service.id)}
                                className="mr-3 scale-125"
                              />
                              <div className="flex items-center gap-2">
                                <span className="font-medium">{service.name}</span>
                                <svg className="w-4 h-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                                </svg>
                              </div>
                            </label>
                          </Tooltip>
                          <span className="text-blue-400 font-bold">R{service.price?.toLocaleString()}</span>
                        </div>
                      ))}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>

            {/* E-commerce */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.5 }}
              className="bg-white/5 backdrop-blur-md rounded-xl border border-white/10 overflow-hidden"
            >
              <SectionHeader
                title="E-commerce Solutions"
                icon="🛒"
                isExpanded={expandedSections.ecommerce}
                onClick={() => toggleSection('ecommerce')}
              />
              <AnimatePresence>
                {expandedSections.ecommerce && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    className="overflow-hidden"
                  >
                    <div className="p-6 space-y-3">
                      {ECOMMERCE_FEATURES.map(service => (
                        <div key={service.id} className="flex items-center justify-between">
                          <Tooltip service={service}>
                            <label className="flex items-center cursor-pointer">
                              <input
                                type="checkbox"
                                checked={Boolean(quote.ecommerce[service.id])}
                                onChange={() => toggleService('ecommerce', service.id)}
                                className="mr-3 scale-125"
                                disabled={quote.developmentType === 'template'}
                              />
                              <div className="flex items-center gap-2">
                                <span className={`font-medium ${quote.developmentType === 'template' ? 'text-gray-500' : ''}`}>
                                  {service.name}
                                </span>
                                <svg className="w-4 h-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                                </svg>
                              </div>
                            </label>
                          </Tooltip>
                          <span className="text-blue-400 font-bold">
                            {quote.developmentType === 'template' ? 
                              'N/A' : 
                              `R${(quote.developmentType === 'custom' ? service.customCode : service.wordpress)?.toLocaleString()}`
                            }
                          </span>
                        </div>
                      ))}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>

            {/* SEO & Marketing */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.6 }}
              className="bg-white/5 backdrop-blur-md rounded-xl border border-white/10 overflow-hidden"
            >
              <SectionHeader
                title="SEO & Digital Marketing"
                icon="🔍"
                isExpanded={expandedSections.seo}
                onClick={() => toggleSection('seo')}
              />
              <AnimatePresence>
                {expandedSections.seo && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    className="overflow-hidden"
                  >
                    <div className="p-6 space-y-3">
                      {SEO_SERVICES.map(service => (
                        <div key={service.id} className="flex items-center justify-between">
                          <Tooltip service={service}>
                            <label className="flex items-center cursor-pointer">
                              <input
                                type="checkbox"
                                checked={Boolean(quote.seo[service.id])}
                                onChange={() => toggleService('seo', service.id)}
                                className="mr-3 scale-125"
                              />
                              <div className="flex items-center gap-2">
                                <span className="font-medium">{service.name}</span>
                                <svg className="w-4 h-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                                </svg>
                              </div>
                            </label>
                          </Tooltip>
                          <span className="text-blue-400 font-bold">R{service.price?.toLocaleString()}</span>
                        </div>
                      ))}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>

            {/* Hosting & Technical */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.7 }}
              className="bg-white/5 backdrop-blur-md rounded-xl border border-white/10 overflow-hidden"
            >
              <SectionHeader
                title="Hosting & Technical Setup"
                icon="🌐"
                isExpanded={expandedSections.hosting}
                onClick={() => toggleSection('hosting')}
              />
              <AnimatePresence>
                {expandedSections.hosting && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    className="overflow-hidden"
                  >
                    <div className="p-6 space-y-3">
                      {HOSTING_SERVICES.map(service => (
                        <div key={service.id} className="flex items-center justify-between">
                          <Tooltip service={service}>
                            <label className="flex items-center cursor-pointer">
                              <input
                                type="checkbox"
                                checked={Boolean(quote.hosting[service.id])}
                                onChange={() => toggleService('hosting', service.id)}
                                className="mr-3 scale-125"
                              />
                              <div className="flex items-center gap-2">
                                <span className="font-medium">{service.name}</span>
                                <svg className="w-4 h-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                                </svg>
                              </div>
                            </label>
                          </Tooltip>
                          <span className="text-blue-400 font-bold">R{service.price?.toLocaleString()}</span>
                        </div>
                      ))}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>

            {/* Maintenance */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.8 }}
              className="bg-white/5 backdrop-blur-md rounded-xl border border-white/10 overflow-hidden"
            >
              <SectionHeader
                title="Ongoing Maintenance"
                icon="🔧"
                isExpanded={expandedSections.maintenance}
                onClick={() => toggleSection('maintenance')}
              />
              <AnimatePresence>
                {expandedSections.maintenance && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    className="overflow-hidden"
                  >
                    <div className="p-6 space-y-3">
                      <div className="grid gap-3">
                        <label className="flex items-center cursor-pointer">
                          <input
                            type="radio"
                            name="maintenance"
                            checked={quote.maintenance === 'none'}
                            onChange={() => setMaintenance('none')}
                            className="mr-3 scale-125"
                          />
                          <div className="flex-1 flex items-center justify-between">
                            <span className="font-medium">No Maintenance</span>
                            <span className="text-green-400 font-bold">FREE</span>
                          </div>
                        </label>
                        {MAINTENANCE_PACKAGES.map(pkg => (
                          <div key={pkg.id} className="flex items-center justify-between">
                            <Tooltip service={pkg}>
                              <label className="flex items-center cursor-pointer">
                                <input
                                  type="radio"
                                  name="maintenance"
                                  checked={quote.maintenance === pkg.id}
                                  onChange={() => setMaintenance(pkg.id)}
                                  className="mr-3 scale-125"
                                />
                                <div className="flex items-center gap-2">
                                  <span className="font-medium">{pkg.name}</span>
                                  <svg className="w-4 h-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                                  </svg>
                                </div>
                              </label>
                            </Tooltip>
                            <span className="text-blue-400 font-bold">R{pkg.price?.toLocaleString()}/month</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>

          </div>

          {/* Quote Summary Sidebar */}
          <div className="lg:sticky lg:top-8 lg:self-start">
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.3 }}
              className="space-y-6"
            >
            <div className="bg-gradient-to-br from-blue-600/20 to-purple-600/20 backdrop-blur-md rounded-xl p-6 border border-blue-400/30">
              <h3 className="text-2xl font-bold mb-6 flex items-center gap-2">
                <span className="text-2xl">💰</span>
                Your Investment
              </h3>
              
              <div className="space-y-4">
                {totals.savings > 0 && (
                  <motion.div 
                    className="bg-green-500/20 border border-green-500/30 rounded-lg p-4"
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5 }}
                  >
                    <div className="flex items-center justify-between">
                      <div className="text-sm text-green-300">Bundle Savings</div>
                      <div className="text-xl font-bold text-green-400">
                        -R{totals.savings.toLocaleString()}
                      </div>
                    </div>
                    <div className="text-xs text-green-300/70 mt-1">
                      Was R{totals.originalPrice.toLocaleString()}
                    </div>
                  </motion.div>
                )}

                <div className="bg-white/10 rounded-lg p-4">
                  <div className="text-sm text-gray-300">Project Cost</div>
                  <div className="text-3xl font-bold text-white">
                    R{totals.oneTime.toLocaleString()}
                  </div>
                </div>

                {totals.monthly > 0 && (
                  <div className="bg-white/10 rounded-lg p-4">
                    <div className="text-sm text-gray-300">Monthly Ongoing</div>
                    <div className="text-xl font-bold text-white">
                      R{totals.monthly.toLocaleString()}/month
                    </div>
                  </div>
                )}
              </div>

              <div className="space-y-3 mt-6">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="w-full bg-gradient-to-r from-blue-500 to-purple-500 hover:from-blue-600 hover:to-purple-600 text-white font-bold py-3 px-6 rounded-lg transition-all"
                  onClick={() => {
                    const selectedServices = [
                      ...Object.keys(quote.projectDiscovery).filter(key => quote.projectDiscovery[key]),
                      ...Object.keys(quote.pages).filter(key => quote.pages[key]),
                      ...Object.keys(quote.design).filter(key => quote.design[key]),
                      ...Object.keys(quote.functionality).filter(key => quote.functionality[key]),
                      ...Object.keys(quote.ecommerce).filter(key => quote.ecommerce[key]),
                      ...Object.keys(quote.seo).filter(key => quote.seo[key]),
                      ...Object.keys(quote.hosting).filter(key => quote.hosting[key])
                    ]
                    
                    const mailto = `mailto:niaexedev@gmail.com?subject=Project Meeting Request&body=Hi Liam,%0D%0A%0D%0AI'd like to schedule a meeting to discuss my project:%0D%0A%0D%0ADevelopment Type: ${quote.developmentType}%0D%0AProject Cost: R${totals.oneTime.toLocaleString()}%0D%0A${totals.monthly > 0 ? `Monthly Maintenance: R${totals.monthly.toLocaleString()}/month%0D%0A` : ''}%0D%0ASelected Services: ${selectedServices.join(', ')}%0D%0A%0D%0APlease get in touch to schedule a meeting.%0D%0A%0D%0AThanks!`
                    window.location.href = mailto
                  }}
                >
                  🤝 Request Meeting
                </motion.button>

                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="w-full bg-white/10 hover:bg-white/20 text-white font-medium py-2 px-6 rounded-lg transition-all border border-white/20"
                  onClick={() => {
                    const selectedServices = [
                      ...Object.keys(quote.projectDiscovery).filter(key => quote.projectDiscovery[key]),
                      ...Object.keys(quote.pages).filter(key => quote.pages[key]),
                      ...Object.keys(quote.design).filter(key => quote.design[key]),
                      ...Object.keys(quote.functionality).filter(key => quote.functionality[key]),
                      ...Object.keys(quote.ecommerce).filter(key => quote.ecommerce[key]),
                      ...Object.keys(quote.seo).filter(key => quote.seo[key]),
                      ...Object.keys(quote.hosting).filter(key => quote.hosting[key])
                    ]
                    
                    const quoteText = `Website Quote Summary
                    
Development Type: ${quote.developmentType}
Project Cost: R${totals.oneTime.toLocaleString()}
${totals.monthly > 0 ? `Monthly Maintenance: R${totals.monthly.toLocaleString()}/month` : ''}
${totals.savings > 0 ? `Total Savings: R${totals.savings.toLocaleString()}` : ''}

Selected Services:
${selectedServices.map(service => `• ${service}`).join('\n')}

Generated: ${new Date().toLocaleDateString()}`
                    
                    const blob = new Blob([quoteText], { type: 'text/plain' })
                    const url = URL.createObjectURL(blob)
                    const a = document.createElement('a')
                    a.href = url
                    a.download = `website-quote-${Date.now()}.txt`
                    document.body.appendChild(a)
                    a.click()
                    document.body.removeChild(a)
                    URL.revokeObjectURL(url)
                  }}
                >
                  📥 Download Quote
                </motion.button>
              </div>

              <div className="mt-4 text-center text-sm text-gray-400">
                Free consultation • 24hr response • No obligation
              </div>
            </div>

            <div className="bg-white/5 backdrop-blur-md rounded-xl p-6 border border-white/10">
              <h4 className="font-bold mb-3 flex items-center gap-2">
                <span>✨</span>
                Always Included
              </h4>
              <ul className="text-sm space-y-2 text-gray-300">
                <li className="flex items-center gap-2">
                  <span className="w-1 h-1 bg-blue-400 rounded-full"></span>
                  Mobile-responsive design
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-1 h-1 bg-blue-400 rounded-full"></span>
                  Cross-browser compatibility
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-1 h-1 bg-blue-400 rounded-full"></span>
                  Basic SEO optimization
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-1 h-1 bg-blue-400 rounded-full"></span>
                  30-day post-launch support
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-1 h-1 bg-blue-400 rounded-full"></span>
                  Training & documentation
                </li>
              </ul>
            </div>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  )
}