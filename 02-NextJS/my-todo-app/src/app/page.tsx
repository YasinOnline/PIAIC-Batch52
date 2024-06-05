'use client';

import type { NextPage } from 'next'
import TodoList from '../components/TodoList'

const Home: NextPage = () => {
  return (
    <div className="min-h-screen bg-gray-100 flex justify-center">
      <TodoList />
    </div>
  )
}

export default Home
