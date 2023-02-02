import { MagnifyingGlass } from 'react-loader-spinner';

export const Loader = () => {
    return <div>
        <MagnifyingGlass
        visible={true}
        height="200"
        width="200"
        ariaLabel="MagnifyingGlass-loading"
        wrapperStyle={{}}
        wrapperClass="MagnifyingGlass-wrapper"
        glassColor='#c0efff'
        color='#808080'
    />
    </div>  
};