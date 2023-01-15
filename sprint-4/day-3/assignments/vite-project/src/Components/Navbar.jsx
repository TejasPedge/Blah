import { HStack,Image,Button } from '@chakra-ui/react'





import React from 'react'

function Navbar() {
  return (
    <>

    <HStack  p = "16px" borderBottom={"1px solid #CFCFCF"} py = {"10px"} justify = "space-between">

         <Image src='logo.svg' w = "32px"></Image>

         <HStack>

          <Button variant={"none"} _hover = {{bg : "gray.200"}}>Sign In</Button>
          <Button variant={"outline"} borderColor = "purple.600" color={"purple.600"}>Sign Up</Button>
          <Button bgGradient='linear(to-r,purple.500,blue.500 )'>Post a Job 🚀</Button>

        </HStack>
    
    </HStack>

    </>
  )
}

export default Navbar