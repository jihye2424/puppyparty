
const Footer = () => {
    return (
        <footer>
            <div className="footer-all">
                <div className="one">
                    <ul className="nav">
                        <li>회사 소개</li>
                        <li>이용약관</li>
                        <li>개인정보 처리방침</li>
                        <li>이용 안내</li>
                    </ul>
                    <ul className="inf">
                        <li>대표이사 : 소은경</li>
                        <li>주소 : 경기도 수원시 팔달구 덕영대로 889 3층</li>
                        <li>대표 번호 : 0507-1361-5225</li>
                    </ul>
                </div>
                <div className="two">
                    <img src={`${process.env.PUBLIC_URL}/images/Logo.png`} />
                    <p>© 2025 (Puppy Party). All rights reserved.</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
