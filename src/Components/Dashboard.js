import {Link} from "react-router-dom"
import MyAreaChart from './myAreaChart';
import undraw_posting_photo from "../img/undraw_posting_photo.svg"
import Simple_Cards from "./Cards_Page/Simple_Cards";

export default function HomePage(){
    const project_data=[
        {name:"Server Migration",progress:"20",color:"bg-danger"},
        {name:"Sales Tracking",progress:"40",color:"bg-warning"},
        {name:"Customer Database",progress:"60",color:""},
        {name:"Payout Details",progress:"80",color:"bg-info"},
        {name:"Account Setup",progress:"100",color:"bg-success"},
    ]
    const color_btn_Arr=[
        {name:"Primary",color:"#4e73df",bg_color:"bg-primary"},
        {name:"Success",color:"#1cc88a",bg_color:"bg-success"},
        {name:"Info",color:"#36b9cc",bg_color:"bg-info"},
        {name:"Warning",color:"#f6c23e",bg_color:"bg-warning"},
        {name:"Danger",color:"#e74a3b",bg_color:"bg-danger"},
        {name:"Secondary",color:"#858796",bg_color:"bg-secondary"},
        {name:"Light",color:"#f8f9fc",bg_color:"bg-light"},
        {name:"Dark",color:"#5a5c69",bg_color:"bg-dark"},
    ]
    return(
        <div className="container-fluid">

                    {/* <!-- Page Heading --> */}
                    <div className="d-sm-flex align-items-center justify-content-between mb-4">
                        <h1 className="h3 mb-0 text-gray-800">Dashboard</h1>
                        <Link to="/" className="d-none d-sm-inline-block btn btn-sm btn-primary shadow-sm"><i
                                className="fas fa-download fa-sm text-white-50"></i> Generate Report</Link>
                    </div>

                        {/* <!-- Earnings Card Example --> */}
                        <Simple_Cards/>

                    <div className="row">

                        {/* <!-- Area Chart --> */}
                        <div className="col-xl-10 col-lg-9">
                            <div className="card shadow mb-4">
                                {/* <!-- Card Header - Dropdown --> */}
                                <div
                                    className="card-header py-3 d-flex flex-row align-items-center justify-content-between">
                                    <h6 className="m-0 font-weight-bold text-primary">Earnings Overview</h6>
                                    <div className="dropdown no-arrow">
                                        <a className="dropdown-toggle" href="#" role="button" id="dropdownMenuLink"
                                            data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                            <i className="fas fa-ellipsis-v fa-sm fa-fw text-gray-400"></i>
                                        </a>
                                        <div className="dropdown-menu dropdown-menu-right shadow animated--fade-in"
                                            aria-labelledby="dropdownMenuLink">
                                            <div className="dropdown-header">Dropdown Header:</div>
                                            <a className="dropdown-item" href="#">Action</a>
                                            <a className="dropdown-item" href="#">Another action</a>
                                            <div className="dropdown-divider"></div>
                                            <a className="dropdown-item" href="#">Something else here</a>
                                        </div>
                                    </div>
                                </div>
                                {/* <!-- Card Body --> */}
                                <div className="card-body">
                                    <div className="chart-area">
                                            <MyAreaChart/>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* <!-- Pie Chart --> */}
                        
                    </div>

                    {/* <!-- Content Row --> */}
                    <div className="row">

                        {/* <!-- Content Column --> */}
                        <div className="col-lg-6 mb-4">

                            {/* <!-- Project Card Example --> */}
                            <div className="card shadow mb-4">
                                <div className="card-header py-3">
                                    <h6 className="m-0 font-weight-bold text-primary">Projects</h6>
                                </div>
                                <div className="card-body">
                                    {project_data.map((ele)=>{
                                        return(
                                            <>
                                            <h4 className="small font-weight-bold">{ele.name} <span
                                            className="float-right">{`${ele.progress}%`}</span></h4>
                                            <div className="progress mb-4">
                                                <div className={`progress-bar ${ele.color}`} role="progressbar" style={{width: `${ele.progress}%`}}
                                                    aria-valuenow={ele.progress} aria-valuemin="0" aria-valuemax="100"></div>
                                            </div>
                                            </>
                                        )
                                    })}
                                    
                                </div>
                            </div>

                            {/* <!-- Color System --> */}
                            
                            <div className="row">
                                {color_btn_Arr.map((ele)=>{
                                    return(
                                        <div className="col-lg-6 mb-4">
                                            <div className={`card text-white shadow ${ele.bg_color}`}>
                                                <div className="card-body">
                                                    {ele.name}
                                                    <div className="text-white-50 small">{ele.color}</div>
                                                </div>
                                            </div>
                                        </div>
                                    )
                                })}
                                
                            </div>

                        </div>

                        <div className="col-lg-6 mb-4">

                            {/* <!-- Illustrations --> */}
                            <div className="card shadow mb-4">
                                <div className="card-header py-3">
                                    <h6 className="m-0 font-weight-bold text-primary">Illustrations</h6>
                                </div>
                                <div className="card-body">
                                    <div className="text-center">
                                        <img className="img-fluid px-3 px-sm-4 mt-3 mb-4" style={{width: "25rem"}}
                                            src={undraw_posting_photo} alt="..."/>
                                    </div>
                                    <p>Add some quality, svg illustrations to your project courtesy of <a
                                            target="_blank" rel="nofollow" href="https://undraw.co/">unDraw</a>, a
                                        constantly updated collection of beautiful svg images that you can use
                                        completely free and without attribution!</p>
                                    <a target="_blank" rel="nofollow" href="https://undraw.co/">Browse Illustrations on
                                        unDraw &rarr;</a>
                                </div>
                            </div>

                            {/* <!-- Approach --> */}
                            <div className="card shadow mb-4">
                                <div className="card-header py-3">
                                    <h6 className="m-0 font-weight-bold text-primary">Development Approach</h6>
                                </div>
                                <div className="card-body">
                                    <p>SB Admin 2 makes extensive use of Bootstrap 4 utility classNamees in order to reduce
                                        CSS bloat and poor page performance. Custom CSS classNamees are used to create
                                        custom components and custom utility classNamees.</p>
                                    <p className="mb-0">Before working with this theme, you should become familiar with the
                                        Bootstrap framework, especially the utility classNamees.</p>
                                </div>
                            </div>

                        </div>
                    </div>

                </div>
                
    )
}