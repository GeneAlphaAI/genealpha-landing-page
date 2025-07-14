import React, { useState } from "react";

const ProductVideo = () => {
  const [isPlaying, setIsPlaying] = useState(false);

  const handlePlay = () => {
    setIsPlaying(true);
  };

  return (
    <div className="w-full px-5 1xl:px-0 py-20">
      <div className="w-full flex flex-col justify-center items-center space-y-4">
        <h1 className="text-title-md sm:text-lg text-primary-text font-semibold text-center leading-[120%]">
          Let’s put your curiosity to rest.
        </h1>
        <p className="text-secondary-text text-sm sm:text-md text-center max-w-[60ch]">
          Learn everything about the Genetic Algorithm in under 30 seconds.
        </p>

        {/* Video Section */}
        <div className="mt-10 w-full max-w-6xl aspect-video relative rounded-xl overflow-hidden shadow-lg">
          {isPlaying ? (
            <iframe
              className="w-full h-full"
              src="https://www.youtube.com/embed/YOUR_VIDEO_ID?autoplay=1&rel=0"
              title="GeneAlpha Product Video"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          ) : (
            <div className="w-full h-full  bg-gradient-to-t from-primary to-white/10 p-[1px] rounded-[15px]">
              <div
                className="w-full h-full bg-cover bg-center rounded-[15px] cursor-pointer relative"
                style={{
                  backgroundImage: `url('/assets/ecosystem/VideoThumbnail.png')`,
                }}
                onClick={handlePlay}
              >
                <div className="absolute inset-0 flex z-[10] flex-col justify-center items-center">
                  <div className="bg-white/8 border-white/7 border-1 backdrop-blur-md rounded-full items-center justify-center p-4 mb-5">
                    <img
                      src="/assets/ecosystem/PlayButton.svg"
                      alt="Play Button"
                      className="size-8 sm:size-15"
                    />
                  </div>

                  <p className="text-white text-md sm:text-lg leading-tight font-medium">
                    Watch the video
                  </p>
                  <p className="text-inactive-text text-sm sm:text-md font-regular">
                    Introduction to GeneAlpha
                  </p>
                </div>
                <div className="absolute bottom-0 left-0 right-0 w-full h-100 rounded-[15px] z-[3]  pointer-events-none bg-gradient-to-t from-primary to-transparent"></div>
                <div className="absolute left-0 h-full z-[3] rounded-[15px] sm:w-200  pointer-events-none bg-gradient-to-r from-primary to-transparent"></div>
                <div className="absolute right-0 rounded-[15px] h-full z-[3] sm:w-200  pointer-events-none bg-gradient-to-l from-primary to-transparent"></div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProductVideo;
