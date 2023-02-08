import { useSelector } from "react-redux";
import * as noticesSelectors from '../redux/notices/noticesSelectors';

export default function useNotices() {
    const notices = useSelector(noticesSelectors.getAll);

    const favorites = useSelector(noticesSelectors.getFaforites);

    const own = useSelector(noticesSelectors.getOwn);

    return {notices, favorites, own};
};