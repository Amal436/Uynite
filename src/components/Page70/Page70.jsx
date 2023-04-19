import React from 'react';
import Header from '../Header/Header';
import imgLink2 from '../../Assets/profile.png'
import FollowTheSignsIcon from '@mui/icons-material/FollowTheSigns';

const Page70 = () => {

    const imgLink = "https://images.unsplash.com/photo-1546587348-d12660c30c50?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1174&q=80";

    return (
        <>
            <Header />
            <div className="h-[92vh] absolute w-screen bg-[#E4E7EC] flex gap-14">
                <div className="left h-[30rem] w-[28rem] bg-white relative top-12 left-32 rounded-[20px]">
                    <div className='p-3 h-[34vh]'>
                        <img src={imgLink} alt="img" className='rounded-[20px] h-[15rem] w-[100%]' />
                    </div>
                </div>
                <div className="profilePic">
                    <div className='absolute top-[15rem] left-[17rem] flex flex-col items-center gap-2'>
                        <img src={imgLink2} alt="profilePic" className='h-[20vh]' />
                        <h1 className='font-bold text-xl'>Kathy S</h1>
                        <p className='font-bold text-sm text-gray-600 relative bottom-2'>Political Profile</p>
                    </div>
                </div>
                <div className="follower">
                    <div className="follow absolute top-[28rem] left-[15rem] flex flex-col items-center gap-1 cursor-pointer">
                        <FollowTheSignsIcon />
                        <h1 className='font-bold text-sm bg-[#D6DEEB] p-1 rounded-md w-[6rem] text-center'>2 follower</h1>
                    </div>
                    <div className="following">
                        <div className="follow absolute top-[28rem] left-[22rem] flex flex-col items-center gap-1 cursor-pointer">
                            <FollowTheSignsIcon className='text-gray-600' />
                            <h1 className='font-bold text-sm bg-[#D6DEEB] p-1 rounded-md w-[6rem] text-center'>3 following</h1>
                        </div>
                    </div>
                </div>
                <div className="right 2xl:w-[35%] xl:w-[40%] w-[45%] h-[3rem] bg-white relative top-14 flex items-center justify-around rounded-[10px]">

                    <div className="posts bg-[#7991BD] w-40 text-center h-7 rounded-md cursor-pointer">
                        <h1>Posts</h1>
                    </div>

                    <div className="photos bg-[#E4E4E4] w-40 text-center h-7 rounded-md cursor-pointer">
                        <h1>Photos</h1>
                    </div>

                    <div className="videos bg-[#E4E4E4] w-40 text-center h-7 rounded-md cursor-pointer">
                        <h1>Videos</h1>
                    </div>

                </div>
            </div>
        </>
    );
}

export default Page70;
