import { Anchor } from "antd";
import { useRouter } from "next/router";

export default function Home(): JSX.Element {
  const router = useRouter();
  return (
    <>
      <div className="flex items-center justify-center h-20 text-[20px] font-PretendSemiBold bg-white sticky top-0">
        <div className="w-[75vw] flex items-center justify-between h-20 ">
          <div className="cursor-pointer">MUYEON'S PORTFOLIO</div>
          <Anchor
            style={{ fontSize: "36px", color: "red" }}
            direction="horizontal"
            items={[
              {
                key: "part-1",
                href: "#part-1",
                title: (
                  <p className="w-full font-PretendSemiBold text-[20px]">
                    About me
                  </p>
                ),
              },
              {
                key: "part-2",
                href: "#part-2",
                title: (
                  <p className="w-full font-PretendSemiBold text-[20px]">
                    Archving
                  </p>
                ),
              },
              {
                key: "part-3",
                href: "#part-3",
                title: (
                  <p className="w-full font-PretendSemiBold text-[20px]">
                    Skills
                  </p>
                ),
              },
              {
                key: "part-4",
                href: "#part-4",
                title: (
                  <p className="w-full font-PretendSemiBold text-[20px]">
                    Project
                  </p>
                ),
              },
              {
                key: "part-5",
                href: "#part-5",
                title: (
                  <p className="w-full font-PretendSemiBold text-[20px]">
                    Carrer
                  </p>
                ),
              },
            ]}
          />
        </div>
      </div>
      <hr className="border-[1px] border-[#707070]" />
      <div className="h-[100vh] w-full bg-gray-600 font-PretendMedium">
        <div className="h-full text-white ml-[13.02vw] flex items-start flex-col">
          <p className="mt-[303px] text-[24px] text-[#FCFCFC]">
            인터넷 문자 메시지 전송의 모든 것
          </p>
          <p className="w-[520px] inline-block mt-[3vh] bg-gradient-to-r from-[#9FBAFD] to-[#4E81FF] text-[56px] leading-[80px] font-PretendBold text-transparent bg-clip-text">
            가장 빠르고 안정적인 문자 서비스 SENDGO
          </p>
          <div className="mt-[6.31vh]">
            <button className="h-[65px] w-[206px] bg-[#6250FF] rounded-[44px]">
              회원가입
            </button>
            <button className="h-[65px] w-[206px] bg-[#242424] rounded-[44px] text-[#E0E0E0] ml-[21px]">
              로그인
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
            ABOUT ME
          </p>
          <p className="mt-[18px] text-[#5C5C5C] text-[26px]">
            모든 종류의 인터넷 SMS를 편리하게.
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
            <p className="mt-[18px] text-[#5C5C5C] text-[26px]">
              고객님들의 간편함을 고민하였습니다
            </p>
            <div className="w-[90%] min-w-[50%%] mt-[96px] flex justify-between">
              <div className="w-[20.83vw] min-w-[2vw] h-[30vh] flex flex-col items-center justify-center bg-[#DCEFF4] rounded-full">
                <div>
                  <p className="font-PretendBold text-[34px] text-[#0F1F4B]">
                    BLOG
                  </p>
                  <p className="font-PretendBold text-[#516B71] text-[34px] leading-[48px]">
                    <button
                      onClick={() =>
                        window.open("https://velog.io/@rlaandus2/posts")
                      }
                    >
                      바로가기
                    </button>
                  </p>
                </div>
                <div className=" w-full flex flex-col items-center"></div>
              </div>
              <div className="w-[20.83vw] min-w-[2vw] h-[30vh] flex flex-col items-center justify-center bg-[#DCEFF4] rounded-full">
                <div>
                  <p className="font-PretendBold text-[34px] text-[#0F1F4B]">
                    NOTION
                  </p>
                  <p className="font-PretendBold text-[#516B71] text-[34px] leading-[48px]">
                    <button
                      onClick={() =>
                        window.open(
                          "https://www.notion.so/muyeon/e3bba7f1cf6f472a901e049ff11cbd9b"
                        )
                      }
                    >
                      바로가기
                    </button>
                  </p>
                </div>
                <div className=" w-full flex flex-col items-center"></div>
              </div>
              <div className="w-[20.83vw] min-w-[2vw] h-[30vh] flex flex-col items-center justify-center bg-[#FBFBEF] rounded-full1vw] pt-[72px] rounded-full">
                <div>
                  <p className="font-PretendBold text-[34px] text-[#431B06]">
                    GIT
                  </p>
                  <p className="font-PretendBold text-[#696156] text-[34px]">
                    <button
                      onClick={() =>
                        window.open("https://github.com/MUYEONKIM")
                      }
                    >
                      바로가기
                    </button>
                  </p>
                </div>
                <div className="mt-[50.23px] w-[524.57px] min-w-[524.57px]"></div>
              </div>
            </div>
            <div className="w-full mt-[75px] min-w-[1420px] h-[300px] flex flex-col items-center justify-evenly text-center bg-[#F0F0FA] rounded-[28px]">
              <div className="flex w-[70%] justify-between text-start">
                <div className="flex flex-col w-[30%]">
                  <div className="flex">
                    <div className="w-[1.5vw] h-[1.5vw] ">
                      <img src="/name.png" className="object-cover" />
                    </div>
                    <p className="ml-[2vw] font-PretendSemiBold text-[26px] leading-6">
                      교육
                    </p>
                  </div>
                  <p className="mt-[2vh] text-[#6E7583] text-[20px] leading-[30px]">
                    <li>KT-AivleSchool</li>
                  </p>
                </div>
                <div className="flex flex-col w-[30%]">
                  <div className="flex">
                    <div className="w-[1.5vw] h-[1.5vw] ">
                      <img src="/prize.png" className="object-cover" />
                    </div>
                    <p className="ml-[2vw] font-PretendSemiBold text-[26px] leading-6">
                      수상
                    </p>
                  </div>
                  <p className="mt-[2vh] text-[#6E7583] text-[20px] leading-[30px]">
                    <li>
                      KT-AivleSchool (Big_Project) <br />
                      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;최우수상
                    </li>
                  </p>
                </div>
                <div className="flex flex-col">
                  <div className="flex">
                    <div className="w-[1.5vw] h-[1.5vw] ">
                      <img src="/certi.png" className="object-cover" />
                    </div>
                    <p className="ml-[2vw] font-PretendSemiBold text-[26px] leading-6">
                      자격증
                    </p>
                  </div>
                  <p className="mt-[2vh] text-[#6E7583] text-[20px] leading-[30px]">
                    <li>정보처리기사 ()</li>
                    <li>Aice-association ()</li>
                    <li>컴퓨터활용능력 1급 ()</li>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div id="part-3">
          <div className="w-[73.96vw] flex flex-col items-center">
            <img
              src="../assets/icon/icon5.png"
              className="mt-[249px] object-none"
            />
            <p className="w-[620px] inline-block font-PretendBold text-[56px] leading-[80px] mt-[50px] text-center">
              샌드고의 다양한
              <br />
              기능들을 살펴보세요
            </p>
            <p className="mt-[24px] text-[#5C5C5C] text-[26px]">
              고객님들의 입장에서 고민하였습니다.
            </p>
            <div className="w-full min-w-[1430px] mt-[96px] flex justify-between">
              <div className="w-[32.6vw] min-w-[626px] h-[597px] flex flex-col justify-between bg-[#F8F9FA] rounded-[25px] pl-[2.81vw] pt-[72px]">
                <div>
                  <p className="font-PretendBold text-[34px]">
                    자주 전송하는 내용이 있나요?
                  </p>
                  <p className="font-PretendBold text-[#727B88] text-[34px] leading-[48px]">
                    템플릿으로 메시지 내용을
                    <br />
                    저장하여 간편하게 전송하세요.
                  </p>
                </div>
                <img src="../assets/mainPageImage/main7.png" />
              </div>
              <div className="w-[39.06vw] min-w-[750px] h-[597px] flex flex-col justify-between bg-[#E9EBFD] rounded-[25px] pl-[2.81vw] pt-[72px]">
                <div>
                  <p className="font-PretendBold text-[34px] bg-gradient-to-r from-[#7F3ADD] to-[#6264F6] text-transparent bg-clip-text">
                    크레딧 구매 시, 보너스 크레딧 증정
                  </p>
                  <p className="font-PretendBold text-[#7079CB] text-[34px]">
                    크레딧 상품을 구매하면 상품 별<br />
                    보너스 크레딧을 증정합니다
                  </p>
                </div>
                <div>
                  <img
                    src="../assets/mainPageImage/main8.png"
                    className="object-none"
                  />
                </div>
              </div>
            </div>
            <div className="w-full min-w-[1430px] mt-[40px] flex justify-between">
              <div className="w-[44.53vw] min-w-[855px] h-[720px] flex flex-col justify-between bg-[#DBE5FF] rounded-[25px] pl-[2.81vw] pt-[72px]">
                <div>
                  <p className="font-PretendBold text-[34px] text-[#375984]">
                    전송 후 바로 발송확인 기능
                  </p>
                  <p className="font-PretendBold text-[#698AB1] text-[34px] leading-[48px]">
                    메시지 전송 후 바로 발송현황 창에서
                    <br />
                    현재 메시지 전송 현황을 알려드립니다
                  </p>
                </div>
                <img src="../assets/mainPageImage/main9.png" />
              </div>
              <div className="w-[27.08vw] min-w-[520px] h-[720px] flex flex-col justify-between bg-[#FAFAEE] rounded-[25px] pl-[2.81vw] pt-[72px]">
                <div>
                  <p className="font-PretendBold text-[34px] text-[#6C3111]">
                    누르면 바로 전송완료
                  </p>
                  <p className="font-PretendBold text-[#6F6F6F] text-[34px] leading-[48px]">
                    누르자마자 수신인에게
                    <br />
                    바로 전달됩니다
                  </p>
                </div>
                <div>
                  <img
                    src="../assets/mainPageImage/main10.png"
                    className="object-none"
                  />
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
          비지니스 광고의 시작,
          <br />
          이제 샌드고와 함께 하세요
        </p>
        <button className="h-[65px] w-[206px] mt-[66px] bg-[#6250FF] rounded-[44px] text-[21px] text-white">
          메시지 바로가기
        </button>
      </div>
      <div id="part-5">carrer</div>
    </>
  );
}
