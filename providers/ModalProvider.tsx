"use client"

import AuthModal from "@/components/AuthModal"

import { useEffect, useState } from "react"

const ModalProvider = () => {
    const [isMounted, setMounted] = useState(false)

    useEffect(() => {
        setMounted(true)
    }, [])

    if (!isMounted) {
        return null
    }

    return (
        <>
            <AuthModal />
        </>
    )
}

export default ModalProvider
