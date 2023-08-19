import {SkillItem} from "../../../interfaces";

export const Skillitem = ({Icon, label}: SkillItem) => {
  return (
    <div className="flex flex-col justify-center items-center text-black" key={label}>
      <Icon size="4rem"/>
      <span>{label}</span>
    </div>
  );
};