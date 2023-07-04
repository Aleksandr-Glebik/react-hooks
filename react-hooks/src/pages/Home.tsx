import React, {Fragment, useContext} from 'react'
import { Card } from '../components/Card.tsx'
import { Search } from '../components/Search.tsx'
import { GithubContext } from '../context/github/githubContext.tsx'
import { Loader } from '../components/Loader/Loader.tsx'

export const Home: React.FC = () => {

    const { loading, users } = useContext(GithubContext)

    return (
        <Fragment>
            <Search />

            <div className={'row'}>
                {loading
                    ? <Loader />
                    : users.map( (user, i) => {
                        return (
                            <div key={user.id} className={'col-sm-4 mb-4'}>
                                <Card user={user}/>
                            </div>
                        )
                    })
                }

                { }

            </div>
        </Fragment>
    )
}