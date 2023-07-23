

export const HobbiesGoalsGrid = () => {
  return (
    <div className="grid lg:grid-cols-2 divide-y grid-cols-1 lg:divide-x">
      <div className="p-2">
        <h4 className="text-emerald-500">Hobbies</h4>
        <ul className="list-disc list-inside text-black">
          <li>Read books</li>
          <li>Play video games</li>
          <li>Listen to phonk music</li>
          <li>Excersice</li>
        </ul>
      </div>
      <div className="p-2">
        <h4 className="text-sky-500">Goals</h4>
        <ul className="list-disc list-inside ml-1 text-black">
          <li>Be a Senior Developer</li>
          <li>Be Certificate by Meta</li>
          <li>Be Challenger on LoL</li>
          <li>Travel to Ultra Music Festival</li>
        </ul>
      </div>
  </div>
  )
}
  