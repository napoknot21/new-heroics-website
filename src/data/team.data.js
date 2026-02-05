// src/data/team.data.js

import CYRILLE_IMG from "../assets/images/team/cyrille.jpg";
import TRAMINI_IMG from "../assets/images/team/tramini.jpg";
import JONATHAN_IMG from "../assets/images/team/jo.jpg";
import JULIEN_IMG from "../assets/images/team/pierre.jpg";
import ILYASSE_IMG from "../assets/images/team/ilyasse.jpg";

/**
 * TEAM DATA
 * ---------
 * Content only. No UI logic here.
 * Images are imported from assets to ensure bundler safety.
 */

const TEAM = [

    {
        id : "cyrille-nahabedian",
        name : "Cyrille NAHABEDIAN",
        position : "Partner & CEO",
        team : "",
        timeofexp : "20 years of experience",
        experience : "in capital markets industry within European major investment & private banks",
        bold_previous_position : "Global head of Capital Markets",
        previous_position : "Crédit Agricole Indosuez Group (2019-2022)",
        education : [
            "ABBL, LFMA member, lecturer at ESC Paris",
            "Graduated from Skema Business School, Master of Research in capital markets finance at Paris Sorbonne University",
            "Bachelor in economics",
        ],
        img: CYRILLE_IMG,
    },
    
    {
        id : "alexandre-tramini",
        name : "Alexandre TRAMINI",
        position : "Partner, Head of trading & distribution",
        txeam : "(Luxembourg Team)",
        timeofexp : "17 years of experience",
        experience : "in capital markets industry within European major investment & private banks",
        bold_previous_position : "European Head of Capital Markets",
        previous_position : "Crédit Agricole Indosuez Group (2019-04/2023)",
        education : [
            "Graduated from Kedge Business School, Bachelor in economics and financial engineering at Aix / Marseille University",
            "Master in Law from Toulon University",
        ],
        img: TRAMINI_IMG,
    },

    {
        id : "jonathan-niddam",
        name : "Jonathan NIDDAM",
        position : "Partner, Head of Quantitative Research & Risk Management",
        team : "(Luxembourg Team)",
        timeofexp : "10 years of experience",
        experience : "in Trading & Risk management, market-making, IT programming languages, Project Management",
        bold_previous_position : "Senior cross assets structurer / Trader",
        previous_position : "Credit Agricole Indosuez Group (2017-04/2023)",
        education: ["Master of Engineering Degree EFREI Paris"],
        img: JONATHAN_IMG,
    },

    {
        id : "julien-baptiste",
        name : "Julien BAPTISTE",
        position : "Partner & CEO Heroics Capital Monaco",
        team : "(Monaco Team)",
        timeofexp : "12 years of experience",
        experience : "in capital markets finance in top European investment and private banks",
        specialization : "Structured and Derivative Products Specialist on all Asset Classes",
        bold_previous_position : "Head of Capital Markets Solutions",
        previous_position : "CFM Indosuez Credit Agricole Group (2016-03/11-2023)",
        education : [
            "Master of market finance and financial engineering - Kedge Business School",
            "AMAF Monaco License",
        ],
        img: JULIEN_IMG,
    },

    {
        id : "ilyasse-tariq",
        name : "Ilyasse Tariq",
        position : "Trader",
        team : "(Luxembourg Team)",
        timeofexp : "2 years of experience",
        experience : "as Exotic Derivatives Trader",
        bold_previous_position : "Exotic Derivatives Trader",
        previous_position : "Vontobel",
        education : [
            "Graduated from EDHEC Business School (Financial Engineering-Valedictorian)",
            "Ecole Nationale Supérieure Mines-Télécom Bretagne (IMT Atlantique)",
        ],
        img: ILYASSE_IMG,
    },
];

export default TEAM;

