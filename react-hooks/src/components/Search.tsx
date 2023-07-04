import React, {useContext, useState, useEffect} from 'react'
import { AlertContext } from '../context/alert/alertContext.tsx'
import { GithubContext } from '../context/github/githubContext.tsx'

export const Search: React.FC = () => {
    const [value, setValue] = useState<string>('')
    const alert = useContext(AlertContext)
    const github = useContext(GithubContext)

    const onSubmit = (event) => {
        if (event.key !== 'Enter') {
            return
        }

        github.clearUsers()

        if (value.trim()) {
            alert.hide()
            github.search(value.trim())
        } else {
            alert.show('Введите данные пользователя')
        }

    }

    useEffect(() => {
        setValue('')
        github.clearUsers()
    }, [])

    return (
        <div className={'form-group pb-4'}>
            <input
                type={'text'}
                className={'form-control'}
                placeholder='Введите ник пользователя...'
                onKeyPress={onSubmit}
                value={value}
                onChange={ event => setValue(event.target.value) }
            />
        </div>
    )
}