import type { FC, ReactNode } from 'react'

interface LayoutProps {
  children: ReactNode
}

const Layout: FC<LayoutProps> = ({ children }): JSX.Element => {
  return (
    <>
      <nav>ABOUT LAYOUT</nav>
      <main>{children}</main>
    </>
  )
}

export default Layout

// Path: app/about/layout.tsx
// Created at: 13:15:57 - 21/05/2023
// Language: Typescript
// Framework: React/Next.js
