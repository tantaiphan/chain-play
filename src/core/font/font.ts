
import { Poppins } from "next/font/google";

const poppins_Normal = Poppins({ subsets: ["latin"], weight: '400' });
const poppins_Medium = Poppins({ subsets: ["latin"], weight: '500' });
const poppins_Bold = Poppins({ subsets: ["latin"], weight: '700' });
const poppins_ExtraBold = Poppins({ subsets: ["latin"], weight: '900' });

export const svnPoppins = {
    poppins_Normal,
    poppins_Medium,
    poppins_Bold,
    poppins_ExtraBold
}