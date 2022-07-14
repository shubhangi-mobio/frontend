export const getData =()=>async(dispatch)=>{

    try{
        dispatch({type:"SUCCESS_GET_DATA"})
    }catch(error){
        dispatch({type:"FAIL_GET_DATA"})
    }

 }