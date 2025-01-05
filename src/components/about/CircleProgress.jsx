"use client"
import { buildStyles, CircularProgressbarWithChildren } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import ProgressProvider from './ProgressProvider'
import Image from 'next/image';

const CircleProgress = ({data}) => {
    return (
        <ProgressProvider valueStart={0} valueEnd={data.progress}>
            {value => <CircularProgressbarWithChildren value={value} strokeWidth={2} styles={buildStyles({
                pathColor: "#f1593a"
            })} >
                <div className='h-20 w-20 self-center flex p-3 bg-[#f1593a] rounded-full'>
                    <Image src={data.icon} className="" alt="ebitans image" />
                </div>
            </CircularProgressbarWithChildren>

            }
        </ProgressProvider>
    )
}

export default CircleProgress