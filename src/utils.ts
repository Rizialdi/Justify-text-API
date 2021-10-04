import { User } from '@prisma/client';
import { hash } from 'bcrypt';

export const generateHashFromPassword = async (
  password: string,
  saltOrRounds: number
): Promise<string> => {
  const hashedPassword = await hash(password, saltOrRounds);

  return hashedPassword;
};

export const processTextGivenMaxLength = (text: string, maxLength = 80) => {
  const processedArray = sentencesDividerAndSpaceFiller(text, maxLength);

  return processedArray;
};

const addSpaces = (textLine: string, maxLength = 80): string => {
  let line = textLine.trim();
  let j = 1;

  for (let i = 0; i < line.length; i++) {
    if (line[i] === ' ' && line.length < maxLength) {
      line = line.substring(0, i) + '  ' + line.substring(i + 1);
      i = i + j;
    } else if (i === line.length - 1 && line.length < maxLength) {
      i = 0;
      j++;
    }
  }
  return line;
};

const sentencesDividerAndSpaceFiller = (
  text: string,
  maxLength: number
): string => {
    let cmp = 79;
  let newtext = "";
  let tempText = "";

  let j;
  text = text.replace(/\s\s+/g, " ");

  for (let i = 0; i < text.length; i++) {
    tempText += text[i];
    if (i === cmp) {
      if (text[i] === " " || text[i] === "," || text[i] === ".") {
        tempText = addSpaces(tempText, maxLength);
        newtext += `${tempText} \n`;
        tempText = "";
        cmp = i + 1 + maxLength;
      } else {
        j = 0;
        while (text[i] !== " " && text[i] !== "." && text[i] !== ",") {
          i = i - 1;
          j++;
        }
        tempText = tempText.substr(0, tempText.length - j);
        tempText = addSpaces(tempText, maxLength);
        newtext += `${tempText} \n`;
        tempText = "";
        cmp = i + maxLength;
      }
    }
    if (!text.slice(i + 1).length) {
      tempText = addSpaces(tempText, maxLength);
      newtext += `${tempText} \n`;
      tempText = "";
    }
  }

  return newtext;
};

export const removeSensibleInfos = (user: User) => {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const { id, password, ...result } = user;

  return result;
};
