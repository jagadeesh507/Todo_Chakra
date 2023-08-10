import React, { useState } from "react";
import { HStack, Text } from "@chakra-ui/react";
import { Card, Spacer, IconButton } from "@chakra-ui/react";
import { DeleteIcon, EditIcon } from "@chakra-ui/icons";

function TodoCard({ todo, setTodos,setEdited,setEditid,setTodo,setEdit,inputref,setIsedit,isedit}) {
  const { id, title } = todo;
 
  const handeldelete = (id) => setTodos((prev) => prev.filter((todo) => todo.id !== id));
 

  const editTodo = (id, itm) => {
    if(isedit){
    setEdit(true);
    setTodo(itm);
    setEdited(itm);
    setEditid(id);
    inputref.current.focus();
    handeldelete(id);
    setIsedit(false);
    }
  };

  return (
    <>
      <Card
        mt="4"
        padding="15px"
        key={todo.id}
        overflowWrap="break-word"
        wordBreak="break-word"
        onClick={()=>setTodos((prevTodos) =>prevTodos.map((todo) =>todo.id === id ? { ...todo, isComplete: !todo.isComplete } : todo))}
        cursor="pointer"
      >
        <HStack>
          <Text color={todo.isComplete ? "red" : "black"}>{todo.title}</Text>
          <Spacer />
          <IconButton
            isRound
            background= {isedit? "teal" : "lightgray" }
            icon={<EditIcon />}
            onClick={() => editTodo(id, title)}
          />
          <IconButton
            isRound
            background="pink"
            icon={<DeleteIcon />}
            onClick={() => handeldelete(id)}
          />
        </HStack>
      </Card>
    </>
  );
}
export default TodoCard;
