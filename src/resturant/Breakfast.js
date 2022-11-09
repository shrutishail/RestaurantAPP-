import React from 'react'

const Breakfast = ({ menuData }) => {
   var filterdata= menuData.filter((elem) => {
        return (
            elem.category==="breakfast"
        )
   })
    console.log(filterdata)

  return (
      <>
          {filterdata.map((elem) => {
              return (
                  <>
                  <div id="div1">
              <div id="div2">
                  <div id="div3">
                    <span id="spn">{elem.id }</span><br></br>
                <span id='spnauthor'>{elem.category }</span><br></br>
                 <h2 id="title">{ elem.name}</h2><br></br>
                      <span>{elem.description} </span><br></br>
                      <img  id="img" src={elem.image}></img>
                </div>
                  
              </div>
            
                          </div>
                  </>
              )
          })}
    </>
  )
}

export default Breakfast