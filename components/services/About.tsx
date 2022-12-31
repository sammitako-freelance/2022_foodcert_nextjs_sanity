"use client";
import { ServicePage } from "../../typings";
import Divider from "../Divider";
import DocumentList from "./DocumentList";
import LabelList from "./LabelList";

type Props = {
  service: ServicePage[];
};

const About = ({ service }: Props) => {
  console.log(service);
  const contentContainer = "relative pt-[10px]";
  const contentBorder =
    "before:content-[''] before:border-t-custom-blue before:border-t-[4px] before:absolute before:left-[47%] before:md:left-0 before:top-0 before:w-[20px]";
  const contentContainerCenter = "relative pb-[10px]";
  const contentBorderCenter =
    "after:content-[''] after:border-b-custom-blue after:border-b-[4px] after:absolute after:left-[48%] after:-bottom-1 after:md:-bottom-1 after:w-[20px]";
  const title = "패킹 리스트";
  const subTitle =
    "판매자 주소, 수하인 주소, 수하인과 판매사의 조회번호, 운송 물품 종류, 수량과 단가 등";
  const labelShort = "제품 (식품) 이름";
  const labelLong =
    "영양 성분표 (감미료, 카페인, 알코올, 글리시리진 산 혹은 감초, 암모늄 염을 포함하고 있는 제품군일 경우, 규정에 나와 있는 추가 정보를 표기)";
  const arr = [0, 1, 2, 3, 4, 5, 6, 7];
  const label = [0, 1, 2, 3, 4];
  return (
    <section>
      {/* HERO BACKGROUND */}
      <div className="pt-10 md:pt-14 h-[200px] md:h-[300px] bg-cover bg-no-repeat	bg-center bg-[url('https://cdn.sanity.io/images/4k25zhng/production/d3ec2d233309a8daff9e59ff9b45139a69f48964-6000x3376.jpg')] opacity-70">
        <div
          id="content-container"
          className="mt-20 mb-14 tracking-widest leading-relaxed mx-auto w-5/6 items-center justify-center h-full"
        >
          <p id="content-line" className="text-2xl font-bold text-custom-beige">
            Services
          </p>
        </div>
      </div>
      <div className="bg-custom-beige bg-opacity-50 w-full py-20">
        <div className="w-8/12 mx-auto">
          {/* TITLE */}
          <div
            className={`flex flex-col md:flex-row ${contentContainer} mb-20`}
          >
            <div
              className={`${contentBorder} mx-auto md:justify-start mb-10 md:mb-0 md:basis-1/3 font-bold text-lg text-custom-blue tracking-widest`}
            >
              EFSA
            </div>
            <div className="md:basis-2/3">
              <div className="font-bold">
                수입식품을 포함하여 EU 회원국 내 유통되는 식품은 EU 규정에 따라
                위생 기준, 라벨링 규정, 오염물질 허용기준을 준수해야 하며 식품과
                접촉하는 물질의 경우에도 사용 조건을 충족해야 합니다.
              </div>
              <ul className="text-custom-dark-gray text-sm list-disc pl-5 pt-6 space-y-1">
                <li>
                  라벨링 규정은 EU 역내에서 유통되는 식품 전반에 적용되며 EU
                  수입 및 유통업체에 표시 의무가 있으나 국내 수출업체 또한 이를
                  사전에 확인할 필요가 있습니다.
                </li>
                <li>
                  {" "}
                  라벨 표기 시 해당 제품이 판매되는 국가의 공용어를 반드시
                  사용해야 합니다.
                </li>
                <li>
                  자세한 사항은 유럽 연합 집행 위원회 홈페이지를 참고하십시오.
                </li>
              </ul>
            </div>
          </div>
          {/* DOCUMENTATION TITLE */}
          <div
            className={`flex flex-col md:flex-row mb-10 ${contentContainer}`}
          >
            <div
              className={`${contentBorder} mx-auto md:justify-start mb-10 md:mb-0 md:basis-1/3 font-bold text-lg text-custom-blue tracking-widest`}
            >
              필수서류
            </div>
            <div className="md:basis-2/3">
              <div className="text-custom-dark-gray text-sm">
                제조사가 EU가 아닌 경우, 모든 안전과 기준 부합 문제의 책임은
                수입사에 있습니다. 일반적으로 동물원료 제품과 식물 원료 제품,
                혼합 제품의 필요조건은 상이하여, 시작 단계에 해당 제품을
                분석하는 것이 항상 중요합니다. 마늘이나 HEMP 같이 추가 제한사항
                해당 제품 엔 주의를 요하며 가급적 유럽내 테스트를 권장드립니다.
              </div>
            </div>
          </div>
          {/* DOCUMENTATION LIST */}
          <Divider />
          <div className="grid grid-cols-2 md:grid-cols-3 gap-2 md:gap-16">
            {arr.map((idx) => (
              <div className="">
                <DocumentList
                  number={idx + 1}
                  title={title}
                  subTitle={subTitle}
                />
              </div>
            ))}
          </div>
          <Divider />

          {/* LABELING */}
          <div className={`flex flex-col mt-20 ${contentContainerCenter}`}>
            <div
              className={`${contentBorderCenter} text-center font-bold text-lg text-custom-blue tracking-widest`}
            >
              필수 표기 정보
            </div>
          </div>
          <div className="uppercase text-sm text-custom-dark-gray mx-auto text-center pt-6 mb-20 tracking-wider">
            LABELING
          </div>
          <div className="text-sm text-custom-blue font-bold pb-5 flex justify-end">
            <div className="basis-11/12 text-sm text-custom-black mr-5 sm:mr-3 md:mr-0 leading-relaxed invisible">
              INVISIBLE
            </div>
            <div className="basis-1/12">
              <div className="flex justify-center">
                <p className="break-normal">체크</p>
              </div>
            </div>
          </div>
          <div className="space-y-3 mb-3">
            {label.map((idx) => (
              <LabelList label={labelShort} />
            ))}
          </div>
          <div className="space-y-3">
            {label.map((idx) => (
              <LabelList label={labelLong} />
            ))}
          </div>
        </div>
      </div>
      <style jsx>{`
        /* 
      https://www.w3docs.com/snippets/css/how-to-limit-border-length-with-css.html
      */
        #content-container {
          position: relative;
          padding-top: 10px;
        }
        #content-line:before {
          content: "";
          border-top: #f1f1e7 4px solid;
          position: absolute;
          left: 0;
          top: 0;
          width: 20px;
        }
      `}</style>
    </section>
  );
};

export default About;
