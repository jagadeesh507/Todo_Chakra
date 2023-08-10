import React, { useState } from "react";
import { HStack, Text } from "@chakra-ui/react";
import { Card, Spacer, IconButton } from "@chakra-ui/react";
import { DeleteIcon, EditIcon } from "@chakra-ui/icons";

function TodoCard({ todo, setTodos,setEdited,setEditid,setTodo,setEdit,inputref}) {
  const { id, title } = todo;
  const handelcomplete = (ids) => {
    setTodos((prevTodos) =>
      prevTodos.map((todo) =>
        todo.id === ids ? { ...todo, isComplete: !todo.isComplete } : todo
      )
    );
  };

  const handeldelete = (id) => {
    setTodos((prev) => prev.filter((todo) => todo.id !== id));
  };

  const editTodo = (id, itm) => {
    setEdit(true);
    setTodo(itm);
    setEdited(itm);
    setEditid(id);
    inputref.current.focus();
    handeldelete(id);
  };

  return (
    <>
      <Card
        mt="4"
        padding="15px"
        key={todo.id}
        overflowWrap="break-word"
        wordBreak="break-word"
        onClick={()=>handelcomplete(id)}
        cursor="pointer"        
      >
        { console.log("first") }
        <HStack>
          <Text color={todo.isComplete ? "red" : "black"}>{todo.title}</Text>
          <Spacer />
          <IconButton
            isRound
            background="teal"
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
