import axios from 'axios';

export const videoGames = ()=>{
  return async(dispatch)=>{
    try{
      const response = await axios.get('/videogames');
      const videogame = response.data;
      dispatch({type: 'ALL_VIDEOGAMES', payload: videogame});
    }
    catch(error){
      throw Error(error);
    }
  }
}

export const nameFilter = (inputValue)=>{
  return async (dispatch)=>{
      try{
          const response = await axios.get(`/videogame?name=${inputValue}`);
          const videogame = response.data;
            dispatch({ type: 'NAME_VIDEOGAMES', payload: videogame});
      }
      catch(error){
        dispatch({ type: 'FETCH_ERROR', payload: error.message });
      }
  }
}

export const detailVideogames = (id)=>{
  return async (dispatch)=>{
      try{
          const response = await axios.get(`/videogames/${id}`);
          const videogameDetail = response.data;
          dispatch({type: 'ID_DETAIL', payload: videogameDetail});
      }
      catch(error){
          dispatch({ type: 'FETCH_ERROR', payload: error.message });
      }
  }
}

export const genderFilter = (gender)=>{
  return{ 
    type: 'GENDER_FILTER', 
    payload: gender
  }
}

export const originFilter = (origin)=>{
  return{
    type: 'ORIGIN_FILTER',
    payload: origin
  }
}

export const orderFilter = (order)=>{
  return{
    type: 'ORDER_FILTER',
    payload: order
  }
}