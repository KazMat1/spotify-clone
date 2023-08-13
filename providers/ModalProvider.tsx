"use client"

import Modal from "@/components/Modal"
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
            <Modal
                title="test title"
                description="test descrption"
                isOpen
                onChange={() => {}}
            >
                test children
            </Modal>
        </>
    )
}

export default ModalProvider
