import React from 'react'

function UtilityCard({icon, title, description}) {
  return (
    <div className='flex flex-col gap-[10px]'>
      <div className="flex items-center gap-[7px]">
        <img
          src={icon}
          alt="icon"
          className="size-[20px] md:size-[22px] w-[20px] md:w-[22px] h-[20px] md:h-[22px] object-contain aspect-square"
        />
        <h3 className="text-dull-white font-inter text-[16px] md:text-[18px] font-medium">{title}</h3>
      </div>
      <p className="text-low-opacity-text text-xs md:text-sm font-inter font-normal">{description}</p>
    </div>
  );
}

export default UtilityCard