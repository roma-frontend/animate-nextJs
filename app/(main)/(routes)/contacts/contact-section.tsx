"use client";

import { motion, useInView } from "framer-motion";

import FormPage from "@/components/forms/form";
import NavLink, {
  navLinks,
} from "@/components/navigation/_components/nav-links";
import Link from "next/link";
import { useRef } from "react";

const variants = {
  initial: {
    y: 500,
    opacity: 0,
  },
  animate: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.5,
      staggerChildren: 0.1,
    },
  },
};

const ContactSection = ({ id }: { id: string }) => {
  const ref = useRef<HTMLDivElement | null>(null);

  const isInView = useInView(ref, { margin: "-100px" });

  return (
    <motion.section
      id="Contacts"
      className="w-full flex items-center gap-[50px] py-[6vw] md:pt-[100px]"
      variants={variants}
      initial="initial"
      whileInView="animate"
      ref={ref}
    >
      <div className="max-w-[100%] md:max-w-[90%] xl:max-w-[90vw] 2xl:max-w-[80vw] w-full mx-auto px-[1.2rem] flex items-center md:items-start flex-col md:flex-row gap-[2rem]">
        <motion.div
          className="text-center md:text-left w-[100%] md:w-[50%] flex flex-col items-center md:items-start gap-[1rem]"
          variants={variants}
        >
          <motion.h1 className="text-center md:text-left text-[32px] lg:text-[70px] md:text-[50px] sm:text-[40px] leading-[88px]">
            {/* Կապ մեզ հետ */}
            Contact Us
          </motion.h1>
          <div className="max-w-fit text-center p-2">
            <Link
              // href="mailto:vanchsimonyan1992@mail.ru"
              href="#"
              className="text-[20px] flex flex-col text-center md:text-left gap-[10px] transition-all ease-linear hover:scale-[1.03]"
            >
              {/* Էլ․ հասցե */}
              [Email]
              <span className="text-sm font-normal">
                {/* vanchsimonyan1992@mail.ru */}
                @dev.com
              </span>
            </Link>
          </div>
          <div className="max-w-fit text-center p-2">
            <Link
              // href="https://maps.app.goo.gl/kooK99nEhonc95Sa7"
              href="#"
              className="text-[20px] flex flex-col text-center md:text-left gap-[10px] transition-all ease-linear hover:scale-[1.03]"
              target="_blank"
            >
              {/* Հասցե */}
              Address
              <span className="text-sm font-normal">
                {/* ք․ Երևան, Նորք-Մարաշ, 13-րդ փողոց */}
                [Address]
              </span>
            </Link>
          </div>
          <div className="max-w-fit text-center p-2">
            <Link
              href="tel:37433087788"
              className="text-[20px] flex flex-col text-center md:text-left gap-[10px] transition-all ease-linear hover:scale-[1.03]"
            >
              {/* Հեռախոս */}
              Phone
              <span className="text-sm font-normal">
                {/* +374 33 087 788 */}
                +123 456 789
              </span>
            </Link>
          </div>
          <div className="block md:hidden items-center md:w-auto mr-0 md:mr-2">
            <ul className="flex space-x-4 items-center justify-center">
              {navLinks.map((link, index) => (
                <li key={index} className="grid cursor-pointer">
                  <NavLink
                    href={link.href}
                    title={link.title}
                    src={link.src}
                    target="_blank"
                  />
                </li>
              ))}
            </ul>
          </div>
        </motion.div>
        <div className="relative w-[100%] md:w-[50%] flex flex-col gap-[20px]">
          <motion.div
            className="absolute w-full m-auto stroke-[#0B5C6F]"
            initial={{ opacity: 1 }}
            whileInView={{ opacity: 0 }}
            transition={{ delay: 0.5, duration: 0.5 }}
            viewport={{ once: true }}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="450px"
              height="450px"
              fill="#000000"
              version="1.1"
              id="Layer_1"
              viewBox="0 0 503.497 503.497"
              className="max-w-[450px] w-full h-auto mx-auto"
            >
              <g transform="translate(0 -1)">
                <g>
                  <g>
                    <motion.path
                      strokeWidth={0.7}
                      fill="none"
                      initial={{ pathLength: 0 }}
                      animate={isInView && { pathLength: 1 }}
                      transition={{ duration: 3 }}
                      d="M439.405,71.786h-48.552c-1.218,0-2.207,0.989-2.207,2.207v13.241c0,1.218,0.989,2.207,2.207,2.207h48.552     c1.218,0,2.207-0.989,2.207-2.207V73.993C441.612,72.775,440.624,71.786,439.405,71.786z"
                    />
                    <motion.path
                      strokeWidth={0.7}
                      fill="none"
                      initial={{ pathLength: 0 }}
                      animate={isInView && { pathLength: 1 }}
                      transition={{ duration: 3 }}
                      d="M503.172,62.958c0-11.829-4.281-22.034-12.729-30.323c-23.773-23.322-73.56-22.607-75.379-22.643     c-2.066-0.018-51.747-0.68-75.441,22.599c-6.321,6.197-10.311,13.471-11.926,21.689c-32.839,2.481-62.535,19.933-80.525,44.57     v-33.13c0-25.865-21.036-46.901-46.892-46.901H46.892C21.036,18.82,0,39.856,0,65.721v382.897     c0,25.856,21.036,46.892,46.892,46.892h140.359c4.714,0,9.181-2.039,12.244-5.623c3.143-3.655,4.511-8.519,3.769-13.33     c-0.53-3.54-0.132-7.15,1.174-10.743c2.189-5.976,7.071-10.849,13.038-13.038c3.602-1.306,7.221-1.704,10.734-1.174     c4.793,0.733,9.693-0.627,13.339-3.769c3.584-3.063,5.623-7.53,5.623-12.244V147.314c2.41-40.386,41.366-70.921,79.448-75.211     c-0.477,29.025,0.812,109.815,28.451,138.628c2.154,2.251,4.476,4.052,6.859,5.623v31.982c0,2.348,0.927,4.59,2.586,6.241     l13.153,13.153l-14.813,29.625c-1.042,2.092-1.209,4.52-0.468,6.735l16.278,48.878l-15.254,22.881     c-2.074,3.116-1.969,7.203,0.282,10.196l23.508,31.338l-15.819,39.539c-1.483,3.708-0.291,7.936,2.904,10.337l35.31,26.483     c1.571,1.183,3.434,1.766,5.297,1.766s3.725-0.583,5.297-1.766l35.31-26.483c3.196-2.401,4.387-6.63,2.904-10.337l-15.819-39.539     l23.508-31.338c2.251-2.993,2.357-7.08,0.282-10.196l-15.254-22.881l16.278-48.878c0.742-2.216,0.574-4.643-0.468-6.735     l-14.813-29.625l13.153-13.153c1.66-1.651,2.586-3.893,2.586-6.241v-31.841c2.481-1.598,4.882-3.434,7.115-5.764     C506.986,177.372,503.649,74.24,503.172,62.958z M203.034,407.234c0,24.338-19.8,44.138-44.138,44.138H88.276     c-24.338,0-44.138-19.8-44.138-44.138V107.096c0-24.338,19.8-44.138,44.138-44.138h70.621c24.338,0,44.138,19.8,44.138,44.138     V407.234z M450.207,244.683l-15.069,15.069c-2.692,2.692-3.354,6.797-1.66,10.187l16.022,32.044l-16.49,49.496     c-0.865,2.586-0.485,5.42,1.024,7.689l14.186,21.283l-22.731,30.314c-1.854,2.463-2.278,5.711-1.139,8.572l15.148,37.862     l-24.602,18.45l-24.602-18.45l15.148-37.862c1.139-2.86,0.715-6.109-1.139-8.572l-22.731-30.314l14.186-21.283     c1.509-2.269,1.889-5.102,1.024-7.689l-16.49-49.496l16.022-32.044c1.695-3.39,1.033-7.495-1.66-10.187l-15.069-15.069v-22.828     h0.247h26.236v105.931c0,4.882,3.946,8.828,8.828,8.828s8.828-3.946,8.828-8.828V221.855h26.483V244.683z M459.264,87.234     c0,10.946-8.907,19.862-19.862,19.862H390.85c-10.946,0-19.862-8.916-19.862-19.862V73.992c0-10.946,8.916-19.862,19.862-19.862     h48.552c10.955,0,19.862,8.916,19.862,19.862V87.234z"
                    />
                    <motion.path
                      strokeWidth={0.7}
                      fill="none"
                      initial={{ pathLength: 0 }}
                      animate={isInView && { pathLength: 1 }}
                      transition={{ duration: 3 }}
                      d="M158.897,80.61H88.276c-14.601,0-26.483,11.882-26.483,26.483v141.241h123.586V107.092     C185.379,92.492,173.497,80.61,158.897,80.61z M167.724,205.855c0,8.819-7.177,15.996-15.996,15.996H95.444     c-8.819,0-15.996-7.177-15.996-15.996v-38.621c0-8.819,7.177-15.996,15.996-15.996h1.66v-26.492     c0-14.601,11.882-26.483,26.483-26.483s26.483,11.882,26.483,26.483v26.492h1.66c8.819,0,15.996,7.177,15.996,15.996V205.855z"
                    />
                    <motion.path
                      strokeWidth={0.7}
                      fill="none"
                      initial={{ pathLength: 0 }}
                      animate={isInView && { pathLength: 1 }}
                      transition={{ duration: 3 }}
                      d="M132.414,124.752c0-4.873-3.955-8.828-8.828-8.828c-4.873,0-8.828,3.955-8.828,8.828v26.483h17.655V124.752z"
                    />
                    <motion.rect
                      strokeWidth={0.7}
                      fill="none"
                      initial={{ pathLength: 0 }}
                      animate={isInView && { pathLength: 1 }}
                      transition={{ duration: 3 }}
                      x="97.103"
                      y="168.89"
                      width="52.966"
                      height="35.31"
                    />
                    <motion.rect
                      strokeWidth={0.7}
                      fill="none"
                      initial={{ pathLength: 0 }}
                      animate={isInView && { pathLength: 1 }}
                      transition={{ duration: 3 }}
                      x="97.103"
                      y="354.269"
                      width="52.966"
                      height="35.31"
                    />
                    <motion.path
                      strokeWidth={0.7}
                      fill="none"
                      initial={{ pathLength: 0 }}
                      animate={isInView && { pathLength: 1 }}
                      transition={{ duration: 3 }}
                      d="M61.793,407.23c0,14.61,11.882,26.492,26.483,26.492h70.621c14.601,0,26.483-11.882,26.483-26.492V265.989H61.793V407.23     z M79.448,352.614c0-8.819,7.177-15.996,15.996-15.996h1.66v-26.483c0-14.61,11.882-26.483,26.483-26.483     s26.483,11.873,26.483,26.483c0,4.873-3.946,8.819-8.828,8.819s-8.828-3.946-8.828-8.819c0-4.873-3.955-8.828-8.828-8.828     c-4.873,0-8.828,3.955-8.828,8.828v26.483h36.97c8.819,0,15.996,7.177,15.996,15.996v38.621c0,8.819-7.177,15.996-15.996,15.996     H95.444c-8.819,0-15.996-7.177-15.996-15.996V352.614z"
                    />
                  </g>
                </g>
              </g>
            </svg>
          </motion.div>
          <FormPage />
        </div>
      </div>
    </motion.section>
  );
};

export default ContactSection;
