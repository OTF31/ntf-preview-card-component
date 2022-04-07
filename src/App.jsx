import IconView from "./assets/icon-view.svg";
import IconEthereum from "./assets/icon-ethereum.svg";
import IconClock from "./assets/icon-clock.svg";
import ImageAvatar from "./assets/image-avatar.png";
import ImageEquilibrium from "./assets/image-equilibrium.jpg";

function App() {
  return (
    <>
      <div className="flex min-h-screen w-screen min-w-[350px] items-center justify-center font-[Outfit]">
        <div className="my-[15px] flex h-[576px] w-[320px] flex-col justify-around rounded-xl bg-[#14243D] p-[18px]">
          <div>
            <div className="absolute -mt-2 flex h-[284px] w-[284px] cursor-pointer items-center justify-center rounded-md opacity-0 transition duration-500 ease-in-out hover:bg-[#65FFF9]/[0.63] hover:opacity-100">
              <img src={IconView} alt="View" className="absolute" />
            </div>
            <img
              src={ImageEquilibrium}
              alt="Equilibrium"
              className="-mt-2 rounded-md hover:bg-[#65FFF9]"
            />
          </div>

          <span className="cursor-pointer text-[24px] font-bold text-white hover:text-[#65FFF9]">
            Equilibrium #3429
          </span>

          <span className="text-[18px] text-[#8BABD9]">
            Our Equilibrium collection promotes balance and calm.
          </span>

          <div className="flex justify-between">
            <div className="flex items-center gap-2 font-bold text-[#65FFF9]">
              0.041 ETH
              <img src={IconEthereum} alt="Ethereum" className="order-[-1]" />
            </div>
            <div className="flex items-center gap-2 text-[#8BABD9]">
              3 days left
              <img src={IconClock} alt="Clock" className="order-[-1]" />
            </div>
          </div>

          <div className="h-px w-full bg-[#2E415A]"></div>

          <div className="flex items-center gap-2">
            <img
              src={ImageAvatar}
              alt="Avatar"
              className="h-[24px] w-[24px] rounded-full border-[1px] border-white border-inherit"
            />
            <div className="text-sm text-white">
              <span className="text-[#8BABD9]">Creation of</span>
              <span className="cursor-pointer p-2 pt-4 hover:text-[#65FFF9]">
                Jules Wyvern
              </span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
