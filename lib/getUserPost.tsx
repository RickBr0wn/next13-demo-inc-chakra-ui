const getUserPost = async (id: string) => {
  const res = await fetch(
    `https://jsonplaceholder.typicode.com/posts/?userId=${id}`
  )

  if (!res.ok) throw new Error('Failed to fetch user post')

  return await res.json()
}

export default getUserPost

// Path: lib/getUserPost.tsx
// Created at: 20:52:32 - 22/05/2023
// Language: Typescript
// Framework: React/Next.js
