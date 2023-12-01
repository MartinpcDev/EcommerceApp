import { useForm } from 'react-hook-form'
import { z } from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'

const schema = z.object({
  email: z
    .string()
    .email({ message: 'Please enter valid email address.' })
    .min(3),
  password: z
    .string()
    .min(8, { message: 'Password should be at least 8 character' })
})

export const LoginPage = () => {
  const { register, handleSubmit, formState: { errors } } = useForm({ resolver: zodResolver(schema) })
  const onSubmit = formData => console.log(formData)

  return (
    <section className='align_center justify-center'>
      <form className='w-[30%] p-[32px_48px] mt-[32px] bg-[#fff]' onSubmit={handleSubmit(onSubmit)}>
        <h2 className='text-[40px] mb-[30px] text-center'>Login Form</h2>
        <div className='flex flex-col mb-[20px]'>
          <div className='flex flex-col mb-[20px]'>
            <label
              className='text-[18px] font-[600] mb-[3px]'
              htmlFor='email'
            >Email
            </label>
            <input
              className='h-[35px] p-[0_8px] text-[17px] font-[500] outline-none'
              type='text'
              placeholder='Enter your Email'
              id='email'
              {...register('email')}
            />
            {errors.email && (<em className='text-red-500'>{errors.email.message}</em>)}
          </div>
          <div className='flex flex-col mb-[20px]'>
            <label
              className='text-[18px] font-[600] mb-[3px]'
              htmlFor='phone'
            >Password
            </label>
            <input
              className='h-[35px] p-[0_8px] text-[17px] font-[500] outline-none'
              type='password'
              placeholder='Enter your password'
              id='password'
              {...register('password')}
            />
            {errors.password && (<em className='text-red-500'>{errors.password.message}</em>)}
          </div>
          <button
            type='submit'
            className='button_search h-[40px] w-full m-[25px_0_10px]'
          >Submit
          </button>
        </div>
      </form>
    </section>
  )
}
