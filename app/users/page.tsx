import { Metadata } from 'next'
import getAllUsers from '@/lib/getAllUsers'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Users',
}

const UsersPage = async (): Promise<JSX.Element> => {
  const users: User[] = await getAllUsers()

  return (
    <section>
      <h2>
        <Link href="/">{`<- 🏠`}</Link>
      </h2>
      <br />
      <h1>🧒🏻 Users page</h1>
      <br />
      {users.map(user => (
        <div key={user.id}>
          <h2>
            <Link href={`/users/${user.id}`}>{`🧒🏻 ${user.name}`}</Link>
          </h2>
          <p>{user.email}</p>
          <br />
        </div>
      ))}
    </section>
  )
}

export default UsersPage

// Path: app/users/page.tsx
// Created at: 20:05:41 - 21/05/2023
// Language: Typescript
// Framework: React/Next.js
