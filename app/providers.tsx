'use client'

import { CacheProvider } from '@chakra-ui/next-js'
import { ChakraProvider } from '@chakra-ui/react'
import type { FC, ReactNode } from 'react'
import theme from './theme'

interface ChakraProvidersProps {
  children: ReactNode
}

const ChakraProviders: FC<ChakraProvidersProps> = ({
  children,
}): JSX.Element => {
  return (
    <CacheProvider>
      <ChakraProvider theme={theme}>{children}</ChakraProvider>
    </CacheProvider>
  )
}

export default ChakraProviders

// Path: app/providers.tsx
// Created at: 12:24:18 - 21/05/2023
// Language: Typescript
// Framework: React/Next.js
