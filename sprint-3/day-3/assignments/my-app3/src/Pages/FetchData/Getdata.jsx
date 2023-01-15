


 const GetData = (page,limit,setloading,setdata,seterr,setres) => {

    setloading(true);

    const url = `https://jsonplaceholder.typicode.com/photos?_page=${page}&_limit=${limit}`;


     fetch(url)
    .then((res) => {

         console.log(res);

         

         return res.json();
 
    } )
    .then((res) => {

        setdata(res);

        setres(true);
        
        console.log(res)

    })
    .catch((err) => {
 
        seterr(true);

        console.log(err);
 
    }).finally(() => setloading(false))
     
    

}


export default GetData