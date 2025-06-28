import Image from "next/image";
import { IoIosArrowBack } from "react-icons/io";
import { IoIosArrowForward } from "react-icons/io";
import { SlOptionsVertical } from "react-icons/sl";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen lg:h-screen px-10 lg:px-20 py-14 w-full overflow-hidden justify-center items-center">
      <div className="absolute -top-[25%] -z-10 -left-[8%] lg:-left-[4%] h-[600px] lg:h-[110%] w-[50%] lg:w-[25%] rounded-full bg-gradient-to-b from-light-magenta to-light-violet"></div>
      <div className="flex flex-col lg:flex-row w-full h-full items-center max-w-[1000px] gap-y-16">
        <div className="flex w-full justify-center lg:justify-start lg:w-1/2 ">
          <div className="flex relative items-center justify-center w-[300px] h-[600px] rounded-2xl shadow-2xl bg-white">
            <div className="flex absolute top-0 w-[180px] h-[40px] rounded-full bg-white"></div>
            <div className="flex flex-col w-[270px] h-[570px] rounded-2xl bg-light-grayish-violet overflow-hidden">
              <div className="flex justify-between items-center pt-8 pb-3 px-2 w-full rounded-md bg-gradient-to-r from-light-violet to-light-magenta">
                <div className="flex items-center">
                  <IoIosArrowBack className="text-white text-md" />
                  <Image
                    src={"/images/avatar.jpg"}
                    alt="profile"
                    width={40}
                    height={40}
                    className="rounded-full ml-1 mr-2 border-2 border-white"
                  />
                  <div className="flex flex-col">
                    <span className="text-white text-sm font-[500]">
                      Samuel Green
                    </span>
                    <span className="text-white text-[10px]">
                      Available to Walk
                    </span>
                  </div>
                </div>
                <SlOptionsVertical className="text-white text-sm" />
              </div>

              <div className="flex flex-col w-full h-full px-2 pb-2 pt-3 gap-3">
                <div className="message-box-walker">
                  That sounds great, I'd be happy with that.
                </div>
                <div className="message-box-walker">
                  Could you send over some pictures of your dog, please?
                </div>
                <div className="flex self-end gap-2">
                  <Image
                    src={"/images/dog-image-1.jpg"}
                    alt="image"
                    width={48}
                    height={48}
                    className="rounded-xl"
                  />
                  <Image
                    src={"/images/dog-image-2.jpg"}
                    alt="image"
                    width={48}
                    height={48}
                    className="rounded-xl"
                  />
                  <Image
                    src={"/images/dog-image-3.jpg"}
                    alt="image"
                    width={48}
                    height={48}
                    className="rounded-xl"
                  />
                </div>

                <div className="message-box-me">
                  Here are some pictures. She's a happy girl!
                </div>
                <div className="message-box-me">Can you make it?</div>

                <div className="message-box-walker">
                  She looks so happy! The time we discussed works. How long you
                  shall I take her out for?
                </div>

                <div className="message-box-input">
                  <div className="flex">
                    <span></span>
                    <p>30 minute walk</p>
                  </div>
                  <h6>$29</h6>
                </div>
                <div className="message-box-input">
                  <div className="flex">
                    <span></span>
                    <p>1 hour walk</p>
                  </div>
                  <h6>$49</h6>
                </div>

                <div className="flex justify-between items-center mt-auto rounded-full p-1 bg-white">
                  <span className="text-[10px] ml-2 text-grayish-blue">
                    Type a message...
                  </span>
                  <div className="p-1 bg-black rounded-full">
                    <IoIosArrowForward className="text-white text-[18px]" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-col lg:w-1/2 justify-center lg:justify-start gap-4">
          <h1 className="font-[700] text-[40px]">Simple Booking</h1>
          <p className="text-[16px] font-normal text-dark-grayish-violet">
            Stay in touch with our dog walkers through the chat interface. This
            makes it easy to discuss arrangements and makes bookings. Once the
            walk has been completed you can rate your walker and book again all
            through the chat.
          </p>
        </div>
      </div>
    </div>
  );
}
