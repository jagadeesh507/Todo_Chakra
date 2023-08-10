import React, { useRef, useState } from 'react';
import { nanoid } from 'nanoid'
import { ChakraProvider, Box, Center, Heading, Input, VStack, Button, HStack } from '@chakra-ui/react';
import TodoCard from './TodoCard';

export default function App() {
  const [todo,setTodo]=useState(" ");
  const [todos,setTodos]=useState([]);
  const [edit, setEdit]=useState(false);
  const inputref=useRef();
  const [edited,setEdited]=useState("");
  const [editid,setEditid]=useState("");
  const [isedit,setIsedit]=useState(true);

  const addTodo=(e)=>{
    e.preventDefault();
    setEdit(false);
    setTodos(((prev)=>[...prev,{id:nanoid(),title:todo,isComplete:false}]));
    setTodo(" ");
  }

  const CancelTodo=()=>{
    setTodos(((prev)=>[...prev,{id:editid,title:edited}]));
    setTodo(" ");
    setEdit(false);
    setIsedit(true);
  }

  const handelSave=()=>{
    setTodos(((prev)=>[...prev,{id:editid,title:todo}]));
    setTodo(" ");
    setEdit(false);
    setIsedit(true);
  }


  return (
    <ChakraProvider>
      <Center h='100vh'>
        <VStack>
            <Heading as='h1' size='xl'color='darkblue'>
              Todo Application
            </Heading>
            <form  onSubmit={addTodo}>
         <HStack> <Input placeholder='Enter todo' value={todo} onChange={(e)=>setTodo(e.target.value)} ref={inputref}/>
        {edit?(<HStack><Button colorScheme='blue'onClick={handelSave}>Save</Button><Button colorScheme='orange'onClick={CancelTodo}>Cancel</Button></HStack>):<Button colorScheme='blue'onClick={addTodo}>Add</Button>}</HStack>  </form>
        <Box h="60vh"p={2} w="300px"overflow="auto" css={{
        '::-webkit-scrollbar': {
          width:0
        }}}>
          {console.log(todos)}
        {todos.map((name)=>(<TodoCard todo={name} isedit={isedit}setIsedit={setIsedit}setTodos={setTodos}setEdited={setEdited} setEditid={setEditid} setTodo={setTodo}setEdit={setEdit}inputref={inputref} key={name.id}/>))}
        </Box>
        </VStack>
      </Center>
    </ChakraProvider>
  );
}
