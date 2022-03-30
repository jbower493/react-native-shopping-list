import { useEffect } from 'react'
import { useNavigate } from 'react-router-native'

const Auth = (): null => {
    const navigate = useNavigate()

    useEffect(() => {
        navigate('/register')
    }, [])

    return null
}

export default Auth
