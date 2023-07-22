export interface ProjectInterface {
  id: number,
  projectTitle: string,
  body: string,
  projectPath: string,
  borderColor: string,
  borderSide: string,
  projectUrl?: string,
  repositoryUrl?: string, 
  orientation: "IMG-L" | "IMG-R",
  skills?: Array<string>
}