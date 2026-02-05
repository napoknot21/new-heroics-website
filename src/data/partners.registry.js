// src/data/partners.registry.js

import JPMORGAN from "../assets/images/partners/1024px-J_P_Morgan_Logo_2008_1.svg.png";
import BLOOMBERG from "../assets/images/partners/2560px-Bloomberg_logo.svg.png";
import BNP from "../assets/images/partners/2560px-BNP_Paribas_logo.svg.png";
import DEUTSCHE_BANK from "../assets/images/partners/2560px-Deutsche_Bank_logo.svg.png";
import SAXO from "../assets/images/partners/2560px-Saxo_Bank_logo.svg.png";
import UBS from "../assets/images/partners/UBS-logo.png";
import GOLDMAN_SACHS from "../assets/images/partners/Goldman_Sachs.svg.png";
import MORGAN_STANLEY from "../assets/images/partners/Morgan_Stanley_Logo_1.svg.png";
import CREDIT_AGRICOLE from "../assets/images/partners/CréditAgricoleCIB_logo.svg.png";
import ICE from "../assets/images/partners/ICE_logo_100px_RGB-01.png";
import KEPLER from "../assets/images/partners/kepler.png";
import KEPLER_SVG from "../assets/images/partners/Kepler.svg";
import QUINTET from "../assets/images/partners/Quintet-Private-Bank.png";
import VCL from "../assets/images/partners/VCL-Logo-black-orange-1024x320.png";
import DAPM from "../assets/images/partners/dapm_logo.jpg";
import APEX from "../assets/images/partners/6221_resized_757_99999_90_61126f226eafb_apex-logo-150x150-002-.png";
import SIX_C from "../assets/images/partners/6c228b_8653c64232da4d4aa181a7102e92ebea~mv2.png";

/**
 * PARTNERS REGISTRY
 * -----------------
 * One single source of truth for all partners.
 * Partners are business entities, not just images.
 */
export const PARTNERS = {

    JPMORGAN: {
        id: "jpmorgan",
        name: "J.P. Morgan",
        logo: JPMORGAN,
        type: "bank",
    },

    BLOOMBERG: {
        id: "bloomberg",
        name: "Bloomberg",
        logo: BLOOMBERG,
        type: "data",
    },

    BNP_PARIBAS: {
        id: "bnp-paribas",
        name: "BNP Paribas",
        logo: BNP,
        type: "bank",
    },
    
    DEUTSCHE_BANK: {
        id: "deutsche-bank",
        name: "Deutsche Bank",
        logo: DEUTSCHE_BANK,
        type: "bank",
    },

    SAXO_BANK: {
        id: "saxo-bank",
        name: "Saxo Bank",
        logo: SAXO,
        type: "bank",
    },

    UBS: {
        id: "ubs",
        name: "UBS",
        logo: UBS,
        type: "bank",
    },

    GOLDMAN_SACHS: {
        id: "goldman-sachs",
        name: "Goldman Sachs",
        logo: GOLDMAN_SACHS,
        type: "bank",
    },

    MORGAN_STANLEY: {
        id: "morgan-stanley",
        name: "Morgan Stanley",
        logo: MORGAN_STANLEY,
        type: "bank",
    },

    CREDIT_AGRICOLE_CIB: {
        id: "credit-agricole-cib",
        name: "Crédit Agricole CIB",
        logo: CREDIT_AGRICOLE,
        type: "bank",
    },

    ICE: {
        id: "ice",
        name: "Intercontinental Exchange",
        logo: ICE,
        type: "exchange",
    },

    KEPLER: {
        id: "kepler",
        name: "Kepler",
        logo: KEPLER,
        variants: [KEPLER, KEPLER_SVG],
        type: "asset-manager",
    },

    QUINTET_PRIVATE_BANK: {
        id: "quintet",
        name: "Quintet Private Bank",
        logo: QUINTET,
        type: "bank",
    },

    VCL: {
        id: "vcl",
        name: "VCL",
        logo: VCL,
        type: "financial-services",
    },

    DAPM: {
        id: "dapm",
        name: "DAPM",
        logo: DAPM,
        type: "asset-manager",
    },

    APEX: {
        id: "apex",
        name: "Apex",
        logo: APEX,
        type: "service-provider",
    },

    SIX_C: {
        id: "6c",
        name: "6C",
        logo: SIX_C,
        type: "partner",
    },
};

// Helpers
export const PARTNERS_LIST = Object.values(PARTNERS);
export const PARTNERS_BY_TYPE = (type) =>
  PARTNERS_LIST.filter((p) => p.type === type);
