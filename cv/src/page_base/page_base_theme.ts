export interface PageBaseTheme {
  mainColors: {
    darkest: string;
    darker: string;
    normal: string;
    ligther: string;
    ligthest: string;
  };
  background: string;
  overlayBackground: string;
}

export const coralTheme: PageBaseTheme = {
  mainColors: {
    darkest: "#C2571A",
    darker: "#DA621E",
    normal: "#F26D21",
    ligther: "#F58B4C",
    ligthest: "#FFF1B2",
  },
  background: "#FFFCF3",
  overlayBackground: "#28373c",
};

export const indigoTheme: PageBaseTheme = {
  mainColors: {
    darkest: "#093145",
    darker: "#0C374D",
    normal: "#0D3D56",
    ligther: "#3C6478",
    ligthest: "#A2CADE",
  },
  background: "#F0F6F9",
  overlayBackground: "#28373c",
};
