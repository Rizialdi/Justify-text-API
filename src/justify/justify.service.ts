import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma.service';
import { WordCounter } from '@prisma/client';
import { processTextGivenMaxLength } from 'src/utils';

@Injectable()
export class JustifyService {
  constructor(private prisma: PrismaService) {}

  getHello(): string {
    return 'Soy un hombre!';
  }

  justifyText(text: string): string {
    const maxLength = 80;
    return processTextGivenMaxLength(text, maxLength);
  }

  async getWordCounter(email: string): Promise<WordCounter | null> {
    const user = await this.prisma.user.findUnique({
      where: { email },
      include: { wordCounter: true },
    });

    if (!user) return null;

    return user.wordCounter;
  }

  async willUserExceedFreeLimit(
    email: string,
    currentTextTotalWordCount: number
  ): Promise<boolean> {
    const userWordCounter = await this.getWordCounter(email);
    const { lastestQueryDate, wordCount } = userWordCounter;
    const wordSum = wordCount + currentTextTotalWordCount;
    const elapsedTime =
      new Date(Date.now()).getHours() - lastestQueryDate.getHours();

    if (elapsedTime > 24) {
      const isHigherThanDailyLimit = currentTextTotalWordCount > 80000;
      !isHigherThanDailyLimit &&
        this.updateWordCounterDetails(email, currentTextTotalWordCount);

      return isHigherThanDailyLimit;
    } else if (elapsedTime < 24) {
      const isHigherThanDailyLimit = wordSum > 80000;
      !isHigherThanDailyLimit && this.updateWordCounterDetails(email, wordSum);

      return isHigherThanDailyLimit;
    }
  }

  updateWordCounterDetails = async (email: string, wordSum: number) => {
    await this.prisma.user.update({
      data: {
        wordCounter: {
          update: {
            wordCount: wordSum,
            lastestQueryDate: new Date(Date.now()),
          },
        },
      },
      where: { email },
    });
  };
}
