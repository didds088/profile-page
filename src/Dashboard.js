import './App.css';
import dbClass from './classes';
import {useNavigate } from "react-router-dom";

const Dashboard = () => {
dbClass.init();
const navigate = useNavigate();
const log_out =()=> {
    sessionStorage.clear();
    navigate("/");
}

return (
    <div className="container">
        <p className='h1 text-white' id="user">u</p>
        <button className='btn btn-danger' onClick={log_out}>Log Out</button>
    </div>
)}
export default Dashboard;