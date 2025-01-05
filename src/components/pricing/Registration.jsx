"use client"
import { useState } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";
import { useForm } from "react-hook-form";
import { onSubmit } from "@/lib/registration";
import styles from "@/components/home/home.module.css"
import images from "@/lib/images";

const Registration = () => {
    const { register, handleSubmit, formState: { errors } } = useForm();
    const [loading, setLoading] = useState(false);

    const router = useRouter()

    const handleRegister = (data) => {
        onSubmit(data, setLoading, router)
    }
    return (
        <div className='bg-white relative z-[4] mb-10 lg:mb-20 mt-10 lg:mt-40 rounded-lg'>
            <div className='flex flex-col gap-y-10 lg:flex-row justify-around lg:px-10 lg:py-8 py-5'>
                <div className=' lg:basis-3/4 text-center lg:text-left'>
                    <p className={`${styles.paragraph} ${styles.archivo} px-2 tracking-[5px] lg:tracking-[6px] text-base capitalize`}>Build your complete e-Commerce website</p>
                    <h2 className={`${styles.archivo} ${styles.headerTwo}`}>Registration Now</h2>
                    <form onSubmit={handleSubmit(handleRegister)}>
                        <div className='flex gap-2 w-full mt-10 lg:mt-[70px] px-4 lg:px-0'>
                            <div className='lg:w-[260px] w-full'>
                                <input autoComplete='tel'
                                    type="number" placeholder='Enter your number' {...register("phone", { required: true, maxLength: 11, minLength: 11 })}
                                    aria-invalid={errors.phone ? "true" : "false"} className={`lg:w-[260px] w-full px-2 h-10 lg:h-12 text-sm ${styles.archivo} bg-[#F8F3F1] border-[1.5px] placeholder:text-[#D3CDCB] ${(errors.phone?.type === "minLength" || errors.phone?.type === "maxLength") || errors?.phone?.type === "required" ? "border-red-500 focus:border-red-500" : "border-[#a8a3a2] focus:border-[#D3CDCB]"} focus:outline-none focus:ring-0 rounded`} />
                                {errors?.phone?.type === "required" && <span className='text-xs text-red-500 block'>This field is required</span>}
                                {(errors.phone?.type === "minLength" || errors.phone?.type === "maxLength") && (
                                    <p className='text-xs text-red-500 block' role="alert">Number length must be 11</p>
                                )}
                            </div>
                            <div className='lg:w-[260px] w-full'>
                                <input type="password" {...register("password", { required: true })} placeholder='Enter your password' className={`lg:w-[260px] w-full px-2 h-10 lg:h-12 text-sm ${styles.archivo} bg-[#F8F3F1] placeholder:text-[#D3CDCB] border-[1.5px] ${(errors.password?.type === "minLength" || errors.password?.type === "maxLength") || errors?.password?.type === "required" ? "border-red-500 focus:border-red-500" : "border-[#a8a3a2] focus:border-[#D3CDCB]"} focus:outline-none focus:ring-0 rounded`} />
                                {errors?.password?.type === "required" && <span className='text-xs text-red-500 block'>This field is required</span>}
                            </div>
                        </div>
                        {loading ?
                            <div className='flex items-center justify-center lg:justify-start mt-5'>
                                <button className={`group relative h-12 lg:w-[320px] w-[200px] overflow-hidden rounded bg-[#f1593a] text-lg `}>
                                    <div className={`absolute inset-0 w-0 bg-[#000] transition-all duration-[250ms] ease-out group-hover:w-full`}></div>
                                    <span className={`${styles.archivo} relative  text-white`}>Loading</span>
                                </button>
                            </div> :
                            <div className='flex items-center justify-center lg:justify-start mt-5'>
                                <button type='submit' className={`group relative h-12 lg:w-[320px] w-[200px] overflow-hidden rounded bg-[#f1593a] text-lg `}>
                                    <div className={`absolute inset-0 w-1 bg-[#000] transition-all duration-[250ms] ease-out group-hover:w-full`}></div>
                                    <span className={`${styles.archivo} relative  text-white`}>Registration Now</span>
                                </button>
                            </div>}
                    </form>
                </div>
                <div className='relative lg:basis-1/4 mx-auto hidden lg:block'>
                    <Image src={images?.businessman} alt="ebitans image" className='lg:absolute left-0 -bottom-8 z-[1]' />
                </div>
            </div>
        </div>
    )
}

export default Registration