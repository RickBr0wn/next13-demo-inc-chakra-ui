import getUser from '@/lib/getUser'
import getUserPost from '@/lib/getUserPost'
import { Suspense } from 'react'
import UserPosts from './components/UserPosts'
import { Metadata } from 'next'

type Params = {
  params: {
    id: string
  }
}

export const generateMetadata = async ({
  params: { id },
}: Params): Promise<Metadata> => {
  const userData: Promise<User> = getUser(id)
  const user: User = await userData

  return {
    title: user.name,
    description: `This is the page of ${user.name}`,
  }
}

const UserPage = async ({ params: { id } }: Params) => {
  const userData: Promise<User> = getUser(id)
  const userPostsData: Promise<Post[]> = getUserPost(id)

  // const [user, userPosts] = await Promise.all([userData, userPostsData])
  const user = await userData

  return (
    <>
      <h2>{user.name}</h2>
      <br />
      <h3>Posts</h3>
      <Suspense fallback={<h2>Loading...</h2>}>
        {/* @ts-expect-error Async Server Component */}
        <UserPosts promise={userPostsData} />
      </Suspense>
    </>
  )
}

export default UserPage

// Path: app/users/[id]/page.tsx
// Created at: 20:34:22 - 21/05/2023
// Language: Typescript
// Framework: React/Next.js
