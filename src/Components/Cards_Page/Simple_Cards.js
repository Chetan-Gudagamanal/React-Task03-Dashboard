export default function Simple_Cards(){
    const earnings_card=[{name:"Earnings (Monthly)",amount:"$40,000",icon:"fa-calendar",color:"text-primary"},
    {name:"Earnings (Annual)",amount:"$215,000",icon:"fa-dollar-sign",color:"text-success"},
    {name:"Pending Requests",amount:"18",icon:"fa-comments",color:"text-warning"}];
    return(
        <div className="row">
                {/* <!-- Earnings Card Example --> */}
                {/* {console.log(earnings_card)} */}
                {earnings_card.map((ele)=>{
                    return(
                    <div className="col-xl-3 col-md-6 mb-4">
                    <div className="card border-left-primary shadow h-100 py-2">
                        <div className="card-body">
                            <div className="row no-gutters align-items-center">
                                <div className="col mr-2">
                                    <div className={`text-xs font-weight-bold text-uppercase mb-1 ${ele.color}`}>
                                        {ele.name}</div>
                                    <div className="h5 mb-0 font-weight-bold text-gray-800">{ele.amount}</div>
                                </div>
                                <div className="col-auto">
                                    <i className={`fas fa-2x text-gray-300 ${ele.icon}`}></i>
                                </div>
                            </div>
                        </div>
                    </div>
                    </div>
                    )
                })}

                {/* <!-- Tasks Card Example --> */}
                <div className="col-xl-3 col-md-6 mb-4">
                    <div className="card border-left-info shadow h-100 py-2">
                        <div className="card-body">
                            <div className="row no-gutters align-items-center">
                                <div className="col mr-2">
                                    <div className="text-xs font-weight-bold text-info text-uppercase mb-1">Tasks
                                    </div>
                                    <div className="row no-gutters align-items-center">
                                        <div className="col-auto">
                                            <div className="h5 mb-0 mr-3 font-weight-bold text-gray-800">50%</div>
                                        </div>
                                        <div className="col">
                                            <div className="progress progress-sm mr-2">
                                                <div className="progress-bar bg-info" role="progressbar"
                                                    style={{width: "50%"}} aria-valuenow="50" aria-valuemin="0"
                                                    aria-valuemax="100"></div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-auto">
                                    <i className="fas fa-clipboard-list fa-2x text-gray-300"></i>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
    )
}