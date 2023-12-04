'use client' // this is a custom pragma that tells Vite to not bundle this file for the server

import { useFormStatus } from 'react-dom'
import { deleteTask } from '@/utils/actions'

const DeleteButton = () => {
  const { pending } = useFormStatus()

  return (
    <button
      type='submit'
      disabled={pending}
      className='btn btn-outline btn-secondary btn-sm'
    >
      {pending ? 'please wait...' : 'Delete'}
    </button>
  )
}

export default function DeleteFormCustom({ id }) {
  return (
    <form action={deleteTask}>
      <input type='hidden' name='id' value={id} />
      <DeleteButton />
    </form>
  )
}
