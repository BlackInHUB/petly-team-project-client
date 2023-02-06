import { useAuth } from "hooks/useAuth";
import { PetsItem } from "./PetsItem/PetsItem"
// import { PetsListWrapper } from './PetsList.styled'

export const PetsList = () => {
    const { pets } = useAuth()
    console.log('pets', pets)

    return(
        <>
        {pets.length > 0 &&(
            <ul>
                {pets.map(pet => (
                    <PetsItem key={pet._id}
                       name={pet.name}
                       breed={pet.breed}
                       data={pet.data}
                       photoUrl={pet.photoUrl}
                       comments={pet.comments}/>
                ))}
            </ul>
        )
        }
        </>
    )
}