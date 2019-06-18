var katzDeliLine = [];

function takeANumber(line, name) {
  line.push(name)
  
  return "Welcome, ${name}. You are number ${line.length} in line"
}

function nowServing(line) {
  return `Currently serving ${line.shift()}.`
  
  if (line.length) {
    return 'There nobody waiting to be served'
  }
}

function currentLine(line) {
  var numberAndNames = []
  
  for(i = 0, l = line.length; i < l; i++) {
    numberAndNames.push(`${i + 1}. ${line[i]}`)
  }
  
  if (line.length) {
    return "The line is currently empty."
  }
}