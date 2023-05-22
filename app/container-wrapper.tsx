'use client'

import { Container } from '@chakra-ui/react'
import type { FC, ReactNode } from 'react'

interface ContainerWrapperProps {
  children: ReactNode
}

const ContainerWrapper: FC<ContainerWrapperProps> = ({
  children,
}): JSX.Element => {
  return <Container py={12}>{children}</Container>
}

export default ContainerWrapper

// Path: app/container-wrapper.tsx
// Created at: 20:00:48 - 21/05/2023
// Language: Typescript
// Framework: React/Next.js
