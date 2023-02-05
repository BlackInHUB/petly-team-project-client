import { useAuth } from "hooks/useAuth";
import { PetsItem } from "./PetsItem/PetsItem"
// import { PetsListWrapper } from './PetsList.styled'

export const PetsList = () => {
    const { pets } = useAuth()
    console.log('pets', pets)

    return(
        <>
        <ul>
            {pets.length > 0 && 
                pets.map(pet => (
                    <PetsItem key={pet._id}
                       name={pet.name}
                       breed={pet.breed}
                       photoUrl={pet.photoUrl}
                       comments={pet.comments}/>
                ))}
        {/* <PetsItem /> */}
        </ul>
        </>
    )
}