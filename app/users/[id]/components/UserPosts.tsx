type Props = {
  promise: Promise<Post[]>
}

const UserPosts = async ({ promise }: Props) => {
  const posts = await promise

  return posts.map((post: Post) => (
    <div key={post.id}>
      <h2>{post.title}</h2>
      <p>{post.body}</p>
      <br />
    </div>
  ))
}

export default UserPosts

// Path: app/users/[id]/components/UserPosts.tsx
// Created at: 21:09:34 - 22/05/2023
// Language: Typescript
// Framework: React/Next.js
