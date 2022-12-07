import { useState } from "react";
import styled from "styled-components";
import { SiJavascript, SiReact, SiNextdotjs } from "react-icons/si";
import { HiOutlineChevronDoubleDown } from "react-icons/hi";
import { IconContext } from "react-icons/lib";
import { motion } from "framer-motion";
import Link from "next/link";

import { useTheme } from "../../../utils/provider";
import { SITE_THEME, DEVICES } from "../../../utils/variables";
import styles from "./herotext.module.css";

const HeroTextCont = styled.div`
  width: 100%;
  font-size: 3vw;
  height: calc(100vh - 100px);
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  justify-content: center;
  text-align: center;
  align-items: center;
  overflow: hidden;

  @media (min-width: ${DEVICES.laptop}) {
    align-items: flex-start;
  }
`;

const TextCont = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  @media (min-width: ${DEVICES.laptop}) {
    width: 60%;
    text-align: left;
    align-items: flex-start;
  }
  @media (min-width: ${DEVICES.desktop}) {
    width: 60%;
  }
`;

const FirstLine = styled.h2`
  font-size: clamp(30px, 2em, 70px);
  font-weight: 400;
  margin: 0;
  color: ${(props) => props.firstColor};
`;

const SecondLine = styled.h1`
  font-size: clamp(40px, 3em, 80px);
  margin: 10px 0;
  color: ${(props) => props.secondColor};
`;

const IconCont = styled.div`
  width: 60%;
  min-width: 150px;
  max-width: 350px;
  display: flex;
  justify-content: space-between;
  margin: 20px 0;
`;

const IconWrapper = styled.div`
  color: ${(props) => props.iconColor};
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 50px;
  transition: color 0.25s;
  &:hover {
    color: ${(props) => props.iconHoverColor};
    background-color: ${(props) => props.iconBgColor};
  }
`;

const Description = styled.p`
  font-size: clamp(14px, 1.5em, 24px);
  margin: 0 0 20px 0;
  color: ${(props) => props.descriptionColor};
`;

const ArrowCont = styled(motion.div)`
  width: 50px;
  height: 50px;
  align-self: center;
  position: absolute;
  bottom: 40px;
  color: ${(props) => props.arrowcolor};
  transition: color 0.25s;
  cursor: pointer;

  &:hover {
    color: ${(props) => props.arrowhovercolor};
  }
`;

const FloatingLogoCont = styled.div`
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: absolute;
  top: 50%;
  transform: translate(0, -50%);
  max-width: 300px;
  display: none;
  width: 30%;
  right: 75px;
  height: 400px;

  @media (min-width: ${DEVICES.laptop}) {
    display: flex;
  }

  @media (min-width: ${DEVICES.desktop}) {
    height: 500px;
  }
`;

const FloatingLogo = styled(motion.img)`
  position: absolute;
  width: 80%;
  aspect-ratio: 1/1;
  z-index: -2;
  opacity: 0.5;

  @media (min-width: ${DEVICES.desktop}) {
    width: 100%;
  }
`;

const LogoShadow = styled(motion.div)`
  position: absolute;
  bottom: 0;
  border-radius: 200px;
  filter: blur(10px);
  background-color: black;
  z-index: -3;

  @media (min-width: ${DEVICES.laptop}) {
    width: 60%;
    height: 5%;
  }

  @media (min-width: ${DEVICES.desktop}) {
    width: 60%;
    height: 10%;
  }
`;

const ICONS = [
  {
    key: "javascript",
    element: SiJavascript,
    class: "iconJavascript",
    hoverColor: "#f8dc2c",
  },
  {
    key: "react",
    element: SiReact,
    class: "iconReact",
    hoverColor: "#06d7fe",
  },
  {
    key: "nextdotjs",
    element: SiNextdotjs,
    class: "iconNextdotjs",
    hoverColor: "black",
    iconBgColor: "white",
  },
];

const ArrowVariants = {
  initial: {
    y: 0,
  },
  active: {
    y: [-5, 5],
    transition: {
      repeat: Infinity,
      repeatType: "mirror",
      duration: 1,
    },
  },
};

const LogoVariants = {
  initial: {
    y: 0,
  },
  active: {
    y: [-20, 20],
    transition: {
      repeat: Infinity,
      repeatType: "mirror",
      duration: 2,
    },
  },
};

const ShadowVariants = {
  initial: {
    width: 0,
    height: 0,
  },
  active: {
    width: ["20%", "50%"],
    height: ["2%", "6%"],
    transition: {
      repeat: Infinity,
      repeatType: "mirror",
      duration: 2,
    },
  },
};

const MotionContainer = styled(motion.div)`
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  justify-content: center;
  text-align: center;
  align-items: center;
  overflow: hidden;
  height: 100%;

  @media (min-width: ${DEVICES.laptop}) {
    align-items: flex-start;
  }
`;

const MotionItem = styled(motion.div)`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;

  @media (min-width: ${DEVICES.laptop}) {
    align-items: flex-start;
  }
`;

export default function HeroText() {
  const { theme } = useTheme();

  const container = {
    visible: {
      opacity: 1,
      transition: {
        ease: "easeOut",
        duration: 1,
        staggerChildren: 0.5,
      },
    },
    hidden: {
      opacity: 0,
    },
  };

  const item = {
    hidden: { opacity: 0, x: -50 },
    visible: {
      opacity: 1,
      x: 0,
      y: 0,
      transition: { ease: "easeOut", duration: 1 },
    },
  };

  return (
    <HeroTextCont>
      <MotionContainer
        variants={container}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        style={{ width: "100%" }}
      >
        <FloatingLogoCont>
          <FloatingLogo
            src="/logo.svg"
            initial="initial"
            animate="active"
            variants={LogoVariants}
          />
          <LogoShadow
            intial="initial"
            animate="active"
            variants={ShadowVariants}
          />
        </FloatingLogoCont>
        <TextCont>
          <MotionItem variants={item}>
            <FirstLine firstColor={SITE_THEME[theme].text}>
              Ahoy, I am
            </FirstLine>
          </MotionItem>
          <MotionItem variants={item}>
            <SecondLine secondColor={SITE_THEME[theme].strong}>
              Danny Nguyen
            </SecondLine>
          </MotionItem>
          <MotionItem variants={item}>
            <IconCont>
              {ICONS.map((icon) => {
                return (
                  <IconContext.Provider
                    key={icon.key}
                    value={{ className: styles.heroIcon }}
                  >
                    <IconWrapper
                      iconColor={SITE_THEME[theme].text}
                      iconHoverColor={icon.hoverColor}
                      iconBgColor={icon.iconBgColor}
                    >
                      <icon.element />
                    </IconWrapper>
                  </IconContext.Provider>
                );
              })}
            </IconCont>
          </MotionItem>
          <MotionItem variants={item}>
            <Description descriptionColor={SITE_THEME[theme].text}>
              A front-end developer with a passion for bringing great designs
              and ideas to life.
            </Description>
            <Description descriptionColor={SITE_THEME[theme].text}>
              Currently working on personal projects while looking for job
              opportunities.
            </Description>
          </MotionItem>
        </TextCont>
        <ArrowCont
          initial="initial"
          animate="active"
          variants={ArrowVariants}
          whileTap={{ scale: 0.8 }}
          arrowcolor={SITE_THEME[theme].text}
          arrowhovercolor={SITE_THEME[theme].strong}
        >
          <Link href="#projects" passHref>
            <a>
              <HiOutlineChevronDoubleDown size="100%" />
            </a>
          </Link>
        </ArrowCont>
      </MotionContainer>
    </HeroTextCont>
  );
}
