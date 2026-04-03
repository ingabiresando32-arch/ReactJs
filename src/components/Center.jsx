function Center() {
  return (
    <div className="space-y-4">

      {/* Create Post */}
      <div className="bg-white rounded-lg p-4 shadow">

        <div className="flex justify-between items-center mb-3">
          <h1 className="font-bold text-lg">Home</h1>
          <i className="fa-solid fa-star text-blue-500"></i>
        </div>

        <div className="flex gap-3">

          <img src="profile.jpeg" className="w-12 h-12 rounded-full object-cover" alt="" />

          <div className="flex-1">

            <p className="text-sm mb-2">
              I have a Job, I can post to support Jobless!
            </p>

            <div className="flex items-center gap-2 text-sm text-blue-500 mb-3">
              <i className="fa-solid fa-globe"></i>
              <span>Your Followers</span>
              <i className="fa-solid fa-caret-down"></i>
            </div>

            <div className="flex justify-between items-center border-t pt-2">

              <i className="fa-solid fa-image text-blue-500 cursor-pointer"></i>

              <div className="text-sm text-blue-500 flex items-center gap-1">
                <i className="fa-solid fa-circle-info"></i>
                <span>US $99.99</span>
              </div>

              <button className="bg-blue-500 text-white px-6 py-1 rounded-full hover:bg-blue-600">
                Post
              </button>

              <span className="text-sm text-blue-500">
                16,000 Jobless
              </span>

            </div>

          </div>
        </div>
      </div>

      {/* Job Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">

        {/* Card 1 */}
        <div className="bg-white rounded-lg p-4 shadow flex flex-col items-center text-center">
          <img src="airtel.jpg" className="w-14 mb-2" alt="" />
          <h2 className="font-bold text-sm">Airtel Rwanda</h2>
          <p className="text-xs font-semibold">Network & System Administrator</p>
          <p className="text-xs">Bachelor Degree in Software Engineering</p>

          <span className="mt-3 bg-blue-500 text-white text-xs px-3 py-1 rounded-full">
            Urgent Hiring
          </span>
        </div>

        {/* Card 2 */}
        <div className="bg-white rounded-lg p-4 shadow flex flex-col items-center text-center">
          <img src="twapela.jpeg" className="w-14 mb-2" alt="" />
          <h2 className="font-bold text-sm">Twapela</h2>
          <p className="text-xs font-semibold">Machine Learning Engineer</p>
          <p className="text-xs">Master degree in Mathematics</p>

          <span className="mt-3 bg-blue-500 text-white text-xs px-3 py-1 rounded-full">
            Urgent Hiring
          </span>
        </div>

        {/* Card 3 */}
        <div className="bg-white rounded-lg p-4 shadow flex flex-col items-center text-center">
          <img src="mpuza.jpeg" className="w-14 mb-2" alt="" />
          <h2 className="font-bold text-sm">Mpuza Inc</h2>
          <p className="text-xs font-semibold">Legal Officer</p>
          <p className="text-xs">Bachelor Degree in International Law</p>

          <span className="mt-3 bg-blue-500 text-white text-xs px-3 py-1 rounded-full">
            Urgent Hiring
          </span>
        </div>

      </div>

      {/* Post Card */}
      <div className="bg-white rounded-lg p-4 shadow space-y-3">

        <div className="flex justify-between items-center">

          <div className="flex bg-blue-500 p-3 rounded-lg w-24 items-center gap-3"></div>

          <button className="text-blue-500 text-sm">
            <i className="fa-solid fa-user"></i> Follow
          </button>

        </div>

        <div className="text-sm space-y-1">
          <p>3 Vacant Positions</p>
          <p>1 Year Experience</p>
        </div>

        <div className="flex justify-between items-center text-red-500 font-bold text-sm">
          <span>04 Days</span>
          <span>08 Hours</span>
          <span>44 Minutes</span>
        </div>

        <div className="flex justify-between border-t pt-2 text-sm text-gray-600">
          <span><i className="fa-solid fa-heart text-red-500"></i></span>
          <span><i className="fa-regular fa-message"></i> Comment</span>
          <span><i className="fa-solid fa-share"></i> Share</span>
          <span><i className="fa-regular fa-star"></i> Save</span>
        </div>

      </div>

    </div>
  );
}

export default Center;