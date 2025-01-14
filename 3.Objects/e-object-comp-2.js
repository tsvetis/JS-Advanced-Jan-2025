function canScan(device) {
  device.scan = function () {
    console.log(`${this.name} is scanning page`);
  };
}

function canPrint(device) {
  device.print = function () {
    console.log(`${this.name} is printing page`);
  };
}

const printer = { name: "Lexmark" };
canPrint(printer);
printer.print();

const scanner = { name: "HP Scanner" };
canScan(scanner);
scanner.scan();

const coppierMachine = { name: "Samsung" };
canScan(coppierMachine);
canPrint(coppierMachine);
coppierMachine.scan();
coppierMachine.print();
