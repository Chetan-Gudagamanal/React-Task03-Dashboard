import {Link} from "react-router-dom"
import { useContext } from "react"
import undraw_profile_1 from "../img/undraw_profile_1.svg"
import undraw_profile_2 from "../img/undraw_profile_2.svg"
import undraw_profile_3 from "../img/undraw_profile_3.svg"
import Avatar from '@material-ui/core/Avatar';
import { makeStyles } from '@material-ui/core/styles';
import {userContext} from '../App'


export default function TopBar(){
    const {currentUser}=useContext(userContext)
    const useStyles = makeStyles((theme) => ({
        large: {
          width: theme.spacing(6),
          height: theme.spacing(6),
        },
    }));
    const classes = useStyles();
    const default_profile_image="data:image/png;base64,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"
    return(
        <>
        {/* <!-- Topbar --> */}
        <nav className="navbar navbar-expand navbar-light bg-white topbar mb-4 static-top shadow">

        {/* <!-- Sidebar Toggle (Topbar) --> */}
        <button id="sidebarToggleTop" className="btn btn-link d-md-none rounded-circle mr-3">
            <i className="fa fa-bars"></i>
        </button>

        {/* <!-- Topbar Search --> */}
        {/* <form
            className="d-none d-sm-inline-block form-inline mr-auto ml-md-3 my-2 my-md-0 mw-100 navbar-search">
            <div className="input-group">
                <input type="text" className="form-control bg-light border-0 small" placeholder="Search for..."
                    aria-label="Search" aria-describedby="basic-addon2"></input>
                <div className="input-group-append">
                    <button className="btn btn-primary" type="button">
                        <i className="fas fa-search fa-sm"></i>
                    </button>
                </div>
            </div>
        </form> */}

        {/* <!-- Topbar Navbar --> */}
        <ul className="navbar-nav ml-auto">

            {/* <!-- Nav Item - Search Dropdown (Visible Only XS) --> */}
            <li className="nav-item dropdown no-arrow d-sm-none">
                <a className="nav-link dropdown-toggle" href="#" id="searchDropdown" role="button"
                    data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                    <i className="fas fa-search fa-fw"></i>
                </a>
                {/* <!-- Dropdown - Messages --> */}
                <div className="dropdown-menu dropdown-menu-right p-3 shadow animated--grow-in"
                    aria-labelledby="searchDropdown">
                    <form className="form-inline mr-auto w-100 navbar-search">
                        <div className="input-group">
                            <input type="text" className="form-control bg-light border-0 small"
                                placeholder="Search for..." aria-label="Search"
                                aria-describedby="basic-addon2"></input>
                            <div className="input-group-append">
                                <button className="btn btn-primary" type="button">
                                    <i className="fas fa-search fa-sm"></i>
                                </button>
                            </div>
                        </div>
                    </form>
                </div>
            </li>

            {/* <!-- Nav Item - Alerts --> */}
            <li className="nav-item dropdown no-arrow mx-1">
                <a className="nav-link dropdown-toggle" href="#" id="alertsDropdown" role="button"
                    data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                    <i className="fas fa-bell fa-fw"></i>
                    {/* <!-- Counter - Alerts --> */}
                    <span className="badge badge-danger badge-counter">3+</span>
                </a>
                {/* <!-- Dropdown - Alerts --> */}
                <div className="dropdown-list dropdown-menu dropdown-menu-right shadow animated--grow-in"
                    aria-labelledby="alertsDropdown">
                    <h6 className="dropdown-header">
                        Alerts Center
                    </h6>
                    <a className="dropdown-item d-flex align-items-center" href="#">
                        <div className="mr-3">
                            <div className="icon-circle bg-primary">
                                <i className="fas fa-file-alt text-white"></i>
                            </div>
                        </div>
                        <div>
                            <div className="small text-gray-500">December 12, 2019</div>
                            <span className="font-weight-bold">A new monthly report is ready to download!</span>
                        </div>
                    </a>
                    <a className="dropdown-item d-flex align-items-center" href="#">
                        <div className="mr-3">
                            <div className="icon-circle bg-success">
                                <i className="fas fa-donate text-white"></i>
                            </div>
                        </div>
                        <div>
                            <div className="small text-gray-500">December 7, 2019</div>
                            $290.29 has been deposited into your account!
                        </div>
                    </a>
                    <a className="dropdown-item d-flex align-items-center" href="#">
                        <div className="mr-3">
                            <div className="icon-circle bg-warning">
                                <i className="fas fa-exclamation-triangle text-white"></i>
                            </div>
                        </div>
                        <div>
                            <div className="small text-gray-500">December 2, 2019</div>
                            Spending Alert: We've noticed unusually high spending for your account.
                        </div>
                    </a>
                    <a className="dropdown-item text-center small text-gray-500" href="#">Show All Alerts</a>
                </div>
            </li>

            {/* <!-- Nav Item - Messages --> */}
            <li className="nav-item dropdown no-arrow mx-1">
                <a className="nav-link dropdown-toggle" href="#" id="messagesDropdown" role="button"
                    data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                    <i className="fas fa-envelope fa-fw"></i>
                    {/* <!-- Counter - Messages --> */}
                    <span className="badge badge-danger badge-counter">7</span>
                </a>
                {/* <!-- Dropdown - Messages --> */}
                <div className="dropdown-list dropdown-menu dropdown-menu-right shadow animated--grow-in"
                    aria-labelledby="messagesDropdown">
                    <h6 className="dropdown-header">
                        Message Center
                    </h6>
                    <a className="dropdown-item d-flex align-items-center" href="#">
                        <div className="dropdown-list-image mr-3">
                            <img className="rounded-circle" src={undraw_profile_1}
                                alt="..."/>
                            <div className="status-indicator bg-success"></div>
                        </div>
                        <div className="font-weight-bold">
                            <div className="text-truncate">Hi there! I am wondering if you can help me with a
                                problem I've been having.</div>
                            <div className="small text-gray-500">Emily Fowler · 58m</div>
                        </div>
                    </a>
                    <a className="dropdown-item d-flex align-items-center" href="#">
                        <div className="dropdown-list-image mr-3">
                            <img className="rounded-circle" src={undraw_profile_2}
                                alt="..."/>
                            <div className="status-indicator"></div>
                        </div>
                        <div>
                            <div className="text-truncate">I have the photos that you ordered last month, how
                                would you like them sent to you?</div>
                            <div className="small text-gray-500">Jae Chun · 1d</div>
                        </div>
                    </a>
                    <a className="dropdown-item d-flex align-items-center" href="#">
                        <div className="dropdown-list-image mr-3">
                            <img className="rounded-circle" src={undraw_profile_3}
                                alt="..."/>
                            <div className="status-indicator bg-warning"></div>
                        </div>
                        <div>
                            <div className="text-truncate">Last month's report looks great, I am very happy with
                                the progress so far, keep up the good work!</div>
                            <div className="small text-gray-500">Morgan Alvarez · 2d</div>
                        </div>
                    </a>
                    <a className="dropdown-item d-flex align-items-center" href="#">
                        <div className="dropdown-list-image mr-3">
                            <img className="rounded-circle" src="https://source.unsplash.com/Mv9hjnEUHR4/60x60"
                                alt="..."/>
                            <div className="status-indicator bg-success"></div>
                        </div>
                        <div>
                            <div className="text-truncate">Am I a good boy? The reason I ask is because someone
                                told me that people say this to all dogs, even if they aren't good...</div>
                            <div className="small text-gray-500">Chicken the Dog · 2w</div>
                        </div>
                    </a>
                    <a className="dropdown-item text-center small text-gray-500" href="#">Read More Messages</a>
                </div>
            </li>

            <div className="topbar-divider d-none d-sm-block"></div>

            {/* <!-- Nav Item - User Information --> */}
            <li className="nav-item dropdown no-arrow">
                <a className="nav-link dropdown-toggle" href="#" id="userDropdown" role="button"
                    data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                    <span className="mr-2 d-none d-lg-inline text-gray-600 small">{currentUser.name}</span>
                    <Avatar aria-label="recipe" src={currentUser.avatar} className={classes.large}>
                            img
                    </Avatar>
                    {/* <img className="img-profile rounded-circle"
                        src={currentUser.avatar} alt={default_profile_image}/> */}
                </a>
                {/* <!-- Dropdown - User Information --> */}
                <div className="dropdown-menu dropdown-menu-right shadow animated--grow-in"
                    aria-labelledby="userDropdown">
                    <Link to={`/profile/${currentUser.id}`} className="dropdown-item" href="#">
                        <i className="fas fa-user fa-sm fa-fw mr-2 text-gray-400"></i>
                        Profile
                    </Link>
                    {/* <a className="dropdown-item" href="#">
                        <i className="fas fa-cogs fa-sm fa-fw mr-2 text-gray-400"></i>
                        Settings
                    </a>
                    <a className="dropdown-item" href="#">
                        <i className="fas fa-list fa-sm fa-fw mr-2 text-gray-400"></i>
                        Activity Log
                    </a> */}
                    <div className="dropdown-divider"></div>
                    <Link to="/" className="dropdown-item" href="#" data-toggle="modal" data-target="#logoutModal">
                        <i className="fas fa-sign-out-alt fa-sm fa-fw mr-2 text-gray-400"></i>
                        Logout
                    </Link>
                </div>
            </li>

        </ul>

    </nav>
    {/* <!-- End of Topbar --> */}
    </>
    )
}