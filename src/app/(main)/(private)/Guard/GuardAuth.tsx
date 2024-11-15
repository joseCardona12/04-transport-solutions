"use client"
import { useSession } from 'next-auth/react'
import { useRouter } from 'next/navigation'
import React, { useEffect } from 'react'
import Cookies from 'js-cookie'
import { IUserLogged } from '@/app/core/application/interfaces'

export default function AuthGuard(
    { children }: { children: React.ReactNode}
) {
    const {data, status} = useSession()
    const router = useRouter()
    console.log(data, status)
  useEffect(()=> {
    if (status === "unauthenticated") {
      router.push("/login")
    }

  }, [status, router])

  if (status === "authenticated") { 
    Cookies.set("info_user", JSON.stringify(data))  
    return (
      <>{children}</>
    )
  }
  if (status === "loading") {
    return (
      <h1>Cargando ...</h1>
    )
  }
}