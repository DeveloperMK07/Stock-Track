'use client'
import React from 'react'
import InputField from '@/components/forms/InputField'
import FooterLink from '@/components/forms/FooterLink'
import { Button } from '@/components/ui/button'
import { SubmitHandler, useForm } from 'react-hook-form'

type SignInFormData = {
  email: string
  password: string
}

const SignIn = () => {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<SignInFormData>({
    defaultValues: {
      email: '',
      password: '',
    },
    mode: 'onBlur'
  })

  const onSubmit: SubmitHandler<SignInFormData> = async (data) => {
    try {
      console.log(data)
    } catch (e) {
      console.error(e)
    }
  }

  return (
    <>
      <h1 className='form-title'>Welcome Back</h1>

      <form onSubmit={handleSubmit(onSubmit)} className='space-y-5'>
        <InputField
          name="email"
          label="Email"
          placeholder="contact@example.com"
          register={register}
          error={errors.email}
          validation={{ required: 'Email is required', pattern: { value: /^\w+@\w+\.\w+$/, message: 'Invalid email format' } }}
        />

        <InputField
          name="password"
          label="Password"
          placeholder="Enter your password"
          type="password"
          register={register}
          error={errors.password}
          validation={{ required: 'Password is required' }}
        />

        <Button type='submit' disabled={isSubmitting} className='yellow-btn w-full mt-5'>
          {isSubmitting ? 'Signing In...' : 'Sign In'}
        </Button>

        <FooterLink text="Don't have an account?" linkText='Sign-up' href='/sign-up' />
      </form>
    </>
  )
}

export default SignIn
