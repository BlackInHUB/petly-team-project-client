import { useSelector } from "react-redux";
import * as noticesSelectors from '../redux/notices/noticesSelectors';

export default function useNotices() {
    const notices = useSelector(noticesSelectors.getAll);

    return {notices};
};