import { createContext, useEffect, useState } from 'react'
import axios from '../axios.js'

export const NoteContext = createContext()

export const NoteState = ({children}) => {
    const [ user, setUser ] = useState('')
    let tokee = localStorage.getItem('user_token') || null
    const [ token, setToken ] = useState(tokee)
    
    useEffect(() => {
        console.log(token)
        localStorage.setItem('user_token', token)
        // fetch the user_object by requesting n passing the token from localStorage
        const fetchUser = async () => {
            const res_user = await axios.post('/verify_user', {}, {
                headers: {
                    "authorization": 'Bearer ' + token
                }
            })
            if (!res_user) {
                console.log('here 1')
                setUser(null)
            } else {
                console.log('here 2')
                setUser(res_user.data)
                console.log(user)
            }
        }
        if (token) {
            fetchUser()
        } else {
            setUser(null)
        }
    }, [token])
    return (
        <NoteContext.Provider value={{ user, token, setToken }}>
            {children}
        </NoteContext.Provider>
    )
}