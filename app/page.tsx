import Link from 'next/link'
import type { FC, ReactNode } from 'react'

type PageProps = {
  children: ReactNode
}

const Home: FC<PageProps> = (): JSX.Element => {
  //                                  ^?
  return (
    <main>
      <Link href="/about">Link to About Page</Link>
      <h1>Home Page</h1>
    </main>
  )
}

export default Home

// Path: app/page.tsx
// Created at: 13:09:52 - 21/05/2023
// Language: Typescript
// Framework: React/Next.js
