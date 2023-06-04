import { useState } from "react";

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import axios from 'axios';

export default function Addevent()  {

    let [Title, setTitle] = useState('');
    let [Description, setDescription] = useState('');
    let [Date, setDate] = useState('');
    let [Organizer, setOrganizer] = useState('');
    const [selected, setSelected] = useState('');
    let [Location, setLocation] = useState('');
  const [selectedHour, setSelectedHour] = useState('');
  const [selectedMinute, setSelectedMinute] = useState('');
    const validateForm = async () => {
        if (Title === '' || Description === '' || Date === '' || Organizer === '') {
            toast.error('Please fill all the fields');

        } 
        else if(Title.length < 3 || Description.length < 3){
            toast.error('Title and Description should be atleast 3 characters long');
        }
       
        else if(Organizer.length < 3){
            toast.error('Enter a valid organizer name');
        }
        else {
            axios.post('http://localhost:3000/api/AddEvent', { Title : Title, Description : Description, Date : Date, Organizer : Organizer,Location:Location,selected:selected,selectedHour:selectedHour,selectedMinute:selectedMinute, "test" : "HERo" })
            .then((response) => {
                if(response?.data?.msg === 'Event already exists'){
                    toast.warn('Event already exists');
                }
                else{
                    toast.success('Successfully Event Added');
                }
            })
            .catch((error) => {
                console.log(error);
                toast.error('Error Adding Event');
            });
        }
    }

    const handleSportChange = (event) => {
        setSelected(event.target.value);
      };
    
      const handleHourChange = (event) => {
        setSelectedHour(event.target.value);
      };
    
      const handleMinuteChange = (event) => {
        setSelectedMinute(event.target.value);
      };
      const renderHoursOptions = () => {
        const hours = [];
        for (let i = 0; i <= 23; i++) {
          hours.push(
            <option key={i} value={i}>
              {i}
            </option>
          );
        }
        return hours;
      };
    
      const renderMinutesOptions = () => {
        const minutes = [];
        for (let i = 0; i <= 59; i++) {
          minutes.push(
            <option key={i} value={i}>
              {i < 10 ? `0${i}` : i}
            </option>
          );
        }
        return minutes;
      };


    return (
        <div className="relative flex flex-col justify-center min-h-screen overflow-hidden">
            <div className="w-full p-6 m-auto bg-white rounded-md shadow-xl shadow-emerald-600/40 ring-2 ring-indigo-600 lg:max-w-xl">
                <h1 className="text-3xl font-semibold text-center text-indigo-700 underline uppercase udnerline">
                ADD EVENT
                </h1>



                <form className="mt-6">
                    <div className="mb-2">
                        <label
                            
                            className="block text-sm font-semibold text-gray-800"
                        >
                           Title
                        </label>
                        <input
                            type="text"
                            onChange={(e) => setTitle(e.target.value)}
                            className="block w-full px-4 py-2 mt-2 text-indigo-700 bg-white border rounded-md focus:border-indigo-400 focus:ring-indigo-300 focus:outline-none focus:ring focus:ring-opacity-40"
                        />

                    </div>
                   
                    <div className="mb-2">
                        <label
                            
                            className="block text-sm font-semibold text-gray-800"
                        >
                            Description
                        </label>
                        <input
                            type="text"
                            onChange={(e) => setDescription(e.target.value)}
                            className="block w-full px-4 py-2 mt-2 text-indigo-700 bg-white border rounded-md focus:border-indigo-400 focus:ring-indigo-300 focus:outline-none focus:ring focus:ring-opacity-40"
                        />
                    </div>
                    <div className="mb-2">
                        <label
                            
                            className="block text-sm font-semibold text-gray-800"
                        >
                            Location
                        </label>
                        <input
                            type="text"
                            onChange={(e) => setLocation(e.target.value)}
                            className="block w-full px-4 py-2 mt-2 text-indigo-700 bg-white border rounded-md focus:border-indigo-400 focus:ring-indigo-300 focus:outline-none focus:ring focus:ring-opacity-40"
                        />
                    </div>

                    <div>
      <label htmlFor="sport-select" className="block mb-2">
        Choose your event:
      </label>
      <select
        id="sport-select"
        className="w-full px-4 py-2 border border-gray-300 rounded-md"
        value={selected}
        onChange={handleSportChange}
      >
        <option value="">Choose your event</option>
        <option value="NCC">NCC</option>
        <option value="SPORTS">SPORTS</option>
      </select>
    </div>
    <label htmlFor="time-select" className="block mb-2">
        Select Time:
      </label>
      <div className="flex">
        <select
          id="hour-select"
          className="w-1/2 px-4 py-2 border border-gray-300 rounded-l-md"
          value={selectedHour}
          onChange={handleHourChange}
        >
          <option value="">HH</option>
          {renderHoursOptions()}
        </select>
        <select
          id="minute-select"
          className="w-1/2 px-4 py-2 border border-gray-300 rounded-r-md"
          value={selectedMinute}
          onChange={handleMinuteChange}
        >
          <option value="">MM</option>
          {renderMinutesOptions()}
        </select>
      </div>

                    <div className="mb-2">
                        <label
                            
                            className="block text-sm font-semibold text-gray-800"
                        >
                            
                            Date
                        </label>
                        <input
                            type="date"
                            onChange={(e) => setDate(e.target.value)}
                            className="block w-full px-4 py-2 mt-2 text-indigo-700 bg-white border rounded-md focus:border-indigo-400 focus:ring-indigo-300 focus:outline-none focus:ring focus:ring-opacity-40"
                        />
                    </div>
                    <div className="mb-2">
                        <label
                          
                            className="block text-sm font-semibold text-gray-800"
                        >
                            Organizer
                        </label>
                        <input
                            type="text"
                            onChange={(e) => setOrganizer(e.target.value)}
                            className="block w-full px-4 py-2 mt-2 text-indigo-700 bg-white border rounded-md focus:border-indigo-400 focus:ring-indigo-300 focus:outline-none focus:ring focus:ring-opacity-40"
                        />
                    </div>
                    <div className="mt-6">
                        <button type="button" onClick={validateForm} className="w-full px-4 py-2 tracking-wide text-white transition-colors duration-200 transform bg-indigo-700 rounded-md hover:bg-indigo-600 focus:outline-none focus:bg-indigo-600">
                            Add Event
                        </button>
                    </div>
                </form>

                
            </div>
            <ToastContainer />
        </div>
    );
}
{/* <div className="mb-2">
{sampleObj.map((item, index) => (
    <div className="pt-2" key={index}>
        <h1>EVENT TITLE : {item.title}</h1>
        <h1>EVENT DESCRIPTION : {item.description}</h1>
        <h1>EVENT LOCATION : {item.location}</h1>
        <h1>EVENT START : {item.event_start}</h1>
        <h1>EVENT END : {item.event_end}</h1>
        <h1>EVENT ORGANISER : {item.event_organiser}</h1>
    </div>
))}
</div> */}





// const sampleObj = [
//     {
//         "title": "This is a sample event",
//         "description": "This is a sample event",
//         "location": "This is a sample location",
//         "event_start": "2020-07-20T18:30:00.000Z",
//         "event_end": "2020-07-20T18:30:00.000Z",
//         "event_organiser": "5f15b0b1e1b9a71b1c4b0b1c"
//     },
//     {
//         "title": "This is a sample event",
//         "description": "test",
//         "location": "This is a sample location",
//         "event_start": "2020-07-20T18:30:00.000Z",
//         "event_end": "2020-07-20T18:30:00.000Z",
//         "event_organiser": "5f15b0b1e1b9a71b1c4b0b1c"
//     }
// ]