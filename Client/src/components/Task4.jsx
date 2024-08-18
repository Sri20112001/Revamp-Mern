export const Task4 = () => {
  return (
    <>
      <section className="2xl:container lg:w-[90%] mx-auto grid grid-cols-1 min-h-screen">
        <div className="bg-[#f6f7ff] text-center space-y-3 pb-[120px]">
          <h1 className="text-5xl font-bold">Newsletter</h1>
          <span className="flex justify-center items-center gap-1 text-gray-400">
            <p className="text-lg font-medium">Home</p>
            <p className="text-lg font-medium">></p>
            <p className="text-lg font-medium">Newsletter</p>
          </span>
        </div>
        <div className="bg-[#4a6df1]">
          <div className="pt-[120px] flex flex-col items-center">
            <button className="bg-[#4a6df1] px-4 py-3 rounded-full uppercase font-semibold text-white">
              Get Latest History Update
            </button>
            <h1 className="text-4xl font-extrabold my-3 text-white">
              Subscribe our Newsletter
            </h1>
            <p className="max-w-4xl mt-4 mb-12  text-center text-lg text-white font-medium leading-loose">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Consequuntur dignissimos, molestias consectetur earum, qui
              explicabo sed deleniti laboriosam expedita esse est obcaecati?
              Ipsum eos
            </p>
          </div>
          <div className="flex items-center pb-6 justify-center">
            <span className="max-w-lg flex items-center rounded-lg bg-white justify-center">
              <input
                type="text"
                placeholder="Enter your Email"
                className="w-[440px] px-8 h-[75px] focus:outline-none"
              />
              <button className="flex gap-2 px-4 py-3 mr-4 items-center rounded-md bg-gradient-to-tr from-[#6e5deb] to-[#3a58ee] hover:bg-[#3a58ee]">
                <span className="">Subscribe</span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="currentColor"
                  class="h-4"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M17.25 8.25 21 12m0 0-3.75 3.75M21 12H3"
                  />
                </svg>
              </button>
            </span>
          </div>
          <h3 className="text-center font-semibold text-sm text-white">
            No ads, No Trails, No Commitments
          </h3>
          <div className="flex items-center justify-center space-x-8 py-8">
            <div className="text-center border-r pr-8">
              <p className="text-5xl font-bold text-white">500+</p>
              <p className="text-lg text-white font-semibold ">
                Successfully Trained
              </p>
              <p className="text-white">Learners Counting</p>
            </div>
            <div className="text-center">
              <p className="text-5xl font-bold text-white">100+</p>
              <p className="text-lg text-white font-semibold ">
                Certification Students
              </p>
              <p className="text-white">Online Course</p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
