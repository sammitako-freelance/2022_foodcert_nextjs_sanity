"use client";
import { PortableText } from "@portabletext/react";
import LinkButton from "../LinkButton";
import { FaFacebook, FaTwitter, FaLinkedinIn } from "react-icons/fa";
import { News } from "../../typings";
import { StyleBodyContent } from "../StyleBodyContent";
import { useState } from "react";
import { ArrowDownTrayIcon, ShareIcon } from "@heroicons/react/24/solid";
import JSZip from "jszip";
import JSZipUtils from "jszip-utils";
import { saveAs } from "file-saver";
import toast, { Toaster } from "react-hot-toast";

type Props = {
  data: News;
};

const NoticeItem = ({ data }: Props) => {
  const [showModal, setShowModal] = useState(false);
  const contentContainer = "relative pt-[10px]";
  const contentBorder =
    "before:content-[''] before:border-t-custom-blue before:border-t-[4px] before:absolute before:left-[47%] before:md:left-0 before:top-0 before:w-[20px]";
  const backgroundColor =
    data?.categories?.title?.toLowerCase() === "efsa"
      ? "bg-custom-blue"
      : "bg-custom-green";

  // SHARE
  const baseUrl = `${process.env.NEXT_PUBLIC_BASE_URL}/notice/`;
  let postUrl = baseUrl.concat(data.slug.current);
  let hashtag = "#houseboutique";
  let quote = "Beauty & Health | 최고의 해외 진출 파트너 House Boutique";
  let title =
    data?.title !== undefined ? data?.title : "Foodcert - House Boutique";
  const copyCurrentUrl = (url: any) => {
    const el = document.createElement("input");
    el.value = url;
    document.body.appendChild(el);
    el.select();
    document.execCommand("copy");
    document.body.removeChild(el);
    document.body.style.overflow = "unset";

    toast.success("Current URL has been copied");
  };

  // FILE DOWNLOADER
  const downloadAll = () => {
    let zipFiles = [{ url: "", name: "" }];

    data.file?.map((f, idx) => {
      zipFiles.push({ url: `${data.fileURL[idx]}?dl=`, name: f.fileName });
    });
    data.imageFile?.map((f, idx) => {
      zipFiles.push({ url: `${data.imageURL[idx]}?dl=`, name: f.fileName });
    });
    zipFiles.shift();

    const zip = new JSZip();
    var count = 0;

    var zipFilename = "files-house-boutique.zip";

    zipFiles.forEach(function (file) {
      var filename = file.name;
      // loading a file and add it in a zip file
      JSZipUtils.getBinaryContent(file.url, function (err: any, data: any) {
        if (err) {
          throw err; // or handle the error
        }
        zip.file(filename, data, { binary: true });
        count++;
        if (count == zipFiles.length) {
          zip.generateAsync({ type: "blob" }).then(function (content) {
            saveAs(content, zipFilename);
          });
        }
      });
    });
  };

  return (
    <>
      <section>
        <Toaster
          toastOptions={{
            success: {
              iconTheme: {
                primary: "#DDE8E7",
                secondary: "#000231",
              },
            },
          }}
        />
        {/* HERO BACKGROUND */}
        <div className="pt-10 md:pt-14 h-[230px] md:h-[300px] bg-cover bg-no-repeat	bg-center bg-notice-item-background">
          <div
            id="content-container"
            className="mt-20 mb-14 tracking-widest leading-relaxed mx-auto w-5/6 items-center justify-center h-full"
          >
            <p
              id="content-line"
              className="text-2xl font-bold text-custom-beige"
            >
              Post
            </p>
          </div>
        </div>
        {/* TITLE */}
        <div className="bg-white">
          <div className="py-20 sm:py-24 w-5/6 mx-auto space-y-6 sm:space-y-10">
            <div className="text-center sm:text-left">
              <div
                className={`inline-block uppercase py-2 px-4 rounded-md text-sm text-custom-beige ${backgroundColor}`}
              >
                {data?.categories?.title}
              </div>
            </div>

            <p className="text-3xl sm:text-4xl font-bold">{data?.title}</p>
            <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center">
              <div className="flex space-x-10 text-sm">
                <div className="flex flex-col space-y-2">
                  <div className="text-gray-600">작성자</div>
                  <div className="text-custom-black font-bold">
                    {data?.author?.name}
                  </div>
                </div>
                <div className="flex flex-col space-y-2">
                  <div className="text-gray-600">작성일</div>
                  <div className="text-custom-black font-bold">
                    {data?.publishedAt}
                  </div>
                </div>
              </div>
              <div className="flex space-x-10 text-custom-black mt-10 sm:mt-0">
                <div className="hover:cursor-pointer">
                  <FaFacebook className="w-5 h-5" />
                </div>
                <div className="hover:cursor-pointer">
                  <FaTwitter className="w-5 h-5" />
                </div>
                <div className="hover:cursor-pointer">
                  <FaLinkedinIn className="w-5 h-5" />
                </div>
                <div
                  className="hover:cursor-pointer"
                  onClick={() => copyCurrentUrl(postUrl)}
                >
                  <ShareIcon className="w-5 h-5" />
                </div>
              </div>
            </div>
            {/* DOWNLOAD FILES */}
            {data?.file &&
              data?.imageFile &&
              data?.file?.length + data?.imageFile?.length > 0 && (
                <div className="">
                  <button
                    className="py-2 px-3 rounded-md hover:bg-red-400 hover:text-custom-beige text-red-400 font-bold border-2 border-red-400 hover:drop-shadow-md"
                    type="button"
                    onClick={() => setShowModal(true)}
                  >
                    <div className="flex text-sm space-x-2 items-center">
                      <ArrowDownTrayIcon className="w-5 h-5" />

                      <p>
                        다운로드 {data?.file?.length + data?.imageFile?.length}
                        개 파일
                      </p>
                    </div>
                  </button>
                  {/* MODAL */}
                  {showModal && (
                    <>
                      <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none mx-5">
                        <div className="relative w-auto my-6 mx-auto max-w-3xl">
                          {/*content*/}
                          <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                            {/*header*/}
                            <div className="flex items-start justify-between p-5 border-b border-solid border-slate-200 rounded-t">
                              <h3 className="text-3xl font-semibold">
                                Download{" "}
                                {data?.file?.length + data?.imageFile?.length}{" "}
                                {data?.file?.length +
                                  data?.imageFile?.length ===
                                1
                                  ? "File"
                                  : "Files"}
                              </h3>
                              <button
                                className="p-1 ml-auto bg-transparent border-0 text-black opacity-5 float-right text-3xl leading-none font-semibold outline-none focus:outline-none"
                                onClick={() => setShowModal(false)}
                              >
                                <span className="bg-transparent text-black opacity-5 h-6 w-6 text-2xl block outline-none focus:outline-none">
                                  ×
                                </span>
                              </button>
                            </div>
                            {/*body*/}
                            <div className="relative p-6 flex-auto divide-y-2 space-y-3">
                              {data?.file?.map((f, idx) => (
                                <div
                                  key={f._id}
                                  className=" text-slate-500 text-lg leading-relaxed pt-3"
                                >
                                  <a
                                    href={`${data?.fileURL[idx]}?dl=`}
                                    className="hover:text-emerald-500"
                                  >
                                    {f.fileName}
                                  </a>
                                </div>
                              ))}
                              {data?.imageFile?.map((i, idx) => (
                                <div
                                  key={i._id}
                                  className=" text-slate-500 text-lg leading-relaxed pt-3"
                                >
                                  <a
                                    href={`${data?.imageURL[idx]}?dl=`}
                                    className="hover:text-emerald-500"
                                  >
                                    {i.fileName}
                                  </a>
                                </div>
                              ))}
                            </div>
                            {/*footer*/}
                            <div className="flex items-center justify-end p-6 border-t border-solid border-slate-200 rounded-b mt-3">
                              <button
                                className="text-red-400 background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                                type="button"
                                onClick={() => setShowModal(false)}
                              >
                                Close
                              </button>
                              <button
                                className="bg-emerald-500 text-white active:bg-emerald-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                                type="button"
                                onClick={downloadAll}
                              >
                                Download All
                              </button>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
                    </>
                  )}
                </div>
              )}
          </div>
        </div>
        {/* CONTENT */}
        <div className="bg-custom-light-gray">
          <div className="py-16 sm:py-24 w-5/6 md:w-4/6 mx-auto">
            <PortableText value={data?.body} components={StyleBodyContent} />
          </div>
        </div>
        <div className="flex justify-center items-center my-12 sm:my-16 bg-white">
          <LinkButton
            pathLink="/notice"
            title="View All"
            backgroundColor="bg-custom-black"
            textColor="text-custom-beige"
            borderColor=""
          />
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
    </>
  );
};

export default NoticeItem;
