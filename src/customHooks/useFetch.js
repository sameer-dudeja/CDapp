import { useState, useEffect } from 'react'

export const useFetch = (url) => {
  const [loading, setLoading] = useState(true)
  const [posts, setPosts] = useState([])

  useEffect(() => {
    const getPosts = async () => {
      const response = await fetch(url)
      const posts = await response.json()
      setPosts(posts)
      setLoading(false)
    }
    getPosts()
  }, [url])
  return { loading, posts }
}
