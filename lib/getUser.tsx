const getUser = async (id: string) => {
  const res = await fetch(`https://jsonplaceholder.typicode.com/users/${id}`)

  if (!res.ok) throw new Error('Failed to fetch user')

  return await res.json()
}

export default getUser

// Path: lib/getUser.tsx
// Created at: 20:47:41 - 22/05/2023
// Language: Typescript
// Framework: React/Next.js
