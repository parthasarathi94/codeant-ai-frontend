'use client'

import { AddRepositoryDialog } from "@/components/add-repository-dialog"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Database, Plus, RefreshCcw, Search } from 'lucide-react'
import { useState } from "react"
import { useRepositoryStore } from "@/store/repository-store"

export default function RepositoriesPage() {
  const [searchQuery, setSearchQuery] = useState('')
  const [isDialogOpen, setIsDialogOpen] = useState(false)
  const { repositories } = useRepositoryStore()

  const filteredRepositories = repositories.filter(repo =>
    repo.name.toLowerCase().includes(searchQuery.toLowerCase())
  )

  return (
    <div className="md:pl-64">
      
      <div className="border-b mt-[4rem] md:hidden">
        <div className="p-4">
          <h1 className="text-xl font-semibold">Repositories</h1>
          <p className="text-sm text-muted-foreground mt-2">{repositories.length} total repositories</p>
        </div>
        <div className="flex items-center justify-between gap-4 border-t p-4">
          <Button variant="outline" size="default">
            <RefreshCcw className="h-4 w-4" />
            <span>Refresh All</span>
          </Button>
          <Button className="flex-1" onClick={() => setIsDialogOpen(true)}>
            <Plus className="h-4 w-4" />
            Add Repository
          </Button>
        </div>
      </div>

      <div className="hidden md:block p-4">
        <div className="mb-6">
          <h1 className="text-2xl font-bold font-sans">Repositories</h1>
          <p className="text-sm text-muted-foreground mt-2">{repositories.length} total repositories</p>
        </div>

        <div className="mb-6 flex items-center justify-between gap-4">
          <div className="relative flex-1">
            <Search className="absolute left-2 top-2.5 h-4 w-4 text-muted-foreground" />
            <Input
              placeholder="Search Repositories"
              className="pl-8"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>
          <div className="flex gap-2">
            <Button variant="outline" size="default" className="gap-2">
              <RefreshCcw className="h-4 w-4" />
              <span>Refresh All</span>
            </Button>
            <Button className="gap-2" onClick={() => setIsDialogOpen(true)}>
              <Plus className="h-4 w-4" />
              Add Repository
            </Button>
          </div>
        </div>
      </div>

      <div className="p-4 md:hidden">
        <div className="relative">
          <Search className="absolute left-2 top-2.5 h-4 w-4 text-muted-foreground" />
          <Input
            placeholder="Search Repositories"
            className="pl-8"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
        </div>
      </div>

      <div className="p-4 space-y-2">
        {filteredRepositories.map((repo) => (
          <div
            key={repo.name}
            className="flex flex-col gap-2 rounded-lg border p-4 transition-colors hover:bg-gray-100 sm:flex-row sm:items-center sm:justify-between"
          >
            <div>
              <div className="flex items-center gap-2">
                <h3 className="font-semibold">{repo.name}</h3>
                <span className={`rounded-full px-2 py-0.5 text-xs border border-blue-300 ${
                  repo.status === 'Public'
                    ? 'bg-blue-100 text-blue-700'
                    : 'bg-blue-100 text-blue-700'
                }`}>
                  {repo.status}
                </span>
              </div>
              <div className="flex mt-2 items-center gap-5 text-sm text-muted-foreground">
                <div className="flex items-center">
                  <span className="mr-2">{repo.language}</span>
                  <span className="h-2 w-2 rounded-full bg-blue-500"></span>
                </div>
              
                <div className="flex items-center">
                  <Database className="h-4 w-4 mr-1"/>
                  <span>{repo.size}</span>
                </div>
                <span>Updated {repo.updatedAt}</span>
              </div>
            </div>
          </div>
        ))}
      </div>

      <AddRepositoryDialog 
        open={isDialogOpen} 
        onOpenChange={setIsDialogOpen}
      />
    </div>
  )
}

