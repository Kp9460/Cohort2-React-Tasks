const Navbar = (props) => {

  console.log(props);

  return (
  
    <div style={{backgroundColor:props.color}} className="text-white mb-2 flex items-center justify-between px-10 py-5">
        <h2>{props.title}</h2>
        <div className="flex gap-6">
            {props.links.map(function(elem,idx){
              return <h4 key={idx}>{elem}</h4>
            })}
        </div>
    </div>
  )
} 

export default Navbar