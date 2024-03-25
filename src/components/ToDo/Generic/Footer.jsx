import { useAuth } from '../security/AuthContext';
import './Footer.css';

export default function FooterComponent()
{
    //const authContext = useContext(AuthContext);
    //console.log(`Footer Component : ${authContext.number}`);

    const authContext = useAuth();

    return (
        <footer className="footer">
            <div className="container">
                Your Footer
            </div>
        </footer>
    )
}