import { useAuth } from "hooks/useAuth";
import { PetsItem } from "./PetsItem/PetsItem";
import { PetsListWrapper } from './PetsList.styled'

export const PetsList = () => {
    const { pets } = useAuth()

    return(
        <>
        {pets.length > 0 &&(
            <PetsListWrapper>
                {pets.map(pet => (
                    <PetsItem key={pet._id}
                    pet={pet}
                    />
                ))}
            </PetsListWrapper>
        )
        }
        </>
    )
}