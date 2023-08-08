"use client"

import { useEffect, useState } from "react"

import Modal from "@/components/Modal"

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
            <Modal />
        </>
    )
}

export default ModalProvider
