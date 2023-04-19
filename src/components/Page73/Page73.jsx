import React, { Profiler, useState } from 'react';
import Header from '../Header/Header';
import imgLink from '../../Assets/img5.jpg';
import PlayCircleOutlineOutlinedIcon from '@mui/icons-material/PlayCircleOutlineOutlined';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import profile from '../../Assets/profile.png';
import VolumeOffIcon from '@mui/icons-material/VolumeOff';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import CommentIcon from '@mui/icons-material/Comment';
import SendIcon from '@mui/icons-material/Send';
import AddCircleOutlinedIcon from '@mui/icons-material/AddCircleOutlined';
import SearchIcon from '@mui/icons-material/Search';
const Page73 = () => {

    const [comment, setComment] = useState('');
    const [comments, setComments] = useState([]);

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!comment.trim()) return;
        setComments([...comments, comment]);
        setComment('');
    }

    return (
        <>
            <Header />
            <div className='h-[120vh] w-screen bg-[#2E3A2B] flex justify-center items-center gap-4 overflow-y-hidden'>
                <div className="left relative right-10 bottom-28 flex flex-col gap-7">
                    <div className="following bg-[#d6b068] h-12 w-32 flex items-center justify-center text-center rounded-[10px]">
                        <h1 className='font-bold text-2xl text-white'>Following</h1>
                    </div>
                    <div className="lat flex flex-col gap-6">
                        <h1 className='text-white text-2xl font-bold'>Latest</h1>
                        <h2 className='text-white text-2xl font-bold'>Trending</h2>
                    </div>
                    <div className="icons flex gap-7">
                        <SearchIcon className='text-white' style={{ fontSize: "2rem" }} />
                        <AddCircleOutlinedIcon className='text-white' style={{ fontSize: "2rem" }} />
                    </div>
                </div>
                <div className="middle relative top-16">
                    <img src={imgLink} alt="" className='h-[93vh] w-[30vw] object-cover rounded-[20px]' />
                    <PlayCircleOutlineOutlinedIcon style={{ fontSize: "4rem" }} className='relative bottom-[23rem] left-[12rem] text-white' />
                    <img src={profile} alt="profile" className='h-14 relative bottom-[44.5rem] left-4' />
                    <h1 className='bottom-[48rem] left-20 relative font-bold text-white text-lg'>Kathy S <p className='text-sm font-thin'>5 hours ago</p></h1>
                    <MoreVertIcon className='relative bottom-[50rem] left-[26rem] text-white' />
                    <div className="icons absolute bottom-[15rem] left-[23rem] flex flex-col items-center justify-center gap-5">
                        <div className="mute flex flex-col items-center">
                            <VolumeOffIcon className='text-white' />
                            <p className='text-white'>mute</p>
                        </div>
                        <div className="likes flex flex-col items-center">
                            <FavoriteBorderIcon className='text-white' />
                            <p className='text-white'>12 likes</p>
                        </div>
                        <div className="comment flex flex-col items-center">
                            <CommentIcon className='text-white' />
                            <p className='text-white'>3 comments</p>
                        </div>
                        <div className="send flex flex-col items-center">
                            <SendIcon className='text-white' />
                            <p className='text-white'>send</p>
                        </div>
                    </div>
                </div>
                <div className="right flex flex-col items-center justify-center relative bottom-7">
                    <div className="top h-[80vh] w-[30vw] pl-5 pt-7 bg-white relative left-16 bottom-4 rounded-[20px] overflow-y-scroll flex flex-col items-center">

                        {comments.map((comment, index) => (
                            <div className="container w-[100%] flex gap-5 justify-center items-center">

                                <img src={imgLink} alt="" className='rounded-[50%] h-10 w-10 object-cover' />

                                <div key={index} className='w-[80%] min-h-[3rem] flex pl-2 rounded-[10px] bg-blue-200 mb-3 overflow-x-hidden break-words flex-col gap-2 box-border p-[5px]'>
                                    <div className='text-[8px]'>Amal Shakya  <span>{new Date().toUTCString().slice(0, 10)}</span></div>

                                    <div>{comment}</div>
                                </div>
                            </div>
                        ))}

                    </div>
                    <div className="bottom flex">
                        <form onSubmit={handleSubmit}>
                            <input type="text" value={comment} onChange={(e) => setComment(e.target.value)} placeholder='add comment' className='w-[28rem] h-10 relative left-20 rounded-[10px] pl-2 break-words' />
                            <button type='submit'><SendIcon className='relative left-12 cursor-pointer' /></button>
                        </form>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Page73;
