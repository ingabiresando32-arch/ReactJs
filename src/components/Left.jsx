function Left() {
  return (
    <div className="hidden lg:block bg-white rounded-lg p-3">

      <div className="rounded-lg overflow-hidden bg-white">

        {/* Profile Section */}
        <div className="relative flex justify-center items-end h-24 bg-gray-200">
          <img src="natural.jpg" alt="" className="w-full h-24 object-cover" />

          <img
            src="profile.jpeg"
            alt=""
            className="rounded-full w-20 h-20 absolute -bottom-10 border-4 border-white"
          />
        </div>

        <div className="text-center pt-12 flex flex-col items-center">
          <h3 className="text-xl font-bold">Kalisa Felix</h3>
          <p>Briefly describe who you are</p>
          <p className="text-blue-500 font-bold text-base">Add Headline</p>
        </div>

        {/* Stats */}
        <ul className="divide-y divide-gray-400 text-sm mt-3">
          <li className="flex justify-between p-2">
            <span>
              <i className="fa-solid fa-user text-blue-500 text-lg"></i> My Profile Viewer
            </span>
            <span className="font-extrabold text-blue-500">68</span>
          </li>

          <li className="flex justify-between p-2">
            <span>
              <i className="fa-solid fa-briefcase text-blue-500 text-lg"></i> Job Application
            </span>
            <span className="font-extrabold text-blue-500">13</span>
          </li>

          <li className="flex justify-between p-2">
            <span>
              <i className="fa-solid fa-comments text-blue-500 text-lg"></i> Recruiter interviewed
            </span>
            <span className="font-extrabold text-blue-500">10</span>
          </li>

          <li className="flex justify-between p-2">
            <span>
              <i className="fa-solid fa-star text-blue-500 text-lg"></i> Saved favourite offers
            </span>
            <span className="font-extrabold text-blue-500">21</span>
          </li>
        </ul>

        <h2 className="font-bold pl-2 mt-2">Company Page info</h2>

        <ul className="text-sm mt-1">
          <li className="p-2 pl-6">
            Create Company Page
          </li>
        </ul>

        {/* Ads / Banner */}
        <div className="relative mt-2">
          <img src="natural2.jpg" alt="" className="h-24 w-full object-cover" />

          <img
            src="airtel.jpg"
            alt=""
            className="absolute bottom-0 left-2 w-16 border-2 border-white"
          />
        </div>

        {/* More Stats */}
        <ul className="divide-y divide-gray-400 text-sm mt-4">
          <li className="flex justify-between p-2">
            <span>
              <i className="fa-solid fa-user text-blue-500 text-lg"></i> Page visitors today
            </span>
            <span className="font-extrabold text-blue-500">68</span>
          </li>

          <li className="flex justify-between p-2">
            <span>
              <i className="fa-solid fa-briefcase text-blue-500 text-lg"></i> Page followers today
            </span>
            <span className="font-extrabold text-blue-500">13</span>
          </li>

          <li className="flex justify-between p-2">
            <span>
              <i className="fa-solid fa-comments text-blue-500 text-lg"></i> Applicants show interests
            </span>
            <span className="font-extrabold text-blue-500">10</span>
          </li>
        </ul>

        <h2 className="font-bold pl-2 mt-2">Professional Group</h2>

        <ul className="text-sm mt-2">
          <li className="px-2">
            Create New group
          </li>
        </ul>

      </div>
    </div>
  );
}

export default Left;