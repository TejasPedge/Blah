




const SearchData = (searchval,setres,setData) => {

    
  console.log(searchval)

       const  url = `https://jsonplaceholder.typicode.com/photos?q=${searchval}`

         fetch(url).then((res) => {

                console.log(res);

                 return res.json();

         }).then((res) => {

             console.log(res);

             let arr = [];

             for (let i = 0; i < 10; i++) {

                      arr.push(res[i]);

             }
             

             if (res.length==0){

                 setres(false)

             }else {

                setres(true);

                setData(arr);
             }

         }).catch((err) => {



         })


}


export default SearchData