import { IncomingMessage } from 'http';

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

export const readPost = (req: IncomingMessage) => {
  // original -> https://stackoverflow.com/a/67892455
  return new Promise<string>((resolve, reject) => {
    let body = '';
    req.on('data', (data: string) => (body += data));
    req.on('error', (error: unknown) => reject(error));
    req.on('end', () => resolve(body));
  });
};