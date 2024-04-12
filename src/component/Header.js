import React from 'react';

const Header = () => {
    return (
        <header
            className="flex flex-col items-center justify-between max-w-full md:max-w-6xl px-2 md:px-6 py-12 mx-auto md:flex-row">
            <a href="/" className="text-indigo-900 z-10 active">
                <img src="https://www.svgrepo.com/show/489282/brand.svg" className="w-24 py-8 md:py-0 g-image"/>
            </a>
            <nav className="w-full">
                <ul className="flex flex-row justify-between items-center px-6 py-4 text-blue-100 bg-indigo-900 rounded-lg">
                    <li className="pr-8">
                        <a href="/blog">서비스 소개</a>
                    </li>
                    <li className="pr-8">
                        <a href="/blog">프로세스</a>
                    </li>
                    <li className="pr-8">
                        <a href="/blog">핵심 기술</a>
                    </li>
                    <li className="pr-8">
                        <a href="" target="_blank">인터뷰 연습</a>
                    </li>
                    <li className="pr-8">
                        <a href="" target="_blank">채용 일정</a>
                    </li>
                    <li className="text-red-200">
                        <a href="" className="ml-2">시험 일정</a>
                    </li>
                </ul>
            </nav>
        </header>
    );
};

export default Header;
