import Logo from './images/hi.jpg';

function Header() {
    return (<>
     <img src={Logo} alt='' width='150px' />
        <div>Logo</div>
        <div>heading</div>
        <div>links</div>
    </>
    );
}
export default Header;