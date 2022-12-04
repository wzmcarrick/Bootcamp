import axios from "axios";
import { useEffect } from "react"
import { useNavigate, useLocation } from "react-router-dom";

const exceptionList = ["/login", "/register"];


const AuthRoute = ({ children }) => {
    const navigate = useNavigate()
    const location = useLocation();

    useEffect(() => {

        const isAnException = exceptionList.some(
            (exception) => exception === location.pathname
        );
        console.log(isAnException);

        if (isAnException) {
            console.log("this is an exception, dont verify");
            return;
        }

        const token = window.localStorage.getItem("token");
        if (!token) {
            navigate("/login")
        }

        axios.get('https://lambent-phoenix-5a89bb.netlify.app/.netlify/functions/auth/users', {
            headers: {
                Authorization: `Bearer ${token}`
            }
        }).then(res => {
            console.log(res)
            if (!res.data || res.data.msg === "no access") {
                navigate("/login");
            }
        }).catch(err => {
            console.error(err)
        })

    }, [navigate, location])

    return <>
        {children}
    </>
}

export default AuthRoute