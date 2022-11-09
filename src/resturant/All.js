import React from 'react'

const All = ({menuData}) => {
    console.log(menuData);
  return (
    <>
      <div id="div1">
          {menuData.map((elem) => {
              return (
                  
                  <>
                      
                  
             <div id='div2'>
                  <div id="div3">
                      <p> Product :{elem.id}</p>
                      <p id="name"><b>{ elem.name}</b></p>
                      <img id="img" src={elem.image}></img>
                      <p id='price'>Rs:{ elem.price}</p>
                
                
                      <p><b>best-review:</b>{elem.description} </p>
                      
                    </div>
                    </div>
                  
          
            
                         
                         
                      

                      
                      
                  </>
              )
              
          })}
          </div>
          
    </>
  )
}

export default All