import { useState,useRef,useEffect } from 'react'
import axios from 'axios';
import './App.css'




function App() {

  const ref = useRef("");

  const [value, setValue] = useState("");

  const [err,setErr] = useState(false)

  const [data,setData] = useState([]);

  const [loading,setLoading] = useState(false);

  const getData = () => {

      axios.get("http://localhost:3000/todos",{params : {_page : 1 , _limit : 10, _sort : "id", _order : "desc"}})
      
      .then((res) => {

        setData(res.data);

          console.log(res.data);

          setLoading(false);

      }).catch((err) => {

         console.log(err);

         setErr(true);


      }).finally(() => {

             setLoading(false);

      });
 
  }



  useEffect(() => {

      setLoading(true);

       getData();
  
  }, [])


  /// SET INPUT : 2  VALUE ///

  const inpt2 = (e) => {

     setValue(e.target.value);     

  }










///////////[ ADD TODO ]//////////
                
 const addTodo = () => {


       let obj = {title : ref.current.value,completed : false};

       const url = 'http://localhost:3000/todos';

       axios({method : "post",url : url , data : obj })
       .then((res) =>  getData() );

       console.log("i called");

       console.log(obj);
      

 }



//---------[ UPDATE ]-----------\\


 const Update = (id) => {

        const url = `http://localhost:3000/todos/${id}`;

        const obj = {title : value}
 
        axios({method : "patch",url : url, data : obj })

        .then((res) =>  getData());

        console.log(value)

 }

//---------[ Mark as Complete/Pending ]-----------\\


const Toggle = (id,completed) => {

  const url = `http://localhost:3000/todos/${id}`;

  const obj = {completed : !completed};

  axios({method : "patch", data : obj, url : url})

  .then((res) => getData() );


}

//---------[ DELETE ]-----------\\

const Delete  = ( id ) => {

  const url = `http://localhost:3000/todos/${id}`;

  axios.delete(url)

  .then((res) => getData())

}

  if(loading) {

    return <h1>Loading...............</h1>

  }

  if (err) {

    return  <h1>Something went Wrong</h1>
  }


 
  return (
    <div className="App">
           
             <h1>TODOS</h1>
      
             <input type="text" ref = {ref} /> <br /> <br />

             <button onClick = {addTodo}>Add Todo</button> <br /> <br /> <hr />

             { data.map((el) => {
 
                  return <div key = {el.id} style={{border : "1px solid white",margin : "auto",marginBottom : "40px",marginTop: "40px", padding : "50px", borderRadius : "20px" ,boxShadow : "1px 1px 5px"}}>

                    <p>{el.id}</p>

                    <p>{el.title}</p>
                     
                     <p>{el.completed ? "Completed" : "Pending"}</p>

                     <p><button onClick = {() => Toggle(el.id, el.completed)}>{el.completed ? "Mark as Pending" : "Mark as Completed"}</button></p>
                    <button onClick={() => Delete(el.id)}>delete</button>
                    &nbsp; &nbsp;
                    <input type="text" onChange = {inpt2}/>
                    &nbsp; &nbsp;
                    <button onClick = {() => Update(el.id)}>update</button>

                    </div>

             }) }
         

    </div>
  )
}

export default App
