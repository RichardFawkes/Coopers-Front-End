import React,{useState,useEffect} from "react"
import './style.css'


export default function App() {
  
  const [list,setList] = useState([
    'beras',
    'minyak',
    'gula',
    'garam',
  ])
  const [item,setItem] = useState()
  const [cache,setCache] = useState()
  const [updateIndex,setUpdateIndex] = useState()
  
  useEffect(()=>{
    if (typeof(updateIndex)==='number') {
      setCache(list[updateIndex])
    } else {
      setCache(null)
    }
  }, [updateIndex])
  
  function handleSubmit(event) {
    event.preventDefault()
    setList([...list,item])
    setItem('')
  
    // localStorage.setItem('list2', newItem);

  }
  
  function removeItem(i) {
    setList([...list.slice(0,i),...list.slice(i+1)])
  }
  function eraseall(){
    // filter out the item being deleted
    setList([]);
  };
  
  return (
    
    <div>

      <div className="container">
      <div className="row d-flex justify-content-center ">
      
        <div className="col-xs-12 col-md-6 col-lg-4">
         <div className="card card-1">
           
           <div className="orange"></div>
           <div className="meio">
             
           <h1 className="text-center title-card">To-do</h1>
           <p className="text-center subtitle-card">Take a breath.<br/>Start doing.</p>
           

  </div>
    
      <form onSubmit={handleSubmit}>
        <div className="container form-group">
          <input 
            className="form-control add" 
            value={item} 
            onChange={e=>setItem(e.target.value)
          } 
          placeholder="Add new here..."
          />
        </div>
      </form>
      
        {list.map((e,i)=>{
          
          function handleChange(event) {
            const {value} = event.target
            setCache(value)
          }
          
          function handleSubmit() {
            setList([...list.slice(0,i), cache, ...list.slice(i+1)])
            setUpdateIndex(null)

          }
          

          
          function handleCancel() {
            setUpdateIndex(null)
          }
          
          function renderValue() {
            if (updateIndex===i) {
              return (
                
                <form onSubmit={handleSubmit}>
                  <div class="input-group mb-2">
                    <input className="form-control" value={cache} onChange={handleChange} />
                    <div className="input-group-append">
                      <button className="btn btn-outline-success" type="submit">ok</button>
                      <button className="btn btn-outline-secondary" type="button" onClick={handleCancel}>cancel</button>
                    </div>
                    
                  </div>
                  
                </form>
                
              )
            }
            return e
          }
          
          return (
            <div key={i} className="form-check">
                <div class="form-check">
        <input class="form-check-input checkbox-orange" type="checkbox" value="" id={i} />
        <label for={i} class="form-check-label" for="flexCheckDefault">
        {renderValue()}
         </label>     
                <a className="delete" onClick={()=>setUpdateIndex(i)}>edit</a>
                <a className="delete" onClick={()=>removeItem(i)}>delete</a>
      </div>

          
            </div>
          )
        })}
       
      <div className="text-center">
         <button className="btn-card" onClick={() => eraseall()}>erase all</button>
      
         </div>
         {list.length===0&&<p className="text-center text-muted">List is empty :(</p>}

         </div>
         </div>

        <div className="col-xs-12 col-md-6 col-lg-4">
         <div className="card card-1">
           <div className="green"></div>
           <div className="meio">
           <h1 className="text-center title-card">Done</h1>
           <p className="text-center subtitle-card-1">Congratulions!</p>
           <p className="text-center subtitle-card-2">You have done 5 tasks</p>
           <div class="form-check">
        <input class="form-check-input checkbox-green" type="checkbox" value="" id="flexCheckDefault" checked/>
        <label class="form-check-label" for="flexCheckDefault">
        Get FTP credentials
        </label>
      </div>
      <div class="form-check">
        <input class="form-check-input checkbox-green" type="checkbox" value="" id="flexCheckChecked"  checked/>
        <label class="form-check-label " for="flexCheckChecked">
        Home Page Design 
        </label>
      </div>
      <div class="form-check">
        <input class="form-check-input checkbox-green" type="checkbox" value="" id="flexCheckChecked"  checked/>
        <label class="form-check-label "git  for="flexCheckChecked">
        E-mail John about the deadline
        </label>
      </div>
      <div class="form-check">
        <input class="form-check-input checkbox-green" type="checkbox" value="" id="flexCheckChecked"  checked/>
        <label class="form-check-label " for="flexCheckChecked">
        Create a Google Drive folder
        </label>
      </div>
      <div class="form-check">
        <input class="form-check-input checkbox-green" type="checkbox" value="" id="flexCheckChecked"  checked/>
        <label class="form-check-label " for="flexCheckChecked">
        Send a gift to the client 
        </label>
      </div>
         </div>
      
         <div className="text-center">
         <button className="btn-card">erase all</button>
      
         </div>
      
      
        </div>
        </div>
    </div>
  
    </div>
    </div>

  )
}
