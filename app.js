const packages = [{
  priorityLevel: 'express',
  isFragile: false,
  weight: 2,
  to: 'Sir Harrington IV',
  trackingNumber: '1324kjs'
},
{
  priorityLevel: 'standard',
  isFragile: true,
  weight: .5,
  to: 'Master Mercutio',
  trackingNumber: '1325sdk'
},
{
  priorityLevel: 'free',
  isFragile: true,
  weight: .5,
  to: 'Mistress Ravenfeather',
  trackingNumber: 'jffd147'
},
{
  priorityLevel: 'standard',
  isFragile: false,
  weight: 4,
  to: 'B. Robert Brown',
  trackingNumber: 'acdc145'
},
{
  priorityLevel: 'express',
  isFragile: true,
  weight: 6,
  to: 'Chancellor Wallace',
  trackingNumber: 'kdur846'
},
{
  priorityLevel: 'standard',
  isFragile: false,
  weight: 5,
  to: 'Sarah Sharm',
  trackingNumber: '8081baz'
},
{
  priorityLevel: 'free',
  isFragile: true,
  weight: 12,
  to: 'Tae Lien',
  trackingNumber: 'suz2367'
}]

function drawPackages() {
  let pkgs = document.getElementById('pkgs')
  let template = ''

  packages.forEach(package => {
    template += `
      <h2 class="col-3 text-success">TO :</h2>
      <h2 class="col-3">${package.to}</h2>
      <h2 class="col-3 text-success">TRACKING # : </h2>
      <h2 class="col-3">${package.trackingNumber}</h2>
      `
  })

  // @ts-ignore
  pkgs.innerHTML = template
}

function drawFragile() {
  let pkgs = document.getElementById('pkgs')
  let template = ''

  packages.forEach(package => {
    if (package.isFragile) {
      template += `
      <h6 class="col-2 text-success">TO :</h6>
      <h6 class="col-2">${package.to}</h6>
      <h6 class="col-2 text-success">TRACKING # : </h6>
      <h6 class="col-2">${package.trackingNumber}</h6>
      <h6 class="col-2 text-success">PACKAGE IS FRAGILE :</h6>
      <h6 class="col-2">${package.isFragile}</h6>
       `} else {
      template += `
      <h6 class="col-2 text-success">TO :</h6>
      <h6 class="col-2">${package.to}</h6>
      <h6 class="col-2 text-success">TRACKING # : </h6>
      <h6 class="col-2">${package.trackingNumber}</h6>
      <h6 class="col-2 text-success">PACKAGE IS FRAGILE :</h6>
      <h6 class="col-2">${package.isFragile}</h6>`

    }
  })
  pkgs.innerHTML = template
}

function drawHeavy() {
  let pkgs = document.getElementById('pkgs')
  let template = ''

  packages.forEach(package => {
    if (package.weight >= .01) {
      template += `
      <h6 class="col-2 text-success">TO :</h6>
      <h6 class="col-2">${package.to}</h6>
      <h6 class="col-2 text-success">TRACKING # : </h6>
      <h6 class="col-2">${package.trackingNumber}</h6>
      <h6 class="col-2 text-success">WEIGHT :</h6>
      <h6 class="col-2">${package.weight}</h6>
       `} else {
      console.log('NOT HEAVY')
    }
  })
  pkgs.innerHTML = template
}

function drawPriority() {
  let pkgs = document.getElementById('pkgs')
  let template = ''

  packages.forEach(package => {
    if (package.priorityLevel == 'express', 'free', 'standard') {
      template += `
      <h6 class="col-2 text-success">TO :</h6>
      <h6 class="col-2">${package.to}</h6>
      <h6 class="col-2 text-success">TRACKING # : </h6>
      <h6 class="col-2">${package.trackingNumber}</h6>
      <h6 class="col-2 text-success">PRIORITY :</h6>
      <h6 class="col-2">${package.priorityLevel}</h6>
       `} else {
      console.log('NOT PRIORITY')
    }
  })
  pkgs.innerHTML = template
}

function reset() {
  drawPackages()
}




drawPackages()