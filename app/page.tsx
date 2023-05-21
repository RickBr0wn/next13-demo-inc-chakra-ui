import type { Metadata } from 'next/types'
import type { FC } from 'react'

type PageProps = {}

export const metadata: Metadata = {
  title: 'My Page Title',
}

const Home: FC<PageProps> = (): JSX.Element => {
  //                                  ^?
  return (
    <main>
      <h1>Home Page</h1>
    </main>
  )
}

export default Home

// Path: app/page.tsx
// Created at: 13:09:52 - 21/05/2023
// Language: Typescript
// Framework: React/Next.js
