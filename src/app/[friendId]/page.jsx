"use client";
import { Context } from "@/provider/ContextProvider";
import Image from "next/image";
import { useParams } from "next/navigation";
import React, { useContext, useEffect, useState } from "react";
import { FaArchive } from "react-icons/fa";
import { FaRegMessage } from "react-icons/fa6";
import { FiPhoneCall } from "react-icons/fi";
import { IoMdVideocam } from "react-icons/io";
import { MdDeleteOutline, MdOutlineCircleNotifications } from "react-icons/md";
import vid from "@/assets/images/video.png"
import call from "@/assets/images/call.png"
import text from "@/assets/images/text.png"
import { toast } from "react-toastify";


const FriendPage = () => {
  const [remember, setRemember] = useContext(Context);
  console.log(remember);
  const { friendId } = useParams();
  const [friends, setFriends] = useState([]);
  useEffect(() => {
    fetch("http://localhost:3000/data/friends.json")
      .then((res) => res.json())
      .then((data) => {
        setFriends(data.friends);
        // console.log(data)
      });
  }, []);

  // console.log(friends);

  // console.log(friendId);
  const exceptedFriend = friends.find(
    (friend) => friend.id === parseInt(friendId),
  );
if (!exceptedFriend) {
  return <div>Loading...</div>;
}
  // console.log("current object", exceptedFriend);
  return (
    <div className="bg-base-200 grid grid-cols-3 max-w-11/12 mx-auto gap-4 p-4">
      {/* <Image alt="video image" height={300} width={400} src={vid}></Image> */}
      {/* first par(1) */}
      <div className="col-span-1">
        {/* pRT1 */}
        <div className="shadow-xl rounded-lg bg-base-100 p-5 text-center flex flex-col items-center space-y-3 ">
          <Image
            height={100}
            width={100}
            alt={exceptedFriend?.id}
            src={exceptedFriend?.picture}
            className="rounded-full border-2 border-gray-500"
          ></Image>
          <h1 className="text-2xl font-bold">{exceptedFriend?.name}</h1>

          <div className="flex gap-3">
            {" "}
            {exceptedFriend?.tags.map((tag, index) => (
              <div key={index} className="badge badge-success">
                {tag}
              </div>
            ))}
          </div>
          {exceptedFriend?.status === "overdue" ? (
            <div className="badge badge-accent">Accent</div>
          ) : exceptedFriend?.status === "on-track" ? (
            <div className="badge badge-info">Info</div>
          ) : (
            <div className="badge badge-error">Error</div>
          )}

          <h1 className="text-gray-500">{exceptedFriend?.bio}</h1>
        </div>
        {/* PART1:2 */}
        <div className="bg-base-100 mt-5 space-y-5 text-center font-semibold">
          <div className="shadow-lg rounded-lg p-4 ">
            <h1 className="flex gap-2 items-center justify-center">
              <MdOutlineCircleNotifications /> Snooze 2 weeks
            </h1>
          </div>
          <div className="shadow-lg rounded-lg p-4 ">
            <h1 className="flex gap-2 items-center justify-center">
              <FaArchive /> Archive
            </h1>
          </div>
          <div className="shadow-lg rounded-lg p-4 ">
            <h1 className="flex gap-2 items-center justify-center text-red-500">
              <MdDeleteOutline size={20} /> Delete
            </h1>
          </div>
        </div>
      </div>

      {/* right side */}
      <div className="col-span-2">
        {/* BOX 1*/}
        <div className="grid grid-cols-3 gap-5 bg-base-100">
          <div className="text-gray-500 shadow-md rounded-md text-center px-6 py-10">
            <h1 className="text-3xl font-bold">
              {exceptedFriend?.days_since_contact}
            </h1>
            <p>Days Since Contact</p>
          </div>
          <div className="text-gray-500 shadow-md rounded-md text-center px-6 py-10">
            <h1 className="text-3xl font-bold">{exceptedFriend?.goal}</h1>
            <p>Goal (days)</p>
          </div>
          <div className="text-gray-500 shadow-md rounded-md text-center px-6 py-10">
            <h1 className="text-3xl font-bold">
              {exceptedFriend?.next_due_date}
            </h1>
            <p>Next Due</p>
          </div>
        </div>

        {/* BOX 2 */}
        <div className="bg-base-100 shadow-md rounded-lg flex justify-between items-center p-5 font-semibold">
          <div className="">
            <h1>Relationship Goal</h1>
            <h1 className="text-semibold mt-9">
              <span className="text-gray-500 ">contact every </span>{" "}
              {exceptedFriend?.days_since_contact}
            </h1>
          </div>
          <button className="btn">Edit</button>
        </div>

        {/* box 3 */}
        <div className="shadow-md rounded-md bg-base-100 p-6 mt-5 font-semibold">
          <h1>Check in</h1>
          <div className="grid grid-cols-3 gap-6 text-center p-5">
            {/* call */}
            <div
              onClick={() =>{
                toast.success(`you are calling ${exceptedFriend?.name}`);


                setRemember([
                  ...remember,
                  {
                    type:"call",
                    name: `${exceptedFriend?.name}`,
                    image: call,
                    time: `${new Date().toLocaleString()}`,
                  },
                ])
              }}
              className="bg-base-200 p-5"
            >
              <h1 className="test-2xl font-bold text-green-500 flex justify-center">
                <FiPhoneCall size={50} />
              </h1>
              <h1 className="mt-5">Call</h1>
            </div>
            {/* massages */}
            <div
            onClick={() =>{
              toast.success(`you are massages naw ${exceptedFriend?.name}`);
                setRemember([
                  ...remember,
                  {
                    type:"Message",
                    name: `${exceptedFriend?.name}`,
                    image: text,
                    time: `${new Date().toLocaleString()}`,
                  },
                ])
              } }className="bg-base-200 p-5">
              <h1 className="test-2xl font-bold text-gray-500 flex justify-center">
                <FaRegMessage size={50} />
              </h1>
              <h1 className="mt-5">Messages Me</h1>
            </div>
            {/* video call */}
            <div
            onClick={() =>{
              toast.success(`you are video calling ${exceptedFriend?.name}`);
                setRemember([
                  ...remember,
                  {
                    type:"Video-call",
                    name: `${exceptedFriend?.name}`,
                    image: vid,
                    time: `${new Date().toLocaleString()}`,
                  },
                ])
              }} className="bg-base-200 p-5">
              <h1 className="test-2xl font-bold text-violet-500 flex justify-center">
                <IoMdVideocam size={50} />
              </h1>
              <h1 className="mt-5">Video call</h1>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FriendPage;
