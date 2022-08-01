import { HeartFilled } from "@ant-design/icons"
import { Typography } from "antd"
import { Link } from "react-router-dom"

export const TopHeader = () => {
  return (
    <header className="flex justify-between h-20 px-10 py-4 items-center max-w-[100%]">

      <Link to='/' className="h-full">
        <img className="max-h-full" src="/assets/logo.png" />
      </Link>

      <Link to='/favorite' className="text-pink-700 flex items-center gap-4 text-lg md:text-base">
        <HeartFilled />
        <Typography className="font-bold text-pink-700">Ưa thích</Typography>
      </Link>
    </header>
  )
}
