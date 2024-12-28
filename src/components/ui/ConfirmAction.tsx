"use client"

import { useRef } from "react"
import { Alert } from "./alert"
import { AlertDialog, AlertDialogAction, AlertDialogCancel, AlertDialogContent, AlertDialogDescription, AlertDialogFooter, AlertDialogHeader, AlertDialogTitle, AlertDialogTrigger } from "./alert-dialog"
import { Button } from "./button"
import { signOut } from "next-auth/react"

export const ConfirmAction = ({dropdownAction}: {dropdownAction: (open: boolean) => void}) => {
    const ref = useRef(false);
    const logOut = () =>{
        signOut()
        dropdownAction(!ref)
    }
    return (
        <AlertDialog>
          <AlertDialogTrigger asChild>
            <Button variant="default">Se deconnecter</Button>
          </AlertDialogTrigger>
          <AlertDialogContent>
            <AlertDialogHeader>
                <AlertDialogTitle>
                    Deconnexion
                </AlertDialogTitle>
              <AlertDialogDescription>
                Voulez-vous vraiment vous deconnecter?
              </AlertDialogDescription>
            </AlertDialogHeader>
            <AlertDialogFooter>
              <AlertDialogCancel onClick={() => dropdownAction(!ref)}>Annuler</AlertDialogCancel>
              <AlertDialogAction onClick={() => logOut()}>Continuer</AlertDialogAction>
            </AlertDialogFooter>
          </AlertDialogContent>
        </AlertDialog>
      )
}