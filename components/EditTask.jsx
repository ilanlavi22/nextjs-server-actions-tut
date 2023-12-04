import { editTask } from '@/utils/actions'

export default function EditTask({ task }) {
  const { id, content, completed } = task

  return (
    <div className='flex max-w-lg items-center justify-center'>
      <form
        action={editTask}
        className='flex w-full flex-col gap-4 rounded-md border-[1px] border-gray-300 p-8'
      >
        <input type='hidden' name='id' value={id} />
        <div>
          <input
            type='text'
            placeholder='Type here'
            name='content'
            defaultValue={content}
            className='input input-bordered w-full'
          />
        </div>
        <div className='form-control flex'>
          <label className='label cursor-pointer'>
            <span className='label-text'>Completed</span>
            <input
              type='checkbox'
              name='completed'
              defaultChecked={completed}
              className='checkbox-primary checkbox'
            />
          </label>
        </div>
        <button type='submit' className='btn btn-primary'>
          Edit
        </button>
      </form>
    </div>
  )
}
