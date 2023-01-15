import React from 'react'

import { HStack, VStack } from '@chakra-ui/react'

import {Stack, Box,CheckboxGroup, Heading,Checkbox ,SimpleGrid, Text, Input,Image,Button,Divider } from '@chakra-ui/react'

import { ChevronLeftIcon,ChevronRightIcon, } from '@chakra-ui/icons'


import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  useDisclosure
} from '@chakra-ui/react'











const Modals = ( isOpen, onClose) => {





   return <>

<Modal isOpen={isOpen} onClose={onClose} size = "lg">

     <ModalOverlay />
          <ModalContent>
          <ModalHeader>Filters</ModalHeader>
          <ModalCloseButton />


          <ModalBody>

        
               <Text fontWeight={"bold"}  >Category</Text>

            
                <Box mt={"10px"}  overflowX={"scroll"} className="scrollbar" mb = "20px">

                        <HStack w = "1600px" mb = "8px">

                             <Button variant={"outline"} border = "2px solid" borderColor={"blue.500"}>Data Science</Button>
                          
                             <Button variant={"outline"} border = "2px solid" borderColor={"blue.500"}>Design</Button>
                          
                             <Button variant={"outline"} border = "2px solid" borderColor={"blue.500"}>Public Relations</Button>
                          
                             <Button variant={"outline"} border = "2px solid" borderColor={"blue.500"}>Marketing</Button>
                             
                             <Button variant={"outline"} border = "2px solid" borderColor={"blue.500"}>Human Resources</Button>
                          
                             <Button variant={"outline"} border = "2px solid" borderColor={"blue.500"}>Sales & Business Development</Button>

                             <Button variant={"outline"} border = "2px solid" borderColor={"blue.500"}>Finance & Accounting</Button>
                             
                             <Button variant={"outline"} border = "2px solid" borderColor={"blue.500"}>Product Management</Button>
                          
                             <Button variant={"outline"} border = "2px solid" borderColor={"blue.500"}>Customer Support</Button>

                             <Button variant={"outline"} border = "2px solid" borderColor={"blue.500"}>Technology</Button>
                          
                             <Button variant={"outline"} border = "2px solid" borderColor={"blue.500"}>Operations</Button>
                   
                        </HStack>   
                   

                </Box>


                {/* job types */}

                <Divider mb="20px" variant={"thick"} colorScheme={"blue"}></Divider>

                <Text fontWeight={"bold"}  >Job Types</Text>

                <HStack mt={"10px"}  mb = "23px">

                          <Button variant={"outline"} border = "2px solid" borderColor={"blue.500"}>Contract</Button>
                          
                          <Button variant={"outline"} border = "2px solid" borderColor={"blue.500"}>Full-Time</Button>

                          <Button variant={"outline"} border = "2px solid" borderColor={"blue.500"}>Internship</Button>
                       
                          <Button variant={"outline"} border = "2px solid" borderColor={"blue.500"}>Part-Time</Button>
     
                </HStack>

                <Divider mb="20px" variant={"thick"} colorScheme={"blue"}></Divider>

                 <Checkbox fontWeight={"bold"}>🌎 Only remote</Checkbox>
  
                 <Divider mt="20px" variant={"thick"} colorScheme={"blue"}></Divider>

              <Text fontWeight={"bold"} mb = "10px" mt={"15px"}>Experience Levels</Text>

    
              <SimpleGrid columns={2} >
                
                  <Checkbox defaultChecked value='naruto'>Naruto</Checkbox>

                  <Checkbox defaultChecked value='sasuke'>Sasuke</Checkbox>

                  <Checkbox defaultChecked value='kakashi'>Kakashi</Checkbox>

                  <Checkbox defaultChecked value='naruto'>Naruto</Checkbox>

                  <Checkbox defaultChecked value='sasuke'>Sasuke</Checkbox>

                  <Checkbox defaultChecked value='kakashi'>Kakashi</Checkbox>

                  <Checkbox defaultChecked value='naruto'>Naruto</Checkbox>
                  
                </SimpleGrid>

          </ModalBody>

          <ModalFooter>

            <Stack w = "100%" justify={"center"} >

            <Button w={"100%"} colorScheme='blue' mr={3} onClick={onClose}>
              Apply filters
            </Button>
            <Button w = "100%" variant='ghost'>Reset All</Button>

            </Stack>
          </ModalFooter>
        </ModalContent>
      </Modal>

   </>



}







function AfterNav() {


  const { isOpen, onOpen, onClose } = useDisclosure()




  return (
    <>
    
      <VStack border={"2px solid green"} p = "40px" mt={"30px"}>

          <Heading textAlign={"center"} fontSize = "6xl" lineHeight={"1.2"}>Find The Right <br></br> <Text as = "span" bgGradient='linear(to-r,purple.500,blue.500 )' bgClip={'text'} >Four-Day</Text> Week Job</Heading>
          
            <VStack>
              
               <HStack align = "center" justify={"center"} mt="25px">

               <Input w = "420px" mt={"5px"} placeholder = "Type job title or keyword" p = "24px" borderRadius={"10px"} borderColor="blue" boxShadow="xl"></Input>

                <Image onClick={onOpen}  mt={"50px"} src = "Screenshot 2023-01-14 031014.png" w={"60px"} _hover = {{"cursor" : "pointer"}}></Image>
              
               </HStack>

               <HStack   >

                    <Button variant={"none"} _hover={"none"} bg={"purple.500"} w = "155px" border = {"2px solid"} borderColor = "purple.700" color={"white"}>🌍 Remote</Button>
                    <Button variant={"none"} _hover={"none"} bg={"purple.500"} w = "155px" border = {"2px solid"} borderColor = "purple.700" color={"white"}>  <ChevronLeftIcon boxSize={"8"} color={"white"}/> <ChevronRightIcon color={"white"}  boxSize={"8"} /></Button>
                    <Button variant={"none"} _hover={"none"} bg={"purple.500"} w = "155px" border = {"2px solid"} borderColor = "purple.700" color={"white"}> ↗️ Marketing</Button>


               </HStack>


               {Modals(isOpen, onClose)}
              
            </VStack>  



      </VStack>
    
    
    
    
    </>
  )
}

export default AfterNav