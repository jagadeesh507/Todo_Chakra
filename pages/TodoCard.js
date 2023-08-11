import { HStack, Text } from "@chakra-ui/react";
import { Card, Spacer, IconButton } from "@chakra-ui/react";
import { DeleteIcon, EditIcon } from "@chakra-ui/icons";

function TodoCard({todo,setTodo, setTodos,setIsedit,isedit}) {
  const { id, title } = todo;
  const handeldelete = (e,id) =>{
    if(isedit.status){
      e.stopPropagation();
    }
  setTodos((prev) => prev.filter((todo) => todo.id !== id));
  }
  const editTodo=(e)=>{
    e.stopPropagation();
    setTodo(title)
    setIsedit({status:true,id:id})
  }
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
            background="teal"
            icon={<EditIcon />}
            onClick={(e) => editTodo(e)}
          />
          <IconButton
            isRound
            background="pink"
            icon={<DeleteIcon />}
            isDisabled={isedit.status}
            onClick={(e) => handeldelete(e,id)}
          />
        </HStack>
      </Card>
    </>
  );
}
export default TodoCard;
