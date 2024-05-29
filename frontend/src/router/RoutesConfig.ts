export const metadataRoutes = {
  SIGNIN: {
    path: "/signin",
    name: "signin",
    isPublic: true,
  },
  SIGNUP: {
    path: "/signup",
    name: "signup",
    isPublic: true,
  },
  HOME: {
    path: "/",
    isPublic: true,
    name: "home",
  },
  NOT_FOUND: {
    path: "/404",
    name: "not-found",
  },
};

export const publicRoutes = [
  metadataRoutes.SIGNIN.path,
  metadataRoutes.SIGNUP.path,
];
