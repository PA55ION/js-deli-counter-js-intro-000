var katzDeliLine = [];

function takeANumber(line, name) {
    line.push(name);
    return `Welcome, ${name}. You are number ${line.length} in line.`;

}

function nowServing(line) {
    if(!line.length)
    return `There is nobody waiting to be served!`;
}

function currentLine(line) {
      if(!line.length) return 'The line is currently empty.';

      const numberAndName = [];

      for (let i = 0; i < line.length; i++) {
        numberAndName.push(`${i + 1}. ${line[i]}`);
      }
      return `The line is currently ${i} + ${line}`
}
