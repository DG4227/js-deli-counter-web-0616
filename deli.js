var katzDeli = [];
const deliLine = []

function takeANumber(katzDeliLine, name) { 
	katzDeliLine.push(name)
	return `Welcome, ${name}. You are number ${katzDeliLine.length} in line.`
}

function nowServing(line) { 
	if (line.length === 0) {
		return "There is nobody waiting to be served!"
	}
	else {
		return `Currently serving ${line.shift()}.`
	}
}



function currentLine(line) {
	var linePeople = []

  if (line.length === 0) {
    return "The line is currently empty."
  }


  for (let i = 0, l = line.length; i < l; i++) {
    linePeople.push(`${i + 1}. ${line[i]}`)
  }

  return `The line is currently: ${linePeople.join(', ')}`
};