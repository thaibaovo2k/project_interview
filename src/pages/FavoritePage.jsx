import { Empty, Typography } from "antd"
import { useRecoilValue } from "recoil"
import { ProductCard } from "../components/ProductCard"
import { TopHeader } from "../components/TopHeader"
import { favoriteAtom } from "../recoil/atom/Favorite"

export const FavoritePage = () => {

  const products = useRecoilValue(favoriteAtom)

  return (
    <div>
      <TopHeader />

      <section className="p-20">
        <Typography.Title>Sản phẩm</Typography.Title>

        {
          products.length ?
            <div className="grid grid-cols-4 gap-y-8 gap-x-6">
              {products.map(product => <ProductCard key={product.id} product={product} />)}
            </div>
            : <Empty className="mt-8" size="large" />
        }
      </section>
    </div>
  )
}
