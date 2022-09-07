import { AiFillGithub, AiFillLinkedin } from 'react-icons/ai'

export const Icons = () => {
  return (
    <div className="flex justify-center gap-8 mt-5">
      <a href="https://github.com/rogeliosamuel621" target="_blank" rel="noreferrer">
        <AiFillGithub size={30} color="white" />
      </a>
      <a
        href="https://www.linkedin.com/in/rogelio-samuel-moreno-corrales/"
        target="_blank"
        rel="noreferrer"
      >
        <AiFillLinkedin size={30} color="white" />
      </a>
    </div>
  )
}
