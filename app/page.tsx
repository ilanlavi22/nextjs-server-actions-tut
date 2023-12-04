import Link from 'next/link'

export default function Home() {
  return (
    <section>
      <h1 className='mb-8 text-5xl font-bold'>Next.js Tutorial</h1>
      <Link href='/client' className='btn btn-accent uppercase'>
        Get started
      </Link>
    </section>
  )
}
