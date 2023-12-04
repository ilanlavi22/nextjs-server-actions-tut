import { deleteTask } from '@/utils/actions'

export default function DeleteForm({ id }) {
  return (
    <form action={deleteTask}>
      <input type='hidden' name='id' value={id} />
      <button className='btn btn-outline btn-secondary btn-sm'>Delete</button>
    </form>
  )
}
