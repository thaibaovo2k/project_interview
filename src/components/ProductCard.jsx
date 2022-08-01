import { HeartFilled, HeartOutlined } from "@ant-design/icons"
import { Tag, Typography } from "antd"
import { Link } from "react-router-dom"
import { useRecoilState } from "recoil"
import { favoriteAtom } from "../recoil/atom/Favorite"


export const ProductCard = ({ product }) => {
  const [favorite, setFavorite] = useRecoilState(favoriteAtom)

  const isFavorite = favorite.find(e => e.id === product.id)

  return (
    <div className="flex flex-col shadow-lg relative">

      <Tag
        color="pink"
        className="absolute rounded-full border-none opacity-90 top-2 left-2">
        {product?.type?.name}
      </Tag>

      {
        isFavorite
          ? <HeartFilled
            className="absolute text-pink-500 top-2 right-2 font-bold text-xl z-[9999]"
            onClick={() => setFavorite(prev => prev.filter(e => e.id !== isFavorite.id))}
          />
          : <HeartOutlined
            className="absolute text-pink-500 top-2 right-2 font-bold text-xl z-[9999]"
            onClick={() => setFavorite(prev => [...prev, product])}
          />
      }

      <div>
        <img className="max-w-full w-full object-cover block" src={product?.avatar} />
      </div>

      <Link to={`/detail/${product.id}`} className="flex flex-col p-4">
        <Typography.Text className="font-semibold text-lg">
          {product?.title}
        </Typography.Text>

        <Typography.Text>{product?.address}</Typography.Text>

        <Typography.Text>
          <Typography.Text>Giá từ:  </Typography.Text>
          <Typography.Text className="font-bold">
            {product?.price?.from} -  {product?.price?.to} tỷ
          </Typography.Text>
        </Typography.Text>
      </Link>

    </div >
  )
}
