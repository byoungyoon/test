"use client";

import Sample from "@/app/icons/sample/sample1.svg";
import CustomOven from "@/app/timer/i/_component/CustomOven";
import CustomOvenPre from "@/app/timer/i/_component/CustomOvenPre";
import CustomPot from "@/app/timer/i/_component/CustomPot";
import CustomPotPre from "@/app/timer/i/_component/CustomPotPre";
import CustomSteamy from "@/app/timer/i/_component/CustomSteamy";
import CustomSteamyPre from "@/app/timer/i/_component/CustomSteamyPre";
import { useSelect, useTimer } from "@/state/useTranslate";

export default function CustomMakeAction() {
  const { make, fire } = useSelect();
  const { status } = useTimer();

  if (make === "pot") {
    if (status === "play")
      return (
        <CustomPot fire={fire}>
          <Sample />
        </CustomPot>
      );

    return (
      <CustomPotPre fire={fire}>
        <Sample />
      </CustomPotPre>
    );
  }

  if (make === "steamy") {
    if (status === "play")
      return (
        <CustomSteamy fire={fire}>
          <Sample />
        </CustomSteamy>
      );

    return (
      <CustomSteamyPre fire={fire}>
        <Sample />
      </CustomSteamyPre>
    );
  }

  if (status === "play")
    return (
      <CustomOven>
        <Sample />
      </CustomOven>
    );

  return (
    <CustomOvenPre>
      <Sample />
    </CustomOvenPre>
  );
}
