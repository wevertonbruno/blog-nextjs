import type { NextPage } from 'next'
import { Head } from 'next/document'
import { Layout } from '../components/Layout'
import { Post } from '../components/Post'

const posts = [
  {
    id: 1,
    slug: 'Lorem-ipsum-dolor-sit-amet',
    title:  "Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus, expedita!",
    body: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint nam voluptatum distinctio blanditiis soluta atque, ratione commodi asperiores explicabo a quidem doloribus. Ullam qui consequatur, amet deleniti nihil quaerat asperiores. Magni porro, ratione beatae quas officiis expedita! Natus, qui modi.
    Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint nam voluptatum distinctio blanditiis soluta atque, ratione commodi asperiores explicabo a quidem doloribus. Ullam qui consequatur, amet deleniti nihil quaerat asperiores. Magni porro, ratione beatae quas officiis expedita! Natus, qui modi.`,
    data: "07.09.2021"
  },
  {
    id: 5,
    slug: 'qualquer-coisa-teste',
    title:  "Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus, expedita!",
    body: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint nam voluptatum distinctio blanditiis soluta atque, ratione commodi asperiores explicabo a quidem doloribus. Ullam qui consequatur, amet deleniti nihil quaerat asperiores. Magni porro, ratione beatae quas officiis expedita! Natus, qui modi.
    Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint nam voluptatum distinctio blanditiis soluta atque, ratione commodi asperiores explicabo a quidem doloribus. Ullam qui consequatur, amet deleniti nihil quaerat asperiores. Magni porro, ratione beatae quas officiis expedita! Natus, qui modi.`,
    data: "07.09.2021"
  },
  {
    id: 6,
    slug: 'qualquer-coisa-teste1',
    title:  "Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus, expedita!",
    body: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint nam voluptatum distinctio blanditiis soluta atque, ratione commodi asperiores explicabo a quidem doloribus. Ullam qui consequatur, amet deleniti nihil quaerat asperiores. Magni porro, ratione beatae quas officiis expedita! Natus, qui modi.
    Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint nam voluptatum distinctio blanditiis soluta atque, ratione commodi asperiores explicabo a quidem doloribus. Ullam qui consequatur, amet deleniti nihil quaerat asperiores. Magni porro, ratione beatae quas officiis expedita! Natus, qui modi.`,
    data: "07.09.2021"
  },
  {
    id: 2,
    slug: 'qualquer-coisa-teste2',
    title:  "Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus, expedita!",
    body: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Odit necessitatibus laboriosam, inventore facere officiis consectetur perspiciatis eos ut? Distinctio, doloremque?",
    data: "07.09.2021"
  },
  {
    id: 3,
    slug: 'qualquer-coisa-teste3',
    title:  "Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus, expedita!",
    body: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Odit necessitatibus laboriosam, inventore facere officiis consectetur perspiciatis eos ut? Distinctio, doloremque?",
    data: "07.09.2021"
  },
  {
    id: 4,
    slug: 'qualquer-coisa-teste4',
    title:  "Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus, expedita!",
    body: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Odit necessitatibus laboriosam, inventore facere officiis consectetur perspiciatis eos ut? Distinctio, doloremque?",
    data: "07.09.2021"
  },
]

const Home: NextPage = () => {
  return (
      <Layout>
        {posts.map(post => (
          <Post 
            key={post.id}
            {...post}
          />
        ))}
      </Layout>
  )
}

export default Home
