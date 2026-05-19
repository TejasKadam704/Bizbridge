import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import Footer from '../components/common/Footer'

export default function ContactUs() {
  const navigate = useNavigate()

  const [form, setForm] = useState({ name: '', email: '', subject: '', message: '' })
  const [loading, setLoading] = useState(false)
  const [success, setSuccess] = useState(false)
  const [error, setError] = useState('')

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setLoading(true)
    setError('')
    try {
      const res = await fetch(`${import.meta.env.VITE_API_URL}/api/contact/`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      })
      if (res.ok) {
        setSuccess(true)
        setForm({ name: '', email: '', subject: '', message: '' })
      } else {
        const data = await res.json()
        setError(data?.message || 'Something went wrong. Please try again.')
      }
    } catch {
      setError('Network error. Please check your connection.')
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="min-h-screen bg-black text-white flex flex-col">
      {/* Back Button */}
      <div className="absolute top-6 left-6 z-10">
        <button
          onClick={() => navigate(-1)}
          className="flex items-center gap-2 px-6 py-3 bg-white/5 backdrop-blur-xl rounded-2xl shadow-lg shadow-black/50 hover:shadow-xl hover:shadow-purple-500/20 transition-all duration-300 hover:translate-x-1 group border border-white/10 hover:border-purple-500/30"
        >
          <svg className="w-5 h-5 text-gray-400 group-hover:text-purple-400 transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
          </svg>
          <span className="text-gray-300 font-semibold group-hover:text-purple-400 transition-colors">Back</span>
        </button>
      </div>

      {/* Content */}
      <div className="flex-1 container mx-auto px-4 py-20">
        <div className="max-w-5xl mx-auto">
          <h1 className="text-6xl font-black bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent mb-4">
            Contact Us
          </h1>
          <p className="text-gray-400 text-lg mb-12">Get in touch with our team</p>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
            {/* Left — contact info */}
            <div className="space-y-4">
              {[
                { icon: '📧', label: 'Email',   value: 'support@bizbridge.com' },
                { icon: '📞', label: 'Phone',   value: '+1 (555) 123-4567' },
                { icon: '📍', label: 'Address', value: '123 Business St, Suite 100\nMumbai, Maharashtra, India' },
              ].map(({ icon, label, value }) => (
                <div key={label} className="flex items-start gap-4 p-6 bg-white/5 border border-white/10 rounded-2xl">
                  <span className="text-2xl">{icon}</span>
                  <div>
                    <p className="text-white font-bold text-lg">{label}</p>
                    <p className="text-gray-400 whitespace-pre-line">{value}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* Right — form */}
            <div className="bg-white/5 border border-white/10 rounded-2xl p-8">
              {success ? (
                <div className="flex flex-col items-center justify-center h-full gap-4 py-10">
                  <div className="text-5xl">✅</div>
                  <h3 className="text-2xl font-bold text-white">Message Sent!</h3>
                  <p className="text-gray-400 text-center">We'll get back to you as soon as possible.</p>
                  <button
                    onClick={() => setSuccess(false)}
                    className="mt-4 px-6 py-2 bg-purple-600 hover:bg-purple-700 rounded-xl text-white font-semibold transition"
                  >
                    Send Another
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  {[
                    { label: 'Name',    name: 'name',    type: 'text',  placeholder: 'Your name' },
                    { label: 'Email',   name: 'email',   type: 'email', placeholder: 'your@email.com' },
                    { label: 'Subject', name: 'subject', type: 'text',  placeholder: 'How can we help?' },
                  ].map(({ label, name, type, placeholder }) => (
                    <div key={name}>
                      <label className="block text-sm text-gray-400 mb-1">{label}</label>
                      <input
                        type={type}
                        name={name}
                        value={form[name]}
                        onChange={handleChange}
                        placeholder={placeholder}
                        required
                        className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white placeholder-gray-600 focus:outline-none focus:border-purple-500 transition"
                      />
                    </div>
                  ))}

                  <div>
                    <label className="block text-sm text-gray-400 mb-1">Message</label>
                    <textarea
                      name="message"
                      value={form.message}
                      onChange={handleChange}
                      placeholder="Write your message..."
                      required
                      rows={5}
                      className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white placeholder-gray-600 focus:outline-none focus:border-purple-500 transition resize-none"
                    />
                  </div>

                  {error && <p className="text-red-400 text-sm">{error}</p>}

                  <button
                    type="submit"
                    disabled={loading}
                    className="w-full py-4 bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 rounded-xl text-white font-bold text-lg transition disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    {loading ? 'Sending...' : 'Send Message'}
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>

      <Footer accentColor="blue" />
    </div>
  )
}