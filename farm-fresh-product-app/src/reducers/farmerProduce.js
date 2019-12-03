import {
 GETTING_PRODUCE_START,
 GETTING_PRODUCE_SUCCESS, 
 GETTING_PRODUCE_ERROR, 
 ADDING_PRODUCE_START, 
 ADDING_PRODUCE_SUCCESS,
 ADDING_PRODUCE_ERROR, 
  EDITING_PRODUCE_START,
  EDITING_PRODUCE_SUCCESS,
  EDITING_PRODUCE_ERROR,
 DELETING_PRODUCE_START, 
 DELETING_PRODUCE_SUCCESS, 
 DELETING_PRODUCE_ERROR,
 SET_CATEGORIES,
 SET_CATEGORIES_ERROR,
} from '../actions/farmerProduce';

const initialState = {
  isLoadingProduce:false,
  isProduceLoaded:false,
  isAddingProduce:false,
  isProduceAdded:false,
  isEditingProduce:false,
  isProduceEdited:false,
  isDeletingProduce:false,
  isProduceDeleted:false,
  produceItems:[{name:'No produce!!!', quantity:'No Produce', price:'No Produce'}],
  produceCategories: null,
  error:null
}

export default function farmerProduce(state=initialState, action) {
    switch(action.type) {
      case GETTING_PRODUCE_START:
        return {
           ...state,     
           isLoadingProduce:true
        }
      case GETTING_PRODUCE_SUCCESS:
        return {
          ...state,   
          isLoadingProduce:false,
          isProduceLoaded:true,
         produceItems:action.payload
        }
      case GETTING_PRODUCE_ERROR:
        return {
          ...state,
          isProduceLoaded:false,
          isLoadingProduce:false,
          error:action.payload
        }  

      case ADDING_PRODUCE_START:
          return {
            ...state,
            isAddingProduce:true          
          }  

      case ADDING_PRODUCE_SUCCESS:
          return {
            ...state,
            isAddingProduce:false,
            isProduceAdded:true,
            produceItems:action.payload        
        }   
      case ADDING_PRODUCE_ERROR:
      return {
        ...state,
        isAddingProduce:false,
        isProduceAdded:false,
        error:action.payload        
      }     
      
      case EDITING_PRODUCE_START:
        return {
          ...state,
          isEditingProduce:true,         
      }

      case EDITING_PRODUCE_SUCCESS:
        return {
          ...state,
          isEditingProduce:false,
          isProduceEdited:true,
         produceItems:action.payload          
      }

      case EDITING_PRODUCE_ERROR:
        return {
          ...state,
          isEditingProduce:false,
          isProduceEdited:false,
          error:action.payload      
     }

      case DELETING_PRODUCE_START:
        return {
          ...state,    
          isDeletingProduce:true
        }
      case DELETING_PRODUCE_SUCCESS:
        return {
          ...state,
          isDeletingProduce:false,
          isProduceDeleted:true,
          produceItems:action.payload
        }  
      case DELETING_PRODUCE_ERROR:
         return {
           ...state,   
           isDeletingProduce:false,
           isProduceDeleted:false,
           error:action.payload
         }  
      case SET_CATEGORIES:
        return {
          ...state,
          isLoadingProduce: false,
          error: null,
          produceCategories: action.payload
        }
      case SET_CATEGORIES_ERROR:
        return {
          ...state,
          isLoadingProduce: false,
          error: action.payload,
        }
      default:
      return state
    }
}
