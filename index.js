function takeANumber(line, name) {
  line.push(name)
  
  return `Welcome, ${name}. You are number ${line.length} in line.`
}


function nowServing(line) {
  if (line.length === 0) {
    return 'There is nobody waiting to be served!'
  }
  
  return `Currently serving ${line.shift()}.`
}

function currentLine(line) {
  if (line.length === 0) {
    return "The line is currently empty."
  }
  
    var numberAndNames = []
  
  for(let i = 0; i < line.length; i++ ) {
    numberAndNames.push(`${i + 1}. ${line[i]}`)
  }
  
    return `The line is currently: ${numberAndNames.join(', ')}`
}