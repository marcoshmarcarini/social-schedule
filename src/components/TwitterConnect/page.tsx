'use client'
import { useEffect, useState } from "react"
import styles from './Twitter.module.css'

export default function TwitterConnect(){
    const [posts, setPosts] = useState([])
    const [username, setUsername] = useState('')

    const handlePosts = async (e) => {
        e.preventDefault()
        const apiKey = process.env.TWITTER_API_KEY
        const apiSecret = process.env.TWITTER_API_SECRET
        const bearerToken = process.env.TWITTER_BEARER_TOKEN
        const fetchData = await fetch(`https://api.x.com/2/users/by/username/${username}/authorization:bearer?oauth_token=${bearerToken}`)
        const snapshot = await fetchData.json()
        console.log(snapshot)
        setPosts(snapshot)
        setUsername('')
    }


    return(
        <div>
            <h1>Connection...</h1>
            <form action="" onSubmit={handlePosts}>
                <input type="text" onChange={(e) => setUsername(e.target.value)}/>
                <button type="submit">Connect</button>
            </form>
        </div>
    )
}