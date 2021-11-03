import { TYPES } from "../types/types";
export const initialAuth = {
  name: "",
  logged: false,
};

const authReducer = (state, action) => {
  switch (action.type) {
    case TYPES.login:
      return {
        ...action.payload,
        logged: true,
      };
    case TYPES.logout:
      return {
        logged: false,
      };

    default:
      return state;
  }
};
export default authReducer;
