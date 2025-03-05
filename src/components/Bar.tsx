"use client";

import { Drawer, Sidebar } from "flowbite-react";
import React, { useState } from "react";
import {
	HiChartPie,
	HiClipboard,
	HiCollection,
	HiUsers,
	HiShoppingBag,
	HiLogin,
	HiPencil,
	HiInformationCircle,
	HiOutlineInformationCircle,
	HiX,
} from "react-icons/hi";
import { GiHamburgerMenu } from "react-icons/gi";

const Bar = () => {
	const [isOpen, setIsOpen] = useState(false);

	const handleClose = () => {
		setIsOpen(false);
	};
	const handleOpen = () => {
		setIsOpen(true);
		setTimeout(handleClose, 5000);
	};

	return (
		<>
			<div className="fixed top-0 left-0 right-0 flex justify-between p-4 bg-gray-800">
				<GiHamburgerMenu
					className="text-2xl text-white dark:text-slate-300 cursor-pointer"
					onClick={handleOpen}
				/>
			</div>
			<Drawer
				open={isOpen}
				onClose={handleClose}>
				<Drawer.Header
					title="MENU"
					titleIcon={() => <></>}>
					<button
						onClick={handleClose}
						className="text-gray-500 hover:text-gray-700">
						<HiX className="text-2xl" />
					</button>
				</Drawer.Header>
				<Drawer.Items>
					<Sidebar
						aria-label="Sidebar with multi-level dropdown example"
						className="[&>div]:bg-transparent [&>div]:p-0">
						<div className="flex h-full flex-col justify-between py-2">
							<Sidebar.Items>
								<Sidebar.ItemGroup>
									<Sidebar.Item
										href="/"
										icon={HiChartPie}>
										Dashboard
									</Sidebar.Item>
									<Sidebar.Item
										href="/e-commerce/products"
										icon={HiShoppingBag}>
										Products
									</Sidebar.Item>
									<Sidebar.Item
										href="/users/list"
										icon={HiUsers}>
										Users list
									</Sidebar.Item>
									<Sidebar.Item
										href="/authentication/sign-in"
										icon={HiLogin}>
										Sign in
									</Sidebar.Item>
									<Sidebar.Item
										href="/authentication/sign-up"
										icon={HiPencil}>
										Sign up
									</Sidebar.Item>
								</Sidebar.ItemGroup>
								<Sidebar.ItemGroup>
									<Sidebar.Item
										href="https://github.com/themesberg/flowbite-react/"
										icon={HiClipboard}>
										Docs
									</Sidebar.Item>
									<Sidebar.Item
										href="https://flowbite-react.com/"
										icon={HiCollection}>
										Components
									</Sidebar.Item>
									<Sidebar.Item
										href="https://github.com/themesberg/flowbite-react/issues"
										icon={HiInformationCircle || HiOutlineInformationCircle}>
										Help
									</Sidebar.Item>
								</Sidebar.ItemGroup>
							</Sidebar.Items>
						</div>
					</Sidebar>
				</Drawer.Items>
			</Drawer>
		</>
	);
};

export default Bar;
