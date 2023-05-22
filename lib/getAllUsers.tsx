const getAllUsers = async () => {
  const res = await fetch('https://jsonplaceholder.typicode.com/users')

  if (!res.ok) throw new Error('Failed to fetch users')

  return res.json()
}

export default getAllUsers

// Path: lib/getAllUsers.tsx
// Created at: 20:07:15 - 21/05/2023
// Language: Typescript
// Framework: React/Next.js
