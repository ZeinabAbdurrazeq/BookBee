"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";

export default function RegisterPage() {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    password: "",
    confirmPassword: "",
  });
  const [errors, setErrors] = useState<{
    fullName?: string;
    email?: string;
    password?: string;
    confirmPassword?: string;
  }>({});

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name as keyof typeof errors]) {
      setErrors((prev) => ({ ...prev, [name]: undefined }));
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const newErrors: typeof errors = {};

    if (!formData.fullName.trim()) {
      newErrors.fullName = "Full name is required";
    }

    if (!formData.email) {
      newErrors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "Email is invalid";
    }

    if (!formData.password) {
      newErrors.password = "Password is required";
    } else if (formData.password.length < 6) {
      newErrors.password = "Password must be at least 6 characters";
    }

    if (!formData.confirmPassword) {
      newErrors.confirmPassword = "Please confirm your password";
    } else if (formData.password !== formData.confirmPassword) {
      newErrors.confirmPassword = "Passwords do not match";
    }

    setErrors(newErrors);

    if (Object.keys(newErrors).length === 0) {
      console.log("Registration successful:", formData);
      setFormData({ fullName: "", email: "", password: "", confirmPassword: "" });
    }
  };

  return (
    <div className="relative min-h-screen flex items-center justify-center px-4 overflow-hidden pt-32 pb-20">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="https://images.pexels.com/photos/163185/old-typewriter-antique-vintage-163185.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          alt="Vintage Background"
          fill
          className="object-cover vintage-filter blur-[3px] opacity-40 scale-105"
          priority
        />
        <div className="absolute inset-0 bg-[var(--paper-bg)] mix-blend-multiply opacity-20" />
      </div>

      {/* Grain Overlay */}
      <div className="grain-overlay" aria-hidden="true" />

      <div className="relative z-10 w-full max-w-md">
        {/* Simplified White Card with Newspaper Border */}
        <div className="bg-white p-8 md:p-10 border-4 border-double border-[var(--ink-black)] shadow-2xl">
          {/* Header */}
          <div className="text-center mb-8">
            <h1 className="text-3xl newspaper-masthead text-[var(--ink-black)] mb-1">New Enrollment</h1>
            <p className="text-xs uppercase tracking-widest font-bold opacity-60">Subscriber Registry</p>
          </div>

          {/* Form */}
          <form onSubmit={handleSubmit} className="space-y-5">
            {/* Full Name Field */}
            <div>
              <label htmlFor="fullName" className="block text-[10px] font-black uppercase tracking-widest text-[var(--ink-black)] mb-1">
                Legal Name
              </label>
              <input
                id="fullName"
                name="fullName"
                type="text"
                value={formData.fullName}
                onChange={handleChange}
                placeholder="John Doe"
                className={`w-full px-4 py-3 bg-gray-50 border-2 border-[var(--ink-black)] text-sm font-serif focus:bg-white transition-colors outline-none ${errors.fullName ? "border-[var(--vintage-red)]" : ""}`}
              />
              {errors.fullName && <p className="text-[var(--vintage-red)] text-[10px] mt-1 font-bold italic">{errors.fullName}</p>}
            </div>

            {/* Email Field */}
            <div>
              <label htmlFor="email" className="block text-[10px] font-black uppercase tracking-widest text-[var(--ink-black)] mb-1">
                Dispatch Address
              </label>
              <input
                id="email"
                name="email"
                type="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="you@example.com"
                className={`w-full px-4 py-3 bg-gray-50 border-2 border-[var(--ink-black)] text-sm font-serif focus:bg-white transition-colors outline-none ${errors.email ? "border-[var(--vintage-red)]" : ""}`}
              />
              {errors.email && <p className="text-[var(--vintage-red)] text-[10px] mt-1 font-bold italic">{errors.email}</p>}
            </div>

            {/* Password Field */}
            <div>
              <label htmlFor="password" className="block text-[10px] font-black uppercase tracking-widest text-[var(--ink-black)] mb-1">
                Cipher
              </label>
              <input
                id="password"
                name="password"
                type="password"
                value={formData.password}
                onChange={handleChange}
                placeholder="••••••••"
                className={`w-full px-4 py-3 bg-gray-50 border-2 border-[var(--ink-black)] text-sm font-serif focus:bg-white transition-colors outline-none ${errors.password ? "border-[var(--vintage-red)]" : ""}`}
              />
              {errors.password && <p className="text-[var(--vintage-red)] text-[10px] mt-1 font-bold italic">{errors.password}</p>}
            </div>

            {/* Confirm Password Field */}
            <div>
              <label htmlFor="confirmPassword" className="block text-[10px] font-black uppercase tracking-widest text-[var(--ink-black)] mb-1">
                Confirm Cipher
              </label>
              <input
                id="confirmPassword"
                name="confirmPassword"
                type="password"
                value={formData.confirmPassword}
                onChange={handleChange}
                placeholder="••••••••"
                className={`w-full px-4 py-3 bg-gray-50 border-2 border-[var(--ink-black)] text-sm font-serif focus:bg-white transition-colors outline-none ${errors.confirmPassword ? "border-[var(--vintage-red)]" : ""}`}
              />
              {errors.confirmPassword && <p className="text-[var(--vintage-red)] text-[10px] mt-1 font-bold italic">{errors.confirmPassword}</p>}
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              className="w-full bg-[var(--ink-black)] text-white font-bold py-3 text-xs uppercase tracking-[0.3em] border-2 border-[var(--ink-black)] hover:bg-white hover:text-[var(--ink-black)] transition-all duration-300 mt-4"
            >
              Enroll Now
            </button>
          </form>

          {/* Footer */}
          <div className="text-center mt-8 pt-6 border-t border-gray-100">
            <p className="text-[10px] uppercase font-bold tracking-wider">
              Already possess a ledger?{" "}
              <Link href="/login" className="text-[var(--vintage-red)] ml-1 hover:underline">
                Authenticate
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
