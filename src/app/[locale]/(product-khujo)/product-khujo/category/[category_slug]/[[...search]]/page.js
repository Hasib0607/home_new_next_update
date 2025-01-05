import ProductKhujoSearchResults from "@/components/product-khujo/ProductKhujoSearchResults"
import { fetchIp, fetchPseCategory } from "@/helper/api"
import ScrollToTop from "@/lib/ScrollToTop"

export async function generateMetadata({ params }) {

  const category = (await fetchPseCategory()) ?? []
  const cat = category.find(item => item?.slug === params?.category_slug)
  
  return {
      title: `${cat?.name} | Product খুঁজো`,
      description: "The Ebitans product খুঁজো page makes it easy to find exactly what you're looking for in your online shopping journey. Whether you have a specific product in mind or are browsing different categories, our intuitive search features help you refine your results and find the best deals in Bangladesh.",
      openGraph: {
          images: [
              {
                  url: cat?.banner,
                  width: 1200,
                  height: 630,
              },
          ]
      }
  }
}

const ProductKhujoSearch = async ({ params }) => {

  const category = (await fetchPseCategory()) ?? []

  return (
    <div className="relative z-[1]">
      <ScrollToTop />
      <ProductKhujoSearchResults params={params} category={category}/>
    </div>
  )
}

export default ProductKhujoSearch
