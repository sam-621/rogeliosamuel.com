import { FC } from 'react'

const Title: FC<Props> = ({ title }) => {
  return (
    <div className="flex flex-col mt-12">
      <div className="flex justify-center w-full">
        <span className="bg-secondary w-9 h-px " />
      </div>
      <h2 className="text-white text-center text-xl">{title}</h2>
    </div>
  )
}

type Props = {
  title: string
}

export default Title
