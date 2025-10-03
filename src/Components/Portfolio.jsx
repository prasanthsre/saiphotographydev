import React, { useState, useEffect } from "react";
  import { useTheme } from "../Components/Contexts/ThemeContext.jsx";
  import { motion, AnimatePresence } from "framer-motion";
import { Heart, X, ChevronLeft, ChevronRight } from "lucide-react";
// If you want faster image loading
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";

import Footer from "./Footer.jsx";

// Local images
 import N1 from "../Components/Images/nature01.jpg";
import N2 from "../Components/Images/nature02.jpg";
import N3 from "../Components/Images/nature03.jpg";
import N4 from "../Components/Images/nature04.jpg";

 import F1 from "../Components/Images/f001.jpg";
import F2 from "../Components/Images/f002.jpg";
import F3 from "../Components/Images/f003.jpg";

import W60th1 from "../Components/Images/60w01.jpg";
import  W60th2 from "../Components/Images/60w02.jpg";
import W60th3 from "../Components/Images/60w03.jpg";

import BY01 from "../Components/Images/by01.jpg";
import BY02 from "../Components/Images/by02.jpg";
import BY03 from "../Components/Images/by03.jpg";
import BY04 from "../Components/Images/by04.jpg";
import BY05 from "../Components/Images/by05.jpg";
import BY06 from "../Components/Images/by06.jpg";
import BY07 from "../Components/Images/by07.jpg";
import BY08 from "../Components/Images/by08.jpg";
import BY09 from "../Components/Images/by09.jpg";
import BY10 from "../Components/Images/by10.jpg";
import BY11 from "../Components/Images/by11.jpg";
import BY12 from "../Components/Images/by12.jpg";
import BY13 from "../Components/Images/by13.jpg";
import BY14 from "../Components/Images/by14.jpg";
import BY15 from "../Components/Images/by15.jpg";
import BY16 from "../Components/Images/by16.jpg";

import BS01 from "../Components/Images/bs01.jpg";
import BS02 from "../Components/Images/bs02.jpg";
import BS03 from "../Components/Images/bs03.jpg";
import BS04 from "../Components/Images/bs04.jpg";
import BS05 from "../Components/Images/bs05.jpg";
import BS06 from "../Components/Images/bs06.jpg";
import BS07 from "../Components/Images/bs07.jpg";
import BS08 from "../Components/Images/bs08.jpg";
import BS09 from "../Components/Images/bs13.jpg";
import BS10 from "../Components/Images/bs10.jpg";
import BS11 from "../Components/Images/bs11.jpg";
import BS12 from "../Components/Images/bs12.jpg";

import BD01 from "../Components/Images/bd001.jpg";
import BD02 from "../Components/Images/bd002.jpg";
import BD03 from "../Components/Images/bd003.jpg";
import BD04 from "../Components/Images/bd004.jpg";
import BD05 from "../Components/Images/bd005.jpg";
 import BD07 from "../Components/Images/bd007.jpg";
import BD08 from "../Components/Images/bd008.jpg";
import BD09 from "../Components/Images/bd009.jpg";

import EG001 from "../Components/Images/eg001.jpg";
import EG002 from "../Components/Images/eg002.jpg";
import EG003 from "../Components/Images/eg003.jpg";
import EG004 from "../Components/Images/eg004.jpg";
import EG005 from "../Components/Images/eg005.jpg";
import EG006 from "../Components/Images/eg006.jpg";
import EG007 from "../Components/Images/eg007.jpg";
 import EG009 from "../Components/Images/eg009.jpg";
import EG010 from "../Components/Images/eg008.jpg";
 

import EP01 from "../Components/Images/ep001.jpg";
import EP02 from "../Components/Images/ep002.jpg";
import EP03 from "../Components/Images/ep003.jpg";
import EP04 from "../Components/Images/ep004.jpg";
import EP05 from "../Components/Images/ep005.jpg";
import EP06 from "../Components/Images/ep006.jpg";
import EP07 from "../Components/Images/ep007.jpg";
import EP08 from "../Components/Images/ep008.jpg";
import EP09 from "../Components/Images/ep009.jpg";
import EP10 from "../Components/Images/ep010.jpg";
import EP11 from "../Components/Images/ep011.jpg";
 
import MK001 from "../Components/Images/mk001.jpg";
import MK002 from "../Components/Images/mk002.jpg";
import MK003 from "../Components/Images/mk003.jpg";
import MK004 from "../Components/Images/mk004.jpg";
import MK005 from "../Components/Images/mk005.jpg";
import MK006 from "../Components/Images/mk006.jpg";
import MK007 from "../Components/Images/mk007.jpg";
import MK008 from "../Components/Images/mk008.jpg";
  
import MG01 from "../Components/Images/mg0001.jpg";
import MG02 from "../Components/Images/mg0002.jpg";
 import MG04 from "../Components/Images/mg0004.jpg";
