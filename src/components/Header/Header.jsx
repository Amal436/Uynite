import React from 'react';
import SearchIcon from '@mui/icons-material/Search';
import ParkIcon from '@mui/icons-material/Park';
import AlarmAddIcon from '@mui/icons-material/AlarmAdd';
import DateRangeIcon from '@mui/icons-material/DateRange';
import GroupsIcon from '@mui/icons-material/Groups';
import QuestionAnswerIcon from '@mui/icons-material/QuestionAnswer';
import SlowMotionVideoIcon from '@mui/icons-material/SlowMotionVideo';
import CampaignIcon from '@mui/icons-material/Campaign';


const imgLink = "https://img1.wsimg.com/isteam/ip/80c58f2b-872a-435b-88a8-8fdd0268aa03/logo.png/:/rs=w:76,h:76,cg:true,m/cr=w:76,h:76/qt=q:100/ll";

const imgLink2 = "https://i.pinimg.com/564x/3a/3d/85/3a3d851e35d8db707d13c43a717b6b02.jpg"

const Header = () => {
    return (
        <div className='h-14  w-screen flex justify-around items-center'>
            <div className="logo">
                <img src={imgLink} alt="dadf" className='h-10' />
            </div>
            <div className="search flex ">
                <div className="inp">
                    <input className='h-9 w-52 lg:w-72 p-1 bg-[#E4E7EC] rounded-md' type="text" placeholder='Search...' />
                </div>
                <div className="s_btn relative right-8 top-1">
                    <SearchIcon className='text-gray-600 cursor-pointer' />
                </div>
            </div>
            <div className="middle flex items-center justify-around xl:w-[40%] w-[45%] text-gray-700">
                <div className="c1 flex justify-center gap-3 w-36 h-10 bg-[#CDCDCD] rounded-md cursor-pointer">
                    <div className="icon">
                        <ParkIcon />
                    </div>
                    <div className="text flex-col ">
                        <h1 className='font-bold text-sm'>Roots</h1>
                        <p className='text-sm relative bottom-1'>connect friends</p>
                    </div>
                </div>
                <div className="c2 flex justify-center gap-3 w-36 h-10 bg-[#CDCDCD] rounded-md cursor-pointer">
                    <div className="icon">
                        <AlarmAddIcon />
                    </div>
                    <div className="text flex-col">
                        <h1 className='font-bold text-sm'>Kicks</h1>
                        <p className='text-sm relative bottom-1'>short videos</p>
                    </div>
                </div>
                <div className="c3 flex justify-center gap-3 w-36 h-10 bg-[#CDCDCD] rounded-md cursor-pointer">
                    <div className="icon">
                        <DateRangeIcon />
                    </div>
                    <div className="text flex-col">
                        <h1 className='font-bold text-sm'>U-Meet</h1>
                        <p className='text-sm relative bottom-1'>create events</p>
                    </div>
                </div>
            </div>
            <div className="icons flex xl:w-1/4 w-[30%] xl:gap-8 gap-4">
                <div className="i1 flex flex-col items-center cursor-pointer">
                    <GroupsIcon />
                    <p className='text-xs font-bold'>Friends</p>
                </div>
                <div className="i2 flex flex-col items-center cursor-pointer">
                    <QuestionAnswerIcon />
                    <p className='text-xs font-bold'>Chat</p>
                </div>
                <div className="i3 flex flex-col items-center w-28 cursor-pointer">
                    <SlowMotionVideoIcon />
                    <p className='text-xs font-bold'>U-stream</p>
                </div>
                <div className="i4 flex flex-col items-center cursor-pointer">
                    <CampaignIcon />
                    <p className='text-xs font-bold'>Notification</p>
                </div>
                <div className="i5 flex flex-col items-center cursor-pointer">
                    <img className='h-8 w-8' src={imgLink2} alt="sdfdf" />
                </div>
            </div>
            <div className="prof">

            </div>
        </div>
    );
}

export default Header;
