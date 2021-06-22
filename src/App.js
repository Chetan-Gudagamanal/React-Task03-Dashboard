
import './App.css';
import {Switch,Route} from "react-router-dom"

import SideBar from './HomePage/SideBar';
import TopBar from './HomePage/TopBar';
import HomePage from "./Components/Dashboard"
import Buttons from "./Components/Buttons_page/Buttons"
import Cards from "./Components/Cards_Page/Cards"
import Colors from "./Components/Colors_Page/Colors"
import Borders from "./Components/Borders_Page/Borders"
import Animations from "./Components/Animations_Page/Animations"
import Other from "./Components/Other_Utilities_page/Other"
import Login from "./Components/Login"
import Register from "./Components/Register"
import Forgot_Password from "./Components/Forgot_Password"
import Page_404 from "./Components/Page_404"
import Blank_Page from "./Components/Blank_Page"
import Charts_Page from "./Components/Charts_Page/Charts_Page"
import Tables_Page from "./Tables_Page/Tables_Page"


import '@fortawesome/fontawesome-free/css/all.min.css';
import 'bootstrap/dist/js/bootstrap.bundle';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div className="App">

    {/* <!-- Page Wrapper --> */}
    <div id="wrapper">

        <SideBar/>

        {/* <!-- Content Wrapper --> */}
        <div id="content-wrapper" className="d-flex flex-column">

            {/* <!-- Main Content --> */}
            <div id="content">

                <TopBar/>

                {/* <!-- Begin Page Content --> */}
                <Switch>
                    <Route exact path="/">
                        <HomePage/>
                    </Route>
                    <Route path="/buttons">
                        <Buttons/>
                    </Route>
                    <Route path="/cards">
                        <Cards/>
                    </Route>
                    <Route path="/colors">
                        <Colors/>
                    </Route>
                    <Route path="/borders">
                        <Borders/>
                    </Route>
                    <Route path="/animations">
                        <Animations/>
                    </Route>
                    <Route path="/other">
                        <Other/>
                    </Route>
                    <Route path="/login">
                        <Login/>
                    </Route>
                    <Route path="/register">
                        <Register/>
                    </Route>
                    <Route path="/forgot_password">
                        <Forgot_Password/>
                    </Route>
                    <Route path="/page404">
                        <Page_404/>
                    </Route>
                    <Route path="/blank_page">
                        <Blank_Page/>
                    </Route>
                    <Route path="/charts">
                        <Charts_Page/>
                    </Route>
                    <Route path="/tables">
                        <Tables_Page/>
                    </Route>
                </Switch>

            </div>
            {/* <!-- End of Main Content --> */}

            {/* <!-- Footer --> */}
            <footer className="sticky-footer bg-white">
                <div className="container my-auto">
                    <div className="copyright text-center my-auto">
                        <span>Copyright &copy; React Bootstrap Dashboard 2021</span>
                    </div>
                </div>
            </footer>
            {/* <!-- End of Footer --> */}

        </div>
        {/* <!-- End of Content Wrapper --> */}

    </div>
    {/* <!-- End of Page Wrapper --> */}

    {/* <!-- Scroll to Top Button--> */}
    <a className="scroll-to-top rounded" href="#page-top">
        <i className="fas fa-angle-up"></i>
    </a>

    {/* <!-- Logout Modal--> */}
    <div className="modal fade" id="logoutModal" tabIndex="-1" role="dialog" aria-labelledby="exampleModalLabel"
        aria-hidden="true">
        <div className="modal-dialog" role="document">
            <div className="modal-content">
                <div className="modal-header">
                    <h5 className="modal-title" id="exampleModalLabel">Ready to Leave?</h5>
                    <button className="close" type="button" data-dismiss="modal" aria-label="Close">
                        <span aria-hidden="true">×</span>
                    </button>
                </div>
                <div className="modal-body">Select "Logout" below if you are ready to end your current session.</div>
                <div className="modal-footer">
                    <button className="btn btn-secondary" type="button" data-dismiss="modal">Cancel</button>
                    <a className="btn btn-primary" href="/">Logout</a>
                </div>
            </div>
        </div>
    </div>
    </div>
  );
}

export default App;
