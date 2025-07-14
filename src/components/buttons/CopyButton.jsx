import { button } from 'framer-motion/client'
import React from 'react'

function CopyButton() {
  return (
    <button className='flex items-center gap-[5px] h-[23px] w-max py-[5px] px-[10px] border border-stroke-15 bg-white/0 hover:bg-white/2 transition-all duration-300 ease-in-out'>
      <img src="/assets/general/copy-icon.svg" alt="copy" className='w-[14px] h-[14px] aspect-square'/>
      <span className='font-jetbrains-mono text-xs font-light uppercase leading-none text-low-opacity-text inline-block pt-[2px]'>COPY $GA</span>
    </button>
  );
}

export default CopyButton