import React, {useReducer} from "react"
import axios from 'axios'
import {
    CLEAT_USERS,
    GET_REPOS,
    GET_USER,
    SEARCH_USERS,
    SET_LOADING
} from "../types.ts"
import { GithubContext } from "./githubContext.tsx"
import { githubReducer } from "./githubReducer.ts"

const CLIENT_ID = process.env.REACT_APP_CLIENT_ID
const CLIENT_SECRET = process.env.REACT_APP_CLIENT_SECRET

const withCreds = url => {
    return `${url}client_id=${CLIENT_ID}&client_secret=${CLIENT_SECRET}`
}


export const GithubState: React.FC = ({ children }) => {
    const initialState = {
        user: {},
        users: [],
        loading: false,
        repos: []
    }

    const [state, dispatch] = useReducer(githubReducer, initialState)

    const search = async value => {
        setLoading()

        const response = await axios.get(
            withCreds(`https://api.github.com/search/users?q=${value}&`)
        )

        dispatch({
            type: SEARCH_USERS,
            payload: response.data.items
        })
    }

    const getUser = async name => {
        setLoading()

        const response = await axios.get(
            withCreds(`https://api.github.com/users/${name}?`)
        )

        dispatch({
            type: GET_USER,
            payload: response.data
        })
    }

    const getRepos = async name => {
        setLoading()

        const response = await axios.get(
            withCreds(`https://api.github.com/users/${name}/repos?per_page=10&`)
        )

        dispatch({
            type: GET_REPOS,
            payload: response.data
        })
    }

    const clearUsers = () => dispatch({type: CLEAT_USERS})

    const setLoading = () => dispatch({type: SET_LOADING})

    const {user, users, repos, loading} = state

    return (
        <GithubContext.Provider value={{
            search,
            getUser,
            getRepos,
            clearUsers,
            setLoading,
            user,
            users,
            repos,
            loading
        }}>
            {children}
        </GithubContext.Provider>
    )
}
