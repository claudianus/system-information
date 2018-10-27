async function routes (fastify, options) {
  const si = require('systeminformation')
  const osLocale = require('os-locale')
  const publicIp = require('public-ip')
  const os = require('os')
  const prettyMs = require('pretty-ms')
  const prettyBytes = require('pretty-bytes')
  
  const staticData = await si.getStaticData()
  const locale = await osLocale()
  const listeningIp = await publicIp.v4({https:true})

  let lastUpdate = 0
  let cache

  fastify.get('/', async (request, reply) => {
    if(lastUpdate + 1000 <= Date.now()) {
      const time = await si.time()
      time.prettyUptime = prettyMs(Math.floor(time.uptime) * 1000, {verbose:true})
      time.prettyCurrent = new Date(Date.now()).toLocaleString()
      const avgload = os.loadavg()
      const currentLoad = await si.currentLoad()
      const cpuCurrentspeed = await si.cpuCurrentspeed()
      const cpuTemp = await si.cpuTemperature()
      const processes = await si.processes()
      const memoryUsage = await si.mem()
      let fsSize = await si.fsSize()
      fsSize = fsSize.map(x => {
        const sizeInt = parseInt(x.size, 10)
        x.prettySize = prettyBytes(sizeInt)
        x.prettyUsed = prettyBytes(x.used)
        x.prettyFree = prettyBytes(sizeInt-x.used)
        return x
      })
      let networkInterfaces = await si.networkInterfaces()
      networkInterfaces = networkInterfaces.map(async x => {
        let networkStats = await si.networkStats(x.iface)
        networkStats.prettyRx = prettyBytes(networkStats.rx)
        networkStats.prettyTx = prettyBytes(networkStats.tx)
        networkStats.prettyRxSec = prettyBytes(Math.floor(networkStats.rx_sec))
        networkStats.prettyTxSec = prettyBytes(Math.floor(networkStats.tx_sec))
        networkStats.prettyMs = prettyMs(networkStats.ms)
        x.stats = networkStats
        return x
      })
      networkInterfaces = await Promise.all(networkInterfaces)
      cache = { staticData, locale, listeningIp, time, avgload, currentLoad, processes, memoryUsage, fsSize, networkInterfaces, cpuCurrentspeed, cpuTemp }
      lastUpdate = Date.now()
    }
    
    reply.view('./views/index.marko', cache)
  })
}

module.exports = routes