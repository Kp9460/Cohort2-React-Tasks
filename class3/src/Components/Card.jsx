const Card = ({ userData }) => {

  return (
    <div className="w-38 bg-white rounded-2xl shadow-[0_0_25px_rgba(0,0,0,0.2)]">

      {/* Cover Image */}
      <div className="h-18 w-full p-1 overflow-hidden rounded-t-2xl">
        <img
          src={userData.coverImage}
          alt=""
          className="h-full w-full object-cover rounded-xl"
        />
      </div>

      {/* Profile */}
      <div className="flex flex-col items-center -mt-9 px-4 pb-4">

        <img
          src={userData.profile}
          alt=""
          className="w-15 h-15 rounded-full border-4 border-white object-cover"
        />

        <h2 className="mt-1 font-medium text-[2vw]">
          {userData.fullName}
        </h2>

        <p className="text-gray-500 text-[1.1vw] text-center">
          {userData.title}
        </p>

        {/* Stats */}
        <div className="flex justify-between w-[118%] mt-2 text-center bg-[#f1f1f1] rounded-md shadow-md px-4 py-1.5">
          <div>
            <h3 className="font-bold text-[1.5vw]">{userData.likesCount}</h3>
            <p className="text-[1vw] text-gray-500">Likes</p>
          </div>

          <div>
            <h3 className="font-bold text-[1.5vw]">{userData.postCount}</h3>
            <p className="text-[1vw] text-gray-500">Posts</p>
          </div>

          <div>
            <h3 className="font-bold text-[1.5vw]">{userData.viewsCount}</h3>
            <p className="text-[1vw] text-gray-500">Views</p>
          </div>
        </div>

        {/* Button */}
        <button className={`mt-3.5 px-2 py-0.5 rounded-full text-white text-[1.7vw] ${
          userData.followed ? "bg-green-500" : "bg-blue-500"
        }`}>
          {userData.followed ? "Following" : "Follow"}
        </button>

      </div>
    </div>
  );
};

export default Card;