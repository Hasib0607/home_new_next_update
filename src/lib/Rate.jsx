"use client"
import Rating from 'react-rating';
import { AiOutlineStar, AiFillStar } from "react-icons/ai";
import { memo, useEffect, useState } from 'react';

const Rate = ({ rating }) => {
    const [isClient, setIsClient] = useState(false)

    useEffect(() => {
        setIsClient(true)
    }, [])

    return (
        <>
            {isClient ? <Rating className="text-warning sm:text-sm text-xs"
                initialRating={rating}
                emptySymbol={<AiOutlineStar color={"#FBC029"} />}
                fullSymbol={<AiFillStar color={"#FBC029"} />}
                readonly></Rating> : null}</>
    );
};

export default memo(Rate);