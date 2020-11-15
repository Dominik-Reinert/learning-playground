export interface PageBaseTheme {
  colors: {
    dark: string;
    normal: string;
  };
  grayscale: {
    dark: string;
    labelOnBackground: string;
    borderOnBackground: string;
    background: string;
    labelOnColor: string;
  };
}

export const orangeTheme: PageBaseTheme = {
  colors: {
    dark: "#FE5800",
    normal: "#FF7300",
  },
  grayscale: {
    dark: "#444444",
    labelOnBackground: "#606060",
    borderOnBackground: "#d8d8d8",
    labelOnColor: "#fafafa",
    background: "#f5f5f5",
  },
};
