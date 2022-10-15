<script>
  // import svelteLogo from './assets/svelte.svg'
  import Counter from './lib/Counter.svelte'
  import Icons from './lib/Icons.svelte'
  import plusIcon from './assets/plus.png'

  let newItem = "" ;
  let todoList = [] ;

  function addTodo() {
    if(newItem != ""){
      todoList = [
        ...todoList,
      {
        task: newItem,
        completed: false
      },
    ];
    newItem = "" ;
    }
  }

// function remove
function removeFromList(index){
  todoList.splice(index, 1);
  todoList = todoList;
}
</script>

<main>

    <!-- <div class="card">
      <Counter />
    </div> -->
    <!-- <div>
      <h1>Hello</h1>
    </div> -->
    <div>
      <form on:submit|preventDefault={addTodo}>
        <input bind:value={newItem} class="todos_inputs" placeholder="Input todo" type="task"/>
        <button  class="todos_plusButton">Add</button>
      </form>
      <h2 class="todos_listHeader">Todos</h2>
      {#each todoList as item, index }
        <div class="todo">
          <span class={`todo_text ${item.completed ? "todo_checked--strike" : ""}`}>{item.task}</span>
        
        <div class="icons">
          <button class="icon_button" on:click={() => (item.completed = !item.completed)}>
            <Icons name="check-mark" class="icon"/>
          </button>

          <button class="icon_button" on:click={()=> removeFromList(index)}>
            <Icons name="delete" class="icon"/> 
          </button>
        </div>
      </div>
      {/each}
    </div>
</main>

<style>
  /* .container {
    display: flex;
    flex-direction: column;
    align-items: center;
    min-height: 90vh;
    background: #222e50 url(./assets/plus.png) no-repeat;
    background-size: cover; 
    padding-top: 10vh;

  } */
  .todo{
    display: flex;
    padding: 20px;
    border-radius: 20px;
    box-shadow: 0 0 15px rgb(0,0,0 /20%);
    /* background-color: hsla(0, 0%, 100, 0.2); */
    background-color: hsla(0, 0%, 100%, 0.2);
    -webkit-backdrop-filter: blur(25px);
    backdrop-filter: blur(25px);
     width: inherit;
     margin-top: 15px;
     font-size: 1.2rem;
     justify-content: space-between;
     align-items: center;

  }
.todos_listHeader {
  text-align: center;
  padding: 20px;
  border-radius: 20px;
  box-sizing:  0 0 12px rgb(0 0 0 / 20%);
  background-color: hsla(0, 0%, 100%, 0.2);
  -webkit-backdrop-filter: blur(25px);
  backdrop-filter: blur(25px);
  margin: 15px 0px 20px 0px;
  font-size: 1.2rem;

}
.todos_inputs{
  background-color: inherit;
  border: none;
  box-shadow: none;
  text-decoration: none;
  font-size: 1.2rem;
  border-bottom: 1px solid black;
  margin-top: 15px;
  outline: none;
  width: 500px;
  color: black;


}
.todos_button{
  background-color: inherit;
  border: none;
  box-shadow: none;
  font-size: 1.2rem;
  cursor: pointer;

}
.todos_plusButton {
  background-color: inherit;
  border: none;
  box-shadow: none;
  font-size: 1.2rem;
  cursor: pointer;
  /* min-height: 4vh; */
  /* background: white url(./assets/plus.png) no-repeat; */
  background-size: cover; 
  padding-top: 1vh;
  color: black;
 
}
.icon_button{
  background-color: transparent;
  border:none;
  box-shadow: none;
  font-size: 1.2rem;
  cursor: pointer;
  color: rgb(0, 0, 0,0.54);
}
.icon {
  background: rgb(0, 0, 0,0.54);
} 
.todo_checked--strike{
  text-decoration: line-through;
}


</style>
