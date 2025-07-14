import React from 'react'
import BlurText from '../animations/BlurText';
import PrimaryButton from '../buttons/PrimaryButton';
import FingerPrintAnimation from './FingerPrintAnimation';

function JoinAlpha() {
  return (
    <section>
      <div className="max-w-[650px] mx-auto relative">
        <FingerPrintAnimation />
        <div className="flex flex-col justify-center items-center ml-auto space-y-4 max-w-[420px] mx-auto ">
          <BlurText
            text="Ready to join us and breed your Alpha?"
            className="text-lg text-primary-text font-semibold justify-center leading-[120%] max-w-[22ch]"
            delay={250}
            animateBy="words"
            direction="bottom"
            stepDuration={0.35}
            staggerType="overlap"
          />
          <p className="text-secondary-text text-md text-center max-w-[30ch]">
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