# main.py
import uvicorn
from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel
from typing import List

class TodoItemCreate(BaseModel):
    title: str
    completed: bool = False


class TodoItem(BaseModel):
    id: int
    title: str
    completed: bool = False

class TodoList(BaseModel):
    todos: List[TodoItem]

app = FastAPI()

origins = [
    "http://localhost:5173"
]

app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

memory_db = {"todos": []}
next_id = 1  # Unikalne ID dla każdego zadania

@app.get("/todos", response_model=TodoList)
def get_todos():
    return TodoList(todos=memory_db["todos"])

@app.post("/todos", response_model=TodoItem)
def add_todo_item(todo_item: TodoItemCreate):
    global next_id
    new_todo_item = TodoItem(
        id=next_id,
        title=todo_item.title,
        completed=todo_item.completed
    )
    next_id += 1
    memory_db["todos"].append(new_todo_item)
    return new_todo_item

@app.put("/todos/{item_id}", response_model=TodoItem)
def update_todo_item(item_id: int, todo_item: TodoItem):
    for index, item in enumerate(memory_db["todos"]):
        if item.id == item_id:
            memory_db["todos"][index] = todo_item
            return todo_item
    return {"error": "Item not found"}

@app.delete("/todos/{item_id}")
def delete_todo_item(item_id: int):
    for index, item in enumerate(memory_db["todos"]):
        if item.id == item_id:
            del memory_db["todos"][index]
            return {"message": "Item deleted"}
    return {"error": "Item not found"}



if __name__ == "__main__":
    uvicorn.run(app, host="0.0.0.0", port=8000)
