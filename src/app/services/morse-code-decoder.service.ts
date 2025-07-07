import { Injectable } from '@angular/core';
import { 
  ENGLISH_MORSE_CODE_TABLE, 
  JAPANESE_MORSE_CODE_TABLE, 
  getReverseMorseCodeTable, 
  MorseCodeTable 
} from '../models/morse-code-table';

export type Language = 'english' | 'japanese';

@Injectable({
  providedIn: 'root'
})
export class MorseCodeDecoderService {
  private englishReverseTable: MorseCodeTable;
  private japaneseReverseTable: MorseCodeTable;

  constructor() {
    this.englishReverseTable = getReverseMorseCodeTable(ENGLISH_MORSE_CODE_TABLE);
    this.japaneseReverseTable = getReverseMorseCodeTable(JAPANESE_MORSE_CODE_TABLE);
  }

  decodeMessage(morseCode: string, language: Language): string {
    const reverseTable = language === 'english' ? this.englishReverseTable : this.japaneseReverseTable;
    
    // 入力値を正規化（複数スペースを単一スペースに変換）
    const normalizedInput = morseCode.replace(/\s+/g, ' ').trim();
    
    if (!normalizedInput) {
      return '';
    }

    // スペースで分割してモールスコードの各部分を取得
    const morseCodeParts = normalizedInput.split(' ');
    
    // 各部分を文字に変換
    const decodedChars = morseCodeParts.map(part => {
      if (part === '') {
        return ''; // 空の部分は空文字を返す
      }
      return reverseTable[part] || ''; // 解読できない場合は空文字
    });

    return decodedChars.join('');
  }

  isValidMorseCodeCharacter(char: string): boolean {
    return char === '.' || char === '-' || char === ' ';
  }

  filterValidMorseCode(input: string): string {
    return input.split('').filter(char => this.isValidMorseCodeCharacter(char)).join('');
  }
}