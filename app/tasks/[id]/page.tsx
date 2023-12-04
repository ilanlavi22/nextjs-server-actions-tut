import EditTask from '@/components/EditTask'
import { TaskItem } from '@/types/global'
import { getTask } from '@/utils/actions'
import Link from 'next/link'

export default async function TaskPage({
  params
}: {
  params: { id: TaskItem }
}) {
  const task = await getTask(params.id)

  return (
    <>
      <div className='mb-16'>
        <Link href='/tasks' className='btn btn-accent'>
          <span className='first-letter:uppercase'>back to tasks</span>
        </Link>
      </div>
      <EditTask task={task} />
    </>
  )
}
