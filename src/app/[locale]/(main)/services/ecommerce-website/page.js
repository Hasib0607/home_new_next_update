import Start from '@/components/ecommerce-website/Start'
import VideoWebsite from '@/components/ecommerce-website/VideoWebsite'
import Business from '@/components/ecommerce-website/Business'
import HappyCustomer from '@/components/ecommerce-website/HappyCustomer'
import Experience from '@/components/ecommerce-website/Experience'
import CreateWebsite from '@/components/ecommerce-website/CreateWebsite'
import Theme from '@/components/ecommerce-website/Theme'
import Registration from '@/components/pricing/Registration'

export const metadata = {
    title: "Service of e-Commerce Website",
    description: "Ebitans goes beyond just providing a platform for your online store. We offer a comprehensive suite of services to empower you throughout your e-commerce journey in Bangladesh. Whether you're a seasoned entrepreneur or just starting out, Ebitans can help you succeed.",
  };


const EcommerceWebsite = () => {

    return (
        <div className='lg:pt-[85px] pt-[50px]'>
            <Start />
            <VideoWebsite />
            <Business />
            <HappyCustomer />
            <Theme />
            <Experience />
            <CreateWebsite />
            <div className='container px-5 lg:px-10'>
                <Registration />
            </div>
        </div>
    )
}

export default EcommerceWebsite