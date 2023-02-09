import { AddNoticeWrapper, AddNoticeDesc, AddNoticeBtn, PlusIcon } from "./AddNoticeButton.styled";

export const AddNoticeButton = ({onOpenAddsPet}) => {
    return(
        <AddNoticeWrapper>
            <AddNoticeDesc>Add pet</AddNoticeDesc>
            <AddNoticeBtn type="button" onClick={onOpenAddsPet}>
                <PlusIcon />
            </AddNoticeBtn>
        </AddNoticeWrapper>
)
};
