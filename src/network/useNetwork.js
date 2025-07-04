import { useState } from "react";
import { useDispatch } from "react-redux";
import axios from "axios";
import { List } from "./data";
//actions
import {
  updateData,
  updateError,
  updateloader,
} from "../store/actions/movie-list";
function useNetwork() {
  const dispatch = useDispatch();
  const [data, setData] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  function fetch() {
    dispatch(updateloader(true));
    setTimeout(() => {
      axios
        .get("/data.json")
        .then((response) => {
          dispatch(updateData([...List]));
        })
        .catch((e) => {
          updateError("Error occurred while fetching data");
        })
        .finally(() => {
          dispatch(updateloader(false));
        });
    }, 1000);
  }

  return { fetch, data, isLoading };
}

export default useNetwork;
