import afflatus from "../assets/companies/afflatus.png";
import blast_asia from "../assets/companies/blast_asia.png";
import delsan from "../assets/companies/delsan.png";
import dynamic_pc from "../assets/companies/dynamic_pc.png";
// Glory dapat here
import infopro from "../assets/companies/infopro.png";
import isr from "../assets/companies/isr.png";
// Manila Water
// Nexus Cloud
// Open Access BPO
import primer from "../assets/companies/primer.png";
// Prodigitality
import sds from "../assets/companies/sds.png";
import sm_retail from "../assets/companies/sm_retail.png";
import sofi from "../assets/companies/sofi.png";
import testronix from "../assets/companies/testronix.png";


const images = [afflatus, blast_asia, delsan, dynamic_pc, infopro, isr, primer, sds, sm_retail, sofi, testronix];

const companies = [
  {
    id: "afflatus",
    name: "Afflatus Realty Inc.",
    logo: afflatus,
    address: "2nd Floor, 702, Shaw Blvd. Brgy, Kapitolyo, Pasig City, Metro Manila",
    about: 'Founded on August 28, 1993 (formerly known as Truong Thinh Phat Construction Co., Ltd.), Afflatus Realty operates in the real estate business, specializing in building villas for rent. With the slogan "Breaking time, through space," and a sustainable development strategy focusing on real estate, Afflatus Realty constantly connects buyers and sellers in the field. Real estate, bringing people closer together, over the distance of time and space, is a reliable place for real estate investment - an area that is constantly evolving.',
    intern: ["alvin"]
  },
  {
    id: "blast_asia",
    name: "BlastAsia Inc.",
    logo: blast_asia,
    address: "Unit 2306, The Orient Square Bldg., F Ortigas Jr. Road, Ortigas Center, Pasig City",
    about: "Blast Asia, Inc. is a leading offshore software development company located in the Philippines. The company was founded in 2001 and has been committed to delivering innovative solutions, business success, and engineering and management success to the clients that opt for their services. Blast Asia, Inc. works with startups to Fortune 500 companies.",
    intern: ["elton", "amran"]
  },
  {
    id: "delsan",
    name: "Delsan Office Systems Corporation",
    logo: delsan,
    address: "7893 Lawaan St. San Antonio Village Makati City",
    about: "Delsan Office Systems Corporation (DOSC) - Since its founding in 1991, DOSC has grown into a trusted leader in Managed Print Services (MPS). With over three decades of experience, DOSC continues to innovate, offering integrated solutions through its sister company DDTC. This unwavering commitment to quality and efficiency ensures streamlined business processes and exceptional client satisfaction.",
    intern: ["eunice", "ezekiel", "alvin"]
  },
  {
    id: "dynamic_pc",
    name: "Dynamic Personal Computer Inc.",
    logo: dynamic_pc,
    address: "Unit 2, Aurora Garden Plaza Aurora Boulevard. Corner Gilmore Ave., Valencia, Quezon City, 1112 Metro Manila",
    about: "Dynamic PC - Gilmore is a leading computer technology solutions provider specializing in custom PC builds, hardware upgrades, and comprehensive IT services. Located in the heart of Gilmore, we offer expert computer assembly, repair services, gaming systems, and business workstations tailored to meet diverse client needs. Our mission is to deliver cutting-edge technology solutions that enhance productivity and performance for both individual consumers and businesses. With a commitment to quality craftsmanship and personalized service, Dynamic PC - Gilmore empowers customers to harness the full potential of modern computing technology.",
    intern: ["sean"]
  },
  {
    id: "infopro",
    name: "InfoPro Business Solutions Inc.",
    logo: infopro,
    address: "16/F Rockwell Business Center Sheridan North Tower United Corner Sheridan Streets, Brgy. Highway Hills, Mandaluyong City",
    about: "InfoPro Business Solutions, Inc. (IBS) is a premier IT and business process outsourcing (BPO) company under the Lopez Group of Companies. IBS offers a wide range of high-quality, efficient, and cost-effective solutions in information technology, finance and accounting, and marketing. With a strong commitment to excellence and innovation, IBS empowers businesses through top-tier systems implementation, support services, and HR solutions.",
    intern: ["sean", "ezekiel"]
  },
  {
    id: "isr",
    name: "ISR Security Inc.",
    logo: isr,
    address: "172 A. Mabini St. Brgy. Addition Hills San Juan City, Philippines",
    about: "ISR Security Inc. is a leading security systems integrator based in the Philippines, specializing in the design and implementation of custom-built solutions including CCTV surveillance, FDAS (Fire Detection and Alarm Systems), access control, and IT infrastructure. Our team delivers scalable,reliable,and industry-specific systems that help business safeguard their operations and assets.",
    intern: ["alvin", "elton"]
  },
  {
    id: "primer",
    name: "Primer Group of Companies",
    logo: primer,
    address: "2282 Leon Guinto Street, Malate, Manila",
    about: "Primer Group of Companies is a Manila‑headquartered leader in retail, distribution, and industrial innovation. Established in 1985, Primer represents over 150 premium lifestyle brands—from outdoor, travel, fashion, footwear, and wellness—across more than 450 retail stores globally. Guided by its mission to bring the world closer to its customers, Primer is committed to integrity, self‑discipline, teamwork, entrepreneurial spirit, and passion for excellence as it expands globally.",
    intern: ["elton"]
  },
  {
    id: "sds",
    name: "SDS Solutions I.T. Outsourcing Inc.",
    logo: sds,
    address: "3/F JG Building C.Raymundo Avenue, Rosario, Pasig City 1609 Philippines",
    about: "SD Solutions I.T Outsourcing Inc. is a premier provider of innovative and cost-effective IT solutions, serving clients across various industries. With expertise in software development, technical support, web and mobile applications, and business process outsourcing, the company offers tailored services designed to meet the unique needs of every client. Backed by a team of skilled professionals and cutting-edge technologies, SD Solutions helps businesses enhance productivity, reduce operational costs, and accelerate digital transformation. The company is committed to delivering reliable, high-quality solutions while building lasting partnerships. Its mission is to empower organizations through technology and drive sustainable success in the digital age.",
    intern: ["amran", "eunice"]
  },
  {
    id: "sm_retail",
    name: "SM Retail Inc.",
    logo: sm_retail,
    address: "SM Retail Headquarters, J.W. Diokno Blvd., Corner Bayshore Avenue, Mall of Asia Complex, Pasay City",
    about: "SM Retail, Inc., a subsidiary of SM Investments Corporation, is the Philippines’ largest retail chain, offering a diverse portfolio of both local and international brands. Founded in 1958 by Henry Sy, Sr., the company has evolved from a humble shoe store into a dominant force in the country’s retail industry, spanning fashion, home, and food segments. SM Retail operates The SM Store, SM Markets (including Savemore, Walter Mart, and Alfamart), and a wide range of specialty stores such as Watsons, Ace Hardware, and Uniqlo. With a commitment to accessibility, quality, and affordability, SM Retail aims to enhance every Filipino’s shopping experience through value, convenience, and continuous innovation—while actively contributing to national economic growth and community development.",
    intern: ["sean", "ezekiel"]
  },
  {
    id: "sofi",
    name: "SOFI AI Tech Solutions Inc.",
    logo: sofi,
    address: "117 Mother Ignacia, Diliman, Quezon City",
    about: "SOFI AI Tech Solution Inc. is a legally registered company that provides Artificial Intelligence (AI) automation designed to transform the way businesses engage with their customers. With a strong focus on innovation and efficiency, the company aims to deliver AI-powered solutions that enhance user experience, reduce manual processes, and streamline operations. SOFI AI is committed to helping businesses adapt to digital advancements and achieve long-term growth through smart, data-driven technologies.",
    intern: ["elton", "amran"]
  },
  {
    id: "testronix",
    name: "Testronix Inc.",
    logo: testronix,
    address: "Unit 415, VGP Center, 6772 Ayala Ave, Makati City, Metro Manila",
    about: "Testronix Inc. is a Philippine-based telecom service provider dedicated to advancing the country’s telecommunications industry. With a strong commitment to innovation and digital growth, Testronix offers reliable and efficient telecom solutions tailored to the evolving needs of businesses. Under its wing are SupSoft Technologies and CertiCode, both dynamic IT solutions companies that support the group’s mission of empowering industries through cutting-edge technology and seamless connectivity.",
    intern: ["eunice", "ezekiel", "sean"]
  }
];

export {companies, images};