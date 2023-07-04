import React from 'react'

export const About: React.FC = () => {

    return (
        <div className={'p-3 mb-2 bg-secondary text-white'}>
            <div className={'container'}>
                <h1 className={'display-4'}>Информация</h1>
                <p className={'lead'}>
                    Версия приложения:&nbsp;
                    <strong>1.0.1</strong>
                </p>
                <p className={'lead'}>
                    Технологии: &nbsp;
                    <strong>React / TypeScript / SCSS</strong>
                </p>
                <p className={'lead'}>
                    Технологии: Поиск информации о пользователях зарегистрированных на gitHub.
                </p>
            </div>
        </div>
    )
}