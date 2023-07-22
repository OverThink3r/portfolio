import { IconType } from "react-icons"

export interface SkillInterface  {
  title: string
  body?: string
  tags?: string[],
  Icon?: IconType,
  borderColor: string,
  backgroundTagColor?: string,
  textTagColor?: string,
}