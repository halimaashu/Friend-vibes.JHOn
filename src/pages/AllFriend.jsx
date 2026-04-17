"use client";
import Image from "next/image";
import Link from "next/link";
import { useState, useEffect } from "react";

const AllFriend = () => {
  const [friends, setFriends] = useState([]);

  useEffect(() => {
    fetch("/data/friends.json")
      .then((res) => res.json())
      .then((data) => setFriends(data.friends));
  }, []);

  return (
    <div>
      <h1 className="text-2xl font-bold">All Friends</h1>
      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
        {friends.map((friend) => (
          <Link
            href={`/${friend.id}`}
            key={friend.id}
            className="shadow-md rounded-lg p-5 text-center flex flex-col items-center space-y-3"
          >
            <Image
              height={100}
              width={100}
              alt={friend.name}   // ← id না, name দাও
              src={friend.picture}
              className="rounded-full border-2 border-gray-500"
            />
            <h1 className="text-2xl font-bold">{friend.name}</h1>
            <h2 className="text-gray-500 text-xl">
              {friend.days_since_contact}d ago
            </h2>
            <div className="flex gap-3">
              {friend.tags.map((tag, index) => (
                <div key={index} className="badge badge-success">
                  {tag}
                </div>
              ))}
            </div>
            {friend.status === "overdue" ? (
              <div className="badge badge-accent">overdue</div>
            ) : friend.status === "on-track" ? (
              <div className="badge badge-info">on-track</div>
            ) : (
              <div className="badge badge-error">{friend.status}</div>
            )}
          </Link>
        ))}
      </div>
    </div>
  );
};

export default AllFriend;