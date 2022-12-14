import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

interface NavigationBarProps {}

const NavigationBar: React.FC<NavigationBarProps> = () => {
	const user_id = localStorage.getItem("user_id");
	const username = localStorage.getItem("username");
	const [isOpen, setIsOpen] = useState(false);
	const navigate = useNavigate();

	const displayModal = () => {
		setIsOpen(!isOpen);
	};

	const handleLogout = () => {
		localStorage.clear();
		navigate("/");
	};

	return (
		<nav className="flex justify-between items-center py-2 px-3 bg-black fixed top-0 left-0 w-full h-20 z-10">
			<Link to={"/"}>
				<p className="px-4 cursor-pointer text-white text-xl">Logo</p>
			</Link>
			<div>
				<input
					type={"search"}
					className="h-10 w-[45em] bg-gray-50 p-2 outline-none"
					placeholder="Search"
				/>
			</div>
			<div className="flex justify-between items-center text-white relative">
				{isOpen ? (
					<div className="bg-gray-200 w-44 p-2 absolute top-16 -right-2 text-black">
						<Link to={"/profile"}>
							<p className="cursor-pointer">Profile</p>
						</Link>
						<Link to={"/channel"}>
							<p className="cursor-pointer">Channel</p>
						</Link>
						<button onClick={handleLogout}>
							<p className="cursor-pointer">Logout</p>
						</button>
					</div>
				) : null}
				{user_id ? (
					<>
						<div
							className="flex items-center cursor-pointer"
							onClick={displayModal}
						>
							<img
								src={require("../../Assets/Images/campus-eats.webp")}
								alt={"Profile"}
								className="w-10 h-10 rounded-full"
							/>
							<p className="pl-3">{username}</p>
						</div>{" "}
					</>
				) : (
					<>
						<Link to={"/"}>
							<p className="px-4 cursor-pointer">About</p>
						</Link>
						<Link to={"/"}>
							<p className="px-4 cursor-pointer">Contact</p>
						</Link>
						<Link to={"/login"}>
							<p className="px-4 cursor-pointer">Login</p>
						</Link>
						<Link to={"/signup"}>
							<p className="px-4 cursor-pointer">Signup</p>
						</Link>
					</>
				)}
			</div>
		</nav>
	);
};

export default NavigationBar;
