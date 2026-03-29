
import Accordion from "@/components/Accordion";
import Badge from "@/components/Badge";
import MainContainer from "@/components/MainContainer";
import { markdownify } from "@/lib/utils/textConverter";
import type { Button as ButtonType, FAQType } from "@/types/index";
import { useState } from "react";

interface PageData {
  notFound?: boolean;
  content?: string;
  frontmatter: {
    enable: boolean;
    title: string;
    subtitle?: string;
    badge?: string;
    button: ButtonType;
    faq_list: Array<FAQType>;
  };
}
const FAQ = ({ data }: { data: PageData }) => {
  const { enable, badge, title, subtitle, faq_list } = data.frontmatter;
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const handleToggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };
  return (
    enable && (
      <section>
        <MainContainer>
          <div className="container-padding-y container-padding-x">
            <div className="grid lg:grid-cols-2 gap-y-12">
              <div className="text-center lg:text-left">
                <div className="xl:w-4/6">
                  {badge && <Badge>{badge}</Badge>}
                  <h2
                    className="text-h1 font-medium"
                    dangerouslySetInnerHTML={markdownify(title)}
                  />
                  {subtitle && <p className="text-lg mt-4">{subtitle}</p>}
                </div>
              </div>

              <div className="rounded-2xl p-6 flex flex-col gap-y-2.5">
                {faq_list.map((faq: FAQType, index: number) => (
                  <Accordion
                    key={index}
                    question={faq.question}
                    answer={faq.answer}
                    isOpen={openIndex === index}
                    onToggle={() => handleToggle(index)}
                  />
                ))}
              </div>
            </div>
          </div>
        </MainContainer>
      </section>
    )
  );
};

export default FAQ;
