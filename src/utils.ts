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

  return processedArray?.join('\n');
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
): string[] => {
  let currentLine = '';
  const localNewLinesArray = [];

  const wordsArray = text.replace(/\s+/g, ' ').trim().split(' ');

  for (
    let processedWords = 0;
    processedWords < wordsArray.length + 1;
    processedWords++
  ) {
    if (!wordsArray.slice(processedWords).length) {
      localNewLinesArray.push(addSpaces(currentLine));
      currentLine = '';
    } else {
      const currentWord = wordsArray[processedWords];
      const condition = currentLine.length + currentWord.length;

      if (condition <= maxLength) {
        currentLine = currentLine.concat(`${currentWord} `);
      } else if (condition > maxLength) {
        localNewLinesArray.push(addSpaces(currentLine));
        currentLine = `${wordsArray[processedWords]} `;
      }
    }
  }

  return localNewLinesArray;
};

export const removeSensibleInfos = (user: User) => {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const { id, password, ...result } = user;

  return result;
};
