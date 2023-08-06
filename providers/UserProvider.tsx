"use client"

import { MyuserContextProvider } from "@/hooks/useUser"

interface UesrProviderProps {
    children: React.ReactNode
}

const UserProvider: React.FC<UesrProviderProps> = ({
    children
}) => {
    return (
        <MyuserContextProvider>
            {children}
        </MyuserContextProvider>
    )
}

export default UserProvider
