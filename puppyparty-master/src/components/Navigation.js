import { LuShoppingCart } from "react-icons/lu";
import { FiSearch } from "react-icons/fi";
import { IoMenu } from "react-icons/io5";
import { IoClose } from "react-icons/io5";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";

const Navigation = () => {
    // 모바일 버전에서 메뉴 아이콘 클릭시 세로 메뉴 나오는 함수
    const [isOpen, setIsOpen] = useState(false);
    const sideMenu = () => {
        setIsOpen((prev) => !prev);
    };
    const navigate = useNavigate();
    return (
        <nav>
            <Link to="/">
            <img
                className="nav-logo"
                src={`${process.env.PUBLIC_URL}/images/HeaderLogo.png`}
                alt="PuppyParty 상단 로고"
            />
            </Link>
            {/* 메뉴 아이콘 - 태블릿 사이즈 이하에서만 보임 */}
            {/* 데스크탑 메뉴 */}
            <ul className="headerMenu">
                <li>파티 용품</li>
                <li>케이크</li>
                <li>간식</li>
                <li>커플 의류</li>
            </ul>
            {isOpen && (
                <ul className="toggleMenu">
                    <IoClose
                        className="closeIcon"
                        onClick={sideMenu}
                        aria-label="toggle menu"
                    />
                    <h1>MENU</h1>
                    <li>파티 용품</li>
                    <li>케이크</li>
                    <li>간식</li>
                    <li>커플 의류</li>
                </ul>
            )}
                <div className="headerIcon">
                    <LuShoppingCart onClick={() => {
                    navigate("/cart");
                }}/>
                    <FiSearch />
                    <IoMenu
                        className="menuIcon"
                        onClick={sideMenu}
                        aria-label="toggle menu"
                    />
                </div>
        </nav>
    );
};

export default Navigation;
