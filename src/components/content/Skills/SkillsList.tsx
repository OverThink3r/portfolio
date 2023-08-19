import {SkillItem} from "../../../interfaces";
import {Skillitem} from "./Skillitem";

interface Props {
  skills: SkillItem[]
}
export const SkillsList = ({skills}: Props) => {
  return (
    <div className="flex justify-center flex-wrap gap-10 my-3">
      {
        skills.map(({Icon, label}) => (
          <Skillitem label={label} Icon={Icon} key={label}/>
        ))
      }
    </div>
  );
};