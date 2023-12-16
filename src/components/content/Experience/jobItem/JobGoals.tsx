import { ReactNode } from 'react'

export const JobGoals = ({ goals }: {goals: ReactNode}) => (
  <ul className="list-disc list-inside text-gray-500">{ goals }</ul>
)

