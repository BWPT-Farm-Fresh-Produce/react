import {
  RETRIEVING_FARMS,
  RETRIEVING_FARMS_SUCCESS,
  RETRIEVING_FARMS_ERROR
} from "../actions/farmerFarm";

const initialState = {
  isLoadingFarm: false,
  isFarmLoaded: false,
  isAddingFarm: false,
  isFarmAdded: false,
  isEditingFarm: false,
  isFarmEdited: false,
  isDeletingFarm: false,
  isFarmDeleted: false,
  farms: null,
  error: null
};

export default function farmerProduce(state = initialState, action) {
  switch (action.type) {
    case RETRIEVING_FARMS:
      return {
        ...state,
        isLoadingFarm: true,
        error: null
      };
    case RETRIEVING_FARMS_SUCCESS:
      return {
        ...state,
        isLoadingFarm: false,
        error: null,
        farms: action.payload
      };
    case RETRIEVING_FARMS_ERROR:
      return {
        ...state,
        isLoadingFarm: false,
        error: action.payload
      };
    default:
      return state;
  }
}
