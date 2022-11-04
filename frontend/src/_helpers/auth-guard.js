import router from '../router'

export function authGuard(to) {
    let token = localStorage.getItem('user')
    if(token) {
        return true
    }

    router.push('/login')
}

