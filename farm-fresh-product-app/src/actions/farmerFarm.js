import axios from "axios";

export const RETRIEVING_FARMS = "RETRIEVING_FARMS";
export const RETRIEVING_FARMS_SUCCESS = "RETRIEVING_FARMS_SUCCESS";
export const RETRIEVING_FARMS_ERROR = "RETRIEVING_FARMS_ERROR";

export const getFarms = () => dispatch => {
  const farmerInfo = JSON.parse(localStorage.getItem("FARMER_LOGIN_KEY"));
  console.log("INFO: ", farmerInfo);
  dispatch({ type: RETRIEVING_FARMS });
  axios
    .get(
      `https://aqueous-ocean-41606.herokuapp.com/api/farmers/${farmerInfo.id}/farms`,
      {
        headers: {
          authorization: farmerInfo.token
        }
      }
    )
    .then(res =>
      dispatch({ type: RETRIEVING_FARMS_SUCCESS, payload: res.data.farms })
    )
    .catch(err =>
      dispatch({ type: RETRIEVING_FARMS_ERROR, payload: err.message })
    );
};
