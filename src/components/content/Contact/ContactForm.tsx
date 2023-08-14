import {FaAngleRight} from "react-icons/fa";
import {useForm} from "../../../hooks";
import {ContactFormInterface} from "../../../interfaces";
import {ChangeEvent} from "react";

const initialFormState: ContactFormInterface = {
  name: "",
  email: "",
  message: ""
}

export const ContactForm = () => {
  const {inputs, updateInputs, updateInput} = useForm(initialFormState)

  const onSendEmail = () => {
  }

  const handleTextareaChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
    updateInput(e.target.name, e.target.value)
  }

  return (
    <section id="contact" className="container px-10 mx-auto text-white my-0 md:my-32 flex flex-col justify-center scroll-my-20">
      <h2 className="text-2xl mb-5 flex flex-row items-center text-sky-500">
        <FaAngleRight />
        Contact
      </h2>
      <div className="w-full md:w-3/5 mx-auto">
        <form className="mt-6" onSubmit={onSendEmail}>
          <div className="mb-4">
            <label className="block text-gray-700">Name</label>
            <input
              type="text"
              name="name"
              value={inputs.name}
              onChange={updateInputs}
              placeholder="¿What's your name?"
              className="w-full text-sm md:text-md text-black px-2 md:px-4 py-2 md:py-3 rounded-lg bg-gray-200 mt-2 border focus:border-emerald-500 focus:bg-white focus:outline-none"
            />
          </div>

          <div className="mb-4">
            <label className="block text-gray-700">Email Address</label>
            <input
              type="email"
              name="email"
              value={inputs.email}
              onChange={updateInputs}
              placeholder="¿What's your email?"
              className="w-full text-sm md:text-md text-black px-2 md:px-4 py-2 md:py-3 rounded-lg bg-gray-200 mt-2 border focus:border-emerald-500 focus:bg-white focus:outline-none"
            />
          </div>

          <div >
            <label className="block text-gray-700">Message</label>
            <textarea
              name="message"
              value={inputs.message}
              onChange={handleTextareaChange}
              placeholder="¿What's your message?"
              className="w-full text-sm md:text-md text-black px-2 md:px-4 py-2 md:py-3 rounded-lg bg-gray-200 mt-2 border focus:border-emerald-500 focus:bg-white focus:outline-none resize-none"
              rows={4}
            />
          </div>

          <button
            className="block w-2/5 my-4 mx-auto md:text-lg border-2 border-emerald-500 bg-transparent hover:bg-emerald-500 hover:text-white p-2 rounded-md text-emerald-500 min-w-fit"
            type="button"
            onClick={onSendEmail}
          >
            Get in touch!
          </button>
        </form>
      </div>
    </section>
  );
};