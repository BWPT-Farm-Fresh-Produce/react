import {
 GETTING_FARM_START,
 GETTING_FARM_SUCCESS,
 GETTING_FARM_ERROR,
 ADDING_FARM_START,
 ADDING_FARM_SUCCESS,
 ADDING_FARM_ERROR,
 EDITING_FARM_START,
 EDITING_FARM_SUCCESS,
 EDITING_FARM_ERROR,
 DELETING_FARM_START,
 DELETING_FARM_SUCCESS,
 DELETING_FARM_ERROR,
} from '../actions/farmerFarm';

const initialState = {
  isLoadingFarm:false,
  isFarmLoaded:false,
  isAddingFarm:false,
  isFarmAdded:false,
  isEditingFarm:false,
  isFarmEdited:false,
  isDeletingFarm:false,
  isFarmDeleted:false,
  farms:[],
  error:null
}

export default function farmerProduce(state=initialState, action) {
    switch(action.type) {
      case GETTING_FARM_START:
        return {
           ...state,     
           isLoadingFarm:true
        }
      case GETTING_FARM_SUCCESS:
        return {
          ...state,   
          isLoadingFarm:false,
          isFarmLoaded:true,
         farms:action.payload
        }
      case GETTING_FARM_ERROR:
        return {
          ...state,
          isFarmLoaded:false,
          isLoadingFarm:false,
          error:action.payload
        }  

      case ADDING_FARM_START:
          return {
            ...state,
            isAddingFarm:true          
          }  

      case ADDING_FARM_SUCCESS:
          return {
            ...state,
            isAddingFarm:false,
            isFarmAdded:true,
            farms:action.payload        
        }   
      case ADDING_FARM_ERROR:
      return {
        ...state,
        isAddingFarm:false,
        isFarmAdded:false,
        error:action.payload        
      }     
      
      case EDITING_FARM_START:
        return {
          ...state,
          isEditingFarm:true,         
      }

      case EDITING_FARM_SUCCESS:
        return {
          ...state,
          isEditingFarm:false,
          isFarmEdited:true,
         farms:action.payload          
      }

      case EDITING_FARM_ERROR:
        return {
          ...state,
          isEditingFarm:false,
          isFarmEdited:false,
          error:action.payload      
     }

      case DELETING_FARM_START:
        return {
          ...state,    
          isDeletingFarm:true
        }
      case DELETING_FARM_SUCCESS:
        return {
          ...state,
          isDeletingFarm:false,
          isFarmDeleted:true,
          farms:action.payload
        }  
      case DELETING_FARM_ERROR:
         return {
           ...state,   
           isDeletingFarm:false,
           isFarmDeleted:false,
           error:action.payload
         }  
      default:
      return state
    }
}
