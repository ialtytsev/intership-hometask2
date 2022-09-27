import { useDispatch } from "react-redux";
import { bindActionCreators } from "redux";
import * as noteActionCreators from "../redux/actionCreators";

export const useActions = () => {
  const dispatch = useDispatch();
  return bindActionCreators(noteActionCreators, dispatch);
};
