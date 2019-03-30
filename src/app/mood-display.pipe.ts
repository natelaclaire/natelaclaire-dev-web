import { Pipe, PipeTransform } from '@angular/core';
/*
 * Display the mood based on an integer
 * Usage:
 *   value | moodDisplay
 * Example:
 *   {{ 2 | moodDisplay }}
 *   formats to: 1024
*/
@Pipe({ name: 'moodDisplay' })
export class MoodDisplayPipe implements PipeTransform {
    transform(value: string): string {
        var valNum = parseInt(value);
        let mood = "";
        switch (valNum) {
            case 5:
                mood = "pumped, energized 🤩";
                break;
            case 4:
                mood = "happy, excited 😃";
                break;
            case 3:
                mood = "good, alright 😎";
                break;
            case 2:
                mood = "okay 🙃";
                break;
            case 1:
                mood = "okay 🙃";
                break;
            case 0:
                mood = "okay 🙃";
                break;
        }


        return mood;
    }
}