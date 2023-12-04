'use client'

import { useFormStatus, useFormState } from 'react-dom'
import { getContactData } from '@/utils/actions'

const SubmitBtn = () => {
  const { pending } = useFormStatus()
  return (
    <button className='btn btn-primary' disabled={pending}>
      {pending ? 'Wait..' : 'Submit'}
    </button>
  )
}

export default function ContactForm() {
  const [state, formAction] = useFormState(getContactData, null)

  return (
    <section className='flex gap-6'>
      <form action={formAction} className='flex flex-1 flex-col gap-4 sm:w-1/2'>
        <p>{state?.error?.name?._errors}</p>
        <input
          type='text'
          name='name'
          placeholder='name'
          className='input input-bordered w-full rounded-lg'
        />
        <p>{state?.error?.message?._errors}</p>
        <input
          type='text'
          name='message'
          placeholder='message'
          className='input input-bordered w-full rounded-lg'
        />

        <SubmitBtn />
      </form>

      <div className='flex-1 rounded-lg bg-cyan-600 p-2 text-white'>
        {state && <pre>{JSON.stringify(state, null, 2)}</pre>}
      </div>
    </section>
  )
}
