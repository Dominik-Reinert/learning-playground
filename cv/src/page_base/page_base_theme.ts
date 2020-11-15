export interface PageBaseTheme {
  colors: {
    dark: string;
    normal: string;
    light: string;
  };
  grayscale: {
    dark: string;
    normal: string;
    light: string;
  };
}

export const blueTheme: PageBaseTheme = {
  colors: {
    dark: "#9ECDE9",
    normal: "#B4D9EE",
    light: "#D2ECFA",
  },
  grayscale: {
    dark: "#AAAAAA",
    normal: "#BBBBBB",
    light: "#CFCFCF",
  },
};
