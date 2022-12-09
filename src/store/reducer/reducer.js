  
export const fname=(state ="mike",action)=>{
   try {
    switch(action.type){
        case "FNAME":
            state=action.payload
            return action.payload
         
            default:
             return state    
    }
   } catch (error) {
    
   } 
};

export const lname=(state = "shibabaw",action)=>{
    try {
        switch(action.type){
            case "LNAME":
                state=action.payload
                return action.payload
            default:
                return state
        }
    }
     
    catch (error) {
        
    }}
   
export const profession=(state = "student",action)=>{
    
    try {
        switch(action.type){
            case "PROF":
                state=action.payload
                return action.payload
            default:
                return state
        } 
    } catch (error) {
        
    } 
};
export const gender=(state = "Male",action)=>{
    try {
        switch(action.type){
            case "GENDER":
                state=action.payload
                return action.payload
            default:
                return state
        }
    } catch (error) {
        
    }
   
};
export const age=(state = "20",action)=>{
    try {
        switch(action.type){
            case "AGE":
                state=action.payload
                return action.payload
            default:
                return state
        } 
    } catch (error) {
        
    }
    
}
;
//name:"John"

//to display the value ===> useSelector
//t make an action    =====> useDispatch*/