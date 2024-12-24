import { create } from 'zustand'

export interface Repository {
  name: string
  status: 'Public' | 'Private'
  language: string
  size: string
  updatedAt: string
}

interface RepositoryStore {
  repositories: Repository[]
  addRepository: (repository: Repository) => void
}

const initialRepositories: Repository[] = [
  { name: 'design-system', status: 'Public', language: 'React', size: '7320 KB', updatedAt: '1 day ago' },
  { name: 'codeant-ci-app', status: 'Private', language: 'JavaScript', size: '5871 KB', updatedAt: '2 days ago' },
  { name: 'analytics-dashboard', status: 'Private', language: 'Python', size: '4521 KB', updatedAt: '5 days ago' },
  { name: 'mobile-app', status: 'Public', language: 'Swift', size: '3096 KB', updatedAt: '3 days ago' },
  { name: 'e-commerce-platform', status: 'Private', language: 'Java', size: '8210 KB', updatedAt: '6 days ago' },
  { name: 'blog-website', status: 'Public', language: 'HTML/CSS', size: '1876 KB', updatedAt: '4 days ago' },
  { name: 'social-network', status: 'Private', language: 'PHP', size: '5432 KB', updatedAt: '7 days ago' },
]

export const useRepositoryStore = create<RepositoryStore>((set) => ({
  repositories: initialRepositories,
  addRepository: (repository) => 
    set((state) => ({ 
      repositories: [...state.repositories, repository] 
    })),
}))

