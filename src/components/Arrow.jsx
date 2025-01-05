import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";

const Arrow = ({ nextEl, prevEl }) => {

    const customDesign =
        `
    .arrowDesign{
        color: #f1593a;
        background-color:white;
        border:1px solid  #f1593a;
}

.arrowDesign:hover{
    background-color: #f1593a;
    color:white;
    border:1px solid white;
}
        }`

    return (
        <div className='flex justify-end gap-2'>
            <style>{customDesign}</style>

            <div className={`${prevEl} p-3 icon rounded-full border bg-white  relative  text-gray-400 hover:text-white transition-all duration-500  ease-linear arrowDesign`} >
                <IoIosArrowBack className='h-4 w-4 text-2xl font-serif font-bold' />
            </div>
            <div className={`${nextEl} p-3 icon rounded-full bg-white border border-gray-100 relative hover:bg-orange-200 text-gray-400 hover:text-white transition-all duration-500  ease-linear arrowDesign`} >
                <IoIosArrowForward className='h-4 w-4 text-2xl font-serif font-bold' />
            </div>

        </div>
    );
};

export default Arrow;