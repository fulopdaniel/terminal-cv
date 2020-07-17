import {
  COMMAND_LIST,
  HELP_COMMAND,
  PROFILE_COMMAND,
  NotFound,
  EXPERIENCE_COMMAND,
  EDUCATION_COMMAND,
  PUBLICATIONS_COMMAND,
  CONTACT_COMMAND,
} from "../Commands/Commands";
import Prefix from "./TerminalInput/Prefix/Prefix";

export const TerminalUtil = {
  processCommand: (command: string): JSX.Element | JSX.Element[] => {
    if (COMMAND_LIST.help.includes(command)) {
      return HELP_COMMAND;
    }
    if (COMMAND_LIST.profile.includes(command)) {
      return PROFILE_COMMAND;
    }
    if (COMMAND_LIST.experience.includes(command)) {
      return EXPERIENCE_COMMAND;
    }
    if (COMMAND_LIST.education.includes(command)) {
      return EDUCATION_COMMAND;
    }
    if (COMMAND_LIST.publications.includes(command)) {
      return PUBLICATIONS_COMMAND;
    }
    if (COMMAND_LIST.contact.includes(command)) {
      return CONTACT_COMMAND;
    }
    if (COMMAND_LIST.clear.includes(command)) {
      return [];
    }
    if (command === "") {
      return Prefix();
    }
    return NotFound(command);
  },
};
