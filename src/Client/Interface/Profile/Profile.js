import {
    useEffect,
    useState
} from "react";
// import { useDispatch } from 'react-redux'
import {
    Link,
    useNavigate,
    useParams
} from "react-router-dom";
import {
    User
} from "../../../User/User";
import {
    GlobalDisplayAlert
} from "../../Context/Alert";
import Loading from "../../NotFound/Loading";
import {
    UserRequest
} from "../../RequestMethod";
import UserOrder from "./UserOrder";

function Profile() {
    const {
        id
    } = useParams();
    const {
        showAlert
    } = GlobalDisplayAlert();
    // const { userData } = User()
    const [userData, setuserData] = useState();

    const [AuthUser, setAuthUser] = useState();
    const [NotAuthUSer, setNotAuthUSer] = useState();
    // const dispatch = useDispatch()
    const navigate = useNavigate();

    useEffect(() => {
        setInterval(() => {
            setuserData(
                JSON.parse(JSON.parse(localStorage.getItem("persist:root")).currentUser)
            );
        }, 200);
    }, []);

    useEffect(() => {
        const CheckIfIdIsValid = async () => {
            try {
                const res = await UserRequest().get(`/user/${id}`);
                setAuthUser(true);
            } catch (error) {
                if (error.message === "Network Error") {
                    navigate("/");
                    showAlert(true, "red", `${error.message}`);
                } else {
                    setNotAuthUSer(error);
                    // navigate('/ugyig')
                }
            }
        };
        CheckIfIdIsValid();
    }, []);

    /* redirect the user to error if the ID is not valid */
    // useEffect(() => {
    //     if (NotAuthUSer) {
    //         navigate('/ugyig')
    //     }
    // }, [NotAuthUSer])

    /* Welcome the user if ID is valid */
    useEffect(() => {
        if (AuthUser) {
            {
                userData && showAlert(true, "green", `Hi ${userData.username}`);
            }
        }
    }, [AuthUser]);

    // const logout = () => {

    //     dispatch(SignOut())
    //     navigate('/');
    //     window.location.reload()
    // }

    // (userData._id)

    return ( <
            div className = "bg-slate-900  w-full py-10" > {
                " "
            } {
                AuthUser ? ( <
                        section className = "bg-slate-900 font-sans antialiased " >
                        <
                        div className = "container mx-auto mt-16" >
                        <
                        div >
                        <
                        div className = "bg-slate-800 relative shadow rounded-lg w-5/6 md:w-4/6  lg:w-3/6 xl:w-2/6 mx-auto" >
                        <
                        div className = "flex justify-center sticky" >
                        <
                        img src = "https://www.pngall.com/wp-content/uploads/12/Avatar-Profile-Vector.png"
                        alt = ""
                        className = "rounded-full mx-auto absolute -top-20 w-32 h-32 shadow-md border-4 border-white transition duration-200 transform hover:scale-110" /
                        >
                        <
                        /div> <
                        div className = "mt-16" >
                        <
                        h1 className = "font-bold text-center text-3xl text-slate-200" > {
                            " "
                        } {
                            userData && userData.username
                        } {
                            " "
                        } <
                        /h1>{" "} <
                        p className = "text-center text-sm text-gray-400 font-medium" > {
                            " "
                        } {
                            userData && userData.email
                        } {
                            " "
                        } <
                        /p>{" "} {
                            /* calling the logout function from api */ } {
                            " "
                        } {
                            /* <p onClick={logout} className='text-red-900 text-center my-3 cursor-pointer'>Signout</p> */ } {
                            " "
                        } <
                        p >
                        <
                        span > < /span>{" "} <
                        /p>{" "} <
                        div className = "my-5 px-6" >
                        <
                        Link to = "/AllCatFetch/All"
                        className = "text-gray-200 block rounded-lg text-center font-medium leading-6 px-6 py-3 bg-gray-900 hover:bg-black hover:text-white" >
                        {
                            " "
                        }
                        Keep Shopping < span className = "font-bold" >: ) < /span> <
                    /Link> <
                    /div>{" "} <
                    div className = "flex justify-between items-center my-5 px-6" >
                    <
                    div className = "hover:text-slate-100 hover:bg-slate-700 rounded transition duration-150 ease-in font-medium text-sm text-center w-full py-3 text-slate-300" > {
                        " "
                    }
                Facebook {
                    " "
                } <
                /div>{" "} <
                div className = "hover:text-slate-100 hover:bg-slate-700 rounded transition duration-150 ease-in font-medium text-sm text-center w-full py-3 text-slate-300" > {
                    " "
                }
                Twitter {
                    " "
                } <
                /div>{" "} <
                div className = "hover:text-slate-100 hover:bg-slate-700 rounded transition duration-150 ease-in font-medium text-sm text-center w-full py-3 text-slate-300" > {
                    " "
                }
                Instagram {
                    " "
                } <
                /div>{" "} <
                div className = "hover:text-slate-100 hover:bg-slate-700 rounded transition duration-150 ease-in font-medium text-sm text-center w-full py-3 text-slate-300" > {
                    " "
                }
                Email {
                    " "
                } <
                /div>{" "} <
                /div> <
                div className = "w-full" >
                    <
                    h3 className = "font-medium text-white text-left px-6" > {
                        " "
                    }
                Your Orders {
                    " "
                } <
                /h3>{" "} <
                div className = "mt-5 w-full flex flex-col items-center sm:overflow-scroll md:overflow-hidden sm:h-80 md:h-auto text-sm" > {
                        " "
                    } {
                        < UserOrder / >
                    } {
                        " "
                    } <
                    /div>{" "} <
                    /div>{" "} <
                    /div>{" "} <
                    /div> <
                    /div>{" "} <
                    /div>{" "} <
                    /section>
            ): ( <
                Loading / >
            )
        } <
        /div>
);
}

export default Profile;