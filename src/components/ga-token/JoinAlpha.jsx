import React from 'react'
import BlurText from '../animations/BlurText';
import PrimaryButton from '../buttons/PrimaryButton';
import FingerPrintAnimation from './FingerPrintAnimation';

function JoinAlpha() {
  return (
    <section>
      <div className="max-w-[650px] mpb-20 mt-72 lg:pb-28 mx-auto h-full relative bg-opacity-[20%]">
        <FingerPrintAnimation />
        <div className="flex flex-col justify-center items-center space-y-4 max-w-[420px] mx-auto  absolute top-1/2 -translate-y-1/2 left-0 right-0  px-3">
          <BlurText
            text="Ready to join us and breed your Alpha?"
            className="text-3xl md:text-lg text-primary-text font-semibold justify-center leading-[120%] max-w-[22ch]"
            delay={250}
            animateBy="words"
            direction="bottom"
            stepDuration={0.35}
            staggerType="overlap"
          />
          <p className="text-secondary-text text-base md:text-md text-center max-w-[25ch] font-inter font-medium">
            The $GA token is listed on the Uniswap, feel free to join us
            whenever you're ready.
          </p>
          <PrimaryButton defaultPadding="px-10 py-2">
            Buy GeneAlpha
          </PrimaryButton>
        </div>
      </div>
    </section>
  );
}

export default JoinAlpha