import MG05 from "../Components/Images/mg0005.jpg";
import MG06 from "../Components/Images/mg0006.jpg";
import MG07 from "../Components/Images/mg0007.jpg";
import MG08 from "../Components/Images/mg0008.jpg";
import MG09 from "../Components/Images/mg0009.jpg";
import MG10 from "../Components/Images/mg0010.jpg";
import MG11 from "../Components/Images/mg0011.jpg";
import MG12 from "../Components/Images/mg0012.jpg";
import MG13 from "../Components/Images/mg0013.jpg";
import MG14 from "../Components/Images/mg0014.jpg";
import MG15 from "../Components/Images/mg0015.jpg";
import MG16 from "../Components/Images/mg0016.jpg";
import MG17 from "../Components/Images/mg0017.jpg";
import MG18 from "../Components/Images/mg0018.jpg";
import MG19 from "../Components/Images/mg0019.jpg";
import MG20 from "../Components/Images/mg0020.jpg";
import MG21 from "../Components/Images/mg0021.jpg";
import MG22 from "../Components/Images/mg0022.jpg";
import MG23 from "../Components/Images/mg0023.jpg";
import MG24 from "../Components/Images/mg0024.jpg";
import MG25 from "../Components/Images/mg0025.jpg";
 

import PT01 from "../Components/Images/pt001.jpg";
import PT02 from "../Components/Images/pt002.jpg";
import PT03 from "../Components/Images/pt003.jpg";
import PT04 from "../Components/Images/pt004.jpg";
import PT05 from "../Components/Images/pt005.jpg";
import PT06 from "../Components/Images/pt006.jpg";
import PT07 from "../Components/Images/pt007.jpg";
import PT08 from "../Components/Images/pt008.jpg";
import PT09 from "../Components/Images/pt009.jpg";
import PT10 from "../Components/Images/pt010.jpg";
 import PT13 from "../Components/Images/pt013.jpg";
import PT14 from "../Components/Images/pt014.jpg";
import PT15 from "../Components/Images/pt015.jpg";
import PT16 from "../Components/Images/pt016.jpg";
import PT17 from "../Components/Images/pt017.jpg";
import PT18 from "../Components/Images/pt018.jpg";
import PT19 from "../Components/Images/pt019.jpg";
import PT20 from "../Components/Images/pt020.jpg";
import PT21 from "../Components/Images/pt021.jpg";
import PT22 from "../Components/Images/pt022.jpg";
import PT23 from "../Components/Images/pt023.jpg";
import PT24 from "../Components/Images/pt024.jpg";
import PT25 from "../Components/Images/pt025.jpg";
import PT26 from "../Components/Images/pt026.jpg";

import OD01 from "../Components/Images/od01.jpg";
import OD02 from "../Components/Images/od02.jpg";
import OD03 from "../Components/Images/od03.jpg";
import OD04 from "../Components/Images/od04.jpg";
import OD05 from "../Components/Images/od05.jpg";
import OD06 from "../Components/Images/od06.jpg";
import OD07 from "../Components/Images/od07.jpg";
import OD08 from "../Components/Images/od08.jpg";
import OD09 from "../Components/Images/od09.jpg";
import OD10 from "../Components/Images/od10.jpg";
import OD11 from "../Components/Images/od11.jpg";
import OD12 from "../Components/Images/od12.jpg";
import OD13 from "../Components/Images/od13.jpg";
import OD14 from "../Components/Images/od14.jpg";
import OD15 from "../Components/Images/od15.jpg";
import OD16 from "../Components/Images/od16.jpg";
 

import PO01 from "../Components/Images/po01.jpg";
import PO02 from "../Components/Images/po02.jpg";
import PO03 from "../Components/Images/po03.jpg";
import PO04 from "../Components/Images/po04.jpg";
import PO05 from "../Components/Images/po05.jpg";
import PO06 from "../Components/Images/po06.jpg";
import PO07 from "../Components/Images/po07.jpg";
import PO08 from "../Components/Images/po08.jpg";
import PO10 from "../Components/Images/po10.jpg";
 import PO12 from "../Components/Images/po12.jpg";
import PO13 from "../Components/Images/po13.jpg";
import PO14 from "../Components/Images/po14.jpg";

import FF01 from "../Components/Images/ff01.jpg";
import FF02 from "../Components/Images/ff02.jpg";
import FF03 from "../Components/Images/ff03.jpg";
import FF04 from "../Components/Images/ff04.jpg";
import FF05 from "../Components/Images/ff05.jpg";
import FF06 from "../Components/Images/ff06.jpg";
import FF07 from "../Components/Images/ff07.jpg";
import FF08 from "../Components/Images/ff08.jpg";
import FF09 from "../Components/Images/ff09.jpg";
import FF10 from "../Components/Images/ff10.jpg";
import FF11 from "../Components/Images/ff11.jpg";
import FF12 from "../Components/Images/ff12.jpg";
import FF13 from "../Components/Images/ff13.jpg";
import FF14 from "../Components/Images/ff14.jpg";
import FF15 from "../Components/Images/ff15.jpg";
import FF16 from "../Components/Images/ff16.jpg";
import FF17 from "../Components/Images/ff17.jpg";
import FF18 from "../Components/Images/ff18.jpg";
import FF19 from "../Components/Images/ff19.jpg";
import FF20 from "../Components/Images/ff20.jpg";
 import FF22 from "../Components/Images/ff22.jpg";
