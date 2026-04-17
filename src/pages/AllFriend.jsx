"use client";
import Image from "next/image";
import Link from "next/link";
import { use } from "react";

const data = async () => {
  const dt = await fetch("data/friends.json");
  return dt.json();
};
const friends = data();
const AllFriend = () => {
  //   const res = await fetch("http://localhost:3000/data/friends.json");

  //   const data = await res.json();
  //  const friends=data.friends;
  const core = use(friends);
  const friend = core.friends;
  // console.log(core)
  return (
    <div>
      <h1 className="text-2xl font-bold">All Friends</h1>

      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 ">
        {friend.map((friend) => (
          <Link  href={`/${friend.id}`}
            key={friend.id}
            className="shadow-md rounded-lg  p-5 text-center flex flex-col items-center space-y-3"
          >
            <Image
              height={100}
              width={100}
              alt={friend.id}
              src={friend.picture}
              className="rounded-full border-2 border-gray-500"
            ></Image>
            <h1 className="text-2xl font-bold">{friend.name}</h1>
            <h2 className="text-gray-500 text-xl">
              {friend.days_since_contact}d ago
            </h2>
            <div className="flex gap-3">
              {" "}
              {friend.tags.map((tag, index) => (
                <div key={index} className="badge badge-success">
                  {tag}
                </div>
              ))}
            </div>
            {friend.status === "overdue" ? (
              <div className="badge badge-accent">Accent</div>
            ) : friend.status === "on-track" ? (
              <div className="badge badge-info">Info</div>
            ) : (
              <div className="badge badge-error">Error</div>
            )}
          </Link>
        ))}
      </div>
    </div>
  );
};

export default AllFriend;
