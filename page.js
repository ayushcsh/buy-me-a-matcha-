import Image from "next/image";
import Slides from "@/components/slides";
import Footer from "@/components/footer";

export default function Home() {
  return (
    <div>
      <div className="firstslide">
        <div className="front-tittles flex flex-col justify-center items-center font-circular mt-[10%] ">
          <h1 className="font-bold text-[96px]">Fund your creative work</h1>
          <p className="text-[22px]">Accept support. Start a membership. Setup a shop. It’s easier than you think.</p>
        </div>
        <div className="start flex flex-col justify-center items-center">
          <button className="font-circular text-[20px]  bg-[#85A662] h-[60px] w-[180px] rounded-[50px] mt-[35px]">Start my page</button>
        </div>
        <p className=" font-circular flex flex-col justify-center items-center text-[22px] mt-[10px]">It’s free and takes less than a minute!</p>
      </div>
      {/* slides  */}
      

      <Slides
          label= "Support"
          tittle= "Give your audience an easy way to say thanks."
          foot= "TBuy Me a Matcha makes supporting fun and easy. In just a couple of taps, your fans can make the payment (buy you a coffee) and leave a message."
        />
    
      <Slides
          label= "Membership"
          tittle= "Start a membership for your biggest fans."
          foot= "Earn a recurring income by accepting monthly or yearly subscriptions. Share exclusive content, or just give them a way to support your work on an ongoing basis."
        />
      
        <Slides
          label= "Shop"
          tittle= "Introducing Shop,the creative way to sell."
          foot= "The things you’d like to sell probably do not belong in a Shopify store. Shop is designed from the ground up with creators in mind. Whether it’s a 1-1 Zoom call, art commissions, or an ebook, Shop is for you."
        />

        <div className="keypoints mb-[40px]">
          <h1 className=" mt-[80px] font-bold text-[64px] font-circular  w-[50vw] mx-auto text-center">Designed for creators, not for businesses.</h1>
          <div className="points w-[60vw] mx-auto font-circular text-[19px] flex justify-between ">
            <div className=" mt-[40px] w-[25vw]">
            <p className="mb-[40px]">We don't call them "customers" or transactions. They are your supporters.</p>
            <p className="text-[#85A662]">You have 100% ownership of your supporters. We never email them, and you can export the list any time you like.</p>
            </div>
            <div className=" mt-[40px] w-[25vw] ">
            <p className="mb-[40px] text-[#85A662]">You get to talk to a human for help, or if you just like some advice to hit the ground running.</p>
            <p>You get paid instantly to your bank account. No more 30-day delays.</p>
            </div>
          </div>
        </div>
        
    <Footer/>
    </div>
    

  );
}
