import { FC, useState, useEffect, useCallback, useMemo } from 'react'
import { useNavigate, useSearchParams } from 'react-router-dom'
import { getDetail } from '../../api/product'
import './index.scss'

interface IDetail {
  category: string
  id: number
  image: string
  name: string
  price: number
}

export interface IDetailProps {}

const Detail: FC<IDetailProps> = ({}) => {
  const [detail, setDetail] = useState<IDetail>()

  const navigate = useNavigate()
  const [searchParams] = useSearchParams()
  const id = searchParams.get('id')

  useEffect(() => {
    getDetail(id as string)
      .then(res => {
        setDetail(res.product)
        console.log(res)
      })
      .catch(err => {
        console.log(err)
      })
      .finally(() => {})
  }, [])

  return (
    <div className="detail">
      <div className="detail_id">PRODUCT ID:{detail?.id}</div>
      <div className="detail_price">PRODUCT PRICE:{detail?.price}</div>
      <div className="detail_img">
        <img src={detail?.image} />
      </div>
      <button className="detail_btn" onClick={() => navigate(-1)}>
        BACK LAST PAGE
      </button>
    </div>
  )
}

export default Detail
