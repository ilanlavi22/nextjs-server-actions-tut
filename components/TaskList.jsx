import { getAllTasks } from '@/utils/actions'
import Link from 'next/link'
// import DeleteForm from "@/components/DeleteForm";
import DeleteFormCustom from '@/components/DeleteFormCustom'

export default async function TaskList() {
  const tasks = await getAllTasks()

  if (tasks.length === 0) {
    return <h2 className='mt-8 text-lg font-medium'>No tasks to show...</h2>
  }
  return (
    <section>
      {tasks?.map(task => (
        <div key={task.id} className='card my-8 bg-base-100 shadow-md'>
          <div className='card-body p-4'>
            <h2 className={`card-title text-base`}>
              <span
                className={`first-letter:uppercase ${
                  task.completed ? 'line-through' : null
                }`}
              >
                {task.content}
              </span>
            </h2>
            <p className='mt-2 text-sm text-gray-500'>
              {task.createdAt.toLocaleString()}
            </p>
            <div className='card-actions justify-end'>
              <Link
                href={`/tasks/${task.id}`}
                className='btn btn-outline btn-primary btn-sm'
              >
                Edit
              </Link>
              {/* <DeleteForm id={task.id} /> */}
              <DeleteFormCustom id={task.id} />
            </div>
          </div>
        </div>
      ))}
    </section>
  )
}
