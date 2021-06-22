export default function Borders(){
    const border_color_arr=["primary","secondary","success","info","warning","danger","dark"]
    return(
        <div className="container-fluid">

        {/* <!-- Page Heading --> */}
        <h1 className="h3 mb-1 text-gray-800">Border Utilities</h1>
        <p className="mb-4">Bootstrap's default utility classes can be found on the official <a
                href="https://getbootstrap.com/docs">Bootstrap Documentation</a> page. The custom utilities
            below were created to extend this theme past the default utility classes built into Bootstrap's
            framework.</p>

        {/* <!-- Content Row --> */}
        <div className="row">

            {/* <!-- Border Left Utilities --> */}
            <div className="col-lg-6">
                {border_color_arr.map((ele)=>{
                    let border_color=`border-left-${ele}`
                    return(
                    <div className={`card mb-4 py-3 ${border_color}`}>
                    <div className="card-body">
                        {border_color}
                    </div>
                    </div>
                    )
                })}

            </div>

            {/* <!-- Border Bottom Utilities --> */}
            <div className="col-lg-6">

                {border_color_arr.map((ele)=>{
                    let border_color=`border-bottom-${ele}`
                    return(
                    <div className={`card mb-4 py-3 ${border_color}`}>
                    <div className="card-body">
                        {border_color}
                    </div>
                    </div>
                    )
                })}

            </div>

        </div>

    </div>
    )
}