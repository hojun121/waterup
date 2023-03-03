// import {useNavigate} from "react-router-dom";

export const Copyright = () => {
    // const navigate = useNavigate();
    return (
        <>
            <footer id="footer">
                <div className="container">
                    <div className="copyright">
                        &copy; Copyright <strong><span>WaterUp</span></strong>
                    </div>
                    <div className="credits">
                        {/*Designed by <a onClick={()=>navigate("/")}>WaterUp Team</a>*/}
                        Designed by <a href="#hero">WaterUp Team</a>
                    </div>
                </div>
            </footer>
        </>
    );
}