"use client"

import { Dropdown } from "react-day-picker";
import { DropdownMenu, DropdownMenuCheckboxItem, DropdownMenuContent, DropdownMenuItem, DropdownMenuLabel, DropdownMenuSeparator, DropdownMenuTrigger } from "./dropdown-menu";
import { Button } from "./button";
import React from "react";
import { Avatar, AvatarFallback, AvatarImage } from "./avatar";
import { LogOutIcon } from "lucide-react";
import Link from "next/link";
import { AlertDialog, AlertDialogFooter, AlertDialogHeader } from "./alert-dialog";
import { AlertDialogAction, AlertDialogCancel, AlertDialogContent, AlertDialogDescription, AlertDialogTitle, AlertDialogTrigger } from "@radix-ui/react-alert-dialog";
import { signOut, useSession } from "next-auth/react";
import { ConfirmAction } from "./ConfirmAction";

export function Profile(){

    const [showStatusBar, setShowStatusBar] = React.useState(true)
    const [open, setOpen] = React.useState(false)
    const [showPanel, setShowPanel] = React.useState(false)
    const {data: session} = useSession()
     const dropdownAction = (open: boolean) =>{
        setOpen(open)
     }
    

    return(
        <div>
            <DropdownMenu open={open} onOpenChange={() => setOpen(true)}>
                <DropdownMenuTrigger asChild>
                    <Avatar>
                        <AvatarImage src={session?.user.image} alt="@shadcn" />
                        <AvatarFallback>GM</AvatarFallback>
                    </Avatar>
                </DropdownMenuTrigger>
                <DropdownMenuContent className="w-56">
                    <DropdownMenuLabel>Mon compte</DropdownMenuLabel>
                    <DropdownMenuSeparator />
                    
                    <DropdownMenuItem>{session?.user.name}</DropdownMenuItem>
                    <DropdownMenuItem onChange={() => setOpen(!open)}>
                        <ConfirmAction dropdownAction={dropdownAction}/>
                    </DropdownMenuItem>
                </DropdownMenuContent>
            </DropdownMenu>
            
        </div>
    )
}