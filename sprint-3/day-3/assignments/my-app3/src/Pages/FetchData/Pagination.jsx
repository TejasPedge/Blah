



const Paginate = ({setPage,page}) => {

   let arr = [];


   for (let i = 1; i <= 10; i++) {

      let obj = {};

      if(page==i){

             obj = {border : "2px solid red"};
        
      }

      let x = <button style = {obj} key = {i} onClick = {() => {setPage(i)}}>{i}</button>

      arr.push(x);

   }

   return arr;

}

export default Paginate