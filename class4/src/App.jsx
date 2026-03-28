const App = () => {

  function btnClicked(a){
    console.log('bhai clicked ho gya hai!!!',a);
  }

  return (
    <div className='p-10'>
      <button 
      onClick={()=> {
        btnClicked(21)
      }}
      className='active:scale-95 h-15 w-50 text-xl rounded-xl bg-green-500 p-2'>Click Me</button>
    </div>
  )
}

export default App