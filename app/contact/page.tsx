'use client';

import React, { useState } from 'react';

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
  });

  const [errors, setErrors] = useState<{ [key: string]: string }>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: '' }));
    }
  };

  const validateForm = () => {
    const newErrors: { [key: string]: string } = {};

    if (!formData.name.trim()) {
      newErrors.name = 'Name is required';
    }

    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Email is invalid';
    }

    if (!formData.phone.trim()) {
      newErrors.phone = 'Phone is required';
    }

    if (!formData.message.trim()) {
      newErrors.message = 'Message is required';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!validateForm()) {
      return;
    }

    setIsSubmitting(true);

    try {
      // Simulate API call
      await new Promise((resolve) => setTimeout(resolve, 1000));
      setSubmitSuccess(true);
      setFormData({ name: '', email: '', phone: '', message: '' });
      setTimeout(() => setSubmitSuccess(false), 5000);
    } catch (error) {
      console.error('Error submitting form:', error);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section className="w-full bg-white pt-32 pb-20 px-4">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="mb-12 max-w-2xl">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            How can we help you?
          </h2>
          <p className="text-base text-gray-700 leading-relaxed">
            Looking for more information or have a question? Email us at{' '}
            <a
              href="mailto:info@ElecTech.com"
              className="font-bold"
              style={{ color: '#dbad67' }}
            >
              info@ElecTech.com
            </a>{' '}
            or fill in the form below and we'll get back to you.
          </p>
        </div>

        {/* Success Message */}
        {submitSuccess && (
          <div className="mb-6 p-4 rounded-lg bg-green-50 border border-green-200 text-green-700 text-sm">
            Thank you for your message! We'll get back to you soon.
          </div>
        )}

        {/* Form */}
        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Three Column Row */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {/* Name Field */}
            <div className="relative">
              <input
                id="name"
                name="name"
                type="text"
                value={formData.name}
                onChange={handleChange}
                placeholder=" "
                className={`w-full px-4 pt-6 pb-3 rounded-lg text-sm font-medium transition-all duration-200 outline-none ${
                  errors.name
                    ? 'bg-red-50 border-2 border-red-300 focus:border-red-500 focus:ring-2 focus:ring-red-200'
                    : 'bg-gray-50 border border-gray-300 focus:border-yellow-600 focus:ring-2 focus:ring-yellow-100'
                }`}
                style={{
                  backgroundColor: errors.name ? '#fee2e2' : '#faf8f5',
                  borderColor: errors.name ? '#fca5a5' : '#e0dbd2',
                }}
              />
              <label
                htmlFor="name"
                className={`absolute left-4 text-xs font-semibold transition-all duration-200 pointer-events-none ${
                  formData.name || errors.name
                    ? 'top-2 text-xs'
                    : 'top-4 text-sm text-gray-500'
                }`}
                style={{
                  color: errors.name ? '#dc2626' : formData.name ? '#dbad67' : '#9a9080',
                }}
              >
                Name *
              </label>
              {errors.name && <p className="text-red-600 text-xs mt-1">{errors.name}</p>}
            </div>

            {/* Email Field */}
            <div className="relative">
              <input
                id="email"
                name="email"
                type="email"
                value={formData.email}
                onChange={handleChange}
                placeholder=" "
                className={`w-full px-4 pt-6 pb-3 rounded-lg text-sm font-medium transition-all duration-200 outline-none ${
                  errors.email
                    ? 'bg-red-50 border-2 border-red-300 focus:border-red-500 focus:ring-2 focus:ring-red-200'
                    : 'bg-gray-50 border border-gray-300 focus:border-yellow-600 focus:ring-2 focus:ring-yellow-100'
                }`}
                style={{
                  backgroundColor: errors.email ? '#fee2e2' : '#faf8f5',
                  borderColor: errors.email ? '#fca5a5' : '#e0dbd2',
                }}
              />
              <label
                htmlFor="email"
                className={`absolute left-4 text-xs font-semibold transition-all duration-200 pointer-events-none ${
                  formData.email || errors.email
                    ? 'top-2 text-xs'
                    : 'top-4 text-sm text-gray-500'
                }`}
                style={{
                  color: errors.email ? '#dc2626' : formData.email ? '#dbad67' : '#9a9080',
                }}
              >
                Email *
              </label>
              {errors.email && <p className="text-red-600 text-xs mt-1">{errors.email}</p>}
            </div>

            {/* Phone Field */}
            <div className="relative">
              <input
                id="phone"
                name="phone"
                type="tel"
                value={formData.phone}
                onChange={handleChange}
                placeholder=" "
                className={`w-full px-4 pt-6 pb-3 rounded-lg text-sm font-medium transition-all duration-200 outline-none ${
                  errors.phone
                    ? 'bg-red-50 border-2 border-red-300 focus:border-red-500 focus:ring-2 focus:ring-red-200'
                    : 'bg-gray-50 border border-gray-300 focus:border-yellow-600 focus:ring-2 focus:ring-yellow-100'
                }`}
                style={{
                  backgroundColor: errors.phone ? '#fee2e2' : '#faf8f5',
                  borderColor: errors.phone ? '#fca5a5' : '#e0dbd2',
                }}
              />
              <label
                htmlFor="phone"
                className={`absolute left-4 text-xs font-semibold transition-all duration-200 pointer-events-none ${
                  formData.phone || errors.phone
                    ? 'top-2 text-xs'
                    : 'top-4 text-sm text-gray-500'
                }`}
                style={{
                  color: errors.phone ? '#dc2626' : formData.phone ? '#dbad67' : '#9a9080',
                }}
              >
                Phone *
              </label>
              {errors.phone && <p className="text-red-600 text-xs mt-1">{errors.phone}</p>}
            </div>
          </div>

          {/* Message Field */}
          <div className="relative">
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              placeholder=" "
              rows={6}
              className={`w-full px-4 pt-6 pb-3 rounded-lg text-sm font-medium transition-all duration-200 outline-none resize-none ${
                errors.message
                  ? 'bg-red-50 border-2 border-red-300 focus:border-red-500 focus:ring-2 focus:ring-red-200'
                  : 'bg-gray-50 border border-gray-300 focus:border-yellow-600 focus:ring-2 focus:ring-yellow-100'
              }`}
              style={{
                backgroundColor: errors.message ? '#fee2e2' : '#faf8f5',
                borderColor: errors.message ? '#fca5a5' : '#e0dbd2',
              }}
            />
            <label
              htmlFor="message"
              className={`absolute left-4 text-xs font-semibold transition-all duration-200 pointer-events-none ${
                formData.message || errors.message
                  ? 'top-2 text-xs'
                  : 'top-4 text-sm text-gray-500'
              }`}
              style={{
                color: errors.message ? '#dc2626' : formData.message ? '#dbad67' : '#9a9080',
              }}
            >
              Message *
            </label>
            {errors.message && <p className="text-red-600 text-xs mt-1">{errors.message}</p>}
          </div>

          {/* Submit Button */}
          <div>
            <button
              type="submit"
              disabled={isSubmitting}
              className="inline-flex items-center gap-2 px-8 py-3 text-xs font-bold uppercase tracking-widest transition-all duration-250 rounded-md"
              style={{
                backgroundColor: '#dbad67',
                color: '#1a1714',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.backgroundColor = '#a8895a';
                e.currentTarget.style.color = '#fff';
                e.currentTarget.style.gap = '14px';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.backgroundColor = '#dbad67';
                e.currentTarget.style.color = '#1a1714';
                e.currentTarget.style.gap = '8px';
              }}
            >
              {isSubmitting ? 'Sending...' : 'Send'}
              <span>
                <svg
                  className="w-4 h-4"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <path d="M5 12h14M12 5l7 7-7 7" />
                </svg>
              </span>
            </button>
          </div>
        </form>

        {/* Contact Info Section */}

      </div>
    </section>
  );
}
