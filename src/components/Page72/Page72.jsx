import React from 'react';
import Header from '../Header/Header';
import GridViewIcon from '@mui/icons-material/GridView';
import AddCircleOutlinedIcon from '@mui/icons-material/AddCircleOutlined';
import SearchIcon from '@mui/icons-material/Search';
import ImgCard from './ImgCard';
import img1 from '../../Assets/img1.jpg';
import img2 from '../../Assets/img2.jpg';
import img3 from '../../Assets/img3.jpg';
import img4 from '../../Assets/img4.jpg';
import img5 from '../../Assets/img5.jpg';
import img6 from '../../Assets/img6.jpg';
import img7 from '../../Assets/img7.jpg';
import img8 from '../../Assets/img8.jpg';
import img9 from '../../Assets/img9.jpg';

function Page72() {
    return (
        <div>
            <Header />
            <div className="main h-[130vh] absolute w-screen flex justify-center bg-[#0E0E0E]">
                <div className="left absolute top-[25vh] left-48">
                    <ul>
                        <li className='text-white font-[3rem] text-xl mt-8 cursor-pointer'>Following</li>
                        <li className='text-white font-[3rem] text-xl mt-8 cursor-pointer'>Latest</li>
                        <li className='text-white font-[3rem] text-xl mt-8 cursor-pointer'>Training</li>
                    </ul>
                </div>
                <div className="right flex flex-col items-center gap-6">
                    <div className="top flex mt-6 gap-3 items-center">
                        <div className="grid">
                            <GridViewIcon style={{ fontSize: "2.5rem" }} className='text-white' />
                        </div>
                        <div className="search flex">
                            <div className="inp">
                                <input type="text" placeholder='Search...' className='p-2 rounded-lg w-[35rem] h-[2.7rem] bg-[#E4E7EC]' />
                            </div>
                            <div className="s_btn relative right-9 top-[0.3rem]">
                                <SearchIcon className='text-gray-600 cursor-pointer' style={{ fontSize: "2rem" }} />
                            </div>
                        </div>
                        <div className="add relative right-7">
                            <AddCircleOutlinedIcon className='text-white' style={{ fontSize: "2.5rem" }} />
                        </div>
                    </div>
                    <div className="bottom h-[110vh] w-[45vw] bg-white flex flex-col items-center justify-center rounded-[20px]">
                        <div className="videos p-4 flex relative left-6 top-7">
                            <ImgCard link={img1} text="02:06 pm" />
                            <ImgCard link={img2} text="08:06 pm" />
                            <ImgCard link={img3} text="07:06 am" />
                        </div>
                        <div className="videos p-4 flex relative left-6 top-5">
                            <ImgCard link={img4} text="05:06 pm" />
                            <ImgCard link={img5} text="02:20 pm" />
                            <ImgCard link={img6} text="04:55 pm" />
                        </div>
                        <div className="videos p-4 flex relative left-6">
                            <ImgCard link={img7} text="03:06 am" />
                            <ImgCard link={img8} text="07:06 pm" />
                            <ImgCard link={img9} text="09:06 pm" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Page72;
