export type user = {
  firstName: string;
  lastName: string;
  email: string;
  hPhone: string;
  wPhone: string;
  birthday: string;
};

export type userInitialHair = {
  texture: string;
  condition: string;
  naturalForm: string;
  level: string;
  tone: string;
  front: string;
  back: string;
  perm: boolean;
  semi: boolean;
  highlighted: boolean;
  relaxer: boolean;
  tint: boolean;
  bleach: boolean;
  date: string;
  result: string;
};

export const userInitialValue: user = {
  firstName: "",
  lastName: "",
  email: "",
  hPhone: "",
  wPhone: "",
  birthday: "",
};

export const userInitialHairValue: userInitialHair = {
  condition: "",
  naturalForm: "",
  level: "",
  tone: "",
  front: "",
  back: "",
  perm: false,
  semi: false,
  highlighted: false,
  relaxer: false,
  tint: false,
  bleach: false,
  date: "",
  result: "",
  texture: "",
};

export type currentUser = {
  userInfo: user;
  userInitialAnalysis: userInitialHair;
};

export const currentUserValues = {
  userInfo: userInitialValue,
  userInitialAnalysis: userInitialHairValue,
};
