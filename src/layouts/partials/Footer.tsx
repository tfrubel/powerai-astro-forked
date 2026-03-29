
import Logo from "@/components/Logo";
import Social from "@/components/Social";
import config from "@/config/config.json";
import menu from "@/config/menu.json";
import social from "@/config/social.json";
import { markdownify } from "@/lib/utils/textConverter";
import { motion } from "motion/react";
import {
  fadeInUpVariants,
  staggerContainerVariants,
  staggerItemVariants,
} from "@/lib/animations";

const Footer = () => {
  const { copyright } = config.params;
  const { footer_company, footer_legal, footer_resource } = menu;

  return (
    <footer className="pt-25">
      <div className="container">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "0px", amount: 0.05 }}
          variants={staggerContainerVariants}
          className="grid md:grid-cols-6 gap-y-12  relative z-1"
        >
          <motion.div variants={staggerItemVariants} className="md:col-span-3">
            <Logo />
            <p className="text-gray mb-10 mt-3 md:w-2/5">
              {config.params.footer_text}
            </p>

            <ul>
              <li className="mb-2">
                <a
                  href={`mailto:${config.params.mail}`}
                  className="text-text hover:text-primary transition text-lg"
                >
                  {config.params.mail}
                </a>
              </li>
              <li className="mb-2">
                <a
                  href={`tel:${config.params.phone}`}
                  className="text-text hover:text-primary transition text-lg"
                >
                  {config.params.phone}
                </a>
              </li>
            </ul>
          </motion.div>

          <motion.div variants={staggerItemVariants} className="md:col-span-3">
            <div className="grid sm:grid-cols-3 gap-y-10 sm:gap-y-6">
              <div>
                <h3 className="text-xl font-medium mb-10">Company</h3>
                <ul className="flex flex-col gap-y-3">
                  {footer_company.map((item, index) => (
                    <li key={index}>
                      <a
                        href={item.url}
                        className="text-gray hover:text-primary transition"
                      >
                        {item.name}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <h3 className="text-xl font-medium mb-10">Resources</h3>
                <ul className="flex flex-col gap-y-3">
                  {footer_resource.map((item, index) => (
                    <li key={index}>
                      <a
                        href={item.url}
                        className="text-gray hover:text-primary transition"
                      >
                        {item.name}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <h3 className="text-xl font-medium mb-10">Legal</h3>
                <ul className="flex flex-col gap-y-3">
                  {footer_legal.map((item, index) => (
                    <li key={index}>
                      <a
                        href={item.url}
                        className="text-gray hover:text-primary transition"
                      >
                        {item.name}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </motion.div>
        </motion.div>

        {/* bottom footer */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "0px", amount: 0.05 }}
          variants={fadeInUpVariants}
          className="lg:sticky bottom-0 z-0 relative"
        >
          <h1 className="footer-title leading-tight mt-12 lg:mt-20 ">
            {config.site.title}
          </h1>
          <div className="flex justify-between lg:-translate-y-12 items-center flex-col sm:flex-row gap-y-6 py-6">
            <p
              className="text-text text-sm"
              dangerouslySetInnerHTML={markdownify(copyright)}
            />
            <Social source={social.main} className="social-icons" />
          </div>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;
