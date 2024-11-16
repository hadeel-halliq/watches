import './style.css'

export const H1 = ({children}) => {
    return (
        <h1>{children}</h1>
    )
}

export const H2 = ({children}) => {
    return (
        <h2>{children}</h2>
    )
}

export const H3 = ({children}) => {
    return (
        <h3>{children}</h3>
    )
}

export const H4 = ({children}) => {
    return (
        <h4>{children}</h4>
    )
}

export const Body = ({children}) => {
    return (
        <p className='body'>{children}</p>
    )
}

export const Body2 = ({children}) => {
    return (
        <p className='body-two'>{children}</p>
    )
}