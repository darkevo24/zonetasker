import React, { useState, useEffect } from 'react';
import Footer from '../Footer';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import "../../styles/date.css";

const Step2: React.FC = () => {
    const [date, setDate] = useState<any>(new Date());

    const onChange = (value: any) => {
        if (value !== null) {
            setDate(value);
        }
    };

    const formatDate = (selectedDate: Date | null): string => {
        if (!selectedDate) {
            return '';
        }

        const month = selectedDate.toLocaleString('default', { month: 'long' });
        const day = selectedDate.getDate();
        const year = selectedDate.getFullYear();
        const hours = selectedDate.getHours();
        const minutes = selectedDate.getMinutes();

        return `${month} ${day}, ${hours}:${minutes < 10 ? '0' : ''}${minutes}`;
    };

    const customTile = ({ date, view }: { date: Date; view: string }): string => {
        return 'selected-date';
    };

    return (
        <div className='w-full bg-gray-100'>
            <div className='w-full bg-white flex items-center flex-col md:flex-row py-8 px-8'>
                <img onClick={() => { window.location.href = "/" }} src={require('../../logo/ZT.png')} alt='logo' width={230} className='absolute cursor-pointer' />
                <div className='flex items-center justify-center w-full text-white md:mt-0 mt-20'>
                    <div className='bg-gray-500 w-12 h-12 rounded-xl flex items-center justify-center'>1</div>
                    <div className=' bg-gray-200 w-16 h-0.5'></div>
                    <div className='bg-[#d4c414] w-12 h-12 rounded-xl flex items-center justify-center'>2</div>
                    <div className=' bg-gray-200 w-16 h-0.5'></div>
                    <div className='bg-gray-200 w-12 h-12 rounded-xl flex items-center justify-center'>3</div>
                    <div className=' bg-gray-200 w-16 h-0.5'></div>
                    <div className='bg-gray-200 w-12 h-12 rounded-xl flex items-center justify-center'>4</div>
                </div>
            </div>

            <div className='w-full flex flex-col items-center mb-8'>
                <div className='flex md:flex-row flex-col w-10/12 bg-white p-4 md:p-16 mt-8 rounded-lg items-center justify-center'>
                    <div className=' md:w-9/12 w-full'>
                        <h1 className='text-2xl '>Choose your task date and start time :</h1>
                        <Calendar className={'mt-5'} onChange={onChange} value={date} tileClassName={customTile} />
                        <DatePicker
                            selected={date}
                            onChange={onChange}
                            showTimeSelect
                            timeFormat="HH:mm"
                            timeIntervals={15}
                            timeCaption="Time"
                            dateFormat="h:mm aa"
                            className='mt-2 md:w-[350px] w-3/4 border border-black rounded-full p-2'
                        />
                        <p className='text-[12px] mt-2'>You can chat to adjust task details or change start time after confirming</p>
                    </div>
                    <div className='w-full'>
                        <p>Request for :</p>
                        <p>{formatDate(date)}</p>
                        <button className={`bg-[#d39c1a] px-10 py-2 mt-2 text-white rounded-full`} >Select & continue</button>
                        <p className='w-40 mt-3 text-sm'>Next, confirm your detail to get connected with your Tasker.</p>
                    </div>
                </div>
            </div>

            <div className='w-full flex flex-col items-center mt-4 mb-12'>
                <div className='flex justify-end w-10/12'>
                    <button onClick={() => { window.location.href = "/post-a-job-step-3" }} className={`bg-${date ? '[#d4c414]' : 'gray-400'} px-8 py-3 text-white rounded-lg`} disabled={!date}>Continue</button>
                </div>
            </div>
        </div>
    );
};

export default Step2;
