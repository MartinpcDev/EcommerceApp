import { useForm } from 'react-hook-form'
import { z } from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'
import user from '../../assets/User.svg'
import { useState } from 'react'
import { signup } from '../../services/userServices'

const schema = z.object({
  name: z
    .string()
    .min(3, { message: 'Name should be at least 3 characters' }),
  email: z
    .string()
    .email({ message: 'Please enter valid email.' }),
  password: z
    .string()
    .min(8, { message: 'Password must be at least 8 characters' }),
  confirmPassword: z
    .string(),
  deliveryAddress: z
    .string()
    .min(15, { message: 'Address must be at least 15 characters' })
}).refine(data => data.password === data.confirmPassword, {
  message: 'Confirm Password does not match Password',
  path: ['confirmPassword']
})

export const SignupPage = () => {
  const [profilePic, setProfilePic] = useState(null)
  const [formError, setFormError] = useState('')
  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm({ resolver: zodResolver(schema) })

  const onSubmit = async (formData) => {
    try {
      await signup(formData, profilePic)
    } catch (err) {
      if (err.message && err.response.status === 400) {
        setFormError(err.response.data.message)
      }
    }
  }

  console.log(profilePic)
  return (
    <section className='align_center justify-center'>
      <form className='w-[40%] p-[32px_48px] mt-[32px] bg-[#fff]' onSubmit={handleSubmit(onSubmit)}>
        <h2 className='text-[40px] mb-[30px] text-center'>SignUp Form</h2>
        <div className='flex flex-col items-center'>
          <div className='w-[120px] h-[120px] rounded-full overflow-hidden mb-[15px]'>
            <img
              className='w-full h-full'
              src={profilePic ? URL.createObjectURL(profilePic) : user}
              id='file-ip-1-preview'
            />
          </div>
          <label htmlFor='file-ip-1' className='inline-block p-[10px_20px] mb-[20px] text-center bg-[#6457f9] text-[#fff] text-[15px] uppercase font-[500] rounded-[5px] cursor-pointer w-fit'>
            Upload Image
          </label>
          <input
            type='file'
            onChange={e => setProfilePic(e.target.files[0])}
            id='file-ip-1'
            className='hidden'
          />
        </div>

        {/* Form Inputs */}
        <div className='form_inputs w-full grid grid-cols-[1fr_1fr] gap-[20px]'>
          <div className='form_inputs'>
            <label htmlFor='name'>Name</label>
            <input
              id='name'
              className='form_text_input'
              type='text'
              placeholder='Enter your name'
              {...register('name')}
            />
            {errors.name && (<em className='text-red-500'>{errors.name.message}</em>)}
          </div>

          <div className='form_inputs'>
            <label htmlFor='email'>Email</label>
            <input
              id='email'
              className='form_text_input'
              type='email'
              placeholder='Enter your email address'
              {...register('email')}
            />
            {errors.email && (<em className='text-red-500'>{errors.email.message}</em>)}
          </div>

          <div className='form_inputs'>
            <label htmlFor='password'>Password</label>
            <input
              id='password'
              className='form_text_input'
              type='password'
              placeholder='Enter your password'
              {...register('password')}
            />
            {errors.password && (<em className='text-red-500'>{errors.password.message}</em>)}
          </div>

          <div className='form_inputs'>
            <label htmlFor='cpassword'>Confirm Password</label>
            <input
              id='cpassword'
              className='form_text_input'
              type='password'
              placeholder='Enter confirm password'
              {...register('confirmPassword')}
            />
            {errors.confirmPassword && (<em className='text-red-500'>{errors.confirmPassword.message}</em>)}
          </div>

          <div className='col-[1/3] form_inputs'>
            <label htmlFor='address'>Delivery Address</label>
            <textarea
              id='address'
              className='text-[17px] font-[500] h-[120px] resize-none p-[4px_8px] outline-none'
              placeholder='Enter delivery address'
              {...register('deliveryAddress')}
            />
            {errors.deliveryAddress && (<em className='text-red-500'>{errors.deliveryAddress.message}</em>)}
          </div>
        </div>
        {formError && <em className='text-red-500'>{formError}</em>}
        <button className='button_search h-[40px] w-full m-[25px_0_10px]' type='submit'>
          Submit
        </button>
      </form>
    </section>
  )
}
