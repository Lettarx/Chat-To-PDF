import { writable } from 'svelte/store'

export const APP_STATUS={
    INIT:0,
    LOADING:1,
    CHAT_MODE:2,
    ERROR:-1
}

export const appStatus = writable(APP_STATUS.CHAT_MODE)
export const appStatusInfo = writable({ 
    id:'fea7d19b07ba0973e2f516e27a6f6fa4', 
    url:'https://res.cloudinary.com/dhsg1rtfj/image/upload/v1709496831/pdf/a0bhoxcxpnuxmpk6xd86.pdf', 
    pages:2 
})

export const setAppStatusLoading = () => {
    appStatus.set(APP_STATUS.LOADING)
}
export const setAppStatusInit = () => {
    appStatus.set(APP_STATUS.INIT)
}
export const setAppStatusError = () => {
    appStatus.set(APP_STATUS.ERROR)
}
export const setAppStatusChatMode = (
    {id, url, pages} :
    { id:string, url:string, pages:number}) => {
    appStatus.set(APP_STATUS.CHAT_MODE)
    appStatusInfo.set({ id, url, pages })
}

