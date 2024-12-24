"use client"

import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { ArrowUp} from 'lucide-react'
import Image from "next/image"
import { useState } from "react"
import { useRouter } from "next/navigation"

export default function LoginPage() {
  const [activeTab, setActiveTab] = useState<'saas' | 'self-hosted'>('saas')
  const router = useRouter()

  const handleLogin = () => {
    router.push('/repositories')
  }

  return (
    <div className="min-h-screen w-full grid md:grid-cols-2">
      <div className="relative hidden md:flex flex-col items-center justify-center p-8 bg-white pb-[12rem]">
        <div className="absolute left-0 bottom-0 w-[400px] h-[400px] opacity-1">
          <Image
            src="/images/Subtract.png"
            alt="Background Logo"
            width={300}
            height={300}
            priority
            className="absolute left-0 bottom-0"
          />
        </div>

        <div className="relative w-fit mt-8">
          <Card className="p-6 border-none shadow-[0px_0px_20px_5px_rgba(0,0,0,0.1),0px_0px_20px_5px_rgba(255,255,255,0.7)] bg-white">
            <div className="flex items-center gap-2 mb-3">
              <Image
                src="/images/logo.png"
                alt="CodeAnt AI Logo"
                width={24}
                height={24}
                className="rounded"
              />
              <span className="text-lg font-semibold text-gray-900">AI to Detect & Autofix Bad Code</span>
            </div>

            <div className="-mx-6 h-px bg-gray-300 mb-3"></div>

            <div className="grid grid-cols-3 gap-8 text-center">
              <div>
                <div className="text-2xl font-bold text-gray-900">30+</div>
                <div className="text-sm text-gray-600">Language Support</div>
              </div>
              <div>
                <div className="text-2xl font-bold text-gray-900">10K+</div>
                <div className="text-sm text-gray-600">Developers</div>
              </div>
              <div>
                <div className="text-2xl font-bold text-gray-900">100K+</div>
                <div className="text-sm text-gray-600">Hours Saved</div>
              </div>
            </div>
          </Card>

          <Card className="absolute border-none -bottom-36 -right-12 p-4 bg-white shadow-[0px_0px_20px_5px_rgba(0,0,0,0.1),0px_0px_20px_5px_rgba(255,255,255,0.7)] rounded-2xl w-[260px] z-10">
            <div className="flex mb-4">
              <div className="relative w-14 h-14 ml-3">
                <Image
                  src="/images/Group 4.png"
                  alt="Background Logo"
                  width={300}
                  height={300}
                  priority
                  className="absolute left-0 bottom-0"
                />
              </div>

              <div className="flex flex-col items-end ml-[5rem]">
                <div className="flex items-center">
                  <ArrowUp className="w-4 h-4 text-blue-600" />
                  <span className="text-blue-600 font-semibold">14%</span>
                </div>
                <span className="text-gray-600 text-xs">This week</span>
              </div>
            </div>

            <div className="ml-4">
              <h2 className="text-sm font-semibold text-gray-900 mb-1">Issues Fixed</h2>
              <div className="text-3xl font-bold text-gray-900">500K+</div>
            </div>
          </Card>
        </div>
      </div>

      <div className="flex flex-col items-center justify-center p-8 bg-white border">
        <div className="w-full max-w-[500px] space-y-6 border rounded-xl shadow-md p-10">
          <div className="text-center space-y-4">
            <div className="flex justify-center items-center gap-2">
              <Image
                src="/images/logo.png"
                alt="CodeAnt AI Logo"
                width={32}
                height={32}
                className="rounded"
              />
              <span className="text-2xl font-medium font-satoshi">CodeAnt AI</span>
            </div>
            <h1 className="text-xl font-semibold">Welcome to CodeAnt AI</h1>
          </div>

          <div className="grid grid-cols-2 gap-3">
            <Button
              variant={activeTab === 'saas' ? 'default' : 'outline'}
              className={`w-full font-medium ${activeTab === 'saas' ? 'bg-blue-500 hover:bg-blue-600' : ''}`}
              onClick={() => setActiveTab('saas')}
            >
              SAAS
            </Button>
            <Button
              variant={activeTab === 'self-hosted' ? 'default' : 'outline'}
              className={`w-full font-medium ${activeTab === 'self-hosted' ? 'bg-blue-500 hover:bg-blue-600' : ''}`}
              onClick={() => setActiveTab('self-hosted')}
            >
              Self Hosted
            </Button>
          </div>

          {activeTab === 'self-hosted' ? (
            <div className="space-y-3">
              <Button
                variant="outline"
                className="w-full justify-center gap-3 h-12"
                onClick={handleLogin}
              >
                <Image
                  src="/images/gitlab.png"
                  alt="GitLab"
                  width={20}
                  height={20}
                />
                Self Hosted GitLab
              </Button>

              <Button
                variant="outline"
                className="w-full justify-center gap-3 h-12"
                onClick={handleLogin}
              >
                <Image
                  src="/images/icon.png"
                  alt="SSO"
                  width={20}
                  height={20}
                />
                Sign in with SSO
              </Button>
            </div>
          ) : (
            <div className="space-y-3">
              <Button
                variant="outline"
                className="w-full justify-center gap-3 h-12"
                onClick={handleLogin}
              >
                <Image
                  src="/images/github.png"
                  alt="GitHub"
                  width={20}
                  height={20}
                />
                Sign in with Github
              </Button>

              <Button
                variant="outline"
                className="w-full justify-center gap-3 h-12"
                onClick={handleLogin}
              >
                <Image
                  src="/images/bitbucket.png"
                  alt="Bitbucket"
                  width={20}
                  height={20}
                />
                Sign in with Bitbucket
              </Button>

              <Button
                variant="outline"
                className="w-full justify-center gap-3 h-12"
                onClick={handleLogin}
              >
                <Image
                  src="/images/azure.png"
                  alt="Azure Devops"
                  width={20}
                  height={20}
                />
                Sign in with Azure Devops
              </Button>

              <Button
                variant="outline"
                className="w-full justify-center gap-3 h-12"
                onClick={handleLogin}
              >
                <Image
                  src="/images/gitlab.png"
                  alt="GitLab"
                  width={20}
                  height={20}
                />
                Sign in with GitLab
              </Button>
            </div>
          )}

          <div className="text-center text-sm text-gray-500">
            By signing up you agree to the{" "}
            <a href="#" className="text-gray-900 hover:underline">
              Privacy Policy.
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}

