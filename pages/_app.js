import React, { useRef, useState } from 'react';
import { nanoid } from 'nanoid'
import { ChakraProvider, Box, Center, Heading, Input, VStack, Button, HStack } from '@chakra-ui/react';
import { Card, Text, Spacer, IconButton,  } from '@chakra-ui/react';
import { CheckIcon,DeleteIcon, EditIcon } from '@chakra-ui/icons';
export default function App() {
  const [todo,setTodo]=useState(" ");
  const [todos,setTodos]=useState([]);
  const [edit, setEdit]=useState(false);
  const inputref=useRef();
  const [edited,setEdited]=useState("");
  const [editid,setEditid]=useState("");
  const [complete,setComplete]=useState(true);
  const addTodo=(e)=>{
    e.preventDefault();
    setEdit(false);
    setTodos(((prev)=>[...prev,{id:nanoid(),title:todo,isComplete:false}]));
    setTodo(" ");
    
  }

  const handeldelete=(id)=>{
    setTodos(todos.filter(todo=>todo.id !== id));
  }

  const editTodo=(id,itm)=>{
    setEdit(true);
    setTodo(itm);
    setEdited(itm);
    setEditid(id);
   inputref.current.focus();
   handeldelete(id);
  }

  const CancelTodo=()=>{
    setTodos(((prev)=>[...prev,{id:editid,title:edited}]));
    setTodo(" ");
    setEdit(false);
  }

  const handelSave=()=>{
    setTodos(((prev)=>[...prev,{id:editid,title:todo}]));
    setTodo(" ");
    setEdit(false);
  }

  const handelcomplete = (ids) => {
    setComplete(!complete)
    setTodos((prevTodos) =>
      prevTodos.map((todo) =>
        todo.id === ids ? { ...todo, isComplete:complete } : todo
      )
    );
  };

  return (
    <ChakraProvider>
      <Center h='100vh'>
        <VStack>
            <Heading as='h1' size='xl'color='darkblue'>
              Todo Application
            </Heading>
            <form  onSubmit={addTodo}>
              {empty&&<Heading>error</Heading>}
         <HStack> <Input placeholder='Enter todo' value={todo} onChange={(e)=>setTodo(e.target.value)} ref={inputref}/>
        {edit?(<HStack><Button colorScheme='blue'onClick={handelSave}>Save</Button><Button colorScheme='orange'onClick={CancelTodo}>Cancel</Button></HStack>):<Button colorScheme='blue'onClick={addTodo}>Add</Button>}</HStack>  </form>
        <Box h="60vh"p={2} w="300px"overflow="auto" css={{
        '::-webkit-scrollbar': {
          width:0
        }}}>
        {todos.map(({id,title,isComplete})=>( <Card mt='4'padding="15px"key={id} overflowWrap="break-word" wordBreak="break-word">
          {console.log(id)}
      <HStack>
        <Text color={isComplete?"red":"black"}>
          {title}
        </Text >
        <Spacer/>
        <IconButton
      isRound
      background="pink"
      icon={<EditIcon/>}
      onClick={()=>editTodo(id,title)}
      />
        <IconButton
      isRound
      background="red"
      icon={<DeleteIcon/>}
      onClick={()=>handeldelete(id)}
      />
      <IconButton
      isRound
      background="green"
      icon={<CheckIcon/>}
      onClick={()=>handelcomplete(id)}
      />
      </HStack>
     
    </Card>))}
        </Box>
        </VStack>
      </Center>
    </ChakraProvider>
  );
}
