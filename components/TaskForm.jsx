import { createTask } from '../utils/actions'
// import { TaskItem } from "@/types/global";

export default function TaskForm() {
  return (
    <div className='mb-12 flex items-center justify-center'>
      <form action={createTask} className='flex w-full'>
        <div className='flex w-full items-center gap-2'>
          <input
            type='text'
            placeholder='Type here'
            name='content'
            className='input input-bordered w-full'
          />

          <button type='submit' className='btn btn-primary'>
            Create Task
          </button>
        </div>
      </form>
    </div>
  )
}
