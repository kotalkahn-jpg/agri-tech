
export interface Service {
  id: string;
  name: string;
  topSectionImage: string; 
  topSectionDescription: string; 
  whyChooseUsText: string; 
  whyChooseUsImages: string[];
  partners: string[]; 
  detailedDescription: Paragraph[]; 
}

export interface Paragraph {
  heading: string;
  content: string;
  imageUrl?: string;
}

export const getServices = async (): Promise<Service[]> => {
  return agriTechServices as Service[];
};

export const agriTechServices: Service[] = [
  {
    id: "1",
    name: "Precision Farming",
    topSectionImage: "/images/farm-software-top.webp",
    topSectionDescription:
      "Farming is no longer about guessworkit’s about smart decisions powered by data. Our precision farming solutions bring together GPS technology, IoT sensors, and satellite imagery to give you real-time insights into your soil, crops, and weather conditions. ",
    whyChooseUsText:
      "Our precision farming solutions combine analytics, AI, and real-time monitoring to help farmers make informed decisions that increase yield and reduce waste. ",
    whyChooseUsImages: [
      "/images/precision-1.webp",
      "/images/precision-2.webp",
      "/images/precision-3.webp",
    ],
    partners: [
     "/images/castel-logo.png",
      "/images/Old-Mutual-logo.webp",
      "/images/PayChangu Logo.png",
      "/images/stephanos.jpg",
      "/images/bwb_logo.png",
      "/images/EGENCO.webp",
    ],
    detailedDescription: [
      {
        heading: "Overview",
        content:
          "Precision farming allows farmers to manage variations in the field accurately, reducing costs and enhancing productivity through smart resource allocation.",
        imageUrl: "/images/precision-farming-benefits.webp",
      },
      {
        heading: "Benefits",
        content:
          "Reduces input waste, improves yields, and promotes sustainable farming practices by leveraging technology like drones and IoT sensors.",
      },
    ],
  },
  {
    id: "2",
    name: "Drone Mapping & Monitoring",
    topSectionImage: "/images/drone-1.webp",
    topSectionDescription:
      "Drone mapping captures high-resolution aerial imagery, providing real-time insights into crop health, irrigation, and soil conditions.",
    whyChooseUsText:
      "With our advanced drones, farmers gain powerful visibility across large fields, identifying problems early and improving overall crop management.",
    whyChooseUsImages: [
      "/images/drone-1.webp",
      "/images/drone-2.webp",
      "/images/drone-3.webp",
    ],
    partners: [
     "/images/castel-logo.png",
      "/images/Old-Mutual-logo.webp",
      "/images/PayChangu Logo.png",
      "/images/stephanos.jpg",
      "/images/bwb_logo.png",
      "/images/EGENCO.webp",
    ],
    detailedDescription: [
      {
        heading: "Aerial Data Collection",
        content:
          "Our drones capture ultra-precise aerial images, detecting irrigation issues, pest infestations, and nutrient deficiencies.",
      },
      {
        heading: "Applications",
        content:
          "Ideal for field mapping, yield predictions, and automated crop spraying, enabling data-driven agricultural decisions.",
        imageUrl: "/images/drone-3.webp",
      },
    ],
  },
  {
    id: "3",
    name: "Smart Irrigation Systems",
    topSectionImage: "/images/irrigation-top.webp",
    topSectionDescription:
      "Smart irrigation systems use weather forecasts and soil data to optimize water usage, ensuring crops get exactly what they need.",
    whyChooseUsText:
      "Our IoT-based irrigation systems save water, reduce energy costs, and automate scheduling, improving sustainability and efficiency.",
    whyChooseUsImages: [
      "/images/irrigation-1.jpg",
      "/images/irrigation-2.webp",
      "/images/irrigation-3.webp",
    ],
    partners: [
     "/images/castel-logo.png",
      "/images/Old-Mutual-logo.webp",
      "/images/PayChangu Logo.png",
      "/images/stephanos.jpg",
      "/images/bwb_logo.png",
      "/images/EGENCO.webp",
    ],
    detailedDescription: [
      {
        heading: "How It Works",
        content:
          "Sensors monitor soil moisture and weather conditions, adjusting watering automatically based on data.",
      },
      {
        heading: "Impact",
        content:
          "Smart irrigation can reduce water waste by up to 40% while increasing yield reliability and crop quality.",
        imageUrl: "/images/irrigation-top.webp",
      },
    ],
  },
  {
    id: "4",
    name: "Digital Marketplace",
    topSectionImage: "/images/marketplace-top.webp",
    topSectionDescription:
      "Connect farmers directly with buyers, input suppliers, and financial services online, creating a seamless digital ecosystem.",
    whyChooseUsText:
      "Our platform empowers farmers to access new markets, track orders, and complete transactions securely and efficiently.",
    whyChooseUsImages: [
      "/images/marketplace-1.webp",
      "/images/marketplace-2.webp",
      "/images/marketplace-3.webp",
    ],
    partners: [
      "/images/castel-logo.png",
      "/images/Old-Mutual-logo.webp",
      "/images/PayChangu Logo.png",
      "/images/stephanos.jpg",
      "/images/bwb_logo.png",
      "/images/EGENCO.webp",
    ],
    detailedDescription: [
      {
        heading: "Market Access",
        content:
          "Enables farmers to sell produce at competitive prices without intermediaries.",
      },
      {
        heading: "E-Commerce Integration",
        content:
          "Supports digital payments, logistics tracking, and fair pricing mechanisms.",
        imageUrl: "/images/marketplace-3.webp",
      },
    ],
  },
  {
    id: "5",
    name: "Farm Management Software",
    topSectionImage: "/images/farm-software-top.webp",
    topSectionDescription:
      "Centralize all farm operations, from planning and tracking to reporting and analytics, in one intuitive system.",
    whyChooseUsText:
      "Our software streamlines tasks, reduces errors, and provides actionable insights to improve farm productivity and management.",
    whyChooseUsImages: [
      "/images/farm-software-1.webp",
      "/images/farm-software-2.webp",
      "/images/farm-software-3.webp",
    ],
    partners: [
      "/images/castel-logo.png",
      "/images/Old-Mutual-logo.webp",
      "/images/PayChangu Logo.png",
      "/images/stephanos.jpg",
      "/images/bwb_logo.png",
      "/images/EGENCO.webp",
    ],
    detailedDescription: [
      {
        heading: "Features",
        content:
          "Tracks field activities, worker schedules, input usage, and financial records to streamline farm management.",
      },
      {
        heading: "Benefits",
        content:
          "Improves accountability, productivity, and decision-making through data analytics.",
        imageUrl: "/images/farm-software.webp",
      },
    ],
  },
  {
    id: "6",
    name: "Weather Forecasting and Advisory",
    topSectionImage: "/images/weather-top.webp",
    topSectionDescription:
      "Receive accurate, localized weather updates and farm advisories using advanced AI and satellite data.",
    whyChooseUsText:
      "Farmers can plan operations with confidence, reduce climate risks, and optimize timing for planting, irrigation, and harvesting.",
    whyChooseUsImages: [
      "/images/castel-logo.png",
      "/images/Old-Mutual-logo.webp",
      "/images/PayChangu Logo.png",
    ],
    partners: [
      "/images/castel-logo.png",
      "/images/Old-Mutual-logo.webp",
      "/images/PayChangu Logo.png",
      "/images/stephanos.jpg",
      "/images/bwb_logo.png",
      "/images/EGENCO.webp",
    ],
    detailedDescription: [
      {
        heading: "Forecasting Tools",
        content:
          "Combines satellite imagery and AI models to deliver hyper-local weather alerts and planting recommendations.",
      },
      {
        heading: "Impact",
        content:
          "Reduces crop losses due to climate variability and improves operational planning efficiency.",
        imageUrl: "/images/weather-5.webp",
      },
    ],
  },
  {
    id: "7",
    name: "Soil Testing and Fertility Mapping",
    topSectionImage: "/images/soil-top.webp",
    topSectionDescription:
      "Analyze soil properties to determine nutrient needs for each farm zone and optimize fertilizer application.",
    whyChooseUsText:
      "Our detailed soil analysis ensures precise recommendations, leading to healthier crops and better yields.",
    whyChooseUsImages: [
      "/images/soil-1.webp",
      "/images/soil-2.webp",
      "/images/soil-3.webp",
    ],
    partners: [
      "/images/castel-logo.png",
      "/images/Old-Mutual-logo.webp",
      "/images/PayChangu Logo.png",
      "/images/stephanos.jpg",
      "/images/bwb_logo.png",
      "/images/EGENCO.webp",

    ],
    detailedDescription: [
      {
        heading: "Soil Diagnostics",
        content:
          "Mobile or lab-based tests measure pH, nitrogen, phosphorus, and potassium levels to provide comprehensive fertility reports.",
        imageUrl: "/images/soil-map.webp",
      },
      {
        heading: "Output",
        content:
          "Generates fertility maps and fertilizer recommendations for precise and sustainable application.",
      },
    ],
  },
  {
    id: "8",
    name: "Livestock Tracking and Health Monitoring",
    topSectionImage: "/images/livestock-top.webp",
    topSectionDescription:
      "Monitor livestock health, movement, and productivity using IoT-enabled collars and sensors for smarter farm management.",
    whyChooseUsText:
      "Improve animal welfare, detect diseases early, and optimize feeding schedules to increase productivity and reduce losses.",
    whyChooseUsImages: [
      "/images/livestock-1.webp",
      "/images/livestock-monitoring.webp",
      "/images/livestock-3.webp",
    ],
    partners: [
      "/images/castel-logo.png",
      "/images/Old-Mutual-logo.webp",
      "/images/PayChangu Logo.png",
      "/images/stephanos.jpg",
      "/images/bwb_logo.png",
      "/images/EGENCO.webp",
    ],
    detailedDescription: [
      {
        heading: "Tracking System",
        content:
          "IoT-enabled devices provide real-time monitoring of animal activity, location, and health metrics.",
        imageUrl: "/images/livestock-monitoring.webp",
      },
      {
        heading: "Benefits",
        content:
          "Enhances animal welfare, reduces mortality rates, and improves productivity for dairy and meat operations.",
      },
    ],
  },
  {
    id: "9",
    name: "Climate Smart Advisory",
    topSectionImage: "/images/climate-top.webp",
    topSectionDescription:
      "AI-driven recommendations help farmers adopt climate-resilient practices for sustainable agriculture.",
    whyChooseUsText:
      "Our advisory services analyze historical and current climate data to provide actionable insights and minimize risks.",
    whyChooseUsImages: [
      "/images/climate-1.webp",
      "/images/climate-2.webp",
      "/images/climate-3.webp",
    ],
    partners: [
     "/images/castel-logo.png",
      "/images/Old-Mutual-logo.webp",
      "/images/PayChangu Logo.png",
      "/images/stephanos.jpg",
      "/images/bwb_logo.png",
      "/images/EGENCO.webp",
    ],
    detailedDescription: [
      {
        heading: "Climate Insights",
        content:
          "Uses weather patterns, soil, and crop data to provide recommendations that mitigate risk and improve yield.",
      },
      {
        heading: "Applications",
        content:
          "Helps farmers adjust planting dates, irrigation, and fertilization strategies for climate-resilient farming.",
        imageUrl: "/images/climate-application.webp",
      },
    ],
  },
  {
    id: "10",
    name: "Agricultural Training and Support",
    topSectionImage: "/images/training-top.webp",
    topSectionDescription:
      "Comprehensive farmer training programs covering modern techniques, machinery usage, and sustainable practices.",
    whyChooseUsText:
      "Our expert-led training improves knowledge, efficiency, and farm profitability, ensuring farmers maximize returns.",
    whyChooseUsImages: [
      "/images/training-1.webp",
      "/images/training-session.webp",
      "/images/training-3.webp",
    ],
    partners: [
     "/images/castel-logo.png",
      "/images/Old-Mutual-logo.webp",
      "/images/PayChangu Logo.png",
      "/images/stephanos.jpg",
      "/images/bwb_logo.png",
      "/images/EGENCO.webp",
    ],
    detailedDescription: [
      {
        heading: "Training Programs",
        content:
          "Workshops, on-site demonstrations, and online courses help farmers adopt best practices in agriculture.",
        imageUrl: "/images/training-session.webp",
      },
      {
        heading: "Impact",
        content:
          "Increases crop quality, yields, and sustainability while empowering farmers with practical knowledge.",
      },
    ],
  },
];


export const getServiceById =async (id : string) =>{
   const services = await getServices()
   const service = services.find(x=> x.id == id)
   return service
}