import './index.css'
import { useGetUSers } from "./hooks/useGetUsers";
import UserCard from "../Atoms/UserCard";
const Users = ()=>{
    const{users, error, loading} = useGetUSers();
    console.log({users})

    return(
        <div className="user">
            {loading && <h2>Loading users...</h2>}
            {error.length >0 && <h2>{error}</h2>}
            {users.length>0 ? users.map((user) =>(
                <UserCard
                key={user.id}
                image = {user.image}
                fullName={`${user.firstName} ${user.lastName}`}
                gender = {user.gender}
                age= {user.age}
                email= {user.email}
                />
            )): !loading && <h2>No users fouund</h2>}
        </div>
    )
}

export default Users;