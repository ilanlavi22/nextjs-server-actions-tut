// import TaskForm from "@/components/TaskForm";
import TaskList from '@/components/TaskList'
import TaskFormCustom from '../../components/TaskFormCustom'
export const dynamic = 'force-dynamic'

export default function TasksPage() {
  return (
    <section className='max-w-lg'>
      {/* <TaskForm /> */}
      <TaskFormCustom />
      <TaskList />
    </section>
  )
}
