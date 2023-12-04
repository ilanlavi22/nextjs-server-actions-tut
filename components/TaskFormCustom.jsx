'use client'

import { useFormStatus, useFormState } from 'react-dom'
import { useEffect, useRef } from 'react'
import { createTaskCustom } from '../utils/actions'
import toast from 'react-hot-toast'

const SubmitBtn = () => {
  const { pending } = useFormStatus()

  return (
    <button type='submit' disabled={pending} className='btn btn-primary'>
      {pending ? 'please wait...' : 'Create Task'}
    </button>
  )
}

const initialState = {
  message: null
}

export default function TaskFormCustom() {
  const [state, formAction] = useFormState(createTaskCustom, initialState)
  const contentInput = useRef(null)

  useEffect(() => {
    if (state?.message === 'error') {
      toast.error('Something went wrong')
      return
    }
    if (state?.message) {
      toast.success('Task created')
      contentInput.current.value = ''
    }
  }, [state])

  return (
    <div className='mb-12 flex items-center justify-center'>
      <form action={formAction} className='flex w-full flex-col'>
        {state?.message ? <p className='mb-2'>{state.message}</p> : null}
        <div className='flex w-full items-center gap-2'>
          <input
            type='text'
            placeholder='Type here'
            ref={contentInput}
            name='content'
            className='input input-bordered w-full'
          />
          <SubmitBtn />
        </div>
      </form>
    </div>
  )
}
