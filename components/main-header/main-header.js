"use client";

import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import Image from "next/image";
import logoImg from "@/assets/logo.png";
import MainHeaderBackground from "./main-header-background";
import classes from "./main-header.module.css";

export default function MainHeader() {
  const path = usePathname();
  return (
    <>
      <MainHeaderBackground />
      <header className={classes.header}>
        <Link href="/" className={classes.logo}>
          <Image
            src={logoImg}
            alt="an image with food items in a plate"
            priority
          />
          nextLevel Food
        </Link>

        <nav className={classes.nav}>
          <ul>
            <li>
              <Link
                href="/meals"
                className={
                  path.startsWith("/meals") ? classes.active : undefined
                }
              >
                Browse meals
              </Link>
            </li>
            <li>
              <Link
                href="/community"
                className={path === "/community" ? classes.active : undefined}
              >
                Foodies Community
              </Link>
            </li>
          </ul>
        </nav>
      </header>
    </>
  );
}
