import { Component, inject } from '@angular/core';
import { MorseCodeDecoderService, Language } from './services/morse-code-decoder.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  private decoderService = inject(MorseCodeDecoderService);
  
  morseCode: string = '';
  decodedText: string = '';
  currentLanguage: Language = 'japanese';

  onMorseCodeInput(event: Event): void {
    const target = event.target as HTMLTextAreaElement;
    const inputValue = target.value;
    
    const filteredValue = this.decoderService.filterValidMorseCode(inputValue);
    
    if (filteredValue !== inputValue) {
      target.value = filteredValue;
    }
    
    this.morseCode = filteredValue;
    this.updateDecodedText();
  }

  onKeyDown(event: KeyboardEvent): void {
    const allowedKeys = [
      'Backspace', 'Delete', 'ArrowLeft', 'ArrowRight', 'ArrowUp', 'ArrowDown',
      'Home', 'End', 'Tab', 'Enter', 'Escape', 'Control', 'Alt', 'Shift', 'Meta'
    ];
    
    if (allowedKeys.includes(event.key)) {
      return;
    }
    
    const isCtrlOrCmdPressed = event.ctrlKey || event.metaKey;
    if (isCtrlOrCmdPressed && ['a', 'c', 'v', 'x', 'z', 'y'].includes(event.key.toLowerCase())) {
      return;
    }
    
    if (!this.decoderService.isValidMorseCodeCharacter(event.key)) {
      event.preventDefault();
    }
  }

  toggleLanguage(): void {
    this.currentLanguage = this.currentLanguage === 'japanese' ? 'english' : 'japanese';
    this.updateDecodedText();
  }

  private updateDecodedText(): void {
    this.decodedText = this.decoderService.decodeMessage(this.morseCode, this.currentLanguage);
  }
}
