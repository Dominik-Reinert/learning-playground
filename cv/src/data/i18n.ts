import i18n from "i18next";
import LanguageDetector from "i18next-browser-languagedetector";
import { initReactI18next } from "react-i18next";
import {
  aboutMeDe,
  aboutMeEn,
  aboutMeHeadlineDe,
  aboutMeHeadlineEn,
} from "./about_me";
import { bigFiveDe, bigFiveEn } from "./big_five";
import { cvHeadlineDe, cvHeadlineEn } from "./cv";
import {
  cvQuoteAuthorDe,
  cvQuoteAuthorEn,
  cvQuoteDe,
  cvQuoteEn,
} from "./cv_quote";
import { interactiveResumeDe, interactiveResumeEn } from "./interactive_resume";
import { profileDe, profileEn } from "./profile";
import {
  ageDe,
  ageEn,
  ageHeadlineDe,
  ageHeadlineEn,
  detailsHeadlineDe,
  detailsHeadlineEn,
  locationDe,
  locationEn,
  locationHeadlineDe,
  locationHeadlineEn,
  nameDe,
  nameHeadlineDe,
} from "./profile_data";
import {
  profileQuoteAuthorDe,
  profileQuoteAuthorEn,
  profileQuoteDe,
  profileQuoteEn,
} from "./profile_quote";
import {
  agileProcessesDe,
  agileProcessesEn,
  communicationDe,
  communicationEn,
  englishDe,
  englishEn,
  frenchDe,
  frenchEn,
  functionalProgramingDe,
  functionalProgramingEn,
  germanDe,
  germanEn,
  hardSkillsDe,
  hardSkillsEn,
  languagesDe,
  languagesEn,
  skillsHeadlineDe,
  skillsHeadlineEn,
  skillsQuoteAuthorDe,
  skillsQuoteAuthorEn,
  skillsQuoteDe,
  skillsQuoteEn,
  softSkillsDe,
  softSkillsEn,
  timeManagementDe,
  timeManagementEn,
  toolsDe,
  toolsEn,
} from "./skills";
import { timelineDe, timelineEn } from "./timeline";
import { welcomeDe, welcomeEn, welcomeMsgDe, welcomeMsgEn } from "./welcome";

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources: {
      en: {
        translations: {
          bigFive: bigFiveEn,
          welcome: welcomeEn,
          welcomeMsg: welcomeMsgEn,
          timeline: timelineEn,
          interactiveResume: interactiveResumeEn,
          profile: profileEn,
          profileQuote: profileQuoteEn,
          profileQuoteAuthor: profileQuoteAuthorEn,
          aboutMeHeadline: aboutMeHeadlineEn,
          aboutMe: aboutMeEn,
          detailsHeadline: detailsHeadlineEn,
          name: nameDe,
          nameHeadline: nameHeadlineDe,
          age: ageEn,
          ageHeadline: ageHeadlineEn,
          location: locationEn,
          locationHeadline: locationHeadlineEn,
          cvHeadline: cvHeadlineEn,
          cvQuote: cvQuoteEn,
          cvQuoteAuthor: cvQuoteAuthorEn,
          skillsHeadline: skillsHeadlineEn,
          skillsQuote: skillsQuoteEn,
          skillsQuoteAuthor: skillsQuoteAuthorEn,
          agileProcesses: agileProcessesEn,
          communication: communicationEn,
          timeManagement: timeManagementEn,
          softSkills: softSkillsEn,
          hardSkills: hardSkillsEn,
          languages: languagesEn,
          tools: toolsEn,
          german: germanEn,
          english: englishEn,
          french: frenchEn,
          functionalPrograming: functionalProgramingEn,
        },
      },
      de: {
        translations: {
          bigFive: bigFiveDe,
          welcome: welcomeDe,
          welcomeMsg: welcomeMsgDe,
          timeline: timelineDe,
          interactiveResume: interactiveResumeDe,
          profile: profileDe,
          profileQuote: profileQuoteDe,
          profileQuoteAuthor: profileQuoteAuthorDe,
          aboutMeHeadline: aboutMeHeadlineDe,
          aboutMe: aboutMeDe,
          detailsHeadline: detailsHeadlineDe,
          name: nameDe,
          nameHeadline: nameHeadlineDe,
          age: ageDe,
          ageHeadline: ageHeadlineDe,
          location: locationDe,
          locationHeadline: locationHeadlineDe,
          cvHeadline: cvHeadlineDe,
          cvQuote: cvQuoteDe,
          cvQuoteAuthor: cvQuoteAuthorDe,
          skillsHeadline: skillsHeadlineDe,
          skillsQuote: skillsQuoteDe,
          skillsQuoteAuthor: skillsQuoteAuthorDe,
          agileProcesses: agileProcessesDe,
          communication: communicationDe,
          timeManagement: timeManagementDe,
          softSkills: softSkillsDe,
          hardSkills: hardSkillsDe,
          languages: languagesDe,
          tools: toolsDe,
          german: germanDe,
          english: englishDe,
          french: frenchDe,
          functionalPrograming: functionalProgramingDe,
        },
      },
    },
    fallbackLng: "en",
    debug: true,

    // have a common namespace used around the full app
    ns: ["translations"],
    defaultNS: "translations",

    keySeparator: false, // we use content as keys

    interpolation: {
      escapeValue: false,
    },
  });

export default i18n;
