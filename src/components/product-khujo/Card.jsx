import { getPrice } from '@/lib/getPrice';
import { visitorData } from '@/helper/api';
import Image from 'next/image';
import Rate from '@/lib/Rate';

const Card = ({ item, ip }) => {

    let productGetPrice = getPrice(item.regular_price, item.discount_price, item.discount_type)

    const handleUserInfo = async () => {
        await visitorData(item, ip)
    }

    return (
        <a href={`https://${item?.store_url}/product/${item?.product_id}/${item?.slug}`} onClick={handleUserInfo} target='_blank' rel="noopener noreferrer">
            <div className='sm:p-3 p-1 border border-gray-400 hover:border-[#F1593A] rounded-md w-full h-full hover:shadow-2xl duration-700 bg-white'>
                <div>
                    <Image src={item?.productImage[0]} width={500} height={500} alt="product image" className='sm:h-40 h-36 min-w-full' />
                </div>
                <div className='flex flex-col gap-1 mt-3'>
                    <h1 className='truncate'>{item?.name}</h1>
                    <div className='flex items-center flex-wrap gap-2'>
                        <p>BDT {productGetPrice}</p>
                        <p className='text-sm line-through text-gray-500'>BDT {item?.regular_price}</p>
                    </div>
                    <Rate rating={4} />
                </div>
                <div className='text-center mt-2 w-full bg-red-500 lg:hover:bg-transparent lg:hover:text-black border-2 border-transparent lg:hover:border-[#F1593A] duration-500 text-white rounded-sm'>
                    <p className=' w-full px-5 py-1 '>See Details</p>
                </div>
            </div>
        </a>
    )
}

export default Card