// const data ={
// title: "First Test",
// description: "TESTING",
// date: "Sun Jul 23 2023",
// location: "HYDERABAD",
// event: "NCC",
// event_time: "1:1",
// event_organiser: "Shashankh",
// event_link : "https://www.google.com/"
// }

import { useEffect, useState } from "react";
import axios from "axios";
import { BASE_URL } from "../urls";
const sampleObj = [
  {
    title: "First Test",
    description: "TESTING",
    date: "Sun Jul 23 2023",
    location: "HYDERABAD",
    event: "NCC",
    event_time: "1:1",
    event_organiser: "Shashankh",
    event_link: "https://www.google.com",
  },
  {
    title: "Second Test",
    description: ":sunglasses:",
    date: "Sun Jul 23 2023",
    location: "HYDERABAD",
    event: "NCC",
    event_time: "1:12",
    event_organiser: "Siddarth",
    event_link: "https://www.google.com",
  },
];

export default function ShowEvent() {
  function parseJwt(token) {
    var base64Url = token.split(".")[1];
    var base64 = base64Url.replace(/-/g, "+").replace(/_/g, "/");
    var jsonPayload = decodeURIComponent(
      window
        .atob(base64)
        .split("")
        .map(function (c) {
          return "%" + ("00" + c.charCodeAt(0).toString(16)).slice(-2);
        })
        .join("")
    );

    return JSON.parse(jsonPayload);
  }
  const [sampleObj, setSampleObj] = useState([]);
  const [role, setRole] = useState("user");
  useEffect(() => {
    try {
      fetchData();
    } catch (err) {
      console.error(err);
    }
    async function fetchData() {
      const token = localStorage.getItem("token");
      const user = parseJwt(token);
      setRole(user.data.role);
      if(user.data.role === "user"){
        const data = await axios.get(BASE_URL + "event/true");
        setSampleObj(data.data);
      }
      else{
        const data = await axios.get(BASE_URL + "event/false");
        setSampleObj(data.data);
      }
    }
  }, []);

  const handleDelete = async (id) => {
    try {
      await axios.delete(BASE_URL + "event/" + id);
      window.location.reload();
    } catch (err) {
      console.error(err);
    }
  };

  const HandleEvent = async (id, approved) => {
    try {
      console.log("REQ for EVENT", id, approved);
      await axios.patch(BASE_URL + "event/" + id, {
        is_approved: approved,
      });
      window.location.reload();
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <>
      <div className="">
        {sampleObj.length &&
          sampleObj.map((data) => (
            <>
              <div className=" bg-color-black">
                <div className="border-2 rounded-md height-screen width-[100%] border-white">
                  <div className=" flex items-center justify-between">
                    <h1 className="text-2xl text-emerald-200 p-4 pl-10">
                      TITLE: {data.title} 
                    </h1>
                    {role === "admin" && 
                      <p className="text-white">{data.approved === true ? "✅ Approved" : "❌ Not Approved"}</p>}
                    {role === "admin" && (
                      <button onClick={() => handleDelete(data._id)}>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          strokeWidth={1.5}
                          stroke="currentColor"
                          className="w-6 h-6 mr-4 text-white">
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M6 18L18 6M6 6l12 12"
                          />
                        </svg>
                      </button>
                    )}
                  </div>
                  <div className=" flex items-center">
                    <h1 className="text-2xl text-emerald-200 p-4 pl-10">
                      DESCRIPTION:
                    </h1>
                    <h1 className="text-2xl text-emerald-200 p-4">
                      {data.description}
                    </h1>
                  </div>
                  <div className=" flex items-center">
                    <h1 className="text-2xl text-emerald-200 p-4 pl-10">
                      DATE:
                    </h1>
                    <h1 className="text-2xl text-emerald-200 p-4">
                      {data.date}
                    </h1>
                  </div>
                  <div className=" flex items-center">
                    <h1 className="text-2xl text-emerald-200 p-4 pl-10">
                      LOCATION:
                    </h1>
                    <h1 className="text-2xl text-emerald-200 p-4">
                      {data.location}
                    </h1>
                  </div>
                  <div className=" flex items-center">
                    <h1 className="text-2xl text-emerald-200 p-4 pl-10">
                      EVENT:
                    </h1>
                    <h1 className="text-2xl text-emerald-200 p-4">
                      {data.event}
                    </h1>
                  </div>
                  <div className=" flex items-center">
                    <h1 className="text-2xl text-emerald-200 p-4 pl-10">
                      EVENT TIME:
                    </h1>
                    <h1 className="text-2xl text-emerald-200 p-4">
                      {data.event_time}
                    </h1>
                  </div>
                  <div className=" flex items-center justify-normal">
                    <h1 className="text-2xl text-emerald-200 p-4 pl-10">
                      EVENT ORGANISER: {data.event_organiser}
                    </h1>
                    {role === "admin" && 
                    
                    <button className="mx-6" onClick={()=>HandleEvent(data._id, true)}>
                      {"✅"}
                    </button>}
                    {role === "admin" && 
                    <button className="mx-6" onClick={()=>HandleEvent(data._id, false)}>
                      {"❌"}
                    </button>}
                  </div>
                  <div className=" flex items-center">
                    <h1 className="text-2xl text-emerald-200 p-4 pl-10">
                      EVENT LINK:
                    </h1>
                    <h1 className="text-2xl p-4 text-blue-700">
                      <a
                        href={data.event_link}
                        rel="noreferrer"
                        target="_blank">
                        {data.event_link}
                      </a>
                    </h1>
                  </div>
                </div>
              </div>
            </>
          ))}
        ;
      </div>
    </>
  );
}
