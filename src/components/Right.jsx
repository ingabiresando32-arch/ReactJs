function Right() {
  return (
    <div className="rounded-md p-3">

      {/* Top Grid */}
      <div className="grid grid-cols-2 gap-2">

        {/* Left Card */}
        <div className="bg-white rounded-md pt-3 flex flex-col items-center">
          <img src="prof22.jpeg" alt="" className="w-24" />
          <span className="text-red-500 text-xs pt-2">
            We appreciate your Generosity!
          </span>
        </div>

        {/* Right Side */}
        <div className="flex flex-col gap-2">

          {/* Favourite Jobs */}
          <div className="bg-white rounded-lg overflow-hidden text-xs text-center">
            <div className="bg-blue-500 p-3 flex justify-center">
              <span className="text-white font-bold text-base">
                <i className="fa-solid fa-star text-white"></i> Favourite Jobs
              </span>
            </div>

            <span className="text-xs p-2 block">
              Click on interested Job Favourite icon to save it for quick access!
            </span>
          </div>

          {/* Image */}
          <div>
            <img src="internt.jpeg" alt="" className="w-full h-12 object-cover" />
          </div>

        </div>
      </div>

      {/* Job Card */}
      <div className="bg-white rounded-md p-2 my-3">

        <div className="flex gap-3 items-center">
          <img src="airtel.jpg" alt="" className="w-14 h-12 object-cover" />

          <div className="flex flex-col gap-1">
            <span className="font-extrabold text-md">Airtel Rwanda</span>
            <span className="font-bold text-xs">
              Network & System Administrator [Full-Time]
            </span>
            <span className="text-xs">Telecommunication</span>
          </div>

          <i className="fa-solid fa-close ml-auto"></i>
        </div>

        {/* Actions + Countdown */}
        <div className="flex justify-end mt-4 gap-4">

          <span className="bg-red-200 p-2 rounded-md">
            <i className="fa-regular fa-star text-xl"></i>
          </span>

          <div className="flex gap-3 text-center">

            <div>
              <p className="font-bold text-red-500">04</p>
              <p className="text-xs">Days</p>
            </div>

            <div>
              <p className="font-bold text-red-500">08</p>
              <p className="text-xs">Hours</p>
            </div>

            <div>
              <p className="font-bold text-red-500">44</p>
              <p className="text-xs">Minutes</p>
            </div>

          </div>
        </div>
      </div>

      {/* Job Description */}
      <div className="bg-white rounded-md p-3 my-3">

        <span className="font-semibold text-md">Job Description</span>

        <p className="text-xs mt-1">
          This job will be based in Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        </p>

        <dl>

          <dt className="font-medium text-sm mt-2">Number of Positions</dt>
          <dd className="text-xs ml-6 my-1">• Lorem ipsum dolor sit amet</dd>

          <dt className="font-medium text-sm mt-2">Direct Supervisor</dt>
          <dd className="text-xs ml-6 my-1">• Lorem ipsum dolor sit amet</dd>

          <dt className="font-medium text-sm mt-2">Duties</dt>
          <dd className="text-xs ml-6 my-1">• Lorem ipsum dolor sit amet</dd>
          <dd className="text-xs ml-6 my-1">• Lorem ipsum dolor sit amet</dd>

          <dt className="font-medium text-sm mt-2">Qualifications</dt>
          <dd className="text-xs ml-6 my-1">• Lorem ipsum dolor sit amet</dd>

          <dt className="font-medium text-sm mt-2">Experience</dt>
          <dd className="text-xs ml-6 my-1">• Lorem ipsum dolor sit amet</dd>

          <dt className="font-medium text-sm mt-2">Certificate</dt>
          <dd className="text-xs ml-6 my-1">• Lorem ipsum dolor sit amet</dd>

        </dl>
      </div>

    </div>
  );
}

export default Right;