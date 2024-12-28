"use client"

import { signIn } from "next-auth/react"
import { Button } from "./button"
import { LogIn } from "lucide-react"

export const Login = () => {
  return (
    <div>
      <Button onClick={() => signIn()}>
        Se connecter<LogIn />
      </Button>
    </div>
  )
}