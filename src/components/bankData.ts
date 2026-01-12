export interface BankData {
  name: string;
  appId: string;
  totalRaters: number;
  ratings: {
    five: number;
    four: number;
    three: number;
    two: number;
    one: number;
  };
  averageRating: number;
  horizontalScore: number;
  verticalScore: number;
  verticalScorePercent: number;
  volumeValue: number;
  lastMonthDownloads: number;
  lastMonthRaters: number;
  lastMonthComments: number;
  activityScore: number;
  finalScore: number;
  category: string;
}

export const bankData: BankData[] = [
  {
    name: "ALIF",
    appId: "Alif: shop, pay and transfer ",
    totalRaters: 253_179,
    ratings: {
      five: 228_701,
      four: 9_780,
      three: 4_346,
      two: 2_587,
      one: 7_765
    },
    averageRating: 4.77,
    horizontalScore: 95.4,
    verticalScore: 4.81,
    verticalScorePercent: 96.2,
    volumeValue: 0,
    lastMonthDownloads: 220_000,
    lastMonthRaters: 2_532,
    lastMonthComments: 253,
    activityScore: 97.32,
    finalScore: 96.31,
    category: "To‘lov tashkiloti"
  },
  {
    name: "APAY",
    appId: "Apay ",
    totalRaters: 947,
    ratings: {
      five: 542,
      four: 75,
      three: 37,
      two: 37,
      one: 256
    },
    averageRating: 3.64,
    horizontalScore: 72.8,
    verticalScore: 0.43,
    verticalScorePercent: 8.65,
    volumeValue: 0,
    lastMonthDownloads: 1_700,
    lastMonthRaters: 9,
    lastMonthComments: 1,
    activityScore: 26.77,
    finalScore: 36.07,
    category: "To‘lov tashkiloti"
  },
  {
    name: "ATTO",
    appId: "ATTO.Uz ",
    totalRaters: 45_783,
    ratings: {
      five: 39_178,
      four: 2_471,
      three: 1_168,
      two: 495,
      one: 2_471
    },
    averageRating: 4.65,
    horizontalScore: 93,
    verticalScore: 4.1,
    verticalScorePercent: 82.07,
    volumeValue: 0,
    lastMonthDownloads: 33_000,
    lastMonthRaters: 458,
    lastMonthComments: 46,
    activityScore: 87.09,
    finalScore: 87.39,
    category: "To‘lov tashkiloti"
  },
  {
    name: "BEEPUL",
    appId: "Beepul ",
    totalRaters: 130_225,
    ratings: {
      five: 119_081,
      four: 4_977,
      three: 2_177,
      two: 932,
      one: 3_058
    },
    averageRating: 4.81,
    horizontalScore: 96.2,
    verticalScore: 4.64,
    verticalScorePercent: 92.87,
    volumeValue: 0,
    lastMonthDownloads: 78_000,
    lastMonthRaters: 1_302,
    lastMonthComments: 130,
    activityScore: 94.82,
    finalScore: 94.63,
    category: "To‘lov tashkiloti"
  },
  {
    name: "CLICK",
    appId: "Click SuperApp ",
    totalRaters: 633_315,
    ratings: {
      five: 567_496,
      four: 28_167,
      three: 12_040,
      two: 6_101,
      one: 19_511
    },
    averageRating: 4.77,
    horizontalScore: 95.4,
    verticalScore: 4.92,
    verticalScorePercent: 98.45,
    volumeValue: 0,
    lastMonthDownloads: 390_000,
    lastMonthRaters: 6_333,
    lastMonthComments: 633,
    activityScore: 98.88,
    finalScore: 97.58,
    category: "To‘lov tashkiloti"
  },
  {
    name: "IWON",
    appId: "iwon ",
    totalRaters: 8,
    ratings: {
      five: 8,
      four: 0,
      three: 0,
      two: 0,
      one: 0
    },
    averageRating: 5,
    horizontalScore: 100,
    verticalScore: 0,
    verticalScorePercent: 0.08,
    volumeValue: 0,
    lastMonthDownloads: 80,
    lastMonthRaters: 0,
    lastMonthComments: 0,
    activityScore: 2.47,
    finalScore: 34.18,
    category: "To‘lov tashkiloti"
  },
  {
    name: "LIMON PAY",
    appId: "Limon pay ",
    totalRaters: 364,
    ratings: {
      five: 257,
      four: 10,
      three: 6,
      two: 0,
      one: 91
    },
    averageRating: 3.94,
    horizontalScore: 78.8,
    verticalScore: 0.18,
    verticalScorePercent: 3.51,
    volumeValue: 0,
    lastMonthDownloads: 2_100,
    lastMonthRaters: 4,
    lastMonthComments: 0,
    activityScore: 23.86,
    finalScore: 35.39,
    category: "To‘lov tashkiloti"
  },
  {
    name: "OSON",
    appId: "OSON - Transfers and Payments ",
    totalRaters: 90_377,
    ratings: {
      five: 79_810,
      four: 3_777,
      three: 1_948,
      two: 1_098,
      one: 3_744
    },
    averageRating: 4.71,
    horizontalScore: 94.2,
    verticalScore: 4.5,
    verticalScorePercent: 90.04,
    volumeValue: 0,
    lastMonthDownloads: 27_000,
    lastMonthRaters: 904,
    lastMonthComments: 90,
    activityScore: 92.16,
    finalScore: 92.13,
    category: "To‘lov tashkiloti"
  },
  {
    name: "PAYME",
    appId: "payme - to’lov va o’tkazmalar ",
    totalRaters: 749_177,
    ratings: {
      five: 664_907,
      four: 33_455,
      three: 14_337,
      two: 7_578,
      one: 28_900
    },
    averageRating: 4.73,
    horizontalScore: 94.6,
    verticalScore: 4.93,
    verticalScorePercent: 98.68,
    volumeValue: 0,
    lastMonthDownloads: 360_000,
    lastMonthRaters: 7_492,
    lastMonthComments: 749,
    activityScore: 99.03,
    finalScore: 97.44,
    category: "To‘lov tashkiloti"
  },
  {
    name: "PAYNET",
    appId: "Paynet — тўлов ва ўтказмалар ",
    totalRaters: 154_656,
    ratings: {
      five: 135_145,
      four: 6_065,
      three: 3_022,
      two: 1_810,
      one: 8_614
    },
    averageRating: 4.66,
    horizontalScore: 93.2,
    verticalScore: 4.7,
    verticalScorePercent: 93.93,
    volumeValue: 0,
    lastMonthDownloads: 900_000,
    lastMonthRaters: 1_547,
    lastMonthComments: 155,
    activityScore: 95.92,
    finalScore: 94.35,
    category: "To‘lov tashkiloti"
  },
  {
    name: "PAYWAY",
    appId: "PayWay удобные переводы по СНГ ",
    totalRaters: 1_183,
    ratings: {
      five: 1_066,
      four: 22,
      three: 27,
      two: 9,
      one: 59
    },
    averageRating: 4.71,
    horizontalScore: 94.2,
    verticalScore: 0.53,
    verticalScorePercent: 10.58,
    volumeValue: 0,
    lastMonthDownloads: 270,
    lastMonthRaters: 12,
    lastMonthComments: 1,
    activityScore: 13.69,
    finalScore: 39.49,
    category: "To‘lov tashkiloti"
  },
  {
    name: "PLUM",
    appId: "Plum ",
    totalRaters: 5_314,
    ratings: {
      five: 4_512,
      four: 219,
      three: 155,
      two: 72,
      one: 356
    },
    averageRating: 4.59,
    horizontalScore: 91.8,
    verticalScore: 1.74,
    verticalScorePercent: 34.7,
    volumeValue: 0,
    lastMonthDownloads: 2_400,
    lastMonthRaters: 53,
    lastMonthComments: 5,
    activityScore: 46.19,
    finalScore: 57.56,
    category: "To‘lov tashkiloti"
  },
  {
    name: "SELLO SUPERAPP",
    appId: "Sello SuperApp ",
    totalRaters: 2_217,
    ratings: {
      five: 2_036,
      four: 43,
      three: 10,
      two: 21,
      one: 107
    },
    averageRating: 4.75,
    horizontalScore: 95,
    verticalScore: 0.91,
    verticalScorePercent: 18.15,
    volumeValue: 0,
    lastMonthDownloads: 2_800,
    lastMonthRaters: 22,
    lastMonthComments: 2,
    activityScore: 36.13,
    finalScore: 49.76,
    category: "To‘lov tashkiloti"
  },
  {
    name: "TEZPAY",
    appId: "TezPay ",
    totalRaters: 7_507,
    ratings: {
      five: 6_032,
      four: 293,
      three: 141,
      two: 70,
      one: 971
    },
    averageRating: 4.38,
    horizontalScore: 87.6,
    verticalScore: 2.14,
    verticalScorePercent: 42.88,
    volumeValue: 0,
    lastMonthDownloads: 5_000,
    lastMonthRaters: 75,
    lastMonthComments: 8,
    activityScore: 56.88,
    finalScore: 62.45,
    category: "To‘lov tashkiloti"
  },
  {
    name: "UPAY",
    appId: "UPay -Удобный платежный сервис ",
    totalRaters: 16_218,
    ratings: {
      five: 13_581,
      four: 632,
      three: 380,
      two: 263,
      one: 1_362
    },
    averageRating: 4.53,
    horizontalScore: 90.6,
    verticalScore: 3.09,
    verticalScorePercent: 61.86,
    volumeValue: 0,
    lastMonthDownloads: 2_300,
    lastMonthRaters: 162,
    lastMonthComments: 16,
    activityScore: 64.36,
    finalScore: 72.27,
    category: "To‘lov tashkiloti"
  }
];