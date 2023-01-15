import axios from "axios"



function ADD(data) {


    const obj = {

        url : 'http://localhost:3000/todos',

        method : 'post',

        data : data

    }


    

  return (
    
    axios(obj)
      
  )
}

export default ADD