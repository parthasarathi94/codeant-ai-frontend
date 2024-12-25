'use client'

import { Button } from "@/components/ui/button"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { ScrollArea } from "@/components/ui/scroll-area"
import { BookText, Check, ChevronDown, Cloud, Code2, HelpCircle, House, LogOut, Menu, Phone, Settings, X } from 'lucide-react'
import Image from "next/image"
import Link from "next/link"
import { useRouter, usePathname } from "next/navigation"
import { useState } from "react"

export function Sidebar() {
  const router = useRouter()
  const pathname = usePathname()
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  const handleLogout = () => {
    router.push('/login')
  }

  const menuItems = [
    { path: '/repositories', icon: House, label: 'Repositories' },
    { path: '/code-review', icon: Code2, label: 'AI Code Review' },
    { path: '/security', icon: Cloud, label: 'Cloud Security' },
    { path: '/how-to-use', icon: BookText, label: 'How to Use' },
    { path: '/settings', icon: Settings, label: 'Settings' },
  ]

  const renderMenuItems = () => (
    <div className="space-y-1">
      {menuItems.map((item) => (
        <Button
          key={item.path}
          variant="ghost"
          className={`w-full justify-start gap-2 ${pathname === item.path ? 'bg-blue-500 text-white' : ''
            }`}
          asChild
        >
          <Link href={item.path} onClick={() => setIsMobileMenuOpen(false)}>
            <item.icon className="h-4 w-4" />
            {item.label}
          </Link>
        </Button>
      ))}
    </div>
  )

  return (
    <>

      <div className="fixed left-0 top-0 hidden h-full w-64 border-r bg-background p-4 md:block">
        <div className="flex items-center gap-2 pb-6">
          <Image
            src="/images/logo.png"
            alt="CodeAnt AI Logo"
            width={40}
            height={40}
            className="rounded"
          />
          <span className="text-2xl font-medium font-satoshi">CodeAnt AI</span>
        </div>

        <div className="px-2 py-3">
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button
                variant="ghost"
                className="w-full justify-between p-2 font-normal border"
              >
                parthasarathi94
                <ChevronDown className="h-4 w-4" />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent className="w-[13rem]" align="start">
              <DropdownMenuItem className="flex items-center justify-between">
                <span>parthasarathi94</span>
                <Check className="h-4 w-4" />
              </DropdownMenuItem>
              <DropdownMenuItem>anurag47</DropdownMenuItem>
              <DropdownMenuItem>brunomars34</DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>

        {renderMenuItems()}

        <div className="absolute bottom-4 left-4 right-4 space-y-1">
          <Link href="/support" passHref>
            <Button variant="ghost" className="w-full justify-start gap-2">
              <Phone className="h-4 w-4" />
              Support
            </Button>
          </Link>
          <Button
            variant="ghost"
            className="w-full justify-start gap-2"
            onClick={handleLogout}
          >
            <LogOut className="h-4 w-4" />
            Logout
          </Button>
        </div>
      </div>

      <div className="fixed top-0 left-0 z-50 flex w-full items-center justify-between bg-white px-4 py-3 shadow md:hidden">
        <div className="flex items-center gap-2">
          <Image
            src="/images/logo.png"
            alt="CodeAnt AI Logo"
            width={24}
            height={24}
            className="rounded-full"
          />
          <span className="text-2xl font-medium font-satoshi">CodeAnt AI</span>
        </div>
        <Button
          variant="ghost"
          size="icon"
          onClick={() => setIsMobileMenuOpen(true)}
        >
          <Menu className="h-5 w-5" />
        </Button>
      </div>

      {isMobileMenuOpen && (

        <>
          <div
            className="fixed inset-0 z-40 bg-black/30 md:hidden"
            onClick={() => setIsMobileMenuOpen(false)}
          ></div>

          <div className="fixed h-[27rem] inset-0 z-50 bg-white md:hidden">
            <div className="flex h-14 items-center justify-between border-b px-4">
              <div className="flex items-center gap-2">
                <Image
                  src="/images/logo.png"
                  alt="CodeAnt AI Logo"
                  width={24}
                  height={24}
                  className="rounded-full"
                />
                <span className="font-semibold">CodeAnt AI</span>
              </div>
              <Button
                variant="ghost"
                size="icon"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                <X className="h-5 w-5" />
              </Button>
            </div>

            <div className="border-b px-4 py-3">
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button
                    variant="ghost"
                    className="w-full justify-between p-2 font-normal"
                  >
                    parthasarathi94
                    <ChevronDown className="h-4 w-4" />
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent className="w-[calc(100vw-2rem)]" align="start">
                  <DropdownMenuItem className="flex items-center justify-between">
                    <span>parthasarathi94</span>
                    <Check className="h-4 w-4" />
                  </DropdownMenuItem>
                  <DropdownMenuItem>anurag47</DropdownMenuItem>
                  <DropdownMenuItem>brunomars34</DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            </div>

            <ScrollArea className="h-[calc(100vh-8.5rem)]">
              <div className="space-y-1 p-4">
                {renderMenuItems()}

                <div className="space-y-1">
                  <Link href="/support" passHref>
                    <Button variant="ghost" className="w-full justify-start gap-2">
                      <Phone className="h-4 w-4" />
                      Support
                    </Button>
                  </Link>
                  <Button
                    variant="ghost"
                    className="w-full justify-start gap-2"
                    onClick={handleLogout}
                  >
                    <LogOut className="h-4 w-4" />
                    Logout
                  </Button>
                </div>
              </div>
            </ScrollArea>
          </div>
        </>
      )}
    </>
  )
}

