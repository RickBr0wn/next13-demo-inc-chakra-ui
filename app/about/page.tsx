// 'use client'

// import { Link } from '@chakra-ui/next-js'
import Link from 'next/link'
import type { FC } from 'react'

interface AboutProps {}

const About: FC<AboutProps> = (): JSX.Element => {
  return (
    <>
      <Link href="/">Link to Home Page</Link>
      <h1>About Page</h1>
    </>
  )
}

export default About

// Path: app/about/page.tsx
// Created at: 13:13:20 - 21/05/2023
// Language: Typescript
// Framework: React/Next.js
