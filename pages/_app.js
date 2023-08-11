import React, { useRef, useState } from 'react';
import { nanoid } from 'nanoid'
import { ChakraProvider, Box, Center, Heading, Input, VStack, Button, HStack } from '@chakra-ui/react';
import TodoCard from './TodoCard';
import { color } from 'framer-motion';

export default function App() {
  const [todo,setTodo]=useState("");
  const [todos,setTodos]=useState([]);
  const inputref=useRef();
  const [isedit,setIsedit]=useState({status:false,id:null});

   const addTodo=(e)=>{
    e.preventDefault();
    if(isedit.status){
     setTodos((prev)=>prev.map((item)=>item.id===isedit.id?{...item, title:todo}:item));
    }
    else{
      if(todo===""){
        return;
      }
      setTodos((prev)=>[{id:nanoid(),title:todo,isComplete:false},...prev]);
    }
    setTodo("");
    setIsedit({status:false,id:null})
   }
  return (
    <ChakraProvider>
      <Center h='100vh'>
        <VStack>
            <Heading as='h1' size='xl'color='darkblue'>
              Todo Application
            </Heading>
            <form  onSubmit={(e)=>addTodo(e)}>
         <HStack> <Input placeholder='Enter todo' value={todo} onChange={(e)=>setTodo(e.target.value)} ref={inputref}/>
        <Button colorScheme='blue' onClick={addTodo}>{isedit.status? "update":"Add"}</Button></HStack>  </form>
        <Box h="60vh"p={2} w="300px"overflow="auto" css={{
        '::-webkit-scrollbar': {
          width:0
        }}}>
        {todos.map((name)=>(<TodoCard todo={name} setTodos={setTodos} isedit={isedit} setIsedit={setIsedit}setTodo={setTodo} key={name.id}/>))}

        </Box>
        </VStack>
      </Center>
    </ChakraProvider>
  );
}
