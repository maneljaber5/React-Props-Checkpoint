import React from 'react'
import Playerlist from './Playerlist'

function Players() {
    const players = [
        {name:"Cristiano Ronaldo", team:" Al-Nassr Football Club", nationalty:"Portugal", jurseynumber:"7" ,  age:"38" , image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSJeq-BT8hq3MqGmv00jV8FOw-Ch5pDSgPD4A&usqp=CAU" },

        {name:"Lionel Messi", team:"Club Internacional de Football Miami", nationalty:"Argentine", jurseynumber:"10" ,  age:"36" , image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT7i9IgEM0dRKd6L_b_n6Nd3iXQe7ZNjHujOQtY_7UPOwf2LXZdwFQqyxgOsWno2JJ2x6U&usqp=CAU" },

        {name:"Kylian Mbappe", team:"Paris Saint-Germain Football Club", nationalty:"France", jurseynumber:"7" ,  age:"24" , image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRzlfxw91-NFKXaDTGAG45ORqKx88qEAxJqIw&usqp=CAU" },

        {name:"Youssef Msakni", team:"Al-Arabi SC", nationalty:"tunisia", jurseynumber:"7" ,  age:"33" , image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQQCCSPxuXSEcWjtNvNVUI4j3m22TrnLvItqg&usqp=CAU" },

    ]
  return (
    <div>
    <Playerlist players ={players} /> 
    </div>
  )
}

export default Players