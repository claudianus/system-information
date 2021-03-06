// Compiled using marko@4.13.12 - DO NOT EDIT
"use strict";

var marko_template = module.exports = require("marko/src/html").t(__filename),
    marko_componentType = "/system-information$1.0.0/views/index.marko",
    components_helpers = require("marko/src/components/helpers"),
    marko_renderer = components_helpers.r,
    marko_defineComponent = components_helpers.c,
    marko_helpers = require("marko/src/runtime/html/helpers"),
    marko_loadTag = marko_helpers.t,
    component_globals_tag = marko_loadTag(require("marko/src/components/taglib/component-globals-tag")),
    marko_escapeXml = marko_helpers.x,
    marko_escapeXmlAttr = marko_helpers.xa,
    marko_forEachWithStatusVar = require("marko/src/runtime/helper-forEachWithStatusVar"),
    marko_forEach = marko_helpers.f,
    init_components_tag = marko_loadTag(require("marko/src/components/taglib/init-components-tag")),
    await_reorderer_tag = marko_loadTag(require("marko/src/taglibs/async/await-reorderer-tag"));

function render(input, out, __component, component, state) {
  var data = input;

  out.w("<!doctype html><html><head><meta charset=\"utf-8\"><meta http-equiv=\"X-UA-Compatible\" content=\"IE=edge\"><meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0\"><title>System Information</title><link rel=\"stylesheet\" href=\"https://stackpath.bootstrapcdn.com/bootstrap/4.1.3/css/bootstrap.min.css\" integrity=\"sha384-MCw98/SFnGE8fJT3GXwEOngsV7Zt27NXFoaoApmYm81iuXoPkFOJwJ8ERdknLPMO\" crossorigin=\"anonymous\"><link rel=\"stylesheet\" href=\"/assets/style.css\"></head><body>");

  component_globals_tag({}, out);

  out.w("<div class=\"container\" id=\"app\"><nav class=\"navbar navbar-dark bg-dark rounded shadow-sm mb-3\"><a class=\"navbar-brand\" href=\"/\"><img src=\"/assets/logo.svg\" width=\"30\" height=\"30\" alt=\"logo\" class=\"mr-1\"> System Information</a></nav><div class=\"row justify-content-center mb-3\"><div class=\"col-12 col-lg-6 mb-3\"><div class=\"card text-white shadow-sm\"><h6 class=\"card-header\">System Vital</h6><div class=\"card-body\"><div class=\"table-responsive\"><table class=\"table table-hover table-sm\"><tbody><tr><td>Canonical Hostname</td><td>" +
    marko_escapeXml(input.staticData.os.hostname) +
    "</td></tr><tr><td>Listening IP</td><td>" +
    marko_escapeXml(input.listeningIp) +
    "</td></tr><tr><td>Kernel Version</td><td>" +
    marko_escapeXml(input.staticData.versions.kernel) +
    "</td></tr><tr><td>Distro Name</td><td>" +
    marko_escapeXml(input.staticData.os.distro) +
    "</td></tr><tr><td>Uptime</td><td>" +
    marko_escapeXml(input.time.prettyUptime) +
    "</td></tr><tr><td>Average load</td><td><div class=\"float-left\">" +
    marko_escapeXml(input.avgload[0].toFixed(2)) +
    " " +
    marko_escapeXml(input.avgload[1].toFixed(2)) +
    " " +
    marko_escapeXml(input.avgload[2].toFixed(2)) +
    "</div><div class=\"float-right\" style=\"width:50%;\"><div class=\"progress\"><div class=\"progress-bar progress-bar-striped progress-bar-animated\" role=\"progressbar\" style=\"width: " +
    marko_escapeXmlAttr(input.currentLoad.avgload) +
    "%;\" aria-valuenow=\"" +
    marko_escapeXmlAttr(input.currentLoad.avgload) +
    "\" aria-valuemin=\"0\" aria-valuemax=\"100\"></div></div><div class=\"text-center\">" +
    marko_escapeXml(input.currentLoad.avgload) +
    "%</div></div></td></tr><tr><td>System Language</td><td>" +
    marko_escapeXml(input.locale) +
    "</td></tr><tr><td>Local time</td><td>" +
    marko_escapeXml(input.time.prettyCurrent) +
    "</td></tr><tr><td>Time zone</td><td>" +
    marko_escapeXml(input.time.timezone) +
    "</td></tr><tr><td>Time zone name</td><td>" +
    marko_escapeXml(input.time.timezoneName) +
    "</td></tr><tr><td>Processes</td><td>" +
    marko_escapeXml(input.processes.all) +
    " (" +
    marko_escapeXml(input.processes.running) +
    " running, " +
    marko_escapeXml(input.processes.sleeping) +
    " sleeping, " +
    marko_escapeXml(input.processes.blocked) +
    " blocked, " +
    marko_escapeXml(input.processes.unknown) +
    " unknown)</td></tr></tbody></table></div></div></div></div><div class=\"col-12 col-lg-6 mb-3\"><div class=\"card text-white shadow-sm\"><h6 class=\"card-header\">CPU Usage</h6><div class=\"card-body\"><div class=\"table-responsive\"><table class=\"table table-hover table-sm\"><thead><th scope=\"col\">Core</th><th scope=\"col\" style=\"width:60%;\">Load</th><th scope=\"col\">Speed</th><th scope=\"col\">Temp</th></thead><tbody>");

  var for__71 = 0;

  marko_forEachWithStatusVar(input.currentLoad.cpus, function(core, loop) {
    var keyscope__72 = "[" + ((for__71++) + "]");

    out.w("<tr><td>Core " +
      marko_escapeXml(loop.getIndex()) +
      "</td><td><div class=\"progress\"><div class=\"progress-bar progress-bar-striped progress-bar-animated\" role=\"progressbar\" style=\"width: " +
      marko_escapeXmlAttr(core.load) +
      "%;\"></div></div><div class=\"text-center\">" +
      marko_escapeXml(core.load.toFixed(2)) +
      "%</div></td><td>" +
      marko_escapeXml(input.cpuCurrentspeed.cores[loop.getIndex()]) +
      " Ghz</td><td>" +
      marko_escapeXml(input.cpuTemp.cores[loop.getIndex()]) +
      "</td></tr>");
  });

  out.w("</tbody></table></div></div></div></div><div class=\"col-12 mb-3\"><div class=\"card text-white shadow-sm\"><h6 class=\"card-header\">Memory Usage</h6><div class=\"card-body\"><div class=\"table-responsive\"><table class=\"table table-hover table-sm\"><thead><tr><th scope=\"col\">Type</th><th scope=\"col\" style=\"width:50%;\">Usage</th><th scope=\"col\">Free</th><th scope=\"col\">Used</th><th scope=\"col\">Total</th></tr></thead><tbody><tr><td>Physical</td><td><div class=\"progress\"><div class=\"progress-bar progress-bar-striped progress-bar-animated\" role=\"progressbar\" style=\"width: " +
    marko_escapeXmlAttr((input.memoryUsage.active / input.memoryUsage.total) * 100) +
    "%;\"></div><div class=\"progress-bar bg-warning progress-bar-striped progress-bar-animated\" role=\"progressbar\" style=\"width: " +
    marko_escapeXmlAttr((input.memoryUsage.buffcache / input.memoryUsage.total) * 100) +
    "%;\"></div></div><div class=\"text-center\">" +
    marko_escapeXml(((input.memoryUsage.used / input.memoryUsage.total) * 100).toFixed(2)) +
    "% (active: " +
    marko_escapeXml(((input.memoryUsage.active / input.memoryUsage.total) * 100).toFixed(2)) +
    "%, buffcache: " +
    marko_escapeXml(((input.memoryUsage.buffcache / input.memoryUsage.total) * 100).toFixed(2)) +
    "%)</div></td><td>" +
    marko_escapeXml((((input.memoryUsage.free / 1024) / 1024) / 1024).toFixed(2)) +
    " GB</td><td>" +
    marko_escapeXml((((input.memoryUsage.used / 1024) / 1024) / 1024).toFixed(2)) +
    " GB</td><td>" +
    marko_escapeXml((((input.memoryUsage.total / 1024) / 1024) / 1024).toFixed(2)) +
    " GB</td></tr><tr><td>SWAP</td><td><div class=\"progress\"><div class=\"progress-bar progress-bar-striped progress-bar-animated\" role=\"progressbar\" style=\"width: " +
    marko_escapeXmlAttr((input.memoryUsage.swapused / input.memoryUsage.swaptotal) * 100) +
    "%;\"></div></div><div class=\"text-center\">" +
    marko_escapeXml(((input.memoryUsage.swapused / input.memoryUsage.swaptotal) * 100).toFixed(2)) +
    "%</div></td><td>" +
    marko_escapeXml((((input.memoryUsage.swapfree / 1024) / 1024) / 1024).toFixed(2)) +
    " GB</td><td>" +
    marko_escapeXml((((input.memoryUsage.swapused / 1024) / 1024) / 1024).toFixed(2)) +
    " GB</td><td>" +
    marko_escapeXml((((input.memoryUsage.swaptotal / 1024) / 1024) / 1024).toFixed(2)) +
    " GB</td></tr></tbody></table></div></div></div></div><div class=\"col-12 mb-3\"><div class=\"card text-white shadow-sm\"><h6 class=\"card-header\">Storage Usage</h6><div class=\"card-body\"><div class=\"table-responsive\"><table class=\"table table-hover table-sm\"><thead><tr><th scope=\"col\">Mount</th><th scope=\"col\">Type</th><th scope=\"col\">Fs</th><th scope=\"col\" style=\"width:50%\">Usage</th><th scope=\"col\">Free</th><th scope=\"col\">Used</th><th scope=\"col\">Total</th></tr></thead><tbody>");

  var for__130 = 0;

  marko_forEach(input.fsSize, function(storage) {
    var keyscope__131 = "[" + ((for__130++) + "]");

    out.w("<tr><td>" +
      marko_escapeXml(storage.mount) +
      "</td><td>" +
      marko_escapeXml(storage.type) +
      "</td><td>" +
      marko_escapeXml(storage.fs) +
      "</td><td><div class=\"progress\"><div class=\"progress-bar progress-bar-striped progress-bar-animated\" role=\"progressbar\" style=\"width: " +
      marko_escapeXmlAttr((storage.used / storage.size) * 100) +
      "%;\"></div></div><div class=\"text-center\">" +
      marko_escapeXml(((storage.used / storage.size) * 100).toFixed(2)) +
      "%</div></td><td>" +
      marko_escapeXml(storage.prettyFree) +
      "</td><td>" +
      marko_escapeXml(storage.prettyUsed) +
      "</td><td>" +
      marko_escapeXml(storage.prettySize) +
      "</td></tr>");
  });

  out.w("</tbody></table></div></div></div></div><div class=\"col-12 mb-3\"><div class=\"card text-white shadow-sm\"><h6 class=\"card-header\">Network Usage</h6><div class=\"card-body\"><div class=\"table-responsive\"><table class=\"table table-hover table-sm\"><thead><tr><th scope=\"col\">Interface</th><th scope=\"col\">Ipv4</th><th scope=\"col\">Ipv6</th><th scope=\"col\">Mac</th><th scope=\"col\">Operstate</th><th scope=\"col\">Receive</th><th scope=\"col\">Sent</th><th scope=\"col\">Ms</th></tr></thead><tbody>");

  var for__160 = 0;

  marko_forEach(input.networkInterfaces, function(network) {
    var keyscope__161 = "[" + ((for__160++) + "]");

    out.w("<tr><td>" +
      marko_escapeXml(network.iface) +
      "</td><td>" +
      marko_escapeXml(network.ip4) +
      "</td><td>" +
      marko_escapeXml(network.ip6) +
      "</td><td>" +
      marko_escapeXml(network.mac) +
      "</td><td>" +
      marko_escapeXml(network.stats.operstate) +
      "</td><td><div>" +
      marko_escapeXml(network.stats.prettyRx) +
      "</div><div>(" +
      marko_escapeXml(network.stats.prettyRxSec) +
      "/s)</div></td><td><div>" +
      marko_escapeXml(network.stats.prettyTx) +
      "</div><div>(" +
      marko_escapeXml(network.stats.prettyTxSec) +
      "/s)</div></td><td>" +
      marko_escapeXml(network.stats.prettyMs) +
      "</td></tr>");
  });

  out.w("</tbody></table></div></div></div></div></div><hr><div class=\"row justify-content-center\"><div class=\"col-12\"><div class=\"card-columns\"><div class=\"card text-white shadow-sm\"><h6 class=\"card-header\">Operating system</h6><div class=\"card-body\"><div class=\"table-responsive\"><table class=\"table table-hover table-sm\"><tbody><tr><td>Platform</td><td>" +
    marko_escapeXml(input.staticData.os.platform) +
    "</td></tr><tr><td>Distro</td><td>" +
    marko_escapeXml(input.staticData.os.distro) +
    "</td></tr><tr><td>Release</td><td>" +
    marko_escapeXml(input.staticData.os.release) +
    "</td></tr><tr><td>Codename</td><td>" +
    marko_escapeXml(input.staticData.os.codename) +
    "</td></tr><tr><td>Kernel</td><td>" +
    marko_escapeXml(input.staticData.os.kernel) +
    "</td></tr><tr><td>Arch</td><td>" +
    marko_escapeXml(input.staticData.os.arch) +
    "</td></tr><tr><td>Hostname</td><td>" +
    marko_escapeXml(input.staticData.os.hostname) +
    "</td></tr><tr><td>Logofile</td><td>" +
    marko_escapeXml(input.staticData.os.logofile) +
    "</td></tr></tbody></table></div></div></div><div class=\"card text-white shadow-sm\"><h6 class=\"card-header\">System</h6><div class=\"card-body\"><div class=\"table-responsive\"><table class=\"table table-hover table-sm\"><tbody><tr><td>Manufacturer</td><td>" +
    marko_escapeXml(input.staticData.system.manufacturer) +
    "</td></tr><tr><td>Model</td><td>" +
    marko_escapeXml(input.staticData.system.model) +
    "</td></tr><tr><td>Version</td><td>" +
    marko_escapeXml(input.staticData.system.version) +
    "</td></tr><tr><td>Serial</td><td>" +
    marko_escapeXml(input.staticData.system.serial) +
    "</td></tr><tr><td>UUID</td><td>" +
    marko_escapeXml(input.staticData.system.uuid) +
    "</td></tr><tr><td>SKU</td><td>" +
    marko_escapeXml(input.staticData.system.sku) +
    "</td></tr></tbody></table></div></div></div><div class=\"card text-white shadow-sm\"><h6 class=\"card-header\">Baseboard</h6><div class=\"card-body\"><div class=\"table-responsive\"><table class=\"table table-hover table-sm\"><tbody><tr><td>Manufacturer</td><td>" +
    marko_escapeXml(input.staticData.baseboard.manufacturer) +
    "</td></tr><tr><td>Model</td><td>" +
    marko_escapeXml(input.staticData.baseboard.model) +
    "</td></tr><tr><td>Version</td><td>" +
    marko_escapeXml(input.staticData.baseboard.version) +
    "</td></tr><tr><td>Serial</td><td>" +
    marko_escapeXml(input.staticData.baseboard.serial) +
    "</td></tr><tr><td>AssetTag</td><td>" +
    marko_escapeXml(input.staticData.baseboard.assetTag) +
    "</td></tr></tbody></table></div></div></div><div class=\"card text-white shadow-sm\"><h6 class=\"card-header\">Bios</h6><div class=\"card-body\"><div class=\"table-responsive\"><table class=\"table table-hover table-sm\"><tbody><tr><td>Vendor</td><td>" +
    marko_escapeXml(input.staticData.bios.vendor) +
    "</td></tr><tr><td>Version</td><td>" +
    marko_escapeXml(input.staticData.bios.version) +
    "</td></tr><tr><td>ReleaseDate</td><td>" +
    marko_escapeXml(input.staticData.bios.releaseDate) +
    "</td></tr><tr><td>Revision</td><td>" +
    marko_escapeXml(input.staticData.bios.revision) +
    "</td></tr></tbody></table></div></div></div><div class=\"card text-white shadow-sm\"><h6 class=\"card-header\">CPU</h6><div class=\"card-body\"><div class=\"table-responsive\"><table class=\"table table-hover table-sm\"><tbody><tr><td>Manufacturer</td><td>" +
    marko_escapeXml(input.staticData.cpu.manufacturer) +
    "</td></tr><tr><td>Brand</td><td>" +
    marko_escapeXml(input.staticData.cpu.brand) +
    "</td></tr><tr><td>Vendor</td><td>" +
    marko_escapeXml(input.staticData.cpu.vendor) +
    "</td></tr><tr><td>Family</td><td>" +
    marko_escapeXml(input.staticData.cpu.family) +
    "</td></tr><tr><td>Model</td><td>" +
    marko_escapeXml(input.staticData.cpu.model) +
    "</td></tr><tr><td>Stepping</td><td>" +
    marko_escapeXml(input.staticData.cpu.stepping) +
    "</td></tr><tr><td>Revision</td><td>" +
    marko_escapeXml(input.staticData.cpu.revision) +
    "</td></tr><tr><td>Voltage</td><td>" +
    marko_escapeXml(input.staticData.cpu.voltage) +
    "</td></tr><tr><td>Speed</td><td>" +
    marko_escapeXml(input.staticData.cpu.speed) +
    " Ghz</td></tr><tr><td>Speedmin</td><td>" +
    marko_escapeXml(input.staticData.cpu.speedmin) +
    " Ghz</td></tr><tr><td>Speedmax</td><td>" +
    marko_escapeXml(input.staticData.cpu.speedmax) +
    " Ghz</td></tr><tr><td>Cores</td><td>" +
    marko_escapeXml(input.staticData.cpu.cores) +
    "</td></tr><tr><td>Cache</td><td><table class=\"table table-hover table-sm\"><tbody><tr><td>L1D</td><td>" +
    marko_escapeXml(((input.staticData.cpu.cache.l1d / 1024) / 1024).toFixed(2)) +
    " MB</td></tr><tr><td>L1I</td><td>" +
    marko_escapeXml(((input.staticData.cpu.cache.l1i / 1024) / 1024).toFixed(2)) +
    " MB</td></tr><tr><td>L2</td><td>" +
    marko_escapeXml(((input.staticData.cpu.cache.l2 / 1024) / 1024).toFixed(2)) +
    " MB</td></tr><tr><td>L3</td><td>" +
    marko_escapeXml(((input.staticData.cpu.cache.l3 / 1024) / 1024).toFixed(2)) +
    " MB</td></tr></tbody></table></td></tr><tr><td>flags</td><td>" +
    marko_escapeXml(input.staticData.cpu.flags) +
    "</td></tr></tbody></table></div></div></div><div class=\"card text-white shadow-sm\"><h6 class=\"card-header\">GPU</h6><div class=\"card-body\"><div class=\"table-responsive\"><table class=\"table table-hover table-sm\"><tbody>");

  var for__340 = 0;

  marko_forEachWithStatusVar(input.staticData.graphics.controllers, function(gpu, loop) {
    var keyscope__341 = "[" + ((for__340++) + "]");

    out.w("<tr><td>" +
      marko_escapeXml(loop.getIndex() + 1) +
      "</td><td><table class=\"table table-hover table-sm\"><tbody><tr><td>Model</td><td>" +
      marko_escapeXml(gpu.model) +
      "</td></tr><tr><td>Vendor</td><td>" +
      marko_escapeXml(gpu.vendor) +
      "</td></tr><tr><td>Bus</td><td>" +
      marko_escapeXml(gpu.bus) +
      "</td></tr><tr><td>Vram</td><td>" +
      marko_escapeXml(gpu.vram) +
      " MB</td></tr><tr><td>VramDynamic</td><td>" +
      marko_escapeXml(gpu.vramDynamic) +
      "</td></tr></tbody></table></td></tr>");
  });

  out.w("</tbody></table></div></div></div><div class=\"card text-white shadow-sm\"><h6 class=\"card-header\">Display</h6><div class=\"card-body\"><div class=\"table-responsive\"><table class=\"table table-hover table-sm\"><tbody>");

  var for__368 = 0;

  marko_forEachWithStatusVar(input.staticData.graphics.displays, function(display, loop) {
    var keyscope__369 = "[" + ((for__368++) + "]");

    out.w("<tr><td>" +
      marko_escapeXml(loop.getIndex() + 1) +
      "</td><td><table class=\"table table-hover table-sm\"><tbody><tr><td>Model</td><td>" +
      marko_escapeXml(display.model) +
      "</td></tr><tr><td>main</td><td>" +
      marko_escapeXml(display.main) +
      "</td></tr><tr><td>builtin</td><td>" +
      marko_escapeXml(display.builtin) +
      "</td></tr><tr><td>connection</td><td>" +
      marko_escapeXml(display.connection) +
      "</td></tr><tr><td>resolutionx</td><td>" +
      marko_escapeXml(display.resolutionx) +
      "</td></tr><tr><td>resolutiony</td><td>" +
      marko_escapeXml(display.resolutiony) +
      "</td></tr><tr><td>sizex</td><td>" +
      marko_escapeXml(display.sizex) +
      "</td></tr><tr><td>sizey</td><td>" +
      marko_escapeXml(display.sizey) +
      "</td></tr><tr><td>pixeldepth</td><td>" +
      marko_escapeXml(display.pixeldepth) +
      "</td></tr></tbody></table></td></tr>");
  });

  out.w("</tbody></table></div></div></div><div class=\"card text-white shadow-sm\"><h6 class=\"card-header\">memLayout</h6><div class=\"card-body\"><div class=\"table-responsive\"><table class=\"table table-hover table-sm\"><tbody>");

  var for__408 = 0;

  marko_forEachWithStatusVar(input.staticData.memLayout, function(mem, loop) {
    var keyscope__409 = "[" + ((for__408++) + "]");

    out.w("<tr><td>" +
      marko_escapeXml(loop.getIndex() + 1) +
      "</td><td><table class=\"table table-hover table-sm\"><tbody><tr><td>size</td><td>" +
      marko_escapeXml((((mem.size / 1024) / 1024) / 1024).toFixed(2)) +
      " GB</td></tr><tr><td>bank</td><td>" +
      marko_escapeXml(mem.bank) +
      "</td></tr><tr><td>type</td><td>" +
      marko_escapeXml(mem.type) +
      "</td></tr><tr><td>clockSpeed</td><td>" +
      marko_escapeXml(mem.clockSpeed) +
      "</td></tr><tr><td>formFactor</td><td>" +
      marko_escapeXml(mem.formFactor) +
      "</td></tr><tr><td>manufacturer</td><td>" +
      marko_escapeXml(mem.manufacturer) +
      "</td></tr><tr><td>partNum</td><td>" +
      marko_escapeXml(mem.partNum) +
      "</td></tr><tr><td>serialNum</td><td>" +
      marko_escapeXml(mem.serialNum) +
      "</td></tr><tr><td>voltageConfigured</td><td>" +
      marko_escapeXml(mem.voltageConfigured) +
      "</td></tr><tr><td>voltageMin</td><td>" +
      marko_escapeXml(mem.voltageMin) +
      "</td></tr><tr><td>voltageMax</td><td>" +
      marko_escapeXml(mem.voltageMax) +
      "</td></tr></tbody></table></td></tr>");
  });

  out.w("</tbody></table></div></div></div><div class=\"card text-white shadow-sm\"><h6 class=\"card-header\">diskLayout</h6><div class=\"card-body\"><div class=\"table-responsive\"><table class=\"table table-hover table-sm\"><tbody>");

  var for__454 = 0;

  marko_forEachWithStatusVar(input.staticData.diskLayout, function(disk, loop) {
    var keyscope__455 = "[" + ((for__454++) + "]");

    out.w("<tr><td>" +
      marko_escapeXml(loop.getIndex() + 1) +
      "</td><td><table class=\"table table-hover table-sm\"><tbody><tr><td>type</td><td>" +
      marko_escapeXml(disk.type) +
      "</td></tr><tr><td>name</td><td>" +
      marko_escapeXml(disk.name) +
      "</td></tr><tr><td>vendor</td><td>" +
      marko_escapeXml(disk.vendor) +
      "</td></tr><tr><td>size</td><td>" +
      marko_escapeXml((((disk.size / 1024) / 1024) / 1024).toFixed(2)) +
      " GB</td></tr><tr><td>bytesPerSector</td><td>" +
      marko_escapeXml(disk.bytesPerSector) +
      "</td></tr><tr><td>totalCylinders</td><td>" +
      marko_escapeXml(disk.totalCylinders) +
      "</td></tr><tr><td>totalHeads</td><td>" +
      marko_escapeXml(disk.totalHeads) +
      "</td></tr><tr><td>totalSectors</td><td>" +
      marko_escapeXml(disk.totalSectors) +
      "</td></tr><tr><td>totalTracks</td><td>" +
      marko_escapeXml(disk.totalTracks) +
      "</td></tr><tr><td>tracksPerCylinder</td><td>" +
      marko_escapeXml(disk.tracksPerCylinder) +
      "</td></tr><tr><td>sectorsPerTrack</td><td>" +
      marko_escapeXml(disk.sectorsPerTrack) +
      "</td></tr><tr><td>firmwareRevision</td><td>" +
      marko_escapeXml(disk.firmwareRevision) +
      "</td></tr><tr><td>serialNum</td><td>" +
      marko_escapeXml(disk.serialNum) +
      "</td></tr><tr><td>interfaceType</td><td>" +
      marko_escapeXml(disk.interfaceType) +
      "</td></tr><tr><td>smartStatus</td><td>" +
      marko_escapeXml(disk.smartStatus) +
      "</td></tr></tbody></table></td></tr>");
  });

  out.w("</tbody></table></div></div></div><div class=\"card text-white shadow-sm\"><h6 class=\"card-header\">Versions</h6><div class=\"card-body\"><div class=\"table-responsive\"><table class=\"table table-hover table-sm\"><tbody><tr><td>kernel</td><td>" +
    marko_escapeXml(input.staticData.versions.kernel) +
    "</td></tr><tr><td>openssl</td><td>" +
    marko_escapeXml(input.staticData.versions.openssl) +
    "</td></tr><tr><td>node</td><td>" +
    marko_escapeXml(input.staticData.versions.node) +
    "</td></tr><tr><td>v8</td><td>" +
    marko_escapeXml(input.staticData.versions.v8) +
    "</td></tr><tr><td>npm</td><td>" +
    marko_escapeXml(input.staticData.versions.npm) +
    "</td></tr><tr><td>yarn</td><td>" +
    marko_escapeXml(input.staticData.versions.yarn) +
    "</td></tr><tr><td>pm2</td><td>" +
    marko_escapeXml(input.staticData.versions.pm2) +
    "</td></tr><tr><td>gulp</td><td>" +
    marko_escapeXml(input.staticData.versions.gulp) +
    "</td></tr><tr><td>grunt</td><td>" +
    marko_escapeXml(input.staticData.versions.grunt) +
    "</td></tr><tr><td>git</td><td>" +
    marko_escapeXml(input.staticData.versions.git) +
    "</td></tr><tr><td>tsc</td><td>" +
    marko_escapeXml(input.staticData.versions.tsc) +
    "</td></tr><tr><td>mysql</td><td>" +
    marko_escapeXml(input.staticData.versions.mysql) +
    "</td></tr><tr><td>redis</td><td>" +
    marko_escapeXml(input.staticData.versions.redis) +
    "</td></tr><tr><td>mongodb</td><td>" +
    marko_escapeXml(input.staticData.versions.mongodb) +
    "</td></tr><tr><td>nginx</td><td>" +
    marko_escapeXml(input.staticData.versions.nginx) +
    "</td></tr><tr><td>php</td><td>" +
    marko_escapeXml(input.staticData.versions.php) +
    "</td></tr></tbody></table></div></div></div></div></div></div></div><script src=\"https://code.jquery.com/jquery-3.3.1.slim.min.js\" integrity=\"sha384-q8i/X+965DzO0rT7abK41JStQIAqVgRVzpbzo5smXKp4YfRvH+8abtTE1Pi6jizo\" crossorigin=\"anonymous\"></script><script src=\"https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.3/umd/popper.min.js\" integrity=\"sha384-ZMP7rVo3mIykV+2+9J3UJ46jBk0WLaUAdn689aCwoqbBJiSnjAK/l8WvCWPIPm49\" crossorigin=\"anonymous\"></script><script src=\"https://stackpath.bootstrapcdn.com/bootstrap/4.1.3/js/bootstrap.min.js\" integrity=\"sha384-ChfqqxuZUCnJSK3+MXmPNIyE6ZbWh2IMqE241rYiqJxyMiZ6OW/JmZQ5stwEULTy\" crossorigin=\"anonymous\"></script>");

  init_components_tag({}, out);

  await_reorderer_tag({}, out, __component, "563");

  out.w("</body></html>");
}

marko_template._ = marko_renderer(render, {
    ___implicit: true,
    ___type: marko_componentType
  });

marko_template.Component = marko_defineComponent({}, marko_template._);

marko_template.meta = {
    id: "/system-information$1.0.0/views/index.marko",
    tags: [
      "marko/src/components/taglib/component-globals-tag",
      "marko/src/components/taglib/init-components-tag",
      "marko/src/taglibs/async/await-reorderer-tag"
    ]
  };
