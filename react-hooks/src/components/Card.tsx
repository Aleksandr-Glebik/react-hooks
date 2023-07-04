import React from 'react'
import { Link } from 'react-router-dom'

interface userType {
    avatar_url: string
    events_url: string
    followers_url: string
    following_url: string
    gists_url: string
    gravatar_id: string
    html_url: string
    id: number
    login: string
    node_id: string
    organizations_url: string
    received_events_url: string
    repos_url: string
    score: number
    site_admin: boolean
    starred_url: string
    subscriptions_url: string
    type: string
    url: string
}

export const Card: React.FC<userType> = ({user}) => {
    return (
        <div className={'card'}>
            <img
              src={user.avatar_url}
              alt={user.login}
              className={'card-img-top'}
            />
            <div className={'card-body'} >
                <h5 className={'card-title'}>
                  {user.login}
                </h5>
                <Link
                  to={`/profile/${user.login}`}
                  className={'btn btn-primary'}
                >
                    Открыть
                </Link>
            </div>
        </div>
    )
}