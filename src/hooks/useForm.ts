import {ChangeEvent, useState} from "react";
import {ContactFormInterface} from "../interfaces";

export const useForm = (initState: ContactFormInterface) => {
  const [inputs, setInputs] = useState(initState);

  const updateInputs = (e:ChangeEvent<HTMLInputElement>) => {
    setInputs({
      ...inputs,
      [e.target.name]: e.target.value
    })
  }

  const updateInput = (name: string, value: string) => {
    setInputs({
      ...inputs,
      [name]: value
    })
  }

  return {
    inputs,
    updateInputs,
    updateInput,
  }
}