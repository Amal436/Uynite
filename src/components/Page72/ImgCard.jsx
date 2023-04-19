import React from 'react';
import PlayCircleOutlineOutlinedIcon from '@mui/icons-material/PlayCircleOutlineOutlined';
const ImgCard = (props) => {
    return (
        <div className='container flex items-center cursor-pointer'>
            <div className="image">
                <img src={props.link} alt="imagelink" className='h-[31vh] w-[12vw] object-cover rounded-[15px]' />
                <h1 className='relative bottom-8 2xl:left-24 left-16 text-white'>{props.text}</h1>
            </div>
            <div className="icon relative 2xl:right-28 right-24">
                <PlayCircleOutlineOutlinedIcon style={{ fontSize: "3rem" }} className='text-white' />
            </div>
        </div>
    );
}

export default ImgCard;
