import React from 'react';
import { Card, Text, HStack, Spacer, IconButton, Heading } from '@chakra-ui/react';
import { CheckIcon,DeleteIcon, EditIcon } from '@chakra-ui/icons';
function TodoCard({ todo }) {
  const handelclick=()=>{
    console.log('handelclick');
  }
  const handelEdit=(todo)=>{
    setTodo(todo.title)
  }
  return (
    <Card mt='4'padding="15px">
      <HStack>
        <Text>
          {todo}
        </Text>
        <Spacer/>
        <IconButton
      isRound
      background="pink"
      onClick={(todo)=>handelEdit(todo)}
      icon={<EditIcon/>}
      />
        <IconButton
      isRound
      background="red"
      icon={<DeleteIcon/>}
      />
      <IconButton
      isRound
      background="green"
      icon={<CheckIcon/>}
      onClick={handelclick}
      />
      </HStack>
     
    </Card>
  );
}

export default TodoCard;
