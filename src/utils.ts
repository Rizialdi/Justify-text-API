import { IncomingMessage } from 'http';
import { User } from '@prisma/client';
import { hash } from 'bcrypt';

const sentencesDividerAndSpaceFiller = (
  text: string,
  maxLength: number
): string[] => {
  let currentLine = '';
  const localNewLinesArray = [];

  const wordsArray = text.trim().split(' ');
  let processedWords = 0;

  while (processedWords !== wordsArray.length) {
    const currentWord = wordsArray[processedWords];
    const condition = currentLine.length + currentWord.length;

    if (condition <= maxLength) {
      currentLine = currentLine.concat(`${currentWord} `);

      // move on only if the word is processed
      processedWords++;
    } else if (condition > maxLength || processedWords !== wordsArray.length) {
      localNewLinesArray.push(currentLine);
      currentLine = '';
    }
  }

  return localNewLinesArray;
};

export const processTextGivenMaxLength = (text: string, maxLength: number) => {
  const processedArray = sentencesDividerAndSpaceFiller(text, maxLength);
  console.log('l', processedArray);
  return processedArray?.join('\n');
};

export const generateHashFromPassword = async (
  password: string,
  saltOrRounds: number
): Promise<string> => {
  const hashedPassword = await hash(password, saltOrRounds);

  return hashedPassword;
};

export const addSpace = () => {
  return;
};

export const removeSensibleInfos = (user: User) => {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const { id, password, ...result } = user;

  return result;
};
