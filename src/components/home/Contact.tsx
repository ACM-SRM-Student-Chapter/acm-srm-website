"use client";

import React, { useState } from 'react';
import Image from 'next/image';
import { useForm } from 'react-hook-form';

type FormData = {
  name: string;
  lastName: string;
  email: string;
  phone: string;
  message: string;
};

export default function Contact() {
  const {
    register,
    handleSubmit,
    reset,
    formState: { isSubmitting, errors }
  } = useForm<FormData>();

  const [submitStatus, setSubmitStatus] = useState<{
    type: 'success' | 'error' | null;
    message: string;
  }>({ type: null, message: '' });

  const onSubmit = async (data: FormData) => {
    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });

      if (response.ok) {
        setSubmitStatus({
          type: 'success',
          message: 'Message sent successfully!'
        });
        reset();
      } else {
        throw new Error('Failed to send message');
      }
    } catch (error) {
      setSubmitStatus({
        type: 'error',
        message: 'Failed to send message. Please try again.'
      });
    }
  };

  return (
    <section className="relative bg-white min-h-screen flex flex-col justify-between">
      <div className="flex-1 px-4 md:px-32 py-24">
        <div className="max-w-[1920px] mx-auto">
          <h2 className="text-5xl md:text-[100px] font-title font-bold mb-24">
            Start a conversation
          </h2>
          <form onSubmit={handleSubmit(onSubmit)} className="max-w-4xl">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-12">
              <div className="relative">
                <input
                  {...register('name', { required: 'Name is required' })}
                  type="text"
                  className="w-full border-b-2 border-gray-200 py-4 bg-transparent focus:outline-none focus:border-black transition-colors"
                  placeholder=" "
                />
                <label className="absolute left-0 top-4 text-gray-500 transition-all pointer-events-none">
                  Name
                </label>
                {errors.name && (
                  <span className="text-red-500 text-sm mt-1">{errors.name.message}</span>
                )}
              </div>

              <div className="relative">
                <input
                  {...register('lastName', { required: 'Last name is required' })}
                  type="text"
                  className="w-full border-b-2 border-gray-200 py-4 bg-transparent focus:outline-none focus:border-black transition-colors"
                  placeholder=" "
                />
                <label className="absolute left-0 top-4 text-gray-500 transition-all pointer-events-none">
                  Last Name
                </label>
                {errors.lastName && (
                  <span className="text-red-500 text-sm mt-1">{errors.lastName.message}</span>
                )}
              </div>

              <div className="relative">
                <input
                  {...register('email', { 
                    required: 'Email is required',
                    pattern: {
                      value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                      message: 'Invalid email address'
                    }
                  })}
                  type="email"
                  className="w-full border-b-2 border-gray-200 py-4 bg-transparent focus:outline-none focus:border-black transition-colors"
                  placeholder=" "
                />
                <label className="absolute left-0 top-4 text-gray-500 transition-all pointer-events-none">
                  Email
                </label>
                {errors.email && (
                  <span className="text-red-500 text-sm mt-1">{errors.email.message}</span>
                )}
              </div>

              <div className="relative">
                <input
                  {...register('phone', { required: 'Phone number is required' })}
                  type="tel"
                  className="w-full border-b-2 border-gray-200 py-4 bg-transparent focus:outline-none focus:border-black transition-colors"
                  placeholder=" "
                />
                <label className="absolute left-0 top-4 text-gray-500 transition-all pointer-events-none">
                  Phone
                </label>
                {errors.phone && (
                  <span className="text-red-500 text-sm mt-1">{errors.phone.message}</span>
                )}
              </div>
            </div>

            <div className="relative mb-16">
              <textarea
                {...register('message', { required: 'Message is required' })}
                rows={4}
                className="w-full border-b-2 border-gray-200 py-4 bg-transparent focus:outline-none focus:border-black transition-colors resize-none"
                placeholder=" "
              />
              <label className="absolute left-0 top-4 text-gray-500 transition-all pointer-events-none">
                Message
              </label>
              {errors.message && (
                <span className="text-red-500 text-sm mt-1">{errors.message.message}</span>
              )}
            </div>

            {submitStatus.type && (
              <div 
                className={`mb-4 p-4 ${
                  submitStatus.type === 'success' ? 'bg-green-50 text-green-800' : 'bg-red-50 text-red-800'
                }`}
              >
                {submitStatus.message}
              </div>
            )}

            <button
              type="submit"
              disabled={isSubmitting}
              className="bg-black text-white font-title py-4 px-12 text-xl hover:bg-gray-900 transition-colors flex items-center gap-3 disabled:opacity-50"
            >
              {isSubmitting ? 'Sending...' : "Let's Talk!"}
              <span className="transform rotate-45">➜</span>
            </button>
          </form>
        </div>
      </div>

      <footer className="w-full px-4 md:px-32 py-16 border-t border-gray-200">
        <div className="max-w-[1920px] mx-auto flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="flex items-center gap-6">
            <Image
              src="/images/acm-logo.svg"
              alt="ACM Logo"
              width={80}
              height={80}
              priority
            />
            <div className="text-xl font-title">
              SRMIST-KTR
              <br />
              STUDENT CHAPTER
            </div>
          </div>
          <p className="text-sm font-poly">
            ACM SRM © {new Date().getFullYear()}. All Rights Reserved.
          </p>
        </div>
      </footer>
    </section>
  );
}
