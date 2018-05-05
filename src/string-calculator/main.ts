import * as ExternalEditor from 'external-editor';

import add from './string-calculator';

const data = ExternalEditor.edit('\n\n# Please remove this comment and enter a string containing numbers to be added');
const sum = add(data);
console.log(`\nThe sum is: ${sum}`);