import FF23 from "../Components/Images/ff23.jpg";
import FF24 from "../Components/Images/ff24.jpg";
import FF25 from "../Components/Images/ff25.jpg";
import FF26 from "../Components/Images/ff26.jpg";
import FF27 from "../Components/Images/ff27.jpg";
import FF28 from "../Components/Images/ff28.jpg";
import FF29 from "../Components/Images/ff29.jpg";
import FF30 from "../Components/Images/ff30.jpg";
import FF31 from "../Components/Images/ff31.jpg";
import FF32 from "../Components/Images/ff32.jpg";
import FF33 from "../Components/Images/ff33.jpg";
import FF34 from "../Components/Images/ff34.jpg";
 import FF37 from "../Components/Images/ff35.jpg";
import FF38 from "../Components/Images/ff36.jpg";
  



const Portfolio = () => {
  const { theme } = useTheme();
  const [selectedImage, setSelectedImage] = useState(null);
  const [currentIndex, setCurrentIndex] = useState(null);
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [likedImages, setLikedImages] = useState(new Set());

  const categories = [
    "All", "Weddings", "Engagement", /* "Reception" */, "60th Wedding", "Baby Shower",
    "Baby Shoot", "Birthday Event",/*  "Puberty Function","House Warming", */ 
    "Portraits", "Outdoor Shoot", /* "Events", */ "Festival", "Politician",
    /* "Product Shoot", */ "Ear Piercings", "Nature", "Fashion",
  ];

  const portfolioItems = [
     { id: 3, image: BS01, category: "Baby Shower", title: "Baby Shower ", views: 220, likes: 31 },
        { id: 9, image: W60th1, category: "60th Wedding", title: "60th Wedding", views: 166, likes: 21 },

           { id: 10, image: W60th2, category: "60th Wedding", title: "60th Wedding", views: 166, likes: 21 },

               { id:11, image: W60th3, category: "60th Wedding", title: "60th Wedding", views: 166, likes: 21 },

 { id: 13, image: BY01, category: "Baby Shoot", title: "Baby Shoot", views: 0, likes: 0 },
{ id: 14, image: BY02, category: "Baby Shoot", title: "Baby Shoot", views: 0, likes: 0 },
{ id: 15, image: BY03, category: "Baby Shoot", title: "Baby Shoot", views: 0, likes: 0 },
{ id: 16, image: BY04, category: "Baby Shoot", title: "Baby Shoot", views: 0, likes: 0 },
{ id: 17, image: BY05, category: "Baby Shoot", title: "Baby Shoot", views: 0, likes: 0 },
{ id: 18, image: BY06, category: "Baby Shoot", title: "Baby Shoot", views: 0, likes: 0 },
{ id: 19, image: BY07, category: "Baby Shoot", title: "Baby Shoot", views: 0, likes: 0 },
{ id: 20, image: BY08, category: "Baby Shoot", title: "Baby Shoot", views: 0, likes: 0 },
{ id: 21, image: BY09, category: "Baby Shoot", title: "Baby Shoot", views: 0, likes: 0 },
{ id: 22, image: BY10, category: "Baby Shoot", title: "Baby Shoot", views: 0, likes: 0 },
{ id: 23, image: BY11, category: "Baby Shoot", title: "Baby Shoot", views: 0, likes: 0 },
{ id: 24, image: BY12, category: "Baby Shoot", title: "Baby Shoot", views: 0, likes: 0 },
{ id: 25, image: BY13, category: "Baby Shoot", title: "Baby Shoot", views: 0, likes: 0 },
{ id: 26, image: BY14, category: "Baby Shoot", title: "Baby Shoot", views: 0, likes: 0 },
{ id: 27, image: BY15, category: "Baby Shoot", title: "Baby Shoot", views: 0, likes: 0 },
{ id: 28, image: BY16, category: "Baby Shoot", title: "Baby Shoot", views: 0, likes: 0 },
{ id: 29, image: BY16, category: "Baby Shoot", title: "Baby Shoot", views: 0, likes: 0 },
{ id: 30, image: BS01, category: "Baby Shower", title: "Baby Shower", views: 0, likes: 0 },
{ id: 31, image: BS02, category: "Baby Shower", title: "Baby Shower", views: 0, likes: 0 },
{ id: 32, image: BS03, category: "Baby Shower", title: "Baby Shower", views: 0, likes: 0 },
{ id: 33, image: BS04, category: "Baby Shower", title: "Baby Shower", views: 0, likes: 0 },
{ id: 34, image: BS05, category: "Baby Shower", title: "Baby Shower", views: 0, likes: 0 },
{ id: 35, image: BS06, category: "Baby Shower", title: "Baby Shower", views: 0, likes: 0 },
{ id: 36, image: BS07, category: "Baby Shower", title: "Baby Shower", views: 0, likes: 0 },
{ id: 37, image: BS08, category: "Baby Shower", title: "Baby Shower", views: 0, likes: 0 },
{ id: 38, image: BS09, category: "Baby Shower", title: "Baby Shower", views: 0, likes: 0 },
{ id: 39, image: BS10, category: "Baby Shower", title: "Baby Shower", views: 0, likes: 0 },
{ id: 40, image: BS11, category: "Baby Shower", title: "Baby Shower", views: 0, likes: 0 },
{ id: 41, image: BS12, category: "Baby Shower", title: "Baby Shower", views: 0, likes: 0 },

{ id: 42, image: BD01, category: "Birthday Event", title: "Happy Birthday", views: 162, likes: 18 },
{ id: 43, image: BD02, category: "Birthday Event", title: "Happy Birthday", views: 0, likes: 0 },
{ id: 44, image: BD03, category: "Birthday Event", title: "Happy Birthday", views: 0, likes: 0 },
{ id: 45, image: BD04, category: "Birthday Event", title: "Happy Birthday", views: 0, likes: 0 },
{ id: 46, image: BD05, category: "Birthday Event", title: "Happy Birthday", views: 0, likes: 0 },
 { id: 48, image: BD07, category: "Birthday Event", title: "Happy Birthday", views: 0, likes: 0 },
{ id: 49, image: BD08, category: "Birthday Event", title: "Happy Birthday", views: 0, likes: 0 },
{ id: 50, image: BD09, category: "Birthday Event", title: "Happy Birthday", views: 0, likes: 0 },
 
 
    { id: 51, image: EG001, category: "Engagement", title: "Engagement", views: 0, likes: 0 },
{ id: 52, image: EG002, category: "Engagement", title: "Engagement", views: 0, likes: 0 },
{ id: 53, image: EG003, category: "Engagement", title: "Engagement", views: 0, likes: 0 },
{ id: 54, image: EG004, category: "Engagement", title: "Engagement", views: 0, likes: 0 },
{ id: 55, image: EG005, category: "Engagement", title: "Engagement", views: 0, likes: 0 },
{ id: 56, image: EG006, category: "Engagement", title: "Engagement", views: 0, likes: 0 },
{ id: 57, image: EG007, category: "Engagement", title: "Engagement", views: 0, likes: 0 },
 { id: 59, image: EG009, category: "Engagement", title: "Engagement", views: 0, likes: 0 },
{ id: 60, image: EG010, category: "Engagement", title: "Engagement", views: 0, likes: 0 },
  { id: 62, image: EP01, category: "Ear Piercings", title: "Ear Piercings", views: 0, likes: 0 },
{ id: 63, image: EP02, category: "Ear Piercings", title: "Ear Piercings", views: 0, likes: 0 },
{ id: 64, image: EP03, category: "Ear Piercings", title: "Ear Piercings", views: 0, likes: 0 },
{ id: 65, image: EP04, category: "Ear Piercings", title: "Ear Piercings", views: 0, likes: 0 },
{ id: 66, image: EP05, category: "Ear Piercings", title: "Ear Piercings", views: 0, likes: 0 },
{ id: 67, image: EP06, category: "Ear Piercings", title: "Ear Piercings", views: 0, likes: 0 },
{ id: 68, image: EP07, category: "Ear Piercings", title: "Ear Piercings", views: 0, likes: 0 },
{ id: 69, image: EP08, category: "Ear Piercings", title: "Ear Piercings", views: 0, likes: 0 },
{ id: 70, image: EP09, category: "Ear Piercings", title: "Ear Piercings", views: 0, likes: 0 },
{ id: 71, image: EP10, category: "Ear Piercings", title: "Ear Piercings", views: 0, likes: 0 },
{ id: 72, image: EP11, category: "Ear Piercings", title: "Ear Piercings", views: 0, likes: 0 },
    { id: 74, image: N1, category: "Nature", title: "Nature Beauty", views: 260, likes: 35 },
    { id: 75, image: N2, category: "Nature", title: "Nature Bliss", views: 240, likes: 30 },
    { id: 76, image: N3, category: "Nature", title: "Nature Calm", views: 270, likes: 40 },
     { id: 79, image: F1, category: "Fashion", title: "Fashion", views: 250, likes: 34 },
       { id: 80, image: F2, category: "Fashion", title: "Fashion", views: 250, likes: 34 },
        { id: 81, image: F3, category: "Fashion", title: "Fashion", views: 250, likes: 34 },

        { id: 82, image: MK001, category: "Portraits", title: "Portraits", views: 0, likes: 0 },
{ id: 83, image: MK002, category: "Portraits", title: "Portraits", views: 0, likes: 0 },
{ id: 84, image: MK003, category: "Portraits", title: "Portraits", views: 0, likes: 0 },
{ id: 85, image: MK004, category: "Portraits", title: "Portraits", views: 0, likes: 0 },
{ id: 86, image: MK005, category: "Portraits", title: "Portraits", views: 0, likes: 0 },
{ id: 87, image: MK006, category: "Portraits", title: "Portraits", views: 0, likes: 0 },
{ id: 88, image: MK007, category: "Portraits", title: "Portraits", views: 0, likes: 0 },
{ id: 89, image: MK008, category: "Portraits", title: "Portraits", views: 0, likes: 0 },
 
{ id: 92, image: MG01, category: "Weddings", title: "Weddings", views: 0, likes: 0 },
{ id: 93, image: MG02, category: "Weddings", title: "Weddings", views: 0, likes: 0 },
 { id: 95, image: MG04, category: "Weddings", title: "Weddings", views: 0, likes: 0 },
{ id: 96, image: MG05, category: "Weddings", title: "Weddings", views: 0, likes: 0 },
{ id: 97, image: MG06, category: "Weddings", title: "Weddings", views: 0, likes: 0 },
{ id: 98, image: MG07, category: "Weddings", title: "Weddings", views: 0, likes: 0 },
{ id: 99, image: MG08, category: "Weddings", title: "Weddings", views: 0, likes: 0 },
{ id: 100, image: MG09, category: "Weddings", title: "Weddings", views: 0, likes: 0 },
{ id: 101, image: MG10, category: "Weddings", title: "Weddings", views: 0, likes: 0 },
{ id: 102, image: MG11, category: "Weddings", title: "Weddings", views: 0, likes: 0 },
{ id: 103, image: MG12, category: "Weddings", title: "Weddings", views: 0, likes: 0 },
{ id: 104, image: MG13, category: "Weddings", title: "Weddings", views: 0, likes: 0 },
{ id: 105, image: MG14, category: "Weddings", title: "Weddings", views: 0, likes: 0 },
{ id: 106, image: MG15, category: "Weddings", title: "Weddings", views: 0, likes: 0 },
{ id: 107, image: MG16, category: "Weddings", title: "Weddings", views: 0, likes: 0 },
{ id: 108, image: MG17, category: "Weddings", title: "Weddings", views: 0, likes: 0 },
{ id: 109, image: MG18, category: "Weddings", title: "Weddings", views: 0, likes: 0 },
{ id: 110, image: MG19, category: "Weddings", title: "Weddings", views: 0, likes: 0 },
{ id: 111, image: MG20, category: "Weddings", title: "Weddings", views: 0, likes: 0 },
{ id: 112, image: MG21, category: "Weddings", title: "Weddings", views: 0, likes: 0 },
{ id: 113, image: MG22, category: "Weddings", title: "Weddings", views: 0, likes: 0 },
{ id: 114, image: MG23, category: "Weddings", title: "Weddings", views: 0, likes: 0 },
{ id: 115, image: MG24, category: "Weddings", title: "Weddings", views: 0, likes: 0 },
{ id: 116, image: MG25, category: "Weddings", title: "Weddings", views: 0, likes: 0 },
 
{ id: 120, image: PT01, category: "Portraits", title: "Portraits", views: 0, likes: 0 },
{ id: 121, image: PT02, category: "Portraits", title: "Portraits", views: 0, likes: 0 },
{ id: 122, image: PT03, category: "Portraits", title: "Portraits", views: 0, likes: 0 },
{ id: 123, image: PT04, category: "Portraits", title: "Portraits", views: 0, likes: 0 },
{ id: 124, image: PT05, category: "Portraits", title: "Portraits", views: 0, likes: 0 },
{ id: 125, image: PT06, category: "Portraits", title: "Portraits", views: 0, likes: 0 },
{ id: 126, image: PT07, category: "Portraits", title: "Portraits", views: 0, likes: 0 },
{ id: 127, image: PT08, category: "Portraits", title: "Portraits", views: 0, likes: 0 },
{ id: 128, image: PT09, category: "Portraits", title: "Portraits", views: 0, likes: 0 },
{ id: 129, image: PT10, category: "Portraits", title: "Portraits", views: 0, likes: 0 },
 { id: 132, image: PT13, category: "Portraits", title: "Portraits", views: 0, likes: 0 },
{ id: 133, image: PT14, category: "Portraits", title: "Portraits", views: 0, likes: 0 },
{ id: 134, image: PT15, category: "Portraits", title: "Portraits", views: 0, likes: 0 },
{ id: 135, image: PT16, category: "Portraits", title: "Portraits", views: 0, likes: 0 },
{ id: 136, image: PT17, category: "Portraits", title: "Portraits", views: 0, likes: 0 },
{ id: 137, image: PT18, category: "Portraits", title: "Portraits", views: 0, likes: 0 },
{ id: 138, image: PT19, category: "Portraits", title: "Portraits", views: 0, likes: 0 },
{ id: 139, image: PT20, category: "Portraits", title: "Portraits", views: 0, likes: 0 },
{ id: 140, image: PT21, category: "Portraits", title: "Portraits", views: 0, likes: 0 },
{ id: 141, image: PT22, category: "Portraits", title: "Portraits", views: 0, likes: 0 },
{ id: 142, image: PT23, category: "Portraits", title: "Portraits", views: 0, likes: 0 },
{ id: 143, image: PT24, category: "Portraits", title: "Portraits", views: 0, likes: 0 },
{ id: 144, image: PT25, category: "Portraits", title: "Portraits", views: 0, likes: 0 },
{ id: 145, image: PT26, category: "Portraits", title: "Portraits", views: 0, likes: 0 },

{ id: 146, image: OD01, category: "Outdoor Shoot", title: "Outdoor Shoot", views: 0, likes: 0 },
{ id: 147, image: OD02, category: "Outdoor Shoot", title: "Outdoor Shoot", views: 0, likes: 0 },
{ id: 148, image: OD03, category: "Outdoor Shoot", title: "Outdoor Shoot", views: 0, likes: 0 },
{ id: 149, image: OD04, category: "Outdoor Shoot", title: "Outdoor Shoot", views: 0, likes: 0 },
{ id: 150, image: OD05, category: "Outdoor Shoot", title: "Outdoor Shoot", views: 0, likes: 0 },
{ id: 151, image: OD06, category: "Outdoor Shoot", title: "Outdoor Shoot", views: 0, likes: 0 },
{ id: 152, image: OD07, category: "Outdoor Shoot", title: "Outdoor Shoot", views: 0, likes: 0 },
{ id: 153, image: OD08, category: "Outdoor Shoot", title: "Outdoor Shoot", views: 0, likes: 0 },
{ id: 154, image: OD09, category: "Outdoor Shoot", title: "Outdoor Shoot", views: 0, likes: 0 },
{ id: 155, image: OD10, category: "Outdoor Shoot", title: "Outdoor Shoot", views: 0, likes: 0 },
{ id: 156, image: OD11, category: "Outdoor Shoot", title: "Outdoor Shoot", views: 0, likes: 0 },
{ id: 157, image: OD12, category: "Outdoor Shoot", title: "Outdoor Shoot", views: 0, likes: 0 },
{ id: 158, image: OD13, category: "Outdoor Shoot", title: "Outdoor Shoot", views: 0, likes: 0 },
{ id: 159, image: OD14, category: "Outdoor Shoot", title: "Outdoor Shoot", views: 0, likes: 0 },
{ id: 160, image: OD15, category: "Outdoor Shoot", title: "Outdoor Shoot", views: 0, likes: 0 },
{ id: 161, image: OD16, category: "Outdoor Shoot", title: "Outdoor Shoot", views: 0, likes: 0 },
 
{ id: 169, image: PO01, category: "Politician", title: "Politician", views: 0, likes: 0 },
{ id: 170, image: PO02, category: "Politician", title: "Politician", views: 0, likes: 0 },
{ id: 171, image: PO03, category: "Politician", title: "Politician", views: 0, likes: 0 },
{ id: 172, image: PO04, category: "Politician", title: "Politician", views: 0, likes: 0 },
{ id: 173, image: PO05, category: "Politician", title: "Politician", views: 0, likes: 0 },
{ id: 174, image: PO06, category: "Politician", title: "Politician", views: 0, likes: 0 },
{ id: 175, image: PO07, category: "Politician", title: "Politician", views: 0, likes: 0 },
{ id: 176, image: PO08, category: "Politician", title: "Politician", views: 0, likes: 0 },
{ id: 178, image: PO10, category: "Politician", title: "Politician", views: 0, likes: 0 },
 { id: 180, image: PO12, category: "Politician", title: "Politician", views: 0, likes: 0 },
{ id: 181, image: PO13, category: "Politician", title: "Politician", views: 0, likes: 0 },
{ id: 182, image: PO14, category: "Politician", title: "Politician", views: 0, likes: 0 },

{ id: 183, image: FF01, category: "Festival", title: "Festival", views: 0, likes: 0 },
{ id: 184, image: FF02, category: "Festival", title: "Festival", views: 0, likes: 0 },
{ id: 185, image: FF03, category: "Festival", title: "Festival", views: 0, likes: 0 },
{ id: 186, image: FF04, category: "Festival", title: "Festival", views: 0, likes: 0 },
{ id: 187, image: FF05, category: "Festival", title: "Festival", views: 0, likes: 0 },
{ id: 188, image: FF06, category: "Festival", title: "Festival", views: 0, likes: 0 },
{ id: 189, image: FF07, category: "Festival", title: "Festival", views: 0, likes: 0 },
{ id: 190, image: FF08, category: "Festival", title: "Festival", views: 0, likes: 0 },
{ id: 191, image: FF09, category: "Festival", title: "Festival", views: 0, likes: 0 },
{ id: 192, image: FF10, category: "Festival", title: "Festival", views: 0, likes: 0 },
{ id: 193, image: FF11, category: "Festival", title: "Festival", views: 0, likes: 0 },
{ id: 194, image: FF12, category: "Festival", title: "Festival", views: 0, likes: 0 },
{ id: 195, image: FF13, category: "Festival", title: "Festival", views: 0, likes: 0 },
{ id: 196, image: FF14, category: "Festival", title: "Festival", views: 0, likes: 0 },
{ id: 197, image: FF15, category: "Festival", title: "Festival", views: 0, likes: 0 },
{ id: 198, image: FF16, category: "Festival", title: "Festival", views: 0, likes: 0 },
{ id: 199, image: FF17, category: "Festival", title: "Festival", views: 0, likes: 0 },
{ id: 200, image: FF18, category: "Festival", title: "Festival", views: 0, likes: 0 },
{ id: 201, image: FF19, category: "Festival", title: "Festival", views: 0, likes: 0 },
{ id: 202, image: FF20, category: "Festival", title: "Festival", views: 0, likes: 0 },
 { id: 204, image: FF22, category: "Festival", title: "Festival", views: 0, likes: 0 },
{ id: 205, image: FF23, category: "Festival", title: "Festival", views: 0, likes: 0 },
{ id: 206, image: FF24, category: "Festival", title: "Festival", views: 0, likes: 0 },
{ id: 207, image: FF25, category: "Festival", title: "Festival", views: 0, likes: 0 },
{ id: 208, image: FF26, category: "Festival", title: "Festival", views: 0, likes: 0 },
{ id: 209, image: FF27, category: "Festival", title: "Festival", views: 0, likes: 0 },
{ id: 210, image: FF28, category: "Festival", title: "Festival", views: 0, likes: 0 },
{ id: 211, image: FF29, category: "Festival", title: "Festival", views: 0, likes: 0 },
{ id: 212, image: FF30, category: "Festival", title: "Festival", views: 0, likes: 0 },
{ id: 213, image: FF31, category: "Festival", title: "Festival", views: 0, likes: 0 },
{ id: 214, image: FF32, category: "Festival", title: "Festival", views: 0, likes: 0 },
{ id: 215, image: FF33, category: "Festival", title: "Festival", views: 0, likes: 0 },
{ id: 216, image: FF34, category: "Festival", title: "Festival", views: 0, likes: 0 },
 { id: 219, image: FF37, category: "Festival", title: "Festival", views: 0, likes: 0 },
{ id: 220, image: FF38, category: "Festival", title: "Festival", views: 0, likes: 0 },
 
  ];

  const filteredItems = selectedCategory === "All"
    ? portfolioItems
    : portfolioItems.filter(item => item.category === selectedCategory);

  const themeStyles = {
    section: theme === "dark" ? "bg-gray-900" : "bg-gray-50",
    title: theme === "dark" ? "text-white" : "text-black",
    subtitle: theme === "dark" ? "text-gray-400" : "text-gray-700",
    card: theme === "dark" ? "bg-gray-800" : "bg-white",
    categoryActive: "bg-amber-400 text-black",
    categoryInactive: theme === "dark"
      ? "text-gray-400 border border-gray-600 hover:text-white hover:border-amber-400"
      : "text-gray-600 border border-gray-300 hover:text-gray-900 hover:border-amber-400",
  };

  // Keyboard navigation
  useEffect(() => {
    const handleKey = e => {
      if (!selectedImage) return;
      if (e.key === "Escape") setSelectedImage(null);
      if (e.key === "ArrowRight") nextImage();
      if (e.key === "ArrowLeft") prevImage();
    };
    window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
  }, [selectedImage, currentIndex]);

  const toggleLike = (id, e) => {
    e.stopPropagation();
    setLikedImages(prev => {
      const newSet = new Set(prev);
      newSet.has(id) ? newSet.delete(id) : newSet.add(id);
      return newSet;
    });
  };

  const openImage = index => {
    setSelectedImage(filteredItems[index].image);
    setCurrentIndex(index);
  };

  const nextImage = () => {
    if (currentIndex === null) return;
    const nextIndex = (currentIndex + 1) % filteredItems.length;
    setSelectedImage(filteredItems[nextIndex].image);
    setCurrentIndex(nextIndex);
  };

  const prevImage = () => {
    if (currentIndex === null) return;
    const prevIndex = (currentIndex - 1 + filteredItems.length) % filteredItems.length;
    setSelectedImage(filteredItems[prevIndex].image);
    setCurrentIndex(prevIndex);
  };

  return (
     <section
      id="portfolio"
      className={`py-20 ${themeStyles.section} transition-colors duration-500`}
    >
      <div className="max-w-7xl mx-auto px-6">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className={`text-center mb-16 rounded-xl p-6 transition-colors duration-500 ${
            theme === "dark" ? "bg-gray-800" : "bg-gray-100"
          }`}
        >
          <h2
            className={`text-4xl md:text-5xl font-serif font-bold mb-6 ${themeStyles.title}`}
          >
            Captured{" "}
            <motion.span
              className="text-amber-400 inline-block"
              animate={{ rotate: [0, 2, -2, 0] }}
              transition={{ duration: 4, repeat: Infinity }}
            >
              Moments
            </motion.span>
          </h2>
          <p
            className={`text-lg md:text-xl max-w-2xl mx-auto leading-relaxed ${themeStyles.subtitle}`}
          >
            Every frame tells a story, every click preserves a memory. Explore
            our collection of timeless captures.
          </p>
        </motion.div>

        {/* Category Filter */}
        <motion.div className="flex flex-wrap justify-center gap-3 mb-12">
          {categories.map((category, idx) => (
            <motion.button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-6 py-2 rounded-full text-sm font-medium tracking-wide transition-all duration-300 ${
                selectedCategory === category
                  ? themeStyles.categoryActive
                  : themeStyles.categoryInactive
              }`}
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.05 }}
              aria-pressed={selectedCategory === category}
            >
              {category}
            </motion.button>
          ))}
        </motion.div>

        {/* Portfolio Grid */}
        <motion.div
          layout
          className="columns-1 sm:columns-2 md:columns-3 lg:columns-4 gap-4 space-y-4"
        >
          <AnimatePresence>
            {filteredItems.map((item, index) => (
              <motion.div
                key={item.id}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.4 }}
                className={`break-inside-avoid relative overflow-hidden rounded-xl ${themeStyles.card} shadow-lg cursor-pointer`}
                onClick={() => openImage(index)}
                aria-label={`View ${item.title} in fullscreen`}
              >
                {/* Use LazyLoadImage for faster load */}
                <LazyLoadImage
                  src={item.image}
                  alt={item.title}
                  effect="blur"
                  className="w-full h-auto object-cover rounded-lg transition-transform duration-500 hover:scale-105"
                />

                {/* Overlay */}
                <motion.div
                  initial={{ opacity: 0 }}
                  whileHover={{ opacity: 1 }}
                  className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent transition-opacity duration-500"
                >
                  <div className="absolute bottom-4 left-4 right-4">
                    <p className="text-amber-400 text-sm mb-3">
                      {item.category}
                    </p>
                    <div className="flex items-center justify-between">
                      <motion.button
                        onClick={(e) => toggleLike(item.id, e)}
                        aria-label={
                          likedImages.has(item.id)
                            ? "Unlike image"
                            : "Like image"
                        }
                        className={`p-2 rounded-full transition-all duration-300 ${
                          likedImages.has(item.id)
                            ? "bg-red-500 text-white"
                            : "bg-white/20 text-white hover:bg-red-500"
                        }`}
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                      >
                        <Heart
                          size={16}
                          fill={likedImages.has(item.id) ? "white" : "none"}
                        />
                      </motion.button>
                    </div>
                  </div>
                </motion.div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>

      {/* Lightbox Modal */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-black/90 backdrop-blur-sm flex items-center justify-center p-6"
            onClick={() => setSelectedImage(null)}
          >
            <motion.button
              onClick={() => setSelectedImage(null)}
              className="absolute top-6 right-6 text-gray-300 hover:text-amber-400 transition z-10"
              aria-label="Close image"
              whileHover={{ scale: 1.1, rotate: 90 }}
              whileTap={{ scale: 0.9 }}
            >
              <X size={36} />
            </motion.button>
            <motion.button
              onClick={(e) => {
                e.stopPropagation();
                prevImage();
              }}
              className="absolute left-6 text-gray-300 hover:text-amber-400 transition z-10"
              aria-label="Previous image"
              whileHover={{ scale: 1.1, x: -5 }}
              whileTap={{ scale: 0.9 }}
            >
              <ChevronLeft size={40} />
            </motion.button>
            <motion.button
              onClick={(e) => {
                e.stopPropagation();
                nextImage();
              }}
              className="absolute right-6 text-gray-300 hover:text-amber-400 transition z-10"
              aria-label="Next image"
              whileHover={{ scale: 1.1, x: 5 }}
              whileTap={{ scale: 0.9 }}
            >
              <ChevronRight size={40} />
            </motion.button>
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              className="max-w-5xl max-h-[80vh] mx-auto"
              onClick={(e) => e.stopPropagation()}
            >
              <img
                src={selectedImage}
                alt="Portfolio"
                loading="lazy"
                className="rounded-lg shadow-lg max-h-[80vh] object-contain transition-all duration-500"
              />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default Portfolio;
