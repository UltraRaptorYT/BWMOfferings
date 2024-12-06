import buddhaImg from "@/assets/buddha.jpg";
import VerticalMarquee from "@/components/Marquee";

export default function Home() {
  return (
    <div className="flex mx-auto justify-around items-center h-full overflow-hidden gap-5 px-6">
      <VerticalMarquee
        className="w-[20rem]"
        scrollSpeed={1.5}
        content={[
          {
            value: "RM165,000(S$50,000)以上",
            sponsors: [
              "林某某",
              "陈某某",
              "黄某某",
              "刘某某",
              "古某某",
              "Benjamin",
            ],
          },
          {
            value: "RM99,000(S$30,000)",
            sponsors: [
              "林某某",
              "陈某某",
              "黄某某",
              "刘某某",
              "古某某",
              "Benjamin",
            ],
          },
          {
            value: "RM66,000(S$20,000)",
            sponsors: [
              "林某某",
              "陈某某",
              "黄某某",
              "刘某某",
              "古某某",
              "Benjamin",
            ],
          },
        ]}
      />
      <div>
        <img src={buddhaImg} alt="Buddha" className="w-full h-auto" />
      </div>
      <VerticalMarquee
        className="w-[20rem]"
        scrollSpeed={1.5}
        content={[
          {
            value: "RM16,500(S$5000)",
            sponsors: [
              "林某某",
              "陈某某",
              "黄某某",
              "刘某某",
              "古某某",
              "Benjamin",
            ],
          },
          {
            value: "RM33,000(S$10,000)",
            sponsors: [
              "林某某",
              "陈某某",
              "黄某某",
              "刘某某",
              "古某某",
              "Benjamin",
            ],
          },
        ]}
      />
    </div>
  );
}
