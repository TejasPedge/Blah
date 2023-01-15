import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import { ChakraProvider } from '@chakra-ui/react'
import { extendTheme } from '@chakra-ui/react'
import MiddleStyles from './Components/MiddleStyles'
import { defineStyleConfig } from '@chakra-ui/react'



const thick = {
   // change the width of the border
  borderStyle: "solid", // change the style of the border
  borderRadius: 10, 
  borderColor : "gray.400"
  // set border radius to 10
}


const Dividertheme = {

     variants :{ thick },

}



const theme = extendTheme({

  components : { Divider : Dividertheme, Card : MiddleStyles}

})


ReactDOM.createRoot(document.getElementById('root')).render(

 <ChakraProvider theme = {{...theme}}>
    
    <App />

 </ChakraProvider>
  
)
