
import profile from '../../assets/images/profile.png';

const Header = () => {
    return (
        <header className='flex justify-between items-center container mx-auto border-b-2 p-4'>
            <h1 className='text-4xl font-bold' >Knowledge Cafe</h1>
            <img src={profile} ></img>
        </header>
    );
};

export default Header;