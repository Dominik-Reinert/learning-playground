import i18n from "i18next";
import LanguageDetector from "i18next-browser-languagedetector";
import { initReactI18next } from "react-i18next";
import { bigFiveEn, bigFiveDe } from "./big_five";
import { welcomeEn, welcomeDe, welcomeMsgEn, welcomeMsgDe } from "./welcome";
import { timelineEn, timelineDe } from "./timeline";
import { interactiveResumeEn, interactiveResumeDe } from "./interactive_resume";
import { profileEn, profileDe } from "./profile";
import {
  profileQuoteAuthorEn,
  profileQuoteEn,
  profileQuoteDe,
  profileQuoteAuthorDe,
} from "./profile_quote";
import {
  aboutMeHeadlineEn,
  aboutMeHeadlineDe,
  aboutMeEn,
  aboutMeDe,
} from "./about_me";
import {
  detailsHeadlineDe,
  nameDe,
  detailsHeadlineEn,
  nameHeadlineDe,
  ageDe,
  locationDe,
  ageEn,
  locationHeadlineEn,
  locationHeadlineDe,
  ageHeadlineEn,
  ageHeadlineDe,
  locationEn,
} from "./profile_data";
import { cvHeadlineEn, cvHeadlineDe } from "./cv";
import {
  cvQuoteEn,
  cvQuoteAuthorEn,
  cvQuoteDe,
  cvQuoteAuthorDe,
} from "./cv_quote";
import {
  skillsHeadlineEn,
  skillsHeadlineDe,
  skillsQuoteDe,
  skillsQuoteAuthorDe,
  skillsQuoteEn,
  skillsQuoteAuthorEn,
  agileProcessesEn,
  agileProcessesDe,
  communicationDe,
  timeManagementDe,
  communicationEn,
  timeManagementEn,
  softSkillsEn,
  hardSkillsEn,
  softSkillsDe,
  hardSkillsDe,
  languagesEn,
  toolsEn,
  germanEn,
  englishEn,
  frenchEn,
  languagesDe,
  toolsDe,
  germanDe,
  englishDe,
  frenchDe,
  functionalProgramingEn,
  functionalProgramingDe,
} from "./skills";

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
