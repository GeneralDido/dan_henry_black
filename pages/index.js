import React from "react";
import { useAmp } from "next/amp";
// export const config = { amp: true };

export const DanHenryBlack = () => {
  const isAmp = useAmp();
  return (
      <>
        <section className="text-white body-font bg-black">
          <div className="flex flex-wrap -mb-4 md:mb-0">
            <div className="w-full md:w-1/2 px-4 mb-4 md:mb-0">
              <div className="container px-4 mx-auto">
                <nav className="flex items-center py-6">
                  <a
                      className="block mx-auto text-3xl font-semibold leading-none"
                      href="#"
                  >
                    <img
                        className="h-32"
                        src="/Black-friday.jpg"
                        alt=""
                        width="auto"
                    />
                  </a>
                </nav>
              </div>
            </div>
            <div className="w-full md:w-1/2 px-4 mb-4 md:mb-0">
              <div className="container px-4 mx-auto">
                <nav className="flex items-center py-6">
                  <a
                      className="block mx-auto text-3xl font-semibold leading-none"
                      href="#"
                  >
                    <img className="h-32" src="/timer.png" alt="" width="auto" />
                  </a>
                </nav>
              </div>
            </div>
          </div>
          <div className="h-16 bg-red_black_friday text-2xl content-center text-center italic py-4">
            Struggling with your offer?
          </div>

          <div className="container mx-auto flex px-5 py-16 items-center justify-center flex-col ">
            <div className=" text-center">
              <div className="max-w-sm md:max-w-xl lg:max-w-3xl xl:max-w-4xl mx-auto">
                <h1 className="text-xl lg:text-3xl xl:text-5xl text-center font-semibold font-heading">
                <span>
                  {" "}
                  Offer 101 Masterclass: How to Create or Tweak an Offer Using
                  The Same Elements We've Used to Create Hundreds of Million
                  Dollar Offers!
                </span>
                </h1>
                <div className="mt-4 h-0 bg-white py-1"></div>
              </div>
            </div>

            {isAmp ? (
                <amp-vimeo
                    title="Super Fast Landing Page Video"
                    data-videoid="484580874"
                    layout="responsive"
                    width="1280"
                    height="720"
                    // -mt-48 md:-mt-24
                    className="w-5/6 mb-10 object-cover object-center rounded  clear-both overflow-hidden  mt-6 lg:mt-0"
                    controls
                    autoplay
                />
            ) : (
                <iframe
                    title="Super Fast Landing Page Video"
                    src="https://player.vimeo.com/video/484580874"
                    loading="lazy"
                    width="1280"
                    height="720"
                    frameBorder="0"
                    allow="autoplay; fullscreen"
                    className="w-5/6 mb-5 object-cover object-center rounded clear-both overflow-hidden -mt-48 md:-mt-24 lg:mt-0"
                >
                  <img
                      src="/playbutton.webp"
                      alt="WebP rules."
                      className={"m-auto"}
                  />
                </iframe>
            )}
            <div className=" text-center">
              <div className="md:max-w-xl lg:max-w-3xl xl:max-w-4xl mx-auto -mt-56 md:-mt-32 lg:-mt-16">
                <h2 className="text-xl lg:text-3xl xl:text-3xl text-center font-semibold font-heading">
                <span>
                  {" "}
                  GET A LIFETIME* MEMBERSHIP TO “OFFERS 101” FOR A ONE TIME
                  PAYMENT OF ONLY <strike>$997</strike> $97!!!
                </span>
                </h2>
              </div>
            </div>
            <div className=" text-center">
              <div className="md:max-w-xl lg:max-w-3xl xl:max-w-4xl mx-auto -mt-12 md:-mt-12 lg:mt-4">
                <button className="uppercase shadow bg-yellow-600 hover:bg-orange_black_friday focus:shadow-outline focus:outline-none text-gray-200 py-4 rounded text-xl lg:text-2xl xl:text-3xl text-center font-semibold ">
                  CLICK HERE TO ACTIVATE YOUR LIFETIME* MEMBERSHIP TO "OFFERS 101"
                </button>
              </div>
            </div>
            <div className=" text-center">
              <div className="md:max-w-xl lg:max-w-3xl xl:max-w-4xl mx-auto mt-3 lg:mt-4">
                <h2 className="text-center text-sm">
                <span>
                  {" "}
                  *WHEN WE SAY “LIFETIME”, WE MEAN UNTIL DAN GET HIT BY A BUS,
                  DOOMSDAY HAPPENS, HE DECIDES TO BECOME A MONK, OR THIS PROGRAM
                  DOESN'T EXIST (WE HAVE NO PLANS OF ENDING THIS PROGRAM & DAN
                  DOESN'T LIKE ROBES).
                </span>
                </h2>
              </div>
            </div>
          </div>
        </section>

        <section className="text-red-700 body-font bg-white">
          <div className=" text-center">
            <div className="max-w-sm md:max-w-xl lg:max-w-3xl xl:max-w-4xl mx-auto md:mt-3 lg:mt-4">
              <h2 className="text-center md:text-2xl italic font-semibold">
              <span>
                {" "}
                If you don't yet know what to sell, or you think your existing
                offer could be the issue, this may be the most important video
                you EVER watch!
              </span>
              </h2>
            </div>
          </div>

          <div className=" text-center">
            <div className="max-w-sm md:max-w-xl lg:max-w-3xl xl:max-w-4xl mx-auto md:mt-3 lg:mt-4">
              <h2 className="text-center text-xl text-4xl lg:text-6xl italic">
              <span>
                {" "}
                <p className="text-green_black_friday">Black Friday Sale!</p>
                <p className="text-green_black_friday">
                  90% OFF! Only <strike className="text-black"> $997</strike>{" "}
                  $97!
                </p>
              </span>
              </h2>
            </div>
          </div>
          <div>
            <img className="mx-auto py-12" src="/00.png" alt="" width="500" />
          </div>
          <div className="max-w-sm md:max-w-xl lg:max-w-3xl xl:max-w-4xl mx-auto md:mt-3 lg:mt-4">
            <h2 className="text-center text-xl text-4xl lg:text-6xl font-semibold">
            <span>
              {" "}
              <p className="text-black underline">WHAT YOU GET</p>
            </span>
            </h2>
          </div>
          <div className="font-light">
            <div className="max-w-sm md:max-w-xl lg:max-w-3xl xl:max-w-4xl mx-auto mt-10">
              <h4 className="text-center text-sm md:text-xl xl:text-3xl lg:text-2xl text-black text-justify">
                &raquo;
                <span className="font-semibold"> Offer workshop: </span> A
                detailed plan with everything you need to know on how to build a
                fantastic offer and get results FAST. You're going to learn how to
                say the right thing to the right people at the right time.
              </h4>
            </div>

            <div className="max-w-sm md:max-w-xl lg:max-w-3xl xl:max-w-4xl mx-auto mt-10">
              <h4 className="text-center text-sm md:text-xl xl:text-3xl lg:text-2xl text-black text-justify">
                &raquo;
                <span className="font-semibold"> Offer messaging: </span> One
                lesson from my premium offer that members spend 5-figures to get
                access! Here I'll tell you what is the right course you need to
                sell to make insane profits, the common traits of all successful
                programs, the elements of an outstanding marketing message, and
                how to refine that powerful message to smash the competition (…
                plus great tactics, pricing models, and tools you can use).
              </h4>
            </div>

            <div className="max-w-sm md:max-w-xl lg:max-w-3xl xl:max-w-4xl mx-auto mt-10">
              <h4 className="text-center text-sm md:text-2xl xl:text-3xl lg:text-2xl text-black text-justify">
                &raquo;
                <span className="font-semibold">
                {" "}
                  5 offer coaching call recordings:{" "}
              </span>{" "}
                because inertia makes me feel sick... Here you'll watch me in
                action implementing these golden keys and working with my clients
                to make them shine. Real-life business problems (that I know you
                have) are completely solved in this section. This is what you need
                to fully absorb the previous knowledge you will get and start
                implementing RIGHT AWAY!
              </h4>
            </div>

            <div className="max-w-sm md:max-w-xl lg:max-w-3xl xl:max-w-4xl mx-auto mt-10">
              <h4 className="text-center text-sm md:text-2xl lg:text-2xl xl:text-3xl text-black text-justify">
                &raquo;
                <span className="font-semibold"> Offer assessment: </span> I
                designed this to make sure you're getting right what you're going
                to learn. If you pass this assessment, that's your guarantee that
                now you understand the right information and have a perfect offer
                to sell and make big money.
              </h4>
            </div>
          </div>
          <div className="max-w-sm md:max-w-xl lg:max-w-3xl xl:max-w-4xl mx-auto mt-6 lg:mt-8">
            <h2 className="text-center text-xl md:text-3xl lg:text-5xl font-semibold">
              <span className="text-gray-800 italic">Here's the deal...</span>
            </h2>
          </div>

          <div className="text-left max-w-md md:max-w-xl lg:max-w-3xl xl:max-w-5xl mx-auto mt-6">
            <h2 className="text-md lg:text-xl xl:text-2xl text-gray-900 font-light">
            <span>
              {" "}
              <p>
                Like I mentioned before,{" "}
                <span className="font-bold">my clients pay 5 figures </span> to
                hear what you are going to hear in this masterclass.
              </p>
              <br />
              <p>
                So, this is not BS. These are serious clients... And these are
                recordings of serious coaching calls!{" "}
              </p>
              <br />
              <p className="font-bold">
                I have a couple of questions for you today:{" "}
              </p>
              <br />
              <p>How seriously are you taking your business? </p> <br />
              <p>What has been the cost of your inaction so far? </p> <br />
              <p>
                {" "}
                If you're ready to stop that horrible procrastination and start
                being the person you know you can be... Take action NOW!
              </p>
            </span>
            </h2>
          </div>

          <div className="flex flex-wrap">
            <div className="md:w-1/2 py-6 xl:mx-32 mx-auto">
              <img className="mx-auto" src="/11.png" alt="" width="500" />
            </div>
            <div className="md:w-1/2 py-6 xl:-mx-64 mx-auto">
              <img className="mx-auto" src="/22.png" alt="" width="500" />
            </div>

            <div className="md:w-1/2 py-6 xl:mx-32 mx-auto">
              <img className="mx-auto" src="/33 copy.png" alt="" width="500" />
            </div>
            <div className="md:w-1/2 py-6 xl:-mx-64 mx-auto">
              <img className="mx-auto" src="/44.png" alt="" width="500" />
            </div>
          </div>

        </section>
      </>
  );
};

export default DanHenryBlack;
