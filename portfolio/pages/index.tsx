import { Anchor } from "antd";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";

export default function Home(): JSX.Element {
  const [isScrolled, setIsScrolled] = useState(false);

  const checkScroll = () => {
    if (window.scrollY > 0) {
      setIsScrolled(true);
    } else {
      setIsScrolled(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", checkScroll);
    return () => {
      window.removeEventListener("scroll", checkScroll);
    };
  }, []);

  const router = useRouter();
  return (
    <div className="relative">
      <div
        className={`flex items-center justify-center w-full h-20 text-[20px] font-PretendSemiBold fixed top-0 scroll transition-a60 duration-3000 ${
          isScrolled ? "bg-white" : "bg-transparent text-white"
        }`}
      >
        <div className="w-[75vw] flex items-center justify-between ">
          <div className="cursor-pointer">MUYEON'S PORTFOLIO</div>
          <Anchor
            direction="horizontal"
            items={[
              {
                key: "part-1",
                href: "#part-1",
                title: (
                  <p
                    className={`w-full font-PretendSemiBold text-[20px] ${
                      isScrolled ? "" : "text-white"
                    }`}
                  >
                    About
                  </p>
                ),
              },
              {
                key: "part-2",
                href: "#part-2",
                title: (
                  <p
                    className={`w-full font-PretendSemiBold text-[20px] ${
                      isScrolled ? "" : "text-white"
                    }`}
                  >
                    Archving
                  </p>
                ),
              },
              {
                key: "part-3",
                href: "#part-3",
                title: (
                  <p
                    className={`w-full font-PretendSemiBold text-[20px] ${
                      isScrolled ? "" : "text-white"
                    }`}
                  >
                    Skills
                  </p>
                ),
              },
              {
                key: "part-4",
                href: "#part-4",
                title: (
                  <p
                    className={`w-full font-PretendSemiBold text-[20px] ${
                      isScrolled ? "" : "text-white"
                    }`}
                  >
                    Project
                  </p>
                ),
              },
            ]}
          />
        </div>
      </div>
      <div
        className="h-[100vh] w-full bg-gray-600 font-PretendMedium bg-fixed "
        style={{ backgroundImage: "url('/back.png')" }}
      >
        <div className="h-full text-white ml-[13.02vw] flex items-start flex-col">
          <p className="mt-[303px] text-[24px] text-[#FCFCFC]">
            주니어 개발자 김무연
          </p>
          <p className="w-[520px] inline-block mt-[3vh] bg-gradient-to-r from-[#9FBAFD] to-[#4E81FF] text-[56px] leading-[80px] font-PretendBold text-transparent bg-clip-text">
            MUYEON'S PORTFOLIO
          </p>
          <div className="mt-[6.31vh]">
            <button
              className="h-[65px] w-[206px] bg-[#6250FF] rounded-[44px] text-[20px]"
              onClick={() => router.push("/#part-1")}
            >
              More -{">"}
            </button>
          </div>
        </div>
      </div>
      <div className="w-full flex flex-col items-center">
        <div id="part-1" className="w-[73.96vw] flex flex-col items-center">
          <div className="w-[6.5vw] h-[6.5vw] mt-[170px]">
            <img src="/profile.png" className="object-cover" />
          </div>
          <p className="w-[620px] inline-block font-PretendBold text-[56px] leading-[80px] mt-[44px] text-center">
            ABOUT
          </p>
          <p className="mt-[18px] text-[#5C5C5C] text-[26px]">
            간단한 한줄 소개 적기
          </p>
          <div className="w-full mt-[75px] min-w-[1420px] h-[300px] flex flex-col items-center justify-evenly text-center bg-[#F0F0FA] rounded-[28px]">
            <div className="flex w-[70%] justify-between">
              <div className="flex  items-center text-start">
                <div className="w-[40px] h-[40px] ">
                  <img src="/name.png" className="object-cover" />
                </div>
                <div className="ml-[2vw] ">
                  <p className="font-PretendSemiBold text-[26px] leading-[40px] inline-block">
                    이름
                  </p>
                  <p className="mt-[7px] text-[#6E7583] text-[20px] leading-[30px]">
                    김무연
                  </p>
                </div>
              </div>
              <div className="flex  items-center text-start">
                <div className="w-[40px] h-[40px]">
                  <img src="/birth.png" className="object-cover" />
                </div>
                <div className="ml-[2vw]">
                  <p className="font-PretendSemiBold text-[26px] leading-[40px] inline-block">
                    생년월일
                  </p>
                  <p className="mt-[7px] text-[#6E7583] text-[20px] leading-[30px]">
                    1996.04.09
                  </p>
                </div>
              </div>
              <div className="flex  items-center text-start">
                <div className="w-[40px] h-[40px]">
                  <img src="/address.png" className="object-cover" />
                </div>
                <div className="ml-[2vw]">
                  <p className="font-PretendSemiBold text-[26px] leading-[40px] inline-block">
                    주소지
                  </p>
                  <p className="mt-[7px] text-[#6E7583] text-[20px] leading-[30px]">
                    울산광역시 남구
                  </p>
                </div>
              </div>
            </div>
            <div className="flex w-[70%] justify-between">
              <div className="flex  items-center text-start">
                <div className="w-[40px] h-[40px]">
                  <img src="/phone.png" className="object-cover" />
                </div>
                <div className="ml-[2vw]">
                  <p className="font-PretendSemiBold text-[26px] leading-[40px] inline-block">
                    연락처
                  </p>
                  <p className="mt-[7px] text-[#6E7583] text-[20px] leading-[30px]">
                    010-4048-7042
                  </p>
                </div>
              </div>
              <div className="flex  items-center text-start">
                <div className="w-[40px] h-[40px]">
                  <img src="/email.png" className="object-cover" />
                </div>
                <div className="ml-[2vw]">
                  <p className="font-PretendSemiBold text-[26px] leading-[40px] inline-block">
                    이메일
                  </p>
                  <p className="mt-[7px] text-[#6E7583] text-[20px] leading-[30px]">
                    rlaandus2@gmail.com
                  </p>
                </div>
              </div>
              <div className="flex  items-center text-start">
                <div className="w-[40px] h-[40px]">
                  <img src="/gradu.png" className="object-cover" />
                </div>
                <div className="ml-[2vw]">
                  <p className="font-PretendSemiBold text-[26px] leading-[40px] inline-block">
                    학력
                  </p>
                  <p className="mt-[7px] text-[#6E7583] text-[20px] leading-[30px]">
                    울산대학교 졸업
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div id="part-2">
          <div className="w-[73.96vw] flex flex-col items-center">
            <div className="w-[6.5vw] h-[6.5vw] mt-[170px]">
              <img src="/hand.png" className="object-cover" />
            </div>
            <p className="w-[620px] inline-block font-PretendBold text-[56px] leading-[80px] mt-[50px] text-center">
              ARCHVING
            </p>
            <p className="mt-[18px] text-[#5C5C5C] text-[26px]">간단한 성취</p>
            <div className="flex w-[20%] justify-between mt-[3vh] text-[#5C5C5C]">
              <div>
                <div
                  className="w-[50px]  h-[70px] hover:opacity-80 flex flex-col items-center"
                  onClick={() => window.open("https://github.com/MUYEONKIM")}
                >
                  <img src="/git.png" />
                  <p className="font-PretendSemiBold text-[24px]">Git</p>
                </div>
              </div>
              <div>
                <div
                  className="w-[50px] h-[70px]  hover:opacity-80 flex flex-col items-center"
                  onClick={() =>
                    window.open(
                      "https://www.notion.so/muyeon/e3bba7f1cf6f472a901e049ff11cbd9b"
                    )
                  }
                >
                  <img src="/notion.png" />
                  <p className="font-PretendSemiBold text-[24px]">Notion</p>
                </div>
              </div>
              <div>
                <div
                  className="w-[50px] h-[70px]  hover:opacity-80 flex flex-col items-center"
                  onClick={() =>
                    window.open("https://velog.io/@rlaandus2/posts")
                  }
                >
                  <img src="/velog.png" />
                  <p className="font-PretendSemiBold text-[24px] mt-[3px]">
                    Velog
                  </p>
                </div>
              </div>
            </div>
            <div className="w-[90%] min-w-[50%%] mt-[96px] flex justify-between">
              <div className="w-[30%] min-w-[2vw] h-[30vh] flex flex-col items-center  bg-[#DCEFF4] rounded-[48px] hover:opacity-60 duration-300">
                <div className="flex flex-col">
                  <div className="flex mt-[5vh]">
                    <div className="w-[1.5vw] h-[1.5vw] ">
                      <img src="/name.png" className="object-cover" />
                    </div>
                    <p className="ml-[2vw] font-PretendBold text-[34px] text-[#0F1F4B] leading-6">
                      교육
                    </p>
                  </div>
                  <li className="mt-[4vh] font-PretendBold text-[#516B71] text-[20px] leading-[36px] ">
                    KT-AivleSchool
                  </li>
                </div>
              </div>
              <div className="w-[30%] min-w-[2vw] h-[30vh] flex flex-col items-center  bg-[#a3b4c5] rounded-[48px] hover:opacity-60 duration-300">
                <div className="flex flex-col">
                  <div className="flex mt-[5vh]">
                    <div className="w-[1.5vw] h-[1.5vw] ">
                      <img src="/name.png" className="object-cover" />
                    </div>
                    <p className="ml-[2vw] font-PretendBold text-[34px] text-[#0F1F4B] leading-6">
                      수상
                    </p>
                  </div>
                  <li className="mt-[4vh] font-PretendBold text-[#516B71] text-[20px] leading-[36px] ">
                    KT-AivleSchool (Big_Project) <br />
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;최우수상
                  </li>
                </div>
              </div>
              <div className="w-[30%] min-w-[2vw] h-[30vh] flex flex-col items-center  bg-[#FBFBEF] rounded-[48px] hover:opacity-60 duration-300">
                <div className="flex flex-col">
                  <div className="flex mt-[5vh]">
                    <div className="w-[1.5vw] h-[1.5vw] ">
                      <img src="/name.png" className="object-cover" />
                    </div>
                    <p className="ml-[2vw] font-PretendBold text-[34px] text-[#0F1F4B] leading-6">
                      자격증
                    </p>
                  </div>
                  <div className="mt-[4vh] font-PretendBold text-[#516B71] text-[20px] leading-[36px] ">
                    <li>정보처리기사 ()</li>
                    <li>Aice-association ()</li>
                    <li>컴퓨터활용능력 1급 ()</li>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div id="part-3">
          <div className="w-[73.96vw] flex flex-col items-center">
            <div className="w-[6.5vw] h-[6.5vw] mt-[170px]">
              <img src="/skill.png" className="object-cover" />
            </div>
            <p className="w-[620px] inline-block font-PretendBold text-[56px] leading-[80px] mt-[50px] text-center">
              SKILLS
            </p>
            <p className="mt-[18px] text-[#5C5C5C] text-[26px]">기술 설명</p>
            <div className="w-full min-w-[1430px] mt-[96px] flex justify-between">
              <div className="w-[44.53vw] min-w-[855px] h-[720px] flex flex-col justify-between bg-[#DBE5FF] rounded-[25px] p-[3vw]">
                <div>
                  <p className="font-PretendBold text-[34px] text-[#375984]">
                    Frontend
                  </p>
                  <p className="font-PretendBold text-[#698AB1] text-[34px] leading-[36px] ">
                    qwe
                  </p>
                </div>
              </div>
              <div className="w-[27.08vw] min-w-[520px] h-[720px] flex flex-col justify-between bg-[#FAFAEE] rounded-[25px] p-[3vw]">
                <div>
                  <p className="font-PretendBold text-[34px] text-[#6C3111]">
                    Backend
                  </p>
                  <p className="font-PretendBold text-[#6F6F6F] text-[34px] leading-[36px] ">
                    we3r
                  </p>
                </div>
              </div>
            </div>
            <div className="w-full min-w-[1430px] mt-[40px] flex justify-between">
              <div className="w-[32.6vw] min-w-[626px] h-[597px] flex flex-col justify-between bg-[#F8F9FA] rounded-[25px] p-[3vw]">
                <div>
                  <p className="font-PretendBold text-[34px]">Deployment</p>
                  <p className="font-PretendBold text-[#727B88] text-[34px] leading-[36px] ">
                    ert
                  </p>
                </div>
              </div>
              <div className="w-[39.06vw] min-w-[750px] h-[597px] flex flex-col justify-between bg-[#E9EBFD] rounded-[25px] p-[3vw]">
                <div>
                  <p className="font-PretendBold text-[34px] bg-gradient-to-r from-[#7F3ADD] to-[#6264F6] text-transparent bg-clip-text">
                    Tools
                  </p>
                  <p className="font-PretendBold text-[#7079CB] text-[34px]">
                    qq
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div
        id="part-4"
        className="h-[1080px] mt-[225px] bg-black flex flex-col justify-center items-center text-center"
      >
        <p className="w-[809.69px] bg-gradient-to-r from-[#B6B7F7] to-[#7FB2FE] text-[64px] font-PretendBold leading-[85px] text-transparent bg-clip-text">
          Project
        </p>
        <button className="h-[65px] w-[206px] mt-[66px] bg-[#6250FF] rounded-[44px] text-[21px] text-white">
          캐러셀 들어갈자리
        </button>
      </div>
    </div>
  );
}
