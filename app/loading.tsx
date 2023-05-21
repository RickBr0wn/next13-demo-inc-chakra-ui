'use client'

import type { FC } from 'react'
import { Flex, Spinner } from '@chakra-ui/react'

interface LoadingProps {}

const Loading: FC<LoadingProps> = (): JSX.Element => {
  return (
    <Flex pos={'absolute'} justify="center" align="center">
      <Spinner />
    </Flex>
  )
}

export default Loading

// Path: app/about/loading.tsx
// Created at: 19:07:50 - 21/05/2023
// Language: Typescript
// Framework: React/Next.js
