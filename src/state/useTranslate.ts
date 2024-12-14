import { create } from "zustand";

type FeedbackState = {
  type: "g" | "m" | "b";
};

type FeedbackAction = {
  setType: (type: FeedbackState["type"]) => void;
};

export const useFeedback = create<FeedbackState & FeedbackAction>((set) => ({
  type: "g",

  setType: (type) => set(() => ({ type: type })),
}));

type SelectState = {
  name: string;
  icon: string;

  time: number;
  tip: {
    w: string;
    p: string;
    e: string;
  };
  make: "oven" | "pot" | "steamy";
  fire: "h" | "m" | "l";
};

type SelectAction = {
  setSelect: (
    name: SelectState["name"],
    icon: SelectState["icon"],
    time: SelectState["time"],
    tip: SelectState["tip"],
    make: SelectState["make"],
    fire: SelectState["fire"],
  ) => void;
};

export const useSelect = create<SelectState & SelectAction>((set) => ({
  name: "브로콜리",
  icon: "",
  time: 10,
  tip: {
    w: "브로콜리 송이를 한입 크기로 분리합니다",
    p: "‘9 또는 강불’에서 물이 끓으면 아래의 화력 가이드에 따라 불을 조절한 뒤, 시작 버튼을 눌러 주세요.",
    e: "데친 후 바로 찬물에 헹궈주면 남은 열로 익는 현상을 방지하고, 식감과 색을 유지할 수 있습니다.",
  },
  make: "steamy",
  fire: "h",

  setSelect: (name, icon, time, tip, make, fire) =>
    set(() => ({ name: name, icon: icon, time: time, tip: tip, make: make, fire: fire })),
}));

type TimerState = {
  status: "pause" | "play";
  time: number;
};

type TimerAction = {
  setStatus: (status: TimerState["status"]) => void;
  setTime: (time: TimerState["time"]) => void;
};

export const useTimer = create<TimerState & TimerAction>((set) => ({
  status: "pause",
  time: 0,

  setStatus: (status) => set(() => ({ status: status })),
  setTime: (time) => set(() => ({ time: time })),
}));
