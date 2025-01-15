import { useEffect, useState } from "react"
import UserCard from "../components/UserCard"
import { UserType } from "../components/UserCard"



const Users = () => {
  const [users, setUsers] = useState<UserType[]>()

  var temp : UserType[] = []

  const fetchUsers = async () => {
    try {
        const response = await fetch('https://randomuser.me/api/?results=9')

        if(!response.ok){ throw new Error}
        const data = await response.json()       

        for (let i = 0; i < data.results.length; i++) {
            let asd : UserType = {
                id : data.results[i].id.value,
                img : data.results[i].picture.large,
                name : data.results[i].name.first + " " + data.results[i].name.last
            }
            temp.push(asd)
        }
        console.log(data.results)
        setUsers(temp)
        console.log(users)
        
    } 
    catch (error) 
    {
        console.error(error)
    }   

  }

  useEffect(() => {
    fetchUsers()
  },[])

  return (
    <div className="user-cards-container">
        {users?.map(x => <UserCard img={x.img} name={x.name} id={x.id}></UserCard>)}
    </div>
  )
}

export default Users