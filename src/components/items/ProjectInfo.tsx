import { FilledLink } from '@atoms/buttons/FilledLink'
import { OutlinedLink } from '@atoms/buttons/OutlinedLink'
import { Subtitle } from '@atoms/text/Subtitle'
import { Title } from '@atoms/text/Title'

export const ProjectInfo = () => {
  return (
    <>
      <div className="bg-cards h-full opacity-80 w-full fixed z-40"></div>
      <div className=" h-full w-full fixed z-40 p-3">
        <Title variant="h3" text="Payment App" />
        <div className="flex flex-col h-full justify-between">
          <div className="mt-5">
            <Subtitle variant="description" text="Web application where you can pay with PayPal" />
          </div>
          <div className="flex justify-evenly mt-5 mb-8">
            <FilledLink
              variant="secondary"
              text="Live Demo"
              className="text-xs border border-cards"
            />
            <OutlinedLink variant="primary" text="Live Demo" className="text-xs" />
          </div>
        </div>
      </div>
    </>
  )
}
