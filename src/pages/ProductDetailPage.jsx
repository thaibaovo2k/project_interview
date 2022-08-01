import { LeftOutlined, RightOutlined } from "@ant-design/icons"
import styled from "@emotion/styled"
import { Carousel, Typography } from "antd"
import { useRef } from "react"
import { useParams } from "react-router-dom"
import { TopHeader } from "../components/TopHeader"

import data from '../data/data.json'

const Wrapper = styled.div`
    padding-bottom: 40px;

    .slick-slider{
      .slick-arrow{
        background-color: red;
        z-index: 9999;
      }
    }
`

export const ProductDetailPage = () => {
  const { id } = useParams()
  const carousel = useRef(null)

  const product = data.find(e => e.id === id)


  return (
    <Wrapper>
      <TopHeader />
      <div className="relative">

        <LeftOutlined
          className="absolute top-1/2 bg-red z-50 text-4xl left-4"
          onClick={() => carousel.current.prev()}
        />
        <RightOutlined
          className="absolute top-1/2 bg-red z-50 text-4xl right-4"
          onClick={() => carousel.current.next()}
        />

        <Carousel
          ref={carousel}
          infinite={false}
        >
          {product?.images.map(e =>
            <div key={e}>
              <img src={`/${e}`} className="w-full h-[700px] object-cover" />
            </div>
          )}
        </Carousel>
      </div>


      <div className="flex justify-between container mx-auto items-center mt-10 md:p-10">
        <div className="flex flex-col">
          <Typography.Title>{product.title}</Typography.Title>

          <Typography.Text className="text-2xl">{product.address}</Typography.Text>
          <Typography.Text className="text-2xl">Diện tích: {product.area} m2</Typography.Text>
        </div>

        <div>
          <Typography.Title>
            {product.price.from} - {product.price.to} tỷ
          </Typography.Title>
        </div>
      </div>

      <div className="container mx-auto mt-10 md:p-10">
        <Typography.Title level={3}>Thông tin chi tiết</Typography.Title>
        <Typography.Paragraph className="text-xl">{product.description}</Typography.Paragraph>
      </div>

    </Wrapper>
  )
}
