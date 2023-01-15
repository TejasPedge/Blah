



const Pagination = ({total,setPage,page}) => {

    console.log(page)


    const arr = [];

    for (let i = 1; i <= (total/10) ; i++) {

        let obj = {};

      if  ( page == i) {

        obj = {border : "2px solid green",boxShadow : "1px 1px 10px"}
        
      }

              const x = <button key = {i} style = {obj} onClick={ () => setPage(i)}>{i}</button>

              arr.push(x);

    }

   
          return <div className="buttons">
            

            {arr}
                 
          
          </div>

}



export default Pagination