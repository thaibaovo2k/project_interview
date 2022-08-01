import { SearchOutlined } from "@ant-design/icons"
import styled from "@emotion/styled"
import { Button, Empty, Form, Select, Typography } from "antd"
import { useState } from "react"
import { ProductCard } from "../components/ProductCard"
import { TopHeader } from "../components/TopHeader"

import data from '../data/data.json'

const HeroWrapper = styled.div`
  .ant-form-item-label {
    label {
      color: white;
      font-weight: bold;
      font-size: 18px;      
    }
  }
`

const locations = [
  { value: 'all', label: 'Tất cả' },
  { value: 'hanoi', label: 'Hà Nội' },
  { value: 'danang', label: 'Đà Nẵng' },
  { value: 'hochiminh', label: 'Hồ Chí Minh' },
]

const areas = [
  { value: 'all', label: 'Tất cả' },
  { value: '20', label: '< 30 m2' },
  { value: '40', label: '30 - 45 m2' },
  { value: '50', label: '45 - 60 m2' },
  { value: '70', label: '>60 m2' },
]

const productTypes = [
  { name: "Tất cả", value: "all" },
  { name: "Chung cư", value: "chungcu" },
  { name: "Biệt thự", value: "bietthu" },
  { name: "Condotel", value: "condotel" },
  { name: "Shophouse", value: "shophouse" },
]

export const HomePage = () => {

  const [activeType, setActiveType] = useState('all')
  const [filter, setFilter] = useState({ location: 'all', area: 'all' })

  const products = data.filter(e => {
    if (activeType !== 'all' && e.type.value !== activeType) return false;
    if (filter.location !== 'all' && e.city !== filter.location) return false
    if (filter.area !== 'all' && e.area !== filter.area ) return false

    return true
  })

  return (
    <>
      <section className="h-screen flex flex-col">
        <TopHeader />
        <div className="hero flex-grow p-28 pb-52 flex flex-col justify-between max-w-[100%] md:px-16">
          <span /> {/* Just make justify-between work correct example layout */}

          <Typography.Title level={1} className="text-white font-bold xl:text-6xl md:text-5xl">Sàn giao dịch bất động sản</Typography.Title>

          <HeroWrapper className="rounded-lg bg-[#bd6689b6] xl:max-w-4xl p-6 md:max-w-2xl">
            <Form
              layout="vertical"
              className="flex gap-10 items-center justify-around"
              onFinish={values => setFilter(values)}
            >
              <Form.Item label="Tỉnh" name="location">
                <Select
                  size="large"
                  className="rounded-lg overflow-hidden border-none"
                  options={locations}
                  placeholder="Chọn tỉnh ..."
                />
              </Form.Item>

              <Form.Item label="Diện tích" name="area">
                <Select
                  size="large"
                  className="rounded-lg overflow-hidden border-none"
                  options={areas}
                  placeholder="Chọn diện tích ..."
                />
              </Form.Item>

              <Button
                htmlType="submit"
                className="flex items-center gap-2 bg-[#38274A] text-white border-none rounded-full text-2xl py-8 font-bold ml-20"
              >
                <SearchOutlined />
                <Typography className="text-white">Tìm kiếm</Typography>
              </Button>
            </Form>
          </HeroWrapper>

        </div>
      </section>

      <section className="p-20">
        <Typography.Title>Sản phẩm</Typography.Title>

        <div className="flex gap-8 mb-6">
          {productTypes.map(t =>
            <div
              key={t.value}
              className={`${activeType === t.value ? "bg-[#bd6689] text-white font-bold" : "bg-gray-400 text-black"} w-52 h-12 flex justify-center items-center cursor-pointer rounded-xl text-lg`}
              onClick={() => setActiveType(t.value)}
            >
              {t.name}
            </div>
          )}
        </div>

        {
          products.length ?
            <div className="grid grid-cols-4 gap-y-8 gap-x-6">
              {products.map(product => <ProductCard key={product.id} product={product} />)}
            </div>
            : <Empty className="mt-8" size="large" />
        }
      </section>
    </>
  )
}
