<<<<<<< HEAD
=======
import Button from 'react-bootstrap/Button';
import {Link} from 'react-router-dom';
>>>>>>> f38ac1eab9ad30c9958c3787f8a6785a863d77a2

const MenuComponent = props => {
return (
<div class="container-fluid ">
        <div class="row justify-content-center">
            <h2 class="sign">Hello there!
                Ready to learn and have fun?</h2>
        </div>
        <div class="row justify-content-center">
            <button type="button" className="btn-primary btn-lg btn">Articles</button>
        </div>
        <div class="row justify-content-center">
            <button type="button" className="btn-primary btn-lg btn">Play Game</button>
        </div>
        <div class="row justify-content-center">
            <button type="button" className="btn-primary btn-lg btn">Conversations</button>
        </div>
        <div class="row justify-content-center">
            <button type="button" className="btn-primary btn-lg btn">Logout</button>
        </div>
    </div>
)
}
export default MenuComponent;