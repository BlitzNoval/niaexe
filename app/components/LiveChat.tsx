'use client'

import { useEffect } from 'react'

export default function LiveChat() {
  useEffect(() => {
    // Tawk.to Live Chat Script
    const tawkScript = document.createElement('script')
    tawkScript.async = true
    tawkScript.src = 'https://embed.tawk.to/YOUR_TAWK_ID/1hqtnddka'
    tawkScript.charset = 'UTF-8'
    tawkScript.setAttribute('crossorigin', '*')
    
    const firstScript = document.getElementsByTagName('script')[0]
    if (firstScript && firstScript.parentNode) {
      firstScript.parentNode.insertBefore(tawkScript, firstScript)
    }

    // Tawk.to API
    ;(window as unknown as { Tawk_API: unknown; Tawk_LoadStart: Date }).Tawk_API = (window as unknown as { Tawk_API: unknown }).Tawk_API || {}
    ;(window as unknown as { Tawk_LoadStart: Date }).Tawk_LoadStart = new Date()

    // Customize chat widget
    ;(window as unknown as { Tawk_API: { onLoad: () => void; setAttributes: (attrs: Record<string, string>) => void } }).Tawk_API.onLoad = function() {
      // Customize the chat widget appearance
      ;(window as unknown as { Tawk_API: { setAttributes: (attrs: Record<string, string>) => void } }).Tawk_API.setAttributes({
        'name': 'Project Inquiry',
        'email': '',
        'hash': ''
      })
    }

    // Custom styling for the chat widget
    const style = document.createElement('style')
    style.textContent = `
      /* Hide the default chat widget initially */
      #tawk-bubble-container {
        opacity: 0;
        transform: scale(0.8);
        transition: all 0.3s ease-in-out;
      }

      /* Show the chat widget with animation */
      #tawk-bubble-container.visible {
        opacity: 1;
        transform: scale(1);
      }

      /* Custom chat button styling */
      .tawk-bubble {
        background: linear-gradient(135deg, #3b82f6, #8b5cf6) !important;
        box-shadow: 0 4px 15px rgba(59, 130, 246, 0.3) !important;
      }
    `
    document.head.appendChild(style)

    // Show chat widget after a delay
    setTimeout(() => {
      const chatWidget = document.getElementById('tawk-bubble-container')
      if (chatWidget) {
        chatWidget.classList.add('visible')
      }
    }, 3000)

    return () => {
      // Cleanup
      if (tawkScript.parentNode) {
        tawkScript.parentNode.removeChild(tawkScript)
      }
      if (style.parentNode) {
        style.parentNode.removeChild(style)
      }
    }
  }, [])

  return null
}