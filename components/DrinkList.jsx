'use client'
import Image from 'next/image'
import Link from 'next/link'
import { motion, AnimatePresence } from 'framer-motion'

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      type: 'tween',
      duration: 2,
      delayChildren: 0.5,
      staggerChildren: 0.1
    }
  }
}
const item = {
  hidden: { opacity: 0, scale: 0 },
  show: { opacity: 1, scale: 1 }
}

export default function DrinkList({ drinks }) {
  return (
    <AnimatePresence>
      <motion.article
        variants={container}
        initial='hidden'
        animate='show'
        className='grid grid-cols-auto-fit justify-center gap-10'
      >
        {drinks?.map(drink => (
          <motion.div
            variants={item}
            key={drink.idDrink}
            className='relative flex justify-center rounded-md bg-gray-100 p-5'
          >
            <Link
              href={`/drinks/${drink.idDrink}`}
              className='group flex flex-col items-center p-2'
            >
              <Image
                src={drink.strDrinkThumb}
                alt={drink.strDrink}
                width={drink.strDrinkThumb ? 350 : 0}
                height={drink.strDrinkThumb ? 350 : 0}
                loading='lazy'
                className='origin-center rounded-md border-[1px] border-gray-400 bg-bottom object-cover p-2 transition duration-300 ease-in-out group-hover:scale-90'
              />
              <motion.p className='origin-center pt-5 text-sm font-bold transition duration-500 ease-in-out group-hover:translate-y-2'>
                {drink.strDrink}
              </motion.p>
            </Link>
          </motion.div>
        ))}
      </motion.article>
    </AnimatePresence>
  )
}
