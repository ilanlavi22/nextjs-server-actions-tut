// import { TaskItem } from '@/types/global'
import { getAllTasks } from '@/utils/actions'

const PrismaExample = async () => {
  const tasks: any = await getAllTasks()
  if (tasks?.length === 0) {
    return <h2 className='mt-8 text-lg font-medium'>No tasks to show...</h2>
  }
  return (
    <section>
      {tasks.map((task: any) => (
        <div key={task.id} className='card my-8 w-96 bg-base-100 shadow-md'>
          <div className='card-body p-4'>
            <h2 className='card-title text-base'>
              <span className='first-letter:uppercase'>{task.content}</span>
            </h2>
          </div>
        </div>
      ))}
    </section>
  )
}

export default PrismaExample
