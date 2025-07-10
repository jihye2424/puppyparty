import { LuShoppingCart } from "react-icons/lu";
import { FiSearch } from "react-icons/fi";
import { IoMenu } from "react-icons/io5";
import { IoClose } from "react-icons/io5";
import { useNavigate } from "react-router-dom";
import { useEffect, useState, useRef } from "react";

const Navigation = () => {
  // 모바일 버전에서 메뉴 아이콘 클릭시 세로 메뉴 나오는 함수
  const [isOpen, setIsOpen] = useState(false);
  const menuRef = useRef(null);
  const sideMenu= ()=>{setIsOpen(prev => !prev)};

  // const navigate = useNavigate();
  return (
    <nav>
      <img 
        // onClick={()=>{navigate('/')}}
        src={`${process.env.PUBLIC_URL}/images/HeaderLogo.png`}
        alt="PuppyParty 상단 로고"
      />
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
      {/* <div onClick={()=>{navigate('/cart')}}> */}
      <div className="headerIcon">
        <LuShoppingCart />
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