import { fetchThemeData } from '@/helper/api'
import ThemeSlider from './ThemeSlider'

const Theme = async () => {
    const data = (await fetchThemeData()) ?? []
    return (
        <div className='pb-20'>
            <div className='px-5 sm:px-0 mx-auto relative'>
                <div>
                    <h1 className='lg:text-5xl text-3xl font-semibold mt-5 leading-[50px] mb-20 text-center'>Themes we made to <br /> serve the purpose</h1>
                </div>
                <ThemeSlider data={data}/>
            </div>
        </div>
    )
}

export default Theme