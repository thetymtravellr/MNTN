import { ArrowRightIcon } from "@heroicons/react/outline";
import Image from "next/image";
import Link from "next/link";

const Content = ({ content, index }) => {
  const { id,tinyTitle, title, description, img } = content;
  return (
    <section className="max-w-5xl mx-auto flex items-center md:space-x-24 md:space-y-0 space-y-6 md:flex-row flex-col">
      {index % 2 === 0 ? (
        <>
          <div className="md:w-2/3 w-4/5 px-6">
            <div className="flex items-center space-x-2 text-yellow-900 mb-6">
              <div className="w-16 h-[2px] bg-yellow-900"></div>
              <p className=" text-xs font-bold uppercase tracking-widest block">
                {tinyTitle}
              </p>
            </div>
            <h2 data-sr-id={`0${id}`} className={`title before:content-[${'5'}] relative text-5xl mb-4 font-light`}>
              {title}
            </h2>
            <p>{description}</p>
            <Link href="/">
              <a className="flex items-center text-yellow-900 mt-4">
                read more <ArrowRightIcon className="w-5 ml-2" />
              </a>
            </Link>
          </div>
          <div className="w-1/2">
            <picture className="relative">
              <Image
                src={img}
                alt={title}
                width="100%"
                height="100%"
                layout="responsive"
                objectFit="contain"
              />
            </picture>
          </div>
        </>
      ) : (
        <>
          <div className="w-1/2 order-2 md:order-1">
            <picture className="relative">
              <Image
                src={img}
                alt={title}
                width="100%"
                height="100%"
                layout="responsive"
                objectFit="contain"
              />
            </picture>
          </div>
          <div className="md:w-2/3 w-4/5 px-10 order-1 md:order-2 ">
            <div className="flex items-center space-x-2 text-yellow-900 mb-6">
              <div className="w-16 h-[2px] bg-yellow-900"></div>
              <p className=" text-xs font-bold uppercase tracking-widest block">
                {tinyTitle}
              </p>
            </div>
            <h2 data-sr-id={`0${id}`} className={`title before:content-[${id}] relative text-5xl mb-4 font-light`}>
              {title}
            </h2>
            <p>{description}</p>
            <Link href="/">
              <a className="flex items-center text-yellow-900 mt-4">
                read more <ArrowRightIcon className="w-5" />
              </a>
            </Link>
          </div>
        </>
      )}
    </section>
  );
};

export default Content;
