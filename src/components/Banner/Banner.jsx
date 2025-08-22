import banner from "../../assets/images/Banner.jpg";

function Banner() {
    return <div className="w-full h-[30rem] relative">

        <img src={banner} alt={banner} className="h-full w-full" /> 

        <div className="absolute top-10 left-0 right-0 mx-auto w-[20rem]">
            <div className="flex flex-col gap-4 justify-center">
                <div className="font-semibold text-5xl text-white">
                    Crypto Tracker
                </div>
                <div className="font-semibold text-lg text-white text-center">
                   Get All info regarding to Crypto Currencies 
                </div>
            </div>
        </div>
    </div>
}

export default Banner; 
