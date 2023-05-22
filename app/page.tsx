import Link from 'next/link'
import type { FC } from 'react'

type PageProps = {}

// tutorial: https://youtu.be/6h649f2fB9Q

const Home: FC<PageProps> = (): JSX.Element => {
  //                                  ^?
  return (
    <main>
      <h2>
        <Link href="/users">{`-> 🧒🏻`}</Link>
      </h2>
      <h1>🏠 Home page</h1>
    </main>
  )
}

export default Home

// Path: app/page.tsx
// Created at: 13:09:52 - 21/05/2023
// Language: Typescript
// Framework: React/Next.js